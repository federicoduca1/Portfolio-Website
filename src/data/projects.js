import houraPhoneVisualOne from '../assets/card-visual/houra-project/phone-visual-1.png';
import houraPhoneVisualTwo from '../assets/card-visual/houra-project/phone-visual-2.png';
import nintendoSwitchCoverVisual from '../assets/card-visual/nintendo-project/switch-cover-visual.png';
import { houraProjectConfig } from './houraCaseStudy.js';
import { inFrameProjectConfig } from './inFrameCaseStudy.js';
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
    id: houraProjectConfig.id,
    slug: houraProjectConfig.slug,
    path: houraProjectConfig.path,
    category: houraProjectConfig.category,
    title: houraProjectConfig.title,
    year: houraProjectConfig.year,
    description: houraProjectConfig.statement,
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

export const projectMediumFilters = [
  'ALL',
  'MOBILE',
  'CONSOLE',
  'WEB',
  'XR',
];

export const projectIndexProjects = [
  {
    id: nintendoProjectConfig.id,
    slug: nintendoProjectConfig.slug,
    path: nintendoProjectConfig.path,
    title: nintendoProjectConfig.title,
    year: nintendoProjectConfig.year,
    mediums: ['CONSOLE'],
    metadata: 'CONSOLE · PRODUCT DESIGN · INTERACTION',
    description:
      'Rethinking how players discover and navigate games through clearer information architecture and controller-first interaction.',
    placeholderLabel: 'Nintendo eShop Redesign',
    media: {
      type: 'image',
      src: nintendoSwitchCoverVisual,
      alt: 'Nintendo Switch displaying the redesigned Nintendo eShop storefront.',
      presentation: 'nintendo-pan',
    },
  },
  {
    id: houraProjectConfig.id,
    slug: houraProjectConfig.slug,
    path: houraProjectConfig.path,
    title: houraProjectConfig.title,
    year: houraProjectConfig.year,
    mediums: ['MOBILE'],
    metadata: 'MOBILE · PRODUCT DESIGN · SERVICE DESIGN',
    description:
      'Designing a community exchange system where time becomes a shared currency.',
    placeholderLabel: 'Houra',
    media: {
      type: 'image',
      src: houraPhoneVisualOne,
      width: 3430,
      height: 4965,
      secondarySrc: houraPhoneVisualTwo,
      secondaryWidth: 3392,
      secondaryHeight: 4685,
      alt: 'Two mobile devices showing the Houra activity and helper-selection experiences.',
      presentation: 'houra-phones',
    },
  },
  {
    id: inFrameProjectConfig.id,
    slug: inFrameProjectConfig.slug,
    path: inFrameProjectConfig.path,
    title: inFrameProjectConfig.title,
    year: inFrameProjectConfig.year,
    mediums: ['MOBILE'],
    metadata: 'MOBILE · PRODUCT DESIGN · UX/UI',
    description:
      'Helping people discover and book cinema experiences around films, venues and original-language screenings.',
    placeholderLabel: 'InFrame',
    media: null,
  },
];
