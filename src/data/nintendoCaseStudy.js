import analysisOneScreenshot from '../assets/projects/nintendo-eshop-redesign/case-study/analysis-1-screenshot.png';
import analysisTwoScreenshot from '../assets/projects/nintendo-eshop-redesign/case-study/analysis-2-screenshot.png';
import originalIaImage from '../assets/projects/nintendo-eshop-redesign/case-study/original-IA.png';
import redesignedIaImage from '../assets/projects/nintendo-eshop-redesign/case-study/redesigned-IA.png';
import browseWireframeOne from '../assets/projects/nintendo-eshop-redesign/case-study/wireframes/browse-page-1.png';
import browseWireframeTwo from '../assets/projects/nintendo-eshop-redesign/case-study/wireframes/browse-page-2.png';
import browseWireframeFinal from '../assets/projects/nintendo-eshop-redesign/case-study/wireframes/browse-wireframes-def.png';
import dealsWireframeOne from '../assets/projects/nintendo-eshop-redesign/case-study/wireframes/deals-page-1.png';
import dealsWireframeTwo from '../assets/projects/nintendo-eshop-redesign/case-study/wireframes/deals-page-2.png';
import dealsWireframeFinal from '../assets/projects/nintendo-eshop-redesign/case-study/wireframes/deals-wireframes-def.png';
import discoverWireframeOne from '../assets/projects/nintendo-eshop-redesign/case-study/wireframes/discover-page-1.png';
import discoverWireframeTwo from '../assets/projects/nintendo-eshop-redesign/case-study/wireframes/discover-page-2.png';
import discoverWireframeFinal from '../assets/projects/nintendo-eshop-redesign/case-study/wireframes/discover-wireframes-def.png';
import gamesWireframeOne from '../assets/projects/nintendo-eshop-redesign/case-study/wireframes/games-page-1.png';
import gamesWireframeFinal from '../assets/projects/nintendo-eshop-redesign/case-study/wireframes/games-wireframes-def.png';
import defaultInteractionState from '../assets/projects/nintendo-eshop-redesign/case-study/interactions/default-state-interaction.png';
import filterDrawerAnimationWebm from '../assets/projects/nintendo-eshop-redesign/case-study/interactions/filter-drawer-animation.webm';
import focusedInteractionState from '../assets/projects/nintendo-eshop-redesign/case-study/interactions/focused-state-interaction.png';
import pressedInteractionState from '../assets/projects/nintendo-eshop-redesign/case-study/interactions/pressed-state-interaction.png';
import sidebarAnimationWebm from '../assets/projects/nintendo-eshop-redesign/case-study/interactions/sidebar-animation.webm';
import nintendoSwitchVisualOne from '../assets/projects/nintendo-eshop-redesign/case-study/outcome/nintendoswitch-visual-1.png';
import heroVisualImage from '../assets/projects/nintendo-eshop-redesign/hero/hero-visual-image.png';
import heroScrollingMp4 from '../assets/projects/nintendo-eshop-redesign/hero/hero-scrolling.mp4';
import heroScrollingPoster from '../assets/projects/nintendo-eshop-redesign/hero/hero-scrolling-poster.webp';
import heroScrollingWebm from '../assets/projects/nintendo-eshop-redesign/hero/hero-scrolling.webm';

export const nintendoProjectConfig = {
  id: 'nintendo-eshop-redesign',
  slug: 'nintendo-eshop-redesign',
  path: '/projects/nintendo-eshop-redesign',
  title: 'Nintendo eShop Redesign',
  shortTitle: 'Nintendo eShop',
  year: '2026',
  category: 'Product Design',
  eyebrow: 'CONSOLE SOFTWARE DESIGN',
  projectType: 'PERSONAL PROJECT',
  role: 'Product Designer',
  duration: '8 weeks',
  statement:
    'Rethinking how players discover and navigate games through clearer information architecture and controller-first interaction.',
  disciplines: ['Product Design', 'UX/UI', 'Interaction Design'],
  disclaimer: 'Independent concept — not affiliated with Nintendo.',
  hero: {
    variant: 'editorial',
    titleLines: ['Nintendo eShop', 'Redesign'],
    focusEyebrow: 'PROJECT FOCUS',
    showMetadata: true,
    className: '',
  },
  theme: {
    accent: '#d85b42',
    accentSoft: '#f5ddd7',
    surface: '#171311',
    surfaceElevated: '#211b18',
  },
  navigation: [
    { id: 'overview', label: 'Overview' },
    { id: 'challenge', label: 'Challenge' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'discovery', label: 'Discovery' },
    { id: 'interaction', label: 'Interaction' },
    { id: 'outcome', label: 'Outcome' },
    { id: 'reflection', label: 'Reflection' },
  ],
  nextProject: {
    eyebrow: 'NEXT PROJECT',
    title: 'Houra',
    statement: 'Designing a product where time becomes currency.',
    metadata: 'Mobile Product · Community Exchange Platform',
    path: '/projects#houra',
    mediaLabel: 'Houra project cover',
  },
};

