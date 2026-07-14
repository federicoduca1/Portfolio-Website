import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import gsap from 'gsap';
import { semanticIconPaths, semanticIcons } from '../../data/heroSemanticIcons.js';
import AmbientIconGraphic from './AmbientIconGraphic.jsx';

const pathById = Object.fromEntries(
  semanticIconPaths.map((path) => [path.id, path]),
);
const DURATION_MIN_SECONDS = 21;
const DURATION_MAX_SECONDS = 24;
const OVERLAP_PROBABILITY = 0.55;
const OVERLAP_PROGRESS_MIN = 0.7;
const OVERLAP_PROGRESS_MAX = 0.85;
const ROTATION_MIN_DEGREES = 26;
const ROTATION_MAX_DEGREES = 48;
const MIN_HANDOFF_DISTANCE = 58;
const ICON_SCALE_INCREASE = 1.2;

function randomFrom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function randomBetween(min, max) {
  return Math.round(min + Math.random() * (max - min));
}

function randomDecimalBetween(min, max) {
  return min + Math.random() * (max - min);
}

function shuffledIcons(previousIconId) {
  const icons = [...semanticIcons];

  for (let index = icons.length - 1; index > 0; index -= 1) {
    const swapIndex = randomBetween(0, index);
    [icons[index], icons[swapIndex]] = [icons[swapIndex], icons[index]];
  }

  if (icons.length > 1 && icons[0].id === previousIconId) {
    [icons[0], icons[1]] = [icons[1], icons[0]];
  }

  return icons;
}

function nextQueuedIcon(
  iconQueueRef,
  lastIconIdRef,
  activeConcept,
  previousRouteId,
  routeFilter = () => true,
) {
  if (iconQueueRef.current.length === 0) {
    iconQueueRef.current = shuffledIcons(lastIconIdRef.current);
  }

  const compatibleIndexes = iconQueueRef.current
    .map((icon, index) => ({ icon, index }))
    .filter(({ icon }) =>
      icon.availablePaths.some(
        (routeId) =>
          routeId !== previousRouteId && routeFilter(pathById[routeId]),
      ),
    );

  if (compatibleIndexes.length === 0) {
    return null;
  }

  const conceptMatch = activeConcept
    ? compatibleIndexes.find(
        ({ icon }) =>
          icon.concept === activeConcept && icon.id !== lastIconIdRef.current,
      )
    : null;
  const selectedIndex = conceptMatch?.index ?? compatibleIndexes[0].index;

  if (selectedIndex > 0) {
    [iconQueueRef.current[0], iconQueueRef.current[selectedIndex]] = [
      iconQueueRef.current[selectedIndex],
      iconQueueRef.current[0],
    ];
  }

  return iconQueueRef.current[0];
}

function pathPoint(path, position) {
  return {
    x: Number.parseFloat(path[`${position}X`]),
    y: Number.parseFloat(path[`${position}Y`]),
  };
}

function pointAlongPath(path, progress) {
  const start = pathPoint(path, 'from');
  const end = pathPoint(path, 'to');

  return {
    x: start.x + (end.x - start.x) * progress,
    y: start.y + (end.y - start.y) * progress,
  };
}

function crossProduct(first, second, third) {
  return (
    (second.x - first.x) * (third.y - first.y) -
    (second.y - first.y) * (third.x - first.x)
  );
}

function segmentsIntersect(firstStart, firstEnd, secondStart, secondEnd) {
  const firstSideStart = crossProduct(firstStart, firstEnd, secondStart);
  const firstSideEnd = crossProduct(firstStart, firstEnd, secondEnd);
  const secondSideStart = crossProduct(secondStart, secondEnd, firstStart);
  const secondSideEnd = crossProduct(secondStart, secondEnd, firstEnd);

  return (
    firstSideStart * firstSideEnd <= 0 &&
    secondSideStart * secondSideEnd <= 0
  );
}

function distanceBetween(first, second) {
  return Math.hypot(second.x - first.x, second.y - first.y);
}

function distanceToSegment(point, segmentStart, segmentEnd) {
  const segmentX = segmentEnd.x - segmentStart.x;
  const segmentY = segmentEnd.y - segmentStart.y;
  const segmentLengthSquared = segmentX ** 2 + segmentY ** 2;
  const progress = Math.max(
    0,
    Math.min(
      1,
      ((point.x - segmentStart.x) * segmentX +
        (point.y - segmentStart.y) * segmentY) /
        segmentLengthSquared,
    ),
  );

  return distanceBetween(point, {
    x: segmentStart.x + segmentX * progress,
    y: segmentStart.y + segmentY * progress,
  });
}

