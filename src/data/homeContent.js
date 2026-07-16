import { projects } from './projects.js';

export const homeContent = {
  manifesto: {
    segments: [
      { text: 'Shaping meaningful ' },
      { text: 'digital experiences', keywordId: 'digital-experiences' },
      { text: ' by making ' },
      { text: 'technology', keywordId: 'technology' },
      { text: ' intuitive, engaging and human.' },
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
      'Working across product design, code, games and emerging technologies helps me approach each problem with a wider set of perspectives, tools and possibilities.',
    principles: [
      {
        number: '01',
        graphic: 'meaning',
        eyebrow: 'MEANING',
        title: 'Design creates meaning',
        statement:
          'Technology creates possibilities. Design decides what they mean.',
        supporting:
          'I focus on people, contexts and interactions to transform technical tools into experiences with clear purpose and direction.',
      },
      {
        number: '02',
        graphic: 'beyond-interfaces',
        eyebrow: 'BEYOND INTERFACES',
        title: 'Experiences go beyond interfaces',
        statement:
          'An experience is more than the screen people interact with.',
        supporting:
          'It includes behaviours, environments, systems and every moment that shapes how technology is understood and used.',
      },
      {
        number: '03',
        graphic: 'curiosity',
        eyebrow: 'CURIOSITY',
        title: 'Curiosity expands possibilities',
        statement:
          'Exploring different mediums reveals new ways to solve problems.',
        supporting:
          'By moving between product design, code, games and emerging technologies, I discover perspectives and tools that strengthen my design process.',
      },
    ],
  },
  featuredProjects: {
    title: 'Featured Projects',
    description:
      'A selection of projects that best represent my design approach, process and execution.',
    projects,
  },
  playgroundPreview: {
    bridge: 'Curious about what happens beyond polished outcomes?',
    title: 'Playground',
    description:
      'A space for small experiments, unfinished ideas and technical explorations. Here I test interactions, motion, code and emerging mediums without the constraints of a complete case study.',
    experiments: [
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
      statement: 'Looking for the next meaningful opportunity.',
      description:
        'Currently seeking a Product Design role, while staying open to collaborations, side projects and conversations around design, technology and emerging experiences.',
      cta: { label: 'Contact', path: '/contact' },
      quickContacts: {
        title: 'Quick contacts',
        items: [
          {
            id: 'email',
            icon: 'email',
            label: 'federicoduca1@gmail.com',
            href: 'mailto:federicoduca1@gmail.com',
          },
          {
            id: 'linkedin',
            icon: 'linkedin',
            label: 'Federico Duca',
            href: 'https://www.linkedin.com/in/federicoduca/',
            external: true,
          },
        ],
      },
    },
    about: {
      eyebrow: 'Before you leave...',
      statement: "Here's the person behind all this.",
      cta: { label: 'Meet Federico', path: '/about' },
    },
  },
};
