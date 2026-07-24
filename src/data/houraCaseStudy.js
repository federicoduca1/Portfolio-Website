import houraHeroVisual from '../assets/projects/houra/hero/hero-visual.png';
import houraVisualBreak from '../assets/projects/houra/hero/visualbreak-visual.png';
import timeEconomyDiagram from '../assets/projects/houra/case study /time-economy/time-economy-diagram.png';
import timeCreditProfileVisual from '../assets/projects/houra/case study /time-economy/user-timecredits-profile.png';
import createRequestAnimation1 from '../assets/projects/houra/case study /exchange-journey/create-a-request-animation1.webm';
import createRequestAnimation2 from '../assets/projects/houra/case study /exchange-journey/create-a-request-animation2.webm';
import createRequestAnimation3 from '../assets/projects/houra/case study /exchange-journey/create-a-request-animation3.webm';
import findRequestUxFlow from '../assets/projects/houra/case study /exchange-journey/find-a-request-uxflow.png';
import manageRequestVisual from '../assets/projects/houra/case study /exchange-journey/manage-a-request.png';
import proposeHelpAnimation from '../assets/projects/houra/case study /exchange-journey/propose-a-help-animation.webm';
import searchRequestAnimation from '../assets/projects/houra/case study /exchange-journey/search-a-request-animation.webm';
import selectHelperUxFlow from '../assets/projects/houra/case study /exchange-journey/select-a-helper-uxflow.png';
import twoJourneyDiagram from '../assets/projects/houra/case study /exchange-journey/two-journey-diagram.png';
import chatVisual from '../assets/projects/houra/case study /trust/chat-visual.png';
import userProfileAnimation from '../assets/projects/houra/case study /trust/user-profile-animation.webm';
import helpingVerticalScrollingAnimation from '../assets/projects/houra/case study /participation/helping-verticalscrolling-animation.webm';
import gettingHelpVerticalScrollingAnimation from '../assets/projects/houra/case study /participation/gettinghelp-verticalscrolling-animation.webm';

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
    { id: 'time-economy', label: 'Time Economy' },
    { id: 'participation', label: 'Participation' },
    { id: 'exchange-journey', label: 'Exchange Journey' },
    { id: 'trust', label: 'Trust' },
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
    participationContextsEyebrow: 'Three participation contexts',
    participationContextsIntroduction:
      'Different motivations can bring people into the same exchange system, from needing practical support to looking for a meaningful way to contribute.',
    participationContexts: [
      {
        title: 'New to the community',
        description:
          'Needs practical support and a way to build local connections in an unfamiliar place.',
      },
      {
        title: 'Ready to contribute',
        description:
          'Wants to use available time and personal skills to support the surrounding community.',
      },
      {
        title: 'Looking for support',
        description:
          'Needs access to knowledge or practical help without depending entirely on money.',
      },
    ],
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
  timeEconomy: {
    id: 'time-economy',
    eyebrow: '03 — TIME ECONOMY',
    title: 'One hour as a shared unit of value',
    introduction:
      'Houra replaces monetary pricing with a shared time credit. Each hour spent helping another member generates one credit that can later be used to receive an hour of support from anyone else in the community.',
    equation: ['1 hour given', '1 time credit earned', '1 hour available to receive'],
    media: {
      label: 'Community time-credit circulation',
      src: timeEconomyDiagram,
      alt: 'Diagram showing an Houra member earning a time credit by helping one person and later using it to receive help from another member.',
      aspectRatio: '1448 / 1086',
      decorative: false,
      embedded: true,
      objectFit: 'contain',
      theme: 'bare',
      width: 'compact',
    },
    principles: [
      {
        title: 'Equal unit',
        description:
          'Every hour follows the same basic unit, keeping the system understandable and avoiding complex price lists.',
      },
      {
        title: 'Indirect reciprocity',
        description:
          'The person who receives help does not need to repay the same member; value can circulate across the wider community.',
      },
      {
        title: 'Visible circulation',
        description:
          'Credits earned, available balance and completed exchanges remain visible through the product experience.',
      },
    ],
    productEyebrow: 'Product expression',
    productMedia: {
      label: 'Time-credit product interface',
      src: timeCreditProfileVisual,
      alt: 'Houra member profile showing the available time-credit balance and recent exchange activity.',
      aspectRatio: '1464 / 2960',
      decorative: false,
      embedded: true,
      objectFit: 'contain',
      theme: 'bare',
    },
    questions: [
      'Should every type of work have equal time value?',
      'When should a time credit be transferred?',
      'How should cancellations or incomplete exchanges be handled?',
      'Can members receive help before earning their first credit?',
    ],
  },
  participation: {
    id: 'participation',
    eyebrow: '04 — PARTICIPATION',
    title: 'Designing participation without fixed roles',
    introduction:
      'Houra treats helping and receiving as two states of the same community experience. Users can move between both roles over time without creating separate identities or entering different product journeys.',
    modesEyebrow: 'One identity, two modes of participation',
    modesIntroduction:
      'The platform integrates both sides of participation into one shared space (My activity), allowing users to manage the help they offer and the support they receive without switching accounts or entering separate journeys.',
    modes: [
      {
        id: 'helping-state',
        label: 'Helping state',
        title: 'Managing the help you provide',
        description:
          'The Helping view collects the requests a user has responded to and the activities they are supporting, making upcoming commitments, conversations and completed contributions easy to follow from one place.',
        media: {
          label: 'Helping state interface',
          aspectRatio: '9 / 14',
          decorative: true,
          embedded: true,
          theme: 'bare',
          videoSources: [
            {
              src: helpingVerticalScrollingAnimation,
              type: 'video/webm',
            },
          ],
        },
      },
      {
        id: 'getting-help-state',
        label: 'Getting Help state',
        title: 'Keeping track of the support you request',
        description:
          'The Getting Help view gathers the requests created by the same user and their current status, providing a clear overview of available helpers, ongoing coordination and completed support.',
        media: {
          label: 'Getting Help state interface',
          aspectRatio: '9 / 14',
          decorative: true,
          embedded: true,
          theme: 'bare',
          videoSources: [
            {
              src: gettingHelpVerticalScrollingAnimation,
              type: 'video/webm',
            },
          ],
        },
      },
    ],
    closing:
      'By keeping both roles visible within the same account, Houra frames participation as fluid and reciprocal rather than transactional.',
  },
  exchangeJourney: {
    id: 'exchange-journey',
    eyebrow: '05 — EXCHANGE JOURNEY',
    title: 'Two roles, one shared exchange',
    introduction:
      'Every exchange begins from two different intentions. One member expresses a need through a request, while another explores real community needs and chooses where to contribute. Their paths converge when an offer is accepted and coordination begins.',
    overviewEyebrow: 'How the two journeys connect',
    overviewMedia: {
      label: 'Receiver and helper journey overview',
      src: twoJourneyDiagram,
      alt: 'Diagram showing how Houra receiver and helper journeys converge into one coordinated exchange.',
      aspectRatio: '1672 / 941',
      decorative: false,
      embedded: true,
      objectFit: 'contain',
      theme: 'bare',
    },
    receiver: {
      label: 'Receiver journey',
      title: 'From expressing a need to receiving support',
      introduction:
        'The receiver journey begins by turning a personal need into a visible community request, then moves into evaluating available helpers and coordinating the exchange.',
      phases: [
        {
          title: 'Express the need',
          introEyebrow: 'From need to actionable request',
          description:
            'Before anyone can offer help, the receiver needs to turn a personal need into enough shared context for the community to understand what is being asked and decide whether to contribute.',
          guidedSteps: [
            {
              id: 'express-need-step-01',
              label: 'Describe',
              title: 'Define what support is needed',
              description:
                'The request starts by describing the need itself: its purpose, category and language, with optional required skills when specific expertise is necessary.',
              media: {
                label: 'Express the need interface — step 01',
                aspectRatio: '9 / 14',
                blendMode: 'multiply',
                embedded: true,
                mediaScale: 1.025,
                theme: 'bare',
                videoSources: [
                  {
                    src: createRequestAnimation1,
                    type: 'video/webm',
                  },
                ],
              },
            },
            {
              id: 'express-need-step-02',
              label: 'Set',
              title: 'Define when and where it happens',
              description:
                'Location, date and expected duration turn the request into a concrete activity, giving potential helpers the context they need before offering their time.',
              media: {
                label: 'Express the need interface — step 02',
                aspectRatio: '9 / 14',
                blendMode: 'multiply',
                embedded: true,
                theme: 'bare',
                videoSources: [
                  {
                    src: createRequestAnimation2,
                    type: 'video/webm',
                  },
                ],
              },
            },
            {
              id: 'express-need-step-03',
              label: 'Review & Submit',
              title: 'Review before sharing with the community',
              description:
                'Before publishing, the receiver can review the complete request, check both the activity details and practical information, and make adjustments before making it visible to potential helpers.',
              media: {
                label: 'Express the need interface — step 03',
                aspectRatio: '9 / 14',
                blendMode: 'multiply',
                embedded: true,
                theme: 'bare',
                videoSources: [
                  {
                    src: createRequestAnimation3,
                    type: 'video/webm',
                  },
                ],
              },
            },
          ],
        },
        {
          title: 'Choose and coordinate',
          introEyebrow: 'Choose and coordinate',
          description:
            'Once helpers respond, the receiver can compare them, open profiles, start conversations, select one person and propose a day and time for the activity.',
          flowLayout: 'split',
          flow: {
            label: 'Helper-selection and coordination UX flow',
            src: selectHelperUxFlow,
            alt: 'UX flow showing how an Houra receiver reviews available helpers, selects one and coordinates the exchange.',
            aspectRatio: '4566 / 2634',
            decorative: false,
            embedded: true,
            objectFit: 'contain',
            theme: 'bare',
          },
          media: [
            {
              label: 'Manage a request',
              src: manageRequestVisual,
              alt: 'Houra request management screens showing helper selection, conversation and scheduling.',
              aspectRatio: '5264 / 2700',
              decorative: false,
              embedded: true,
              objectFit: 'contain',
              theme: 'bare',
            },
          ],
          layout: 'full',
        },
      ],
    },
    helper: {
      label: 'Helper journey',
      title: 'From discovering a real need to offering help',
      introduction:
        'Helpers do not publish generic service listings. They explore needs already expressed by the community and activate their availability only when a specific request matches their skills and willingness to contribute.',
      phases: [
        {
          title: 'Discover a relevant request',
          introEyebrow: 'Discover a relevant request',
          description:
            'Members browse existing requests, categories or nearby needs, then open a specific request to understand its context and decide whether they can contribute.',
          flow: {
            label: 'Request-discovery UX flow',
            src: findRequestUxFlow,
            alt: 'UX flow showing how an Houra member explores community requests and opens a relevant request.',
            aspectRatio: '4842 / 2078',
            decorative: false,
            embedded: true,
            objectFit: 'contain',
            theme: 'bare',
          },
          guidedVariant: 'compact',
          guidedSteps: [
            {
              id: 'helper-search-request',
              label: 'Search',
              title: 'Find a request that matches',
              description:
                'Members explore real community needs, open a relevant request and evaluate whether its context matches their skills, availability and willingness to contribute.',
              media: {
                label: 'Search a request animation',
                aspectRatio: '9 / 14',
                embedded: true,
                theme: 'bare',
                videoSources: [
                  {
                    src: searchRequestAnimation,
                    type: 'video/webm',
                  },
                ],
              },
            },
            {
              id: 'helper-propose-help',
              label: 'Offer',
              title: 'Propose help for a specific need',
              description:
                'After deciding to contribute, the helper sends an offer tied to that request and enters the shared coordination flow with clear context already established.',
              media: {
                label: 'Propose help animation',
                aspectRatio: '9 / 14',
                embedded: true,
                theme: 'bare',
                videoSources: [
                  {
                    src: proposeHelpAnimation,
                    type: 'video/webm',
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  },
  trust: {
    id: 'trust',
    eyebrow: '06 — TRUST',
    title: 'Building trust across the exchange',
    introduction:
      'Trust is not created by one feature. It develops across the journey through visible identity, clearer expectations, direct communication and an accountable history of participation.',
    steps: [
      {
        label: 'Before offering or selecting',
        title: 'Understand who is behind the exchange',
        description:
          'Before committing to an exchange, members can review identity, skills, location, previous activity and feedback to build a clearer picture of the person they may interact with.',
        media: {
          label: 'Profile and reviews prototype',
          aspectRatio: '544 / 1080',
          alt: 'Animated Houra profile showing identity, skills, previous activity and member feedback.',
          decorative: false,
          embedded: true,
          theme: 'bare',
          videoSources: [
            {
              src: userProfileAnimation,
              type: 'video/webm',
            },
          ],
        },
      },
      {
        label: 'Before meeting',
        title: 'Reduce uncertainty through conversation',
        description:
          'Chat gives both members a private space to clarify the request, align expectations and agree on practical details before meeting in person.',
        media: {
          label: 'Pre-exchange conversation and scheduling agreement',
          src: chatVisual,
          alt: 'Houra chat list and conversation screens showing schedule coordination before an exchange.',
          aspectRatio: '2728 / 2900',
          decorative: false,
          embedded: true,
          objectFit: 'contain',
          theme: 'bare',
        },
        notes: [
          'Clarify the request',
          'Align expectations',
          'Agree on timing and practical details',
        ],
      },
    ],
  },
  validation: {
    id: 'validation',
    eyebrow: '07 — VALIDATION',
    title: 'Testing whether the service model works in practice',
    introduction:
      'The concept defines a coherent exchange system, but its social, economic and behavioural assumptions still need to be tested with real participants and real community dynamics.',
    areas: [
      {
        label: 'Comprehension',
        title: 'Do members understand the exchange model?',
        description:
          'Test whether people understand the helper and receiver roles, indirect reciprocity and how time credits are earned and spent.',
      },
      {
        label: 'Behaviour and fairness',
        title: 'Does the model encourage balanced and fair participation?',
        description:
          'Evaluate whether members respond to real requests, whether equal time value feels acceptable across different skills and whether contribution and demand remain balanced.',
      },
      {
        label: 'Trust and coordination',
        title: 'Do members feel confident enough to continue the exchange?',
        description:
          'Assess whether profiles, reviews, chat and scheduling provide sufficient confidence before an in-person activity.',
      },
    ],
  },
  reflection: {
    id: 'reflection',
    eyebrow: '08 — REFLECTION',
    title: 'Designing the rules behind the experience',
    introduction:
      'Houra pushed the project beyond interface design. The most important decisions concerned value, incentives, participation and trust: rules that shape behaviour even when they are not directly visible on screen.',
    blocks: [
      {
        title: 'Designing behaviour, not only flows',
        description:
          'The project required me to consider how economic and social rules influence what people are willing to offer, request and exchange.',
      },
      {
        title: 'Simplicity creates trade-offs',
        description:
          'Using one hour as a shared unit makes the service understandable, but it also introduces questions around effort, preparation and perceived expertise.',
      },
      {
        title: 'Service decisions surface in the interface',
        description:
          'My Activity, request-led participation, profile signals, chat and scheduling are not isolated features. They are product expressions of the wider service model.',
      },
    ],
  },
};
