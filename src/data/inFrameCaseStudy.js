import inFrameHeroVisual from '../assets/projects/inframe/hero/inframe-hero-visual.png';
import inFrameVisualBreak from '../assets/projects/inframe/hero/visual-break-image.png';
import inFrameUxFlowDiagram from '../assets/projects/inframe/case study/ux-flow-diagram.png';
import movieFlowAnimation1 from '../assets/projects/inframe/case study/movie-flow-animation1.webm';
import movieFlowAnimation2 from '../assets/projects/inframe/case study/movie-flow-animation2.webm';
import movieFlowAnimation3 from '../assets/projects/inframe/case study/movie-flow-animation3.webm';
import movieFlowAnimation4 from '../assets/projects/inframe/case study/movie-flow-animation4.webm';
import cinemaFlowAnimation1 from '../assets/projects/inframe/case study/cinema-flow-animation1.webm';
import cinemaFlowAnimation2 from '../assets/projects/inframe/case study/cinema-flow-animation2.webm';
import cinemaFlowAnimation3 from '../assets/projects/inframe/case study/cinema-flow-animation3.webm';
import seatVisual from '../assets/projects/inframe/case study/seat-visual.png';
import orderVisual from '../assets/projects/inframe/case study/order-visual.png';
import ticketVisual from '../assets/projects/inframe/case study/ticket-visual.png';
import finalShotWide from '../assets/projects/inframe/case study/shot-wide.png';
import finalShotMedium from '../assets/projects/inframe/case study/shot-medium-1.png';
import finalShotSmall1 from '../assets/projects/inframe/case study/shot-small-1.png';
import finalShotSmall2 from '../assets/projects/inframe/case study/shot-small-2.png';
import eventsAnimation from '../assets/projects/inframe/case study/events-animation.webm';

export const inFrameProjectConfig = {
  id: 'inframe',
  slug: 'inframe',
  path: '/projects/inframe',
  title: 'InFrame',
  shortTitle: 'InFrame',
  year: '2025',
  category: 'Mobile Product Design',
  eyebrow: 'MOBILE PRODUCT DESIGN',
  projectType: 'PERSONAL PROJECT',
  role: 'Product Designer',
  duration: '5 weeks',
  statement:
    'A cinema discovery and booking experience built around different ways of deciding what to watch.',
  disciplines: ['Product Design', 'UX/UI', 'Interaction Design'],
  disclaimer: 'Independent product concept.',
  hero: {
    variant: 'editorial',
    title: 'InFrame',
    focusEyebrow: 'PROJECT FOCUS',
    statement:
      'A cinema discovery and booking experience built around different ways of deciding what to watch.',
    showMetadata: true,
    metadata: [
      { value: 'MOBILE PRODUCT DESIGN ·', accent: true },
      { value: '2025 ·' },
      { value: 'PERSONAL PROJECT' },
    ],
  },
  theme: {
    accent: '#FFAA33',
    accentSoft: '#F1DDE2',
    surface: '#171418',
    surfaceElevated: '#231E24',
  },
  navigation: [
    { id: 'overview', label: 'Overview' },
    { id: 'challenge', label: 'Challenge' },
    { id: 'discovery', label: 'Discovery' },
    { id: 'booking', label: 'Booking' },
    { id: 'final-experience', label: 'Final Experience' },
    { id: 'reflection', label: 'Reflection' },
  ],
  nextProject: {
    eyebrow: 'NEXT PROJECT',
    title: 'Nintendo eShop',
    statement:
      'Rethinking how players discover and navigate games through a controller-first storefront.',
    metadata: 'Product Design · Console Software',
    path: '/projects/nintendo-eshop-redesign',
    mediaLabel: 'Nintendo eShop project cover',
  },
};