export const nintendoCaseStudyContent = {
  heroVisual: {
    label: 'Nintendo project hero visual',
    caption: 'Final high-fidelity concept · Nintendo Switch storefront',
    aspect: 'heroCompact',
    tone: 'editorial',
    media: {
      type: 'image',
      src: heroVisualImage,
      alt: 'Nintendo Switch displaying the redesigned Nintendo eShop storefront.',
      fit: 'contain',
      focalPosition: 'center bottom',
      breakout: 'top',
      mediaOffsetDesktop: '-0.5rem',
      mediaOffsetTablet: '-0.25rem',
      mediaOffsetMobile: '0rem',
      mediaScaleDesktop: 1.32,
      mediaScaleTablet: 1.28,
      mediaScaleMobile: 1.04,
      mediaWidth: '88%',
      panelRadius: 'clamp(1.5rem, 3vw, 3rem)',
      loading: 'eager',
      fetchPriority: 'high',
    },
  },
  overview: {
    title: 'Project overview',
    sectionIndex: '01',
    sectionLabel: 'Overview',
    statement: 'A clearer, controller-first way to discover games.',
    description: [
      'The Nintendo eShop is the primary storefront for discovering and purchasing games directly from the console. This independent redesign explores how clearer information architecture and controller-specific interaction patterns can make browsing more intuitive, predictable and engaging.',
      'Rather than treating the project as a visual refresh, the redesign focuses on the structure behind the experience: how users move between discovery, browsing, deals and the full catalog.',
    ],
    metadata: [
      { label: 'Role', value: nintendoProjectConfig.role },
      {
        label: 'Disciplines',
        value: nintendoProjectConfig.disciplines.join(' · '),
      },
      { label: 'Year', value: nintendoProjectConfig.year },
      { label: 'Duration', value: nintendoProjectConfig.duration },
      { label: 'Type', value: 'Personal project' },
    ],
    disclaimer: nintendoProjectConfig.disclaimer,
    summaryItems: [
      {
        label: 'Challenge',
        value:
          'The existing storefront combines overlapping entry points, unclear hierarchy and repetitive browsing patterns, making discovery cognitively demanding.',
      },
      {
        label: 'My contribution',
        value:
          'Product analysis, information architecture, interaction design, wireframing, prototyping and visual redesign.',
      },
      {
        label: 'Approach',
        value:
          'I evaluated the existing structure, reorganized the catalog around different user intentions and designed navigation patterns specifically for controller interaction.',
      },
      {
        label: 'Outcome',
        value:
          'A clearer storefront separating curated discovery, structured browsing, deals and full-catalog exploration.',
      },
    ],
  },
  visualBreak: {
    heading: 'A storefront built around different ways of discovering games.',
    headingLines: [
      'A storefront built around different',
      'ways of discovering games.',
    ],
    caption:
      'Final high-fidelity prototype . Featured Games Section Scrolling Animation',
    theme: 'dark',
    variant: 'video',
    layout: 'wide',
    mediaWidth: '76%',
    mediaAlignment: 'center',
    media: {
      type: 'video',
      poster: heroScrollingPoster,
      aspectRatio: '2486 / 1390',
      sources: [
        { src: heroScrollingWebm, type: 'video/webm' },
        { src: heroScrollingMp4, type: 'video/mp4' },
      ],
    },
  },
  challenge: {
    id: 'challenge',
    eyebrow: '02 — CHALLENGE',
    title: 'When structure fails, the experience suffers',
    introduction:
      'The Nintendo eShop is mainly navigated using a controller. Focus, hierarchy and positional feedback therefore need to remain clear and predictable as players move through the store.',
    methodology:
      'I evaluated the existing experience through a structured interface walkthrough, focusing on navigation, hierarchy, content organization and controller-based interaction.',
    insights: [
      {
        number: '01',
        title: 'Fragmented structure',
        evidence:
          'Similar content appears across multiple sections, while overlapping entry points make the store difficult to understand as one coherent system.',
        implication:
          'Reduce duplication and give each destination a clearly defined purpose.',
      },
      {
        number: '02',
        title: 'Navigation and filtering compete',
        evidence:
          'Browsing destinations and filtering controls behave like parallel navigation systems, making it difficult to understand whether users are moving somewhere new or refining the current content.',
        implication:
          'Separate global navigation from contextual refinement.',
      },
      {
        number: '03',
        title: 'Discovery lacks hierarchy and orientation',
        evidence:
          'Repetitive layouts, weak visual priority and limited positional feedback increase cognitive load and reduce the sense of progression.',
        implication:
          'Establish stronger hierarchy, focus feedback and location awareness.',
      },
    ],
    evidenceGallery: {
      title: 'Evidence from the existing experience',
      introduction:
        'The same structural issues often overlap within a single browsing flow. The following screens highlight where they become visible in the interface.',
      steps: [
        {
          id: 'fragmented-navigation',
          title: 'Fragmented navigation',
          description:
            'Overlapping entry points and weak section hierarchy make browsing repetitive and difficult to scan.',
          placeholderLabel: 'Existing eShop analysis — screen 01',
          aspectRatio: '5113 / 3632',
          alt: 'Annotated Nintendo eShop screen showing fragmented navigation and weak section hierarchy.',
          media: {
            src: analysisOneScreenshot,
            fit: 'contain',
          },
        },
        {
          id: 'weak-orientation',
          title: 'Weak orientation',
          description:
            'Limited position feedback and repetitive layouts make it harder to understand where users are and what has changed.',
          placeholderLabel: 'Existing eShop analysis — screen 02',
          aspectRatio: '5452 / 3967',
          alt: 'Annotated Nintendo eShop screen showing weak orientation and repetitive browsing patterns.',
          media: {
            src: analysisTwoScreenshot,
            fit: 'contain',
          },
        },
      ],
    },
    synthesis:
      'These issues were not isolated interface flaws, but symptoms of a fragmented structural model.',
  },
  architecture: {
    id: 'architecture',
    eyebrow: '03 — ARCHITECTURE',
    title: 'Rebuilding the store around user intent',
    introduction:
      'Rather than treating every section as another catalog page, the redesigned architecture assigns each destination a specific role.',
    principles: [
      {
        title: 'Clarify position and purpose',
        description:
          'Each destination should communicate where users are, what content it contains and what actions are available.',
      },
      {
        title: 'Separate navigation from refinement',
        description:
          'Primary navigation moves users between meaningful areas, while filters modify content within the current context.',
      },
      {
        title: 'Support different discovery intents',
        description:
          'The experience should work both for users searching intentionally and for those who simply want to explore.',
      },
    ],
    comparison: {
      chapterLabel: 'Architecture transformation',
      introduction:
        'The redesign consolidates overlapping destinations and gives each area a distinct role based on user intent.',
      original: {
        label: 'Before',
        mediaLabel: 'Original information architecture',
        caption:
          'Overlapping sections and duplicated entry points made the store difficult to understand as one coherent system.',
        aspectRatio: '12728 / 8494',
        maxWidth: '72%',
        compactMaxWidth: '100%',
        alignment: 'left',
        scale: 1,
        media: {
          src: originalIaImage,
          alt: 'Original Nintendo eShop information architecture showing overlapping storefront destinations and entry points.',
        },
      },
      transition:
        'The new structure separates curated discovery, structured browsing, deals and complete catalog exploration.',
      redesigned: {
        label: 'After',
        mediaLabel: 'Redesigned information architecture',
        caption:
          'Each destination now supports a distinct browsing intent while navigation and refinement remain clearly separated.',
        aspectRatio: '11090 / 5915',
        maxWidth: '100%',
        compactMaxWidth: '100%',
        alignment: 'center',
        scale: 1,
        media: {
          src: redesignedIaImage,
          alt: 'Redesigned Nintendo eShop information architecture organized around distinct browsing intents.',
        },
      },
    },
  },
  discovery: {
    id: 'discovery',
    eyebrow: '04 — DISCOVERY',
    title: 'Shaping four destinations around user intent',
    introduction:
      'The redesign required more than assigning names to four sections. Each destination needed a distinct hierarchy, rhythm and level of control based on what users were trying to accomplish.',
    explorations: {
      label: 'Early explorations',
      autoplay: true,
      pauseOnHover: true,
      speed: 26,
      gap: 'clamp(0.4rem, 0.8vw, 0.75rem)',
      introduction:
        'I explored multiple arrangements for content hierarchy, navigation and focus behaviour before consolidating the final wireframe system.',
      items: [
        {
          id: 'editorial-hierarchy',
          label: 'Exploration 01',
          caption: 'Editorial hierarchy',
          size: 'portrait',
          aspectRatio: '1188 / 3512',
          media: {
            src: discoverWireframeOne,
            alt: 'Early Discover wireframe exploring editorial content hierarchy.',
          },
        },
        {
          id: 'navigation-refinement',
          label: 'Exploration 02',
          caption: 'Content grouping',
          size: 'medium',
          aspectRatio: '1292 / 3004',
          media: {
            src: discoverWireframeTwo,
            alt: 'Early Discover wireframe exploring alternative content grouping.',
          },
        },
        {
          id: 'catalog-density',
          label: 'Exploration 03',
          caption: 'Navigation alternative',
          size: 'portrait',
          aspectRatio: '1556 / 3192',
          media: {
            src: browseWireframeOne,
            alt: 'Early Browse wireframe exploring an alternative navigation structure.',
          },
        },
        {
          id: 'filter-placement',
          label: 'Exploration 04',
          caption: 'Browse variation',
          size: 'medium',
          aspectRatio: '1600 / 3628',
          media: {
            src: browseWireframeTwo,
            alt: 'Early Browse wireframe exploring a different page arrangement.',
          },
        },
        {
          id: 'focus-behaviour',
          label: 'Exploration 05',
          caption: 'Catalog density',
          size: 'medium',
          aspectRatio: '1536 / 2076',
          media: {
            src: dealsWireframeOne,
            alt: 'Early Deals wireframe exploring catalog density and comparison.',
          },
        },
        {
          id: 'sidebar-exploration',
          label: 'Exploration 06',
          caption: 'Filter placement',
          size: 'portrait',
          aspectRatio: '1824 / 2548',
          media: {
            src: dealsWireframeTwo,
            alt: 'Early Deals wireframe exploring filter placement and content priority.',
          },
        },
        {
          id: 'content-grouping',
          label: 'Exploration 07',
          size: 'wide',
          aspectRatio: '1916 / 2076',
          caption: 'Focus behaviour',
          media: {
            src: gamesWireframeOne,
            alt: 'Early All Games wireframe exploring focus behaviour and catalog structure.',
          },
        },
      ],
    },
    transition: {
      lines: ['From a exploration', 'To a coherent system'],
    },
    destinations: [
      {
        id: 'discover',
        label: 'Discover',
        intention: 'Inspiration',
        audience: 'For users who do not yet know what they want.',
        decision:
          'Prioritize a limited number of meaningful editorial and personalized sections rather than exposing the complete catalog at once.',
        mediaLabel: 'Discover consolidated wireframe',
        aspectRatio: '1170 / 2254',
        media: {
          src: discoverWireframeFinal,
          alt: 'Consolidated Discover destination wireframe showing the complete storefront page hierarchy.',
        },
        layout: 'visual-right',
      },
      {
        id: 'browse',
        label: 'Browse',
        intention: 'Exploration',
        audience:
          'For users who want to explore through genres, themes and curated collections.',
        decision:
          'Provide structured entry points without turning filters into the main form of navigation.',
        mediaLabel: 'Browse consolidated wireframe',
        aspectRatio: '4680 / 5892',
        media: {
          src: browseWireframeFinal,
          alt: 'Consolidated Browse destination wireframe showing structured exploration and refinement.',
        },
        layout: 'visual-left',
      },
      {
        id: 'deals',
        label: 'Deals',
        intention: 'Comparison',
        audience: 'For users evaluating discounted content.',
        decision:
          'Prioritize price, discount and time-sensitive information for fast scanning and comparison.',
        mediaLabel: 'Deals consolidated wireframe',
        aspectRatio: '1170 / 1442',
        media: {
          src: dealsWireframeFinal,
          alt: 'Consolidated Deals destination wireframe emphasizing discounts and comparison information.',
        },
        layout: 'visual-right',
      },
      {
        id: 'all-games',
        label: 'All Games',
        intention: 'Control',
        audience: 'For users who want direct access to the complete catalog.',
        decision:
          'Use progressive filtering and persistent feedback to support intentional search.',
        mediaLabel: 'All Games consolidated wireframe',
        aspectRatio: '4680 / 5020',
        media: {
          src: gamesWireframeFinal,
          alt: 'Consolidated All Games destination wireframe showing the complete catalog and filtering system.',
        },
        layout: 'visual-left',
      },
    ],
  },
  interaction: {
    id: 'interaction',
    eyebrow: '05 — INTERACTION',
    title: 'Designing navigation for a controller-first environment',
    introduction:
      'In a controller-based interface, focus replaces the cursor. Every interactive element must communicate where the user is, what can be selected and what will happen next.',
    modules: [
      {
        id: 'focus-system',
        title: 'Focus system',
        description:
          'Focus must remain visible, predictable and consistent across every interactive state.',
        variant: 'focus-sequence',
        media: {
          label: 'Default to focused to pressed state sequence',
          states: [
            {
              label: 'Default',
              src: defaultInteractionState,
              alt: 'Nintendo eShop navigation item in its default state.',
            },
            {
              label: 'Focused',
              src: focusedInteractionState,
              alt: 'Nintendo eShop navigation item in its focused controller state.',
            },
            {
              label: 'Pressed',
              src: pressedInteractionState,
              alt: 'Nintendo eShop navigation item in its pressed controller state.',
            },
          ],
        },
      },
      {
        id: 'adaptive-navigation',
        title: 'Adaptive navigation',
        description:
          'The sidebar expands when labels improve orientation and collapses when content needs more space.',
        variant: 'animation',
        layout: 'split',
        media: {
          label: 'Adaptive navigation animation',
          webm: sidebarAnimationWebm,
          aspectRatio: '16 / 9',
          theme: 'dark',
          surface: 'transparent',
          radius: 'large',
          fit: 'cover',
          decorative: true,
          autoplay: true,
          loop: true,
          muted: true,
          playsInline: true,
          preload: 'metadata',
        },
        steps: [
          {
            label: 'Collapsed',
            description: 'Preserves more space for content.',
          },
          {
            label: 'Expanded',
            description: 'Reveals labels when orientation is needed.',
          },
        ],
      },
      {
        id: 'contextual-filtering',
        title: 'Contextual filtering',
        description:
          'Filters open as a temporary layer over the current catalog, preserving context while users refine results.',
        variant: 'animation',
        layout: 'stacked',
        media: {
          label: 'Contextual filtering animation',
          webm: filterDrawerAnimationWebm,
          aspectRatio: '16 / 9',
          theme: 'dark',
          surface: 'transparent',
          radius: 'large',
          fit: 'cover',
          decorative: true,
          autoplay: true,
          loop: true,
          muted: true,
          playsInline: true,
          preload: 'metadata',
        },
        steps: [
          {
            label: 'Closed',
            description: 'The current catalog remains visible.',
          },
          {
            label: 'Open',
            description:
              'Filtering appears as a temporary contextual layer.',
          },
          {
            label: 'Applied',
            description:
              'Results update without moving users to a new destination.',
          },
        ],
      },
    ],
    synthesis:
      'Clear feedback turns controller input into predictable navigation.',
  },
  outcome: {
    id: 'outcome',
    eyebrow: '06 — OUTCOME',
    title: 'A clearer way to explore the catalog',
    introduction:
      'A final storefront experience where discovery, browsing and controller interaction work as one coherent system.',
    finalExperience: {
      id: 'final-experience',
      label: 'The final experience',
      layout: 'hero',
      items: [
        {
          id: 'complete-storefront',
          label: 'Complete storefront experience',
          caption:
            'The complete storefront experience, from inspiration to intentional catalog exploration.',
          aspectRatio: '5843 / 4312',
          theme: 'dark',
          surface: 'transparent',
          maxWidth: '90%',
          media: {
            type: 'image',
            src: nintendoSwitchVisualOne,
            alt: 'Nintendo Switch displaying the final redesigned eShop Discover experience.',
            fit: 'contain',
          },
        },
      ],
    },
    visualChapters: [
      {
        id: 'discover-explore',
        label: 'Discover and explore',
        copy:
          'Curated content and structured entry points support both inspiration and open-ended exploration.',
        layout: 'dominant-support',
        items: [
          {
            id: 'discover-browse-experience',
            label: 'Discover and Browse experience',
            aspectRatio: '16 / 9',
          },
          {
            id: 'editorial-discovery-detail',
            label: 'Editorial discovery detail',
            aspectRatio: '4 / 3',
          },
        ],
      },
      {
        id: 'compare-refine',
        label: 'Compare and refine',
        copy:
          'Price, discount and refinement tools make intentional browsing faster and easier to scan.',
        layout: 'asymmetric',
        items: [
          {
            id: 'deals-games-experience',
            label: 'Deals and All Games experience',
            aspectRatio: '4 / 3',
          },
          {
            id: 'filtering-interaction',
            label: 'Filtering interaction',
            aspectRatio: '16 / 10',
          },
          {
            id: 'price-refinement-detail',
            label: 'Price and refinement detail',
            aspectRatio: '16 / 10',
          },
        ],
      },
      {
        id: 'stay-oriented',
        label: 'Stay oriented',
        copy:
          'Persistent navigation and predictable focus feedback help players understand where they are and what will happen next.',
        layout: 'detail',
        items: [
          {
            id: 'navigation-orientation',
            label: 'Navigation orientation detail',
            aspectRatio: '16 / 7',
          },
          {
            id: 'focus-feedback',
            label: 'Focus feedback detail',
            aspectRatio: '16 / 10',
          },
          {
            id: 'controller-interaction',
            label: 'Controller interaction detail',
            aspectRatio: '16 / 10',
          },
        ],
      },
    ],
    validation: {
      label: 'Validation & next steps',
      introduction:
        'The concept demonstrates a coherent design direction, but its effectiveness still needs to be validated with players using a real controller.',
      demonstrated: {
        title: 'What the current concept demonstrates',
        items: [
          'Clearer structural separation',
          'Stronger content hierarchy',
          'Dedicated navigation and refinement layers',
          'Consistent controller focus states',
        ],
      },
      pending: {
        title: 'What still needs validation',
        items: [
          'Comprehension of the four destinations',
          'Task-based controller navigation',
          'Focus predictability',
          'Filtering behaviour',
          'Accessibility',
          'Scalability across storefront regions and device formats',
        ],
      },
    },
    closing:
      'The final result is not only a clearer interface, but a storefront designed around how players actually explore from a console.',
  },
  reflection: {
    id: 'reflection',
    eyebrow: '06 — REFLECTION',
    title: 'Designing beyond the interface',
    introduction:
      'This project taught me that improving an interface often begins by questioning the system behind it. Reorganizing the eShop required me to think beyond individual screens and consider how content, navigation and interaction work together as one experience.',
    groups: [
      {
        title: 'What I learned',
        description:
          'Structure and interaction must be designed together rather than treated as separate stages.',
      },
      {
        title: 'What I would improve',
        description:
          'I would further refine catalog taxonomy, edge cases and accessibility states.',
      },
      {
        title: 'What I would test next',
        description:
          'I would validate the architecture with players and test the complete focus system using a real controller.',
      },
    ],
  },
};