function distanceBetweenSegments(firstStart, firstEnd, secondStart, secondEnd) {
  if (segmentsIntersect(firstStart, firstEnd, secondStart, secondEnd)) {
    return 0;
  }

  return Math.min(
    distanceToSegment(firstStart, secondStart, secondEnd),
    distanceToSegment(firstEnd, secondStart, secondEnd),
    distanceToSegment(secondStart, firstStart, firstEnd),
    distanceToSegment(secondEnd, firstStart, firstEnd),
  );
}

function isSafeHandoff(outgoingPath, incomingPath) {
  const outgoingStart = pathPoint(outgoingPath, 'from');
  const outgoingEnd = pathPoint(outgoingPath, 'to');
  const incomingStart = pathPoint(incomingPath, 'from');
  const incomingEnd = pathPoint(incomingPath, 'to');
  const outgoingSides = boundarySides(outgoingEnd);
  const incomingSides = boundarySides(incomingStart);

  if (outgoingSides.some((side) => incomingSides.includes(side))) {
    return false;
  }

  if (
    segmentsIntersect(
      outgoingStart,
      outgoingEnd,
      incomingStart,
      incomingEnd,
    )
  ) {
    return false;
  }

  const outgoingHandoffStart = pointAlongPath(outgoingPath, 0.82);
  const incomingHandoffEnd = pointAlongPath(incomingPath, 0.18);

  return (
    distanceBetweenSegments(
      outgoingHandoffStart,
      outgoingEnd,
      incomingStart,
      incomingHandoffEnd,
    ) >= MIN_HANDOFF_DISTANCE
  );
}

function boundarySides(point) {
  const sides = [];

  if (point.x < 0) sides.push('left');
  if (point.x > 100) sides.push('right');
  if (point.y < 0) sides.push('top');
  if (point.y > 100) sides.push('bottom');

  return sides;
}

function createIconCycle(icon, previousRouteId, routeFilter = () => true) {
  const availablePaths = icon.availablePaths
    .filter((routeId) => routeId !== previousRouteId)
    .map((routeId) => pathById[routeId])
    .filter(routeFilter);

  if (availablePaths.length === 0) {
    return null;
  }

  const path = randomFrom(availablePaths);
  const rotationStart = randomBetween(-24, 24);
  const rotationDelta =
    randomBetween(ROTATION_MIN_DEGREES, ROTATION_MAX_DEGREES) *
    (Math.random() > 0.5 ? 1 : -1);

  return {
    id: `${icon.id}-${path.id}-${Date.now()}`,
    duration: randomBetween(DURATION_MIN_SECONDS, DURATION_MAX_SECONDS),
    icon,
    overlapProgress: randomDecimalBetween(
      OVERLAP_PROGRESS_MIN,
      OVERLAP_PROGRESS_MAX,
    ),
    path,
    rotationEnd: rotationStart + rotationDelta,
    rotationStart,
    scale: ((0.92 + Math.random() * 0.22) * ICON_SCALE_INCREASE).toFixed(2),
  };
}

function createQueuedCycle(
  iconQueueRef,
  lastIconIdRef,
  activeConcept,
  previousRouteId,
  routeFilter,
) {
  const icon = nextQueuedIcon(
    iconQueueRef,
    lastIconIdRef,
    activeConcept,
    previousRouteId,
    routeFilter,
  );

  if (!icon) {
    return null;
  }

  const cycle = createIconCycle(icon, previousRouteId, routeFilter);

  if (!cycle) {
    return null;
  }

  iconQueueRef.current.shift();
  lastIconIdRef.current = icon.id;

  return cycle;
}

