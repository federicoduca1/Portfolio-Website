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
  duration: 'To be confirmed',
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
    eyebrow: '01 — DIAGNOSIS',
    title: 'When structure fails, the experience suffers',
    introduction:
      'The Nintendo eShop is mainly navigated using a controller. Focus, hierarchy and positional feedback therefore need to remain clear and predictable as players move through the store.',
    insights: [
      {
        number: '01',
        title: 'Fragmented structure',
        evidence:
          'Similar content appears across multiple sections, while overlapping entry points make the store difficult to understand as one coherent system.',
        implication:
          'Reduce duplication and give each destination a clearly defined purpose.',
        mediaLabel: 'Fragmented storefront structure',
      },
      {
        number: '02',
        title: 'Navigation and filtering compete',
        evidence:
          'Browsing destinations and filtering controls behave like parallel navigation systems, making it difficult to understand whether users are moving somewhere new or refining the current content.',
        implication:
          'Separate global navigation from contextual refinement.',
        mediaLabel: 'Navigation and filtering analysis',
      },
      {
        number: '03',
        title: 'Discovery lacks hierarchy and orientation',
        evidence:
          'Repetitive layouts, weak visual priority and limited positional feedback increase cognitive load and reduce the sense of progression.',
        implication:
          'Establish stronger content hierarchy, focus feedback and location awareness.',
        mediaLabel: 'Discovery hierarchy analysis',
      },
    ],
  },
  architecture: {
    id: 'architecture',
    eyebrow: '02 — SYSTEM',
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
      original: 'Original information architecture',
      redesigned: 'Redesigned information architecture',
      caption:
        'The redesign replaces overlapping storefront destinations with roles organized around distinct player intentions.',
    },
  },
  discovery: {
    id: 'discovery',
    eyebrow: '03 — DISCOVERY',
    title: 'Four destinations, four different user intentions',
    introduction:
      'The redesign avoids repeating the same catalog structure across every destination. Each area uses a different hierarchy based on what users are trying to accomplish.',
    features: [
      {
        id: 'discover',
        label: 'Discover',
        intention: 'Inspiration',
        audience: 'For users who do not yet know what they want.',
        decision:
          'Prioritize a limited number of meaningful editorial and personalized sections rather than presenting the entire catalog at once.',
        wireframeLabel: 'Discover wireframe',
        interfaceLabel: 'Discover final interface',
        layout: 'wide',
      },
      {
        id: 'browse',
        label: 'Browse',
        intention: 'Exploration',
        audience:
          'For users who want to explore through genres, themes and curated collections.',
        decision:
          'Provide multiple structured entry points without turning filters into the main form of navigation.',
        wireframeLabel: 'Browse wireframe',
        interfaceLabel: 'Browse final interface',
        layout: 'split',
      },
      {
        id: 'deals',
        label: 'Deals',
        intention: 'Comparison',
        audience: 'For users evaluating discounted content.',
        decision:
          'Prioritize price, discount and time-sensitive information for fast scanning and comparison.',
        wireframeLabel: 'Deals wireframe',
        interfaceLabel: 'Deals final interface',
        layout: 'split',
      },
      {
        id: 'all-games',
        label: 'All Games',
        intention: 'Control',
        audience: 'For users who want direct access to the complete catalog.',
        decision:
          'Use progressive filtering and persistent feedback to support intentional search.',
        wireframeLabel: 'All Games wireframe',
        interfaceLabel: 'All Games final interface',
        layout: 'wide',
      },
    ],
  },
  interaction: {
    id: 'interaction',
    eyebrow: '04 — INTERACTION',
    title: 'Designing navigation for a controller-first environment',
    introduction:
      'In a controller-based interface, focus replaces the cursor. Every interactive element must communicate where the user is, what can be selected and what will happen next.',
    modules: [
      {
        id: 'focus-system',
        title: 'Focus system',
        description:
          'Focus must be visible, predictable and consistent across every interactive state.',
        media: ['Default focus state', 'Focused state', 'Pressed state'],
      },
      {
        id: 'adaptive-navigation',
        title: 'Adaptive navigation',
        description:
          'The sidebar preserves orientation while adapting to the content space available.',
        media: ['Collapsed sidebar', 'Expanded sidebar'],
      },
      {
        id: 'contextual-filtering',
        title: 'Contextual filtering',
        description:
          'Filters live in a dedicated contextual layer rather than competing with global navigation.',
        media: ['Filters drawer'],
      },
    ],
  },
  outcome: {
    id: 'outcome',
    eyebrow: '05 — OUTCOME',
    title: 'A clearer way to explore the catalog',
    groups: [
      {
        title: 'Discover and explore',
        mediaLabel: 'Discover and explore experience',
        size: 'large',
      },
      {
        title: 'Compare and refine',
        mediaLabel: 'Compare and refine details',
        size: 'small',
      },
      {
        title: 'Stay oriented',
        mediaLabel: 'Navigation orientation details',
        size: 'small',
      },
    ],
    validation: {
      demonstrated: {
        title: 'What the current concept demonstrates',
        items: [
          'Clearer structural separation',
          'Stronger content hierarchy',
          'Dedicated navigation and filtering layers',
          'Defined controller focus states',
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
