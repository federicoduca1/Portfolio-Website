import { nintendoProjectConfig } from './nintendoCaseStudy.js';

export const projects = [
  {
    id: nintendoProjectConfig.id,
    slug: nintendoProjectConfig.slug,
    path: nintendoProjectConfig.path,
    category: nintendoProjectConfig.category,
    title: nintendoProjectConfig.title,
    year: nintendoProjectConfig.year,
    description: nintendoProjectConfig.statement,
    metadata: nintendoProjectConfig.projectType,
    featured: true,
  },
  {
    id: 'houra',
    path: '/projects#houra',
    category: 'Mobile Product',
    title: 'Houra',
    description:
      'Designing a product where time becomes currency.',
    metadata: 'Community Exchange Platform',
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
];
