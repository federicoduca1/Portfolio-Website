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

export const personalExplorerContent = {
  title: 'Things that shape me as a person (and designer).',
  introduction:
    'Small windows into the interests and experiences that influence how I observe, think and design.',
  topics: [
    {
      id: 'cinema',
      label: 'Cinema',
      description:
        'I love cinema because it lets me step into perspectives, places and emotions far from my own. I’m fascinated by how a story can stay with you long after the credits and quietly change the way you observe the world.',
      groups: [
        {
          id: 'directors',
          title: 'Directors I’m following lately',
          items: [
            'Quentin Tarantino',
            'Christopher Nolan',
            'Andrei Tarkovsky',
            'Denis Villeneuve',
            'Ari Aster',
          ],
        },
        {
          id: 'films',
          title: 'Films I keep returning to',
          items: [
            'Arrival',
            'Stalker',
            'The Hateful Eight',
            'Hereditary',
            'Interstellar',
          ],
        },
      ],
    },
    {
      id: 'travel',
      label: 'Travel',
      description:
        'Travel helps me slow down and notice how people move, communicate and adapt to different places. Every city gives me a new perspective and reminds me that there is never only one way to experience the world.',
      groups: [
        {
          id: 'places',
          title: 'Places that stayed with me',
          items: ['Japan', 'Netherlands', 'Germany', 'Austria', 'Italy'],
        },
        {
          id: 'observations',
          title: 'What I look for',
          items: [
            'Everyday rituals',
            'Public spaces',
            'Local details',
            'Unexpected encounters',
            'New perspectives',
          ],
        },
      ],
    },
    {
      id: 'games',
      label: 'Games',
      description:
        'Videogames have been part of my life for as long as I can remember. I love how they combine interaction, challenge, atmosphere and storytelling into experiences that can only exist through participation.',
      groups: [
        {
          id: 'games',
          title: 'Games I keep returning to',
          items: [
            'The Legend of Zelda',
            'Death Stranding',
            'Portal',
            'The Last of Us',
            'Minecraft',
          ],
        },
        {
          id: 'interests',
          title: 'What fascinates me',
          items: [
            'World building',
            'Interaction',
            'Progression',
            'Level design',
            'Player agency',
          ],
        },
      ],
    },
    {
      id: 'technology',
      label: 'Technology',
      description:
        'Technology makes me curious because it constantly creates new possibilities. I enjoy understanding how tools work, experimenting with them and discovering how they can become more approachable through design.',
      groups: [
        {
          id: 'exploring',
          title: 'Currently exploring',
          items: [
            'C#',
            'React.Js',
            'Unity',
            'XR',
            'Creative coding',
          ],
        },
        {
          id: 'interests',
          title: 'What interests me',
          items: [
            'Prototyping',
            'Emerging interfaces',
            'Digital tools',
            'Human-computer interaction',
            'New mediums',
          ],
        },
      ],
    },
    {
      id: 'drawing',
      label: 'Drawing',
      description:
        'Drawing is often the fastest way for me to think. It helps me observe more carefully, make ideas tangible and explore possibilities before they need to be precise.',
      groups: [
        {
          id: 'subjects',
          title: 'What I draw',
          items: [
            'Product sketches',
            'Characters',
            'Interfaces',
            'Objects',
            'Visual notes',
          ],
        },
        {
          id: 'benefits',
          title: 'What it gives me',
          items: [
            'Observation',
            'Clarity',
            'Exploration',
            'Patience',
            'Visual thinking',
          ],
        },
      ],
    },
    {
      id: 'cooking',
      label: 'Cooking',
      description:
        'Cooking is one of the places where I enjoy following a structure and then changing it along the way. It combines precision, experimentation and the satisfaction of making something for other people.',
      groups: [
        {
          id: 'dishes',
          title: 'I enjoy making',
          items: ['Pasta', 'Risotto', 'Bread', 'Desserts', 'New recipes'],
        },
        {
          id: 'reasons',
          title: 'Why I enjoy it',
          items: [
            'Experimenting',
            'Sharing',
            'Learning by doing',
            'Combining ingredients',
            'Improving through repetition',
          ],
        },
      ],
    },
  ],
};
