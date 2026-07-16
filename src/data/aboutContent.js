import aboutPortrait from '../assets/about-page/federico-about-image.webp';

export const aboutHeroContent = {
  eyebrow: 'About',
  title: 'Meet Federico.',
  portrait: {
    src: aboutPortrait,
    alt: 'Portrait of Federico Duca',
  },
  profile: [
    { label: 'Name', value: 'Federico Duca' },
    { label: 'Age', value: '23' },
    { label: 'Based', value: 'Italy (ready to move abroad)' },
    { label: 'Languages', value: 'Italian (native) / English (C1)' },
    { label: 'Focus', value: 'Product Design' },
  ],
  leadIn: "Beyond a Product Designer, I'm someone...",
  identities: [
    {
      parts: [
        { text: 'who keeps following ' },
        { text: 'curiosity', accent: true },
        { text: ' across different disciplines.' },
      ],
    },
    {
      parts: [
        { text: 'fascinated by the connection between ' },
        { text: 'people', accent: true },
        { text: ' and ' },
        { text: 'technology', accent: true },
        { text: '.' },
      ],
    },
    {
      parts: [
        { text: 'who can spend hours talking about ' },
        { text: 'films', accent: true },
        { text: ' after the credits roll.' },
      ],
    },
    {
      parts: [
        { text: 'who collects new perspectives through ' },
        { text: 'travel', accent: true },
        { text: ' and observation.' },
      ],
    },
    {
      parts: [
        { text: 'who ' },
        { text: 'sketches', accent: true },
        { text: ' ideas before opening Figma.' },
      ],
    },
    {
      parts: [
        { text: 'who enjoys experimenting in the ' },
        { text: 'kitchen', accent: true },
        { text: ' as much as in design.' },
      ],
    },
    {
      parts: [
        { text: 'who still gets excited starting a new ' },
        { text: 'videogame', accent: true },
        { text: '.' },
      ],
    },
    {
      parts: [
        { text: 'who rarely stops asking “' },
        { text: 'What if?', accent: true },
        { text: '”.' },
      ],
    },
  ],
};

export const designJourneyContent = {
  eyebrow: 'Design Journey',
  title: 'How my perspective evolved.',
  introduction:
    'Every new domain expanded the way I understand design. Rather than changing direction, each step added a new perspective that shapes how I approach products today.',
  milestones: [
    {
      year: '2021',
      title: 'Designing objects',
      description:
        'Started Industrial Design driven by sketching, 3D modelling and product development. Design initially meant creating physical products.',
    },
    {
      year: '2021–2024',
      title: 'Beyond aesthetics',
      description:
        'Discovered that great design goes beyond aesthetics. Ergonomics, usability and meaning gradually became more important than form alone.',
    },
    {
      year: '2024',
      title: 'From physical to digital',
      description:
        'Found Digital Design and UX. Realised the same principles behind physical products naturally translate into digital experiences.',
    },
    {
      year: '2025',
      title: 'Understanding technology',
      description:
        'Learned front-end development and coding to better understand the medium I design for, making ideas more feasible and collaboration stronger.',
    },
    {
      year: '2026',
      title: 'Designing new realities',
      description:
        'Expanded into Game Design and XR, exploring how design shapes interactions across emerging technologies and new digital experiences.',
    },
  ],
  closing:
    'Looking back, every step taught me a different way of thinking. Looking ahead, curiosity is still what drives me the most.',
};

export const educationLearningContent = {
  title: 'Education & Learning',
  sections: [
    {
      id: 'education',
      title: 'Education',
      entries: [
        {
          year: '2021–2025',
          qualification: "Bachelor's Degree in Industrial Design",
          institution: 'Politecnico di Torino',
        },
      ],
    },
    {
      id: 'certificates',
      title: 'Certificate',
      entries: [
        {
          year: '2025',
          qualification: 'Google UX Design Professional Certificate',
          institution: 'Google',
        },
        {
          year: '2026',
          qualification: 'Responsive Web Design Certification',
          institution: 'freeCodeCamp',
        },
        {
          year: '2026',
          qualification: 'JavaScript Certification',
          institution: 'freeCodeCamp',
        },
        {
          year: '2026',
          qualification: 'Junior Programmer',
          institution: 'Unity Learn',
        },
      ],
    },
  ],
  note:
    "If there's one thing I've learned, it's that curiosity doesn't end when a course does. Most of what shaped the way I design came from exploring beyond classrooms, building side projects, reading, breaking things and starting again.",
};
