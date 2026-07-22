import houraHeroVisual from '../assets/projects/houra/hero/hero-visual.png';
import houraVisualBreak from '../assets/projects/houra/hero/visualbreak-visual.png';

export const houraProjectConfig = {
  id: 'houra',
  slug: 'houra',
  path: '/projects/houra',
  title: 'Houra',
  shortTitle: 'Houra',
  year: '2026',
  category: 'Mobile Product Design',
  eyebrow: 'MOBILE PRODUCT DESIGN',
  projectType: 'PERSONAL PROJECT',
  role: 'Product Designer',
  duration: '8 weeks',
  statement:
    'Designing a community exchange system where time becomes a shared currency.',
  disciplines: ['Product Design', 'UX/UI', 'Service Design'],
  disclaimer: 'Independent service concept.',
  hero: {
    variant: 'editorial',
    title: 'Houra',
    statement:
      'Designing a community exchange system where time becomes a shared currency.',
    description:
      'A mobile service that allows people to give and receive help through time credits instead of money.',
    focusEyebrow: 'SERVICE CONCEPT',
    showMetadata: true,
    metadata: [
      { value: 'MOBILE PRODUCT DESIGN/SERVICE DESIGN', accent: true },
      { value: '2026' },
      { value: 'PERSONAL PROJECT' },
    ],
  },
  theme: {
    accent: '#137f78',
    accentSoft: '#d9efec',
    secondary: '#d87643',
    surface: '#102c2a',
    surfaceElevated: '#183c39',
  },
  navigation: [
    { id: 'overview', label: 'Overview' },
    { id: 'challenge', label: 'Challenge' },
    { id: 'participation', label: 'Participation' },
    { id: 'time-economy', label: 'Time Economy' },
    { id: 'trust', label: 'Trust' },
    { id: 'exchange-journey', label: 'Exchange Journey' },
    { id: 'system-synthesis', label: 'System Synthesis' },
    { id: 'validation', label: 'Validation' },
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

export const houraCaseStudyContent = {
  heroVisual: {
    label: 'Houra hero composition',
    aspectRatio: '16 / 8.5',
    theme: 'soft',
    src: houraHeroVisual,
    alt: 'Two mobile devices showing the Houra activity and helper-selection experiences.',
    objectFit: 'contain',
    objectPosition: 'center',
    decorative: false,
    presentation: 'hero-breakout',
  },
  overview: {
    title: 'Project overview',
    sectionIndex: '01',
    sectionLabel: 'Overview',
    statement:
      'Turning personal skills into opportunities for reciprocal exchange.',
    description: [
      'Houra is a time-banking platform where people exchange skills using time instead of money. Every hour spent helping another member generates one time credit that can later be used to receive a different service from someone else in the community.',
      'The project explores how a digital service can make this model understandable and trustworthy, supporting users from discovery and coordination to exchange completion, time-credit transfer and mutual feedback.',
    ],
    metadata: [
      { label: 'Role', value: 'Product Designer' },
      {
        label: 'Disciplines',
        value: 'Product Design · UX/UI · Service Design',
      },
      { label: 'Platform', value: 'Mobile application' },
      { label: 'Year', value: '2026' },
      { label: 'Duration', value: '8 weeks' },
      { label: 'Type', value: 'Personal project' },
    ],
    disclaimer: 'Independent service concept.',
    summaryItems: [
      {
        label: 'Challenge',
        value:
          'Making informal skill exchange understandable, flexible and trustworthy without relying on direct monetary transactions.',
      },
      {
        label: 'My contribution',
        value:
          'I defined the service model, time-credit system, core user flows, trust mechanisms and mobile experience.',
      },
      {
        label: 'Approach',
        value:
          'I connected user motivations and social barriers with the rules governing participation, discovery, coordination and value circulation.',
      },
      {
        label: 'Outcome',
        value:
          'A mobile service concept that supports the complete exchange journey while making time value, contribution and reputation visible throughout the experience.',
      },
    ],
  },
  visualBreak: {
    heading: 'Every hour given becomes an hour available to receive.',
    introduction:
      'Houra separates giving from receiving, allowing value to circulate across the community rather than requiring a direct exchange between the same two people.',
    theme: 'dark',
    variant: 'image',
    layout: 'wide',
    mediaWidth: '76%',
    mediaAlignment: 'center',
    mediaFrame: 'seamless',
    mediaFlushBottom: true,
    spacing: 'compact',
    aspectRatio: '16 / 7',
    media: {
      type: 'image',
      src: houraVisualBreak,
      alt: 'Houra mobile interface showing a member profile and favourite activity categories.',
      aspectRatio: '2768 / 2940',
      fit: 'contain',
      objectPosition: 'center bottom',
      transformOrigin: 'center bottom',
      scale: 0.98,
    },
  },
  challenge: {
    id: 'challenge',
    eyebrow: '02 — CHALLENGE',
    title: 'Exchanging skills is not just a matching problem',
    introduction:
      'A time-banking service must do more than connect supply and demand. It needs to make value understandable, participation flexible and real-world exchanges trustworthy without relying on money or fixed provider roles.',
    howMightWe:
      'How might we create a system where people can easily exchange skills and time while ensuring fairness, trust and flexibility?',
    tensionsEyebrow: 'Four system tensions',
    tensionsIntroduction:
      'The challenge revealed four interconnected conditions the service needed to balance in order to make community exchange understandable, sustainable and human.',
    tensions: [
      {
        title: 'Value without pricing',
        description:
          'Different skills need a common unit of value without introducing complex monetary pricing.',
      },
      {
        title: 'Participation without fixed roles',
        description:
          'The same person may give help in one moment and receive it in another, so the product cannot separate users into permanent providers and customers.',
      },
      {
        title: 'Trust without authority',
        description:
          'The service supports real-world interactions between unfamiliar people without relying on strict central control.',
      },
      {
        title: 'Flexibility without disorder',
        description:
          'Coordination must remain human and adaptable without making voluntary help feel like a rigid booking system.',
      },
    ],
  },
  participation: {
    id: 'participation',
    eyebrow: '03 — PARTICIPATION',
    title: 'Designing participation without fixed roles',
    introduction:
      'Houra treats helping and receiving as two states of the same community experience. Users can move between both roles over time without creating separate identities or entering different product journeys.',
    behaviours: [
      {
        label: 'GIVING HELP',
        description:
          'Contribute time, respond to requests and earn credits.',
      },
      {
        label: 'RECEIVING HELP',
        description:
          'Create requests, coordinate support and spend credits.',
      },
    ],
    statesMedia: {
      label: 'Helping and receiving states',
      aspectRatio: '4 / 3',
    },
    requests: {
      title: 'Requests guide participation',
      description:
        'Instead of depending only on users publishing generic skill listings, Houra surfaces real community needs and allows people to offer help where it is already relevant.',
      media: {
        label: 'Community request discovery',
        aspectRatio: '16 / 10',
      },
    },
    discovery: {
      title: 'Helping can begin through exploration',
      description:
        'Users may enter the app without knowing exactly how they want to contribute, so the homepage supports browsing by requests, categories and nearby opportunities.',
      media: {
        label: 'Exploratory homepage flow',
        aspectRatio: '16 / 8',
      },
    },
  },
  timeEconomy: {
    id: 'time-economy',
    eyebrow: '04 — TIME ECONOMY',
    title: 'One hour as a shared unit of value',
    introduction:
      'Houra uses time as a common unit across every exchange. Helping another member for one hour generates one time credit, which can later be spent with any other participant in the network.',
    equation: ['1 hour given', '1 time credit earned', '1 hour available to receive'],
    media: {
      label: 'Time-credit circulation model',
      aspectRatio: '16 / 8',
    },
    principles: [
      {
        title: 'Equal time value',
        description:
          'Every hour follows the same basic unit, keeping the system understandable and avoiding complex price lists.',
      },
      {
        title: 'Indirect reciprocity',
        description:
          'Members do not need to repay the person who helped them; value can move across the entire community.',
      },
      {
        title: 'Visible balance',
        description:
          'The interface makes earned credits, available balance and completed exchanges visible throughout the service.',
      },
    ],
    questions: [
      'Should every type of work have equal time value?',
      'When should a time credit be transferred?',
      'How should cancellations or incomplete exchanges be handled?',
      'Can users receive help before earning their first credit?',
    ],
  },
  trust: {
    id: 'trust',
    eyebrow: '05 — TRUST',
    title: 'Building trust before people meet',
    introduction:
      'Because exchanges involve personal time and real-world interaction, trust cannot depend on a single rating. It needs to be built progressively through identity, capability, communication and accountability.',
    steps: [
      {
        title: 'Identity',
        description:
          'Profiles make people, location and participation history visible before an exchange begins.',
        mediaLabel: 'Identity and profile',
      },
      {
        title: 'Capability',
        description:
          'Skills, experience and previous feedback help users evaluate whether someone is suitable for a specific request.',
        mediaLabel: 'Skills and feedback',
      },
      {
        title: 'Communication',
        description:
          'Chat allows participants to clarify expectations, location, timing and practical details before committing.',
        mediaLabel: 'Pre-exchange conversation',
      },
      {
        title: 'Accountability',
        description:
          'Completed activities, mutual confirmation and feedback create a visible history of participation.',
        mediaLabel: 'Completion and review',
      },
    ],
  },
  exchangeJourney: {
    id: 'exchange-journey',
    eyebrow: '06 — EXCHANGE JOURNEY',
    title: 'From a request to a completed exchange',
    introduction:
      'The service connects discovery, coordination and closure into one continuous cycle rather than treating each screen as an isolated task.',
    phases: [
      {
        title: 'Find a way to contribute',
        description:
          'Users explore community requests, evaluate the person and context, then offer help directly or begin a conversation.',
        media: [
          { label: 'Contribution flow', aspectRatio: '16 / 7' },
          { label: 'Request discovery wireframes', aspectRatio: '4 / 3' },
          { label: 'Offer-help interface', aspectRatio: '4 / 3' },
        ],
      },
      {
        title: 'Agree on the exchange',
        description:
          'Participants use chat and flexible scheduling to align expectations without turning voluntary help into a rigid booking process.',
        media: [
          { label: 'Coordination flow', aspectRatio: '16 / 8' },
          { label: 'Chat and scheduling interface', aspectRatio: '16 / 8' },
        ],
      },
      {
        title: 'Close the loop',
        description:
          'After the activity, completion, time-credit transfer and mutual feedback return value and trust to the wider community.',
        media: [
          { label: 'Exchange completion flow', aspectRatio: '16 / 8' },
          { label: 'Credit and feedback interface', aspectRatio: '16 / 8' },
        ],
      },
    ],
  },
  systemSynthesis: {
    id: 'system-synthesis',
    eyebrow: '07 — SYSTEM SYNTHESIS',
    title: 'A service model translated into one connected experience',
    introduction:
      'The final concept brings participation, discovery, trust, coordination and time-credit circulation into one continuous service journey.',
    media: {
      label: 'Houra system synthesis',
      aspectRatio: '16 / 8',
    },
    outcomes: [
      {
        title: 'Fluid participation',
        description:
          'Users can move between giving and receiving without fixed roles.',
      },
      {
        title: 'Time-based value',
        description:
          'A shared credit system separates contribution from direct repayment.',
      },
      {
        title: 'Trust across the exchange',
        description:
          'Profiles, communication, confirmation and feedback support confidence from discovery to completion.',
      },
    ],
  },
  validation: {
    id: 'validation',
    eyebrow: '08 — VALIDATION',
    title: 'Testing whether the service model works in practice',
    introduction:
      'The concept defines a coherent exchange system, but its social and economic assumptions still need to be validated with real participants and real community dynamics.',
    demonstrates: [
      {
        title: 'Understandable exchange model',
        description:
          'The service connects giving, receiving and time-credit balance within one visible system.',
      },
      {
        title: 'Flexible participation',
        description:
          'Users can contribute, request support and coordinate activities without fixed provider or customer roles.',
      },
      {
        title: 'Progressive trust',
        description:
          'Identity, communication and participation history support confidence across the exchange journey.',
      },
    ],
    questions: [
      'Do users understand how time credits are earned and spent?',
      'Does equal time value feel fair across different skills and levels of effort?',
      'Are the available trust signals sufficient before a real-world meeting?',
      'Can the community maintain a healthy balance between requests and available help?',
    ],
    methods:
      'Suggested methods: concept testing, moderated task-based prototype sessions, service walkthroughs, diary studies and small community pilots.',
  },
  reflection: {
    id: 'reflection',
    eyebrow: '09 — REFLECTION',
    title: 'Designing the rules behind the experience',
    introduction:
      'Houra pushed the project beyond interface design. The most important decisions concerned value, incentives, participation and trust: rules that shape behaviour even when they are not directly visible on screen.',
    blocks: [
      {
        title: 'From interface to service',
        description:
          'The project required me to consider what happens before, during and after each interaction, including the rules connecting separate users and separate moments in time.',
      },
      {
        title: 'Simplicity versus fairness',
        description:
          'Treating every hour equally makes the system understandable, but real exchanges introduce differences in effort, preparation and perceived expertise that would need deeper validation.',
      },
      {
        title: 'What I would carry forward',
        description:
          'In future marketplace and community products, I would define incentives, failure cases and trust mechanisms alongside the core user journey rather than treating them as secondary features.',
      },
    ],
    closing:
      'The interface supports the exchange, but the service rules make the exchange possible.',
  },
};
