export const homeContent = {
  manifesto: {
    segments: [
      { text: 'I design meaningful ' },
      { text: 'digital experiences', keywordId: 'digital-experiences' },
      { text: ' by turning ' },
      { text: 'technology', keywordId: 'technology' },
      { text: ' into intuitive, engaging and human interactions.' },
    ],
    keywords: [
      {
        id: 'digital-experiences',
        label: 'digital experiences',
        title: 'Beyond interfaces',
        description:
          'I explore products, interactive systems, games and emerging mediums to understand how people experience technology in different contexts.',
        tools: [
          { id: 'figma', label: 'Figma' },
          { id: 'unity', label: 'Unity' },
          { id: 'blender', label: 'Blender' },
          { id: 'visual-studio-code', label: 'Visual Studio Code' },
          { id: 'illustrator', label: 'Adobe Illustrator' },
        ],
      },
      {
        id: 'technology',
        label: 'technology',
        title: 'A medium for exploration',
        description:
          'I use code and prototyping to test ideas, understand technical constraints and turn design decisions into working experiences.',
        tools: [
          { id: 'html', label: 'HTML' },
          { id: 'css', label: 'CSS' },
          { id: 'javascript', label: 'JavaScript' },
          { id: 'react', label: 'React.js' },
          { id: 'c-sharp', label: 'C#' },
        ],
      },
    ],
  },
  designPhilosophy: {
    title: 'Design Philosophy',
    description:
      'Three principles guide how I approach people, technology and interaction.',
    principles: [
      {
        number: '01',
        title: 'Design creates meaning',
        description:
          'Technology creates possibilities, but design gives them direction. I focus on understanding people, contexts and interactions to transform tools into meaningful experiences.',
      },
      {
        number: '02',
        title: 'Experiences go beyond interfaces',
        description:
          'Design is not limited to screens. It includes behaviours, systems, environments and every moment in which people interact with technology.',
      },
      {
        number: '03',
        title: 'Curiosity expands possibilities',
        description:
          'Exploring different mediums helps me discover new perspectives, tools and ways of designing. Curiosity is how I learn, experiment and continuously evolve.',
      },
    ],
  },
  featuredProjects: {
    title: 'Featured Projects',
    description:
      'A selection of projects that best represent my design approach, process and execution.',
    projects: [
      {
        id: 'featured-project-01',
        category: 'UX/UI Design',
        title: 'Healthcare Platform',
        description:
          'Designing a digital experience that helps people navigate complex care journeys with clarity.',
        metadata: 'Case study placeholder',
        featured: true,
      },
      {
        id: 'featured-project-02',
        category: 'Product Design',
        title: 'Learning Dashboard',
        description:
          'Structuring a focused interface for progress, feedback and continuous learning.',
        metadata: 'Case study placeholder',
        featured: false,
      },
      {
        id: 'featured-project-03',
        category: 'Service Experience',
        title: 'Mobility System',
        description:
          'Exploring how digital touchpoints can support more intuitive urban movement.',
        metadata: 'Case study placeholder',
        featured: false,
      },
    ],
  },
  playgroundPreview: {
    title: 'Playground',
    description:
      'A collection of experiments, prototypes and explorations driven by curiosity rather than delivery.',
    experiments: [
      {
        id: 'experiment-01',
        title: 'Spatial Interface',
        description: 'A small study on depth, motion and orientation.',
      },
      {
        id: 'experiment-02',
        title: 'Gesture Prototype',
        description: 'Testing lightweight input patterns for playful control.',
      },
      {
        id: 'experiment-03',
        title: 'Ambient States',
        description: 'Exploring interfaces that respond quietly to context.',
      },
      {
        id: 'experiment-04',
        title: 'Data Sketch',
        description: 'Turning structured information into readable forms.',
      },
      {
        id: 'experiment-05',
        title: 'Micro Interaction',
        description: 'A focused prototype for feedback and timing.',
      },
      {
        id: 'experiment-06',
        title: 'Material UI Study',
        description: 'Investigating texture, restraint and digital tactility.',
      },
    ],
  },
  closing: {
    contact: {
      title: "Let's build something meaningful together.",
      description:
        'Open to thoughtful collaborations, design conversations and digital experiences with a clear purpose.',
      methods: [
        { label: 'Email', value: 'hello@example.com', primary: true },
        { label: 'LinkedIn', value: 'Professional profile' },
        { label: 'Behance', value: 'Selected visual work' },
      ],
      cta: 'Contact',
    },
    about: {
      intro: 'Now let me introduce myself.',
      name: 'FedericoDuca',
      cta: 'About',
    },
  },
};