function AmbientIconInstance({
  cycle,
  isConceptActive,
  onComplete,
  onOverlapTrigger,
  slot,
}) {
  const { icon, path } = cycle;
  const iconRef = useRef(null);

  useLayoutEffect(() => {
    const iconNode = iconRef.current;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (!iconNode || prefersReducedMotion) {
      return undefined;
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: 'none' },
        onComplete: () => onComplete(cycle.id),
      });

      timeline.fromTo(
        iconNode,
        {
          left: path.fromX,
          rotation: cycle.rotationStart,
          scale: cycle.scale,
          top: path.fromY,
          transformOrigin: '50% 50%',
          xPercent: -50,
          yPercent: -50,
        },
        {
          duration: cycle.duration,
          left: path.toX,
          rotation: cycle.rotationEnd,
          scale: cycle.scale,
          top: path.toY,
        },
      );
      timeline.call(
        () => onOverlapTrigger(cycle.id),
        [],
        cycle.duration * cycle.overlapProgress,
      );
    }, iconRef);

    return () => context.revert();
  }, [cycle, onComplete, onOverlapTrigger, path]);

  return (
    <span
      ref={iconRef}
      className="hero-semantic-icon"
      data-concept={icon.concept}
      data-icon-instance={cycle.id}
      data-related-active={isConceptActive}
      data-slot={slot}
      style={{
        '--from-x': path.fromX,
        '--from-y': path.fromY,
        '--icon-size': `${icon.size}px`,
      }}
    >
      <AmbientIconGraphic
        className="hero-semantic-icon__svg"
        type={icon.type}
      />
    </span>
  );
}

export default function HeroBackground({ activeConcept }) {
  const activeConceptRef = useRef(activeConcept);
  const iconQueueRef = useRef(shuffledIcons(null));
  const lastIconIdRef = useRef(null);
  const initialCycleRef = useRef(null);

  if (!initialCycleRef.current) {
    initialCycleRef.current = createQueuedCycle(
      iconQueueRef,
      lastIconIdRef,
      null,
      null,
    );
  }

  const initialInstanceRef = useRef({
    cycle: initialCycleRef.current,
    slot: 0,
  });
  const activeInstancesRef = useRef([initialInstanceRef.current]);
  const [activeInstances, setActiveInstances] = useState([
    initialInstanceRef.current,
  ]);

  useEffect(() => {
    activeConceptRef.current = activeConcept;
  }, [activeConcept]);

  const handleOverlapTrigger = useCallback((cycleId) => {
    const activeInstances = activeInstancesRef.current;
    const outgoingInstance = activeInstances.find(
      ({ cycle }) => cycle.id === cycleId,
    );

    if (
      !outgoingInstance ||
      activeInstances.length !== 1 ||
      Math.random() > OVERLAP_PROBABILITY
    ) {
      return;
    }

    const nextCycle = createQueuedCycle(
      iconQueueRef,
      lastIconIdRef,
      activeConceptRef.current,
      outgoingInstance.cycle.path.id,
      (path) => isSafeHandoff(outgoingInstance.cycle.path, path),
    );

    if (!nextCycle) {
      return;
    }

    const nextInstance = {
      cycle: nextCycle,
      slot: outgoingInstance.slot === 0 ? 1 : 0,
    };
    const nextInstances = [...activeInstances, nextInstance];
    activeInstancesRef.current = nextInstances;
    setActiveInstances(nextInstances);
  }, []);

  const handleIconComplete = useCallback((cycleId) => {
    const currentInstances = activeInstancesRef.current;
    const completedInstance = currentInstances.find(
      ({ cycle }) => cycle.id === cycleId,
    );

    if (!completedInstance) {
      return;
    }

    const remainingInstances = currentInstances.filter(
      ({ cycle }) => cycle.id !== cycleId,
    );

    if (remainingInstances.length > 0) {
      activeInstancesRef.current = remainingInstances;
      setActiveInstances(remainingInstances);
      return;
    }

    const nextCycle = createQueuedCycle(
      iconQueueRef,
      lastIconIdRef,
      activeConceptRef.current,
      completedInstance.cycle.path.id,
    );
    const nextInstances = nextCycle
      ? [{ cycle: nextCycle, slot: completedInstance.slot }]
      : [];

    activeInstancesRef.current = nextInstances;
    setActiveInstances(nextInstances);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="hero-semantic-background"
      data-active-concept={activeConcept ?? 'none'}
    >
      {activeInstances.map(({ cycle, slot }) => (
        <AmbientIconInstance
          key={cycle.id}
          cycle={cycle}
          isConceptActive={cycle.icon.concept === activeConcept}
          onComplete={handleIconComplete}
          onOverlapTrigger={handleOverlapTrigger}
          slot={slot}
        />
      ))}
    </div>
  );
}