export const inFrameCaseStudyContent = {
  heroVisual: {
    label: 'InFrame hero visual',
    aspectRatio: '16 / 8.5',
    orientation: 'cinematic',
    theme: 'soft',
    width: 'full',
    src: inFrameHeroVisual,
    alt: 'Two InFrame mobile interfaces showing seat selection and movie details.',
    backgroundColor: '#171E31',
    objectFit: 'contain',
    objectPosition: 'center',
    decorative: false,
    presentation: 'hero-breakout',
    breakoutPosition: 'raised',
  },
  overview: {
    id: 'overview',
    sectionIndex: '01',
    sectionLabel: 'Overview',
    title: 'Project overview',
    statement: 'A simpler way to discover what to watch and where to watch it.',
    description: [
      'InFrame is a mobile cinema discovery and booking concept designed to connect movie exploration, cinema information, screenings and ticket booking within one continuous experience.',
      'Rather than forcing users into a single discovery path, the product supports different starting points depending on whether the decision begins with a movie or with a cinema.',
    ],
    metadata: [
      { label: 'Role', value: 'Product Designer' },
      {
        label: 'Disciplines',
        value: 'Product Design · UX/UI · Interaction Design',
      },
      { label: 'Year', value: '2025' },
      { label: 'Type', value: 'Personal project' },
      { label: 'Duration', value: '5 weeks' },
    ],
    summaryItems: [
      {
        label: 'Challenge',
        value:
          'Cinema discovery is often fragmented across movie information, cinema schedules and separate booking experiences.',
      },
      {
        label: 'My contribution',
        value:
          'Product thinking, UX/UI design, user flows, prototyping and visual design.',
      },
      {
        label: 'Approach',
        value:
          'Designed parallel discovery paths that allow users to begin from either a movie or a cinema.',
      },
      {
        label: 'Outcome',
        value:
          'A unified mobile experience connecting discovery, screening selection and seat booking.',
      },
    ],
  },
  visualBreak: {
    heading:
      'From discovering a movie to finding the right screening in one continuous experience.',
    aspectRatio: '4272 / 2724',
    layout: 'wide',
    mediaAlignment: 'center',
    mediaWidth: '76%',
    mediaFlushBottom: true,
    mediaFlushTopSpacing: 'standard',
    mediaFrame: 'seamless',
    media: {
      type: 'image',
      src: inFrameVisualBreak,
      alt: 'InFrame movie discovery interface presented across a mobile screen and featured film cards.',
      fit: 'contain',
      objectPosition: 'center bottom',
    },
    theme: 'dark',
  },
  challenge: {
    id: 'challenge',
    eyebrow: '02 — CHALLENGE',
    title: 'Choosing a movie rarely starts from the same place',
    introduction:
      'Sometimes people know exactly what they want to watch. Other times they begin with a cinema, a location or simply the intention to see something nearby. InFrame was designed to support these different starting points without fragmenting the experience.',
    originInsight: {
      label: 'WHERE THE PROJECT STARTED',
      quote: '“Where can I watch this movie in original language?”',
      paragraphs: [
        'While working part-time in a coliving space mainly used by digital nomads, I repeatedly encountered the same practical problem: guests wanted to go to the cinema, but struggled to understand which venues offered films in original language.',
        'Those conversations became the starting point for InFrame and revealed a broader opportunity to make discovery easier around movies, cinemas, language and available screenings.',
      ],
    },
    tensions: [
      {
        number: '01',
        title: 'Finding a suitable screening is more than finding a movie',
        description:
          'Language, location, time and cinema availability can all determine whether a screening is actually useful.',
      },
      {
        number: '02',
        title: 'Different journeys start from different information',
        description:
          'Some users begin with a movie, while others start from a cinema, location or specific screening requirement.',
      },
      {
        number: '03',
        title: 'Discovery and booking should remain connected',
        description:
          'Once a suitable option is found, users should be able to move naturally from exploration to screening selection and booking.',
      },
    ],
    decisionLabel: 'TWO WAYS OF DECIDING',
    decisionModes: [
      {
        number: '01',
        title: 'Movie-first viewer',
        quote: '"I know what I want to watch."',
        description:
          'The journey begins with a specific title and moves toward finding the right cinema, language and screening.',
      },
      {
        number: '02',
        title: 'Cinema-first viewer',
        quote: '"I know where I want to go."',
        description:
          'The journey begins with a cinema or location and moves toward exploring what is currently available there.',
      },
    ],
  },
  discovery: {
    id: 'discovery',
    eyebrow: '03 — DISCOVERY',
    title: 'Two ways into the same cinema experience',
    introduction:
      'InFrame does not force users into a single discovery path. The experience adapts to whether the decision starts from a movie or from a cinema.',
    paths: [
      {
        id: 'movie-first',
        label: 'MOVIE-FIRST',
        title: 'Start with what you want to watch',
        description:
          'Browse or search for a movie, compare available screenings and choose the cinema, language and time that fit the moment.',
        guidedSteps: [
          {
            id: 'movie-first-discover',
            label: 'DISCOVER',
            title: 'See what’s playing now',
            description:
              'The Movies tab surfaces films currently showing in the user’s city, creating a direct starting point for exploring what is available nearby.',
            media: {
              label: 'Movies discovery prototype',
              aspectRatio: '9 / 14',
              theme: 'bare',
              embedded: true,
              decorative: true,
              videoSources: [
                { src: movieFlowAnimation1, type: 'video/webm' },
              ],
            },
          },
          {
            id: 'movie-first-explore',
            label: 'EXPLORE',
            title: 'Understand the movie before deciding',
            description:
              'Selecting a title opens its details, helping users learn more about the film before moving from interest to available screenings through View showtimes.',
            media: {
              label: 'Movie details prototype',
              aspectRatio: '9 / 14',
              theme: 'bare',
              embedded: true,
              decorative: true,
              videoSources: [
                { src: movieFlowAnimation2, type: 'video/webm' },
              ],
            },
          },
          {
            id: 'movie-first-refine',
            label: 'REFINE',
            title: 'Find a screening that fits the moment',
            description:
              'Available cinemas can be explored as a complete list or narrowed through quick filters based on when to watch, screening preferences and distance from the current location.',
            media: {
              label: 'Showtimes and quick search prototype',
              aspectRatio: '9 / 14',
              theme: 'bare',
              embedded: true,
              decorative: true,
              videoSources: [
                { src: movieFlowAnimation3, type: 'video/webm' },
              ],
            },
          },
          {
            id: 'movie-first-select',
            label: 'SELECT',
            title: 'Choose the cinema and showtime',
            description:
              'Users can compare available cinemas, open additional venue information when needed, or select a showtime directly and continue into seat selection.',
            media: {
              label: 'Cinema and showtime selection prototype',
              aspectRatio: '9 / 14',
              theme: 'bare',
              embedded: true,
              decorative: true,
              videoSources: [
                { src: movieFlowAnimation4, type: 'video/webm' },
              ],
            },
          },
        ],
      },
      {
        id: 'cinema-first',
        label: 'CINEMA-FIRST',
        title: 'Start with where you want to go',
        description:
          'Explore nearby cinemas first, then move into the programme and select the movie or screening that works best.',
        tone: 'dark',
        guidedVariant: 'compact',
        guidedSteps: [
          {
            id: 'cinema-first-discover',
            label: 'DISCOVER',
            title: 'Explore cinemas around you',
            description:
              'The Cinemas tab shows venues available in the selected city, with quick access to favourites and a complete list ordered by distance from the user’s current location.',
            media: {
              label: 'Cinema discovery prototype',
              aspectRatio: '9 / 14',
              theme: 'bare',
              embedded: true,
              decorative: true,
              videoSources: [
                { src: cinemaFlowAnimation1, type: 'video/webm' },
              ],
            },
          },
          {
            id: 'cinema-first-explore',
            label: 'EXPLORE',
            title: 'Understand the venue and its programme',
            description:
              'Opening a cinema gives access to venue information and a dedicated Showtimes view, where users can explore current movies, screening times and choose the day they are interested in.',
            media: {
              label: 'Cinema details and showtimes prototype',
              aspectRatio: '9 / 14',
              theme: 'bare',
              embedded: true,
              decorative: true,
              videoSources: [
                { src: cinemaFlowAnimation2, type: 'video/webm' },
              ],
            },
          },
          {
            id: 'cinema-first-select',
            label: 'SELECT',
            title: 'Choose a movie and showtime',
            description:
              'After selecting a movie and one of its available showtimes, the journey continues into seat selection.',
            media: {
              label: 'Cinema showtime selection prototype',
              aspectRatio: '9 / 14',
              theme: 'bare',
              embedded: true,
              decorative: true,
              videoSources: [
                { src: cinemaFlowAnimation3, type: 'video/webm' },
              ],
            },
          },
        ],
      },
    ],
  },
  booking: {
    id: 'booking',
    eyebrow: '04 — BOOKING',
    title: 'Different discovery paths, one booking flow',
    introduction:
      'Once a screening is selected, the two discovery journeys converge into the same booking pattern. Keeping seat selection, payment and confirmation consistent reduces unnecessary variation and gives users a predictable path toward completing the booking.',
    takeaway: 'Flexible discovery, predictable completion.',
    flowMedia: {
      label: 'Shared booking flow diagram',
      src: inFrameUxFlowDiagram,
      alt: 'UX flow showing the Movie-first and Cinema-first journeys converging into one shared booking flow.',
      aspectRatio: '5672 / 6004',
      objectFit: 'contain',
      objectPosition: 'center',
      theme: 'bare',
      embedded: true,
      decorative: false,
    },
    stages: [
      {
        number: '01',
        label: 'SELECT',
        title: 'Choose your seats',
        description:
          'Review availability and select seats directly from the cinema seating map.',
        media: {
          src: seatVisual,
          alt: 'InFrame seat-selection interface.',
          aspectRatio: '1929 / 3896',
          objectFit: 'contain',
          theme: 'bare',
          embedded: true,
          decorative: false,
        },
      },
      {
        number: '02',
        label: 'PAY',
        title: 'Complete the booking quickly',
        description:
          'Continue with a familiar checkout flow and choose between standard payment methods without introducing unnecessary steps.',
        media: {
          src: orderVisual,
          alt: 'InFrame order summary and payment interface.',
          aspectRatio: '1929 / 3896',
          objectFit: 'contain',
          theme: 'bare',
          embedded: true,
          decorative: false,
        },
      },
      {
        number: '03',
        label: 'ACCESS',
        title: 'Keep the ticket ready',
        description:
          'Once payment is complete, booking details and the digital ticket remain available in the app for quick access at the cinema.',
        media: {
          src: ticketVisual,
          alt: 'InFrame booking confirmation and digital ticket interface.',
          aspectRatio: '1929 / 3896',
          objectFit: 'contain',
          theme: 'bare',
          embedded: true,
          decorative: false,
        },
      },
    ],
  },
  finalExperience: {
    id: 'final-experience',
    eyebrow: '05 — FINAL EXPERIENCE',
    title: 'A closer look at the final experience',
    introduction:
      'A final selection of interface details and product moments that complete the experience beyond the main discovery and booking journeys.',
    gallery: [
      {
        id: 'composition-01',
        media: {
          src: finalShotWide,
          alt: 'InFrame cinema page shown on a phone held in one hand.',
          aspectRatio: '14620 / 8772',
          objectFit: 'contain',
          theme: 'bare',
          embedded: true,
          decorative: false,
        },
      },
      {
        id: 'composition-02',
        media: {
          src: finalShotMedium,
          alt: 'InFrame final interfaces for events, movie discovery and tickets.',
          aspectRatio: '7704 / 9888',
          objectFit: 'contain',
          theme: 'bare',
          embedded: true,
          decorative: false,
        },
      },
      {
        id: 'composition-03',
        media: {
          src: finalShotSmall1,
          alt: 'InFrame event details interface shown in a close mobile crop.',
          aspectRatio: '6400 / 4800',
          objectFit: 'contain',
          theme: 'bare',
          embedded: true,
          decorative: false,
        },
      },
      {
        id: 'composition-04',
        media: {
          src: finalShotSmall2,
          alt: 'InFrame cinema event interface presented on a mobile device.',
          aspectRatio: '6400 / 4800',
          objectFit: 'contain',
          theme: 'bare',
          embedded: true,
          decorative: false,
        },
      },
    ],
    secondary: {
      label: 'BEYOND REGULAR SCREENINGS',
      title: 'Extending discovery to cinema events',
      description:
        'InFrame also brings cinema events and special experiences into the same discovery environment, allowing users to explore activities beyond standard movie screenings.',
      media: {
        videoSources: [
          { src: eventsAnimation, type: 'video/webm' },
        ],
        alt: 'InFrame cinema events discovery experience.',
        aspectRatio: '9 / 14',
        objectFit: 'contain',
        theme: 'bare',
        embedded: true,
        decorative: false,
      },
    },
  },
  reflection: {
    id: 'reflection',
    eyebrow: '06 — REFLECTION',
    title: 'Designing around how decisions actually begin',
    points: [
      {
        number: '01',
        title: 'What I learned',
        description:
          'Discovery experiences benefit from supporting different user intentions rather than forcing everyone through the same entry point.',
      },
      {
        number: '02',
        title: 'What I would improve',
        description:
          'I would validate the relative value of movie-first and cinema-first discovery with real users and refine the relationship between recommendations, location and screening availability.',
      },
      {
        number: '03',
        title: 'What I would explore next',
        description:
          'Accessibility, personalized discovery and stronger support for recurring cinema habits.',
      },
    ],
  },
};
