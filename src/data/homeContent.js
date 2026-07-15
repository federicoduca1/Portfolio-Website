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
      'Three principles guide how I approach people, technology and interaction.',
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
