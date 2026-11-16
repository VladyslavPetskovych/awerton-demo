// English copy. ./uk.js must keep exactly the same shape.
// Multi-line headings are arrays — each item is rendered on its own line.

export default {
  meta: {
    home: 'AWERTON — Hospitality investment & hotel management',
    services: 'Our services — AWERTON',
    guides: 'Guides & tips — AWERTON',
  },

  tagline: 'Management you can trust. Results you can feel.',

  nav: {
    services: 'Our services',
    portfolio: 'Cases and objects',
    guides: 'Guides & tips',
    contacts: 'Contacts',
  },

  header: {
    menu: 'Menu',
    openMenu: 'Open menu',
    close: 'Close',
    siteMenu: 'Site menu',
    home: 'AWERTON — home',
    primaryNav: 'Primary',
    menuNav: 'Menu',
    language: 'Language',
    contactShort: 'Contact',
    contactLong: 'Contact us',
  },

  common: {
    readMore: 'Read more',
    video: 'Video',
    close: 'Close',
    emailLabel: 'Email address',
    emailPlaceholder: 'Enter your Email',
    sending: 'Sending',
    errorRetry: 'Something went wrong. Please try again or email us at',
  },

  hero: {
    text: 'AWERTON is a modern home for investing and business management. Join the list to be the first through the door.',
    established: 'Est. 2013',
  },

  philosophy: {
    eyebrow: 'Opinion',
    title: 'Our philosophy',
    text: 'AWERTON brings together investment, hospitality and professional management under one vision. We create and develop projects designed to grow in value, deliver strong experiences and remain relevant for years to come.',
    button: 'View video',
  },

  howWeWork: {
    eyebrow: 'Work',
    title: 'How we work',
    text: 'From the first conversation to long-term management, we make every step clear, thoughtful and effortless.',
    imageAlt: 'Open balcony doors onto a wrought-iron balcony with a bistro table',
    steps: [
      {
        title: 'Consultation & Understanding',
        text: 'We begin by understanding your goals, expectations and investment priorities to define the right direction.',
      },
      {
        title: 'Property Selection',
        text: 'We identify carefully selected properties and opportunities that match your objectives, preferences and budget.',
      },
      {
        title: 'Evaluation & Analysis',
        text: 'Every opportunity is assessed from both investment and practical perspectives to help you make an informed decision.',
      },
      {
        title: 'Transaction Support',
        text: 'We coordinate the process, documentation and key details, ensuring clarity and confidence at every stage.',
      },
      {
        title: 'Property Management',
        text: 'Our involvement continues beyond the transaction. We take care of your property, its performance and day-to-day management.',
      },
    ],
  },

  portfolio: {
    title: 'Our portfolio',
    text: 'A collection of hotels and apartments shaped by thoughtful design, strong management and a distinctive sense of place. Each property reflects our approach to hospitality — creating memorable experiences while building long-term value.',
    button: 'View more details',
    interior: 'interior',
    categories: {
      aristo: 'Boutique hotel',
      primeRest: 'Short-term rental',
      royalApart: 'Private apartments',
    },
    open: 'View property',
    moreTitle: 'More from our portfolio',
  },

  // Property pages (/portfolio/<slug>). Texts for each property: src/content/portfolio.
  property: {
    breadcrumb: 'Our portfolio',
    city: 'Lviv, Ukraine',
    scrollHint: 'Discover the property',
    facts: {
      location: 'Location',
      character: 'Character',
      idealFor: 'Ideal for',
      management: 'Management',
    },
    managedBy: 'AWERTON',
    cta: 'Discuss your property',
    galleryEyebrow: 'Gallery',
    playVideo: 'Play video',
    pauseVideo: 'Pause video',
    previousVideos: 'Previous videos',
    nextVideos: 'Next videos',
    photos: 'photos',
    openPhoto: 'Open photo',
    previous: 'Previous photo',
    next: 'Next photo',
    of: 'of',
  },

  request: {
    eyebrow: 'Contact',
    title: ['Leave a request —', 'we will call you back'],
    text: 'Share your phone number and our manager will contact you to discuss your goals, available properties and the AWERTON management model.',
    contacts: { phone: 'Phone', email: 'Email', website: 'Website' },
    formTitle: 'Your details',
    nameLabel: 'Your name',
    namePlaceholder: 'Name',
    phoneLabel: 'Phone number',
    phoneHint: 'Enter a phone number, e.g. +380 77 697 00 00',
    messageLabel: 'Comment',
    messagePlaceholder: 'What would you like to discuss?',
    submit: 'Request a call',
    sending: 'Sending…',
    consent: 'By submitting, you agree to be contacted about your request.',
    thanksTitle: 'Thank you',
    thanksText: 'Your request has been received. Our manager will call you back shortly.',
    errorCall: 'Something went wrong. Please call us at',
    errorOr: 'or write to',
  },

  stories: {
    eyebrow: 'Guides & tips',
    title: 'Stories that shape the way we create.',
    text: 'We believe successful projects begin with a clear strategy and continue with attention to every detail. AWERTON combines market insight, operational expertise and a strong understanding of hospitality to build businesses designed for sustainable growth.',
    items: [
      {
        title: 'Beyond the stay: what makes a hotel worth returning to',
        text: 'The details, atmosphere and service that turn a property into a memorable destination.',
        alt: 'A softly lit hotel bedroom with a made bed and armchair',
      },
      {
        title: 'From vision to value: how we shape hospitality projects',
        text: 'A look at how strategy, design and thoughtful management come together to create long-term value.',
        alt: 'Breakfast tray with croissants and fruit on white hotel bed linen',
      },
      {
        title: 'Where experience meets great investment',
        text: 'Why successful hospitality projects are built around both guest experience and strong business fundamentals.',
        alt: 'A bright restaurant with copper pendant lamps, seen through leaves',
      },
    ],
  },

  strategy: {
    title: ['The strategy for', 'European scale'],
    text: 'Our model was stress-tested and perfected in a highly complex and competitive market. We now possess the operational blueprint, the brand architecture, and the tech stack required to scale internationally.',
    phases: [
      { title: 'Phase 1', text: 'Dominate premium boutique segments in Western Ukraine.' },
      { title: 'Phase 2', text: 'Consolidate tech infrastructure (Investor CRM & Guest Apps).' },
      { title: 'Phase 3', text: 'Launch in high-yield European tourist hubs.' },
    ],
    cities: { madrid: 'Madrid', lviv: 'Lviv' },
    mapLabel: 'Expansion route from Lviv to Madrid',
  },

  investment: {
    eyebrow: 'Investment approach',
    title: ['Absolute financial predictability:', 'guaranteed fixed income'],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    chartLabel: 'illustrative monthly income, January to December.',
    tableCaption: 'illustrative income index by month',
    models: [
      {
        title: 'Industry standard (revenue sharing)',
        text: 'Operators force investors to absorb seasonal dips, low occupancy risks, and hidden operational costs.',
      },
      {
        title: 'The AWERTON model (fixed income)',
        text: 'We take the operational risk. Investors receive a guaranteed, fixed monthly payout regardless of market seasonality.',
      },
    ],
    closing: 'True passive income means sleeping soundly.',
  },

  footer: {
    columns: { info: 'Info', main: 'Main', other: 'Other' },
    links: {
      terms: 'Terms & Conditions',
      privacy: 'Privacy Policy',
      cookies: 'Cookies Info',
      restaurant: 'Aristo Restaurant',
      rules: 'Rules',
      blog: 'Blog',
    },
    consultTitle: 'Get a free consultation',
    consultText:
      'Leave your email and our property management team will contact you to arrange a free consultation on your property or investment.',
    consultThanks: 'Thank you — our team will contact you shortly to arrange your consultation.',
    send: 'Send',
    email: 'Email',
    phone: 'Phone Number',
    rights: 'All Rights Reserved',
  },

  services: {
    hero: {
      eyebrow: 'Real estate management',
      title: ['Professional', 'management'],
      paragraphs: [
        'We manage residential and hospitality real estate with the discipline of an investment firm. Every property in our care runs to clear standards — from tenants and guests to maintenance, compliance and reporting.',
        'Our team combines market expertise, hands-on operations and transparent financial control. You keep full ownership and visibility — we handle the day-to-day, so your asset performs and grows in value.',
      ],
      imageAlt: 'Lviv old-town rooftops with the Dominican Cathedral dome and Town Hall tower at dusk',
    },
    investing: {
      eyebrow: 'Investing',
      title: 'Invest with AWERTON',
      paragraphs: [
        'Real estate is a long-term commitment. We help investors choose the right properties, structure every acquisition carefully and build portfolios that deliver stable, predictable income.',
        'With regular reporting, professional asset management and a clear view of every figure, you always know how your investment is performing — and what we are doing to grow it.',
      ],
      dealAlt: 'Two business partners shaking hands over a table',
      facadeAlt: 'Modern residential building with balconies seen from below',
    },
    list: {
      eyebrow: 'Services',
      title: 'Our services',
      text: 'We take care of everything that makes your property perform — from managing the asset and building its brand to launching its website and filling it with our clients. You own it; we make it work.',
      imageAlt: 'Curved high-rise residential tower with copper-toned balconies',
      items: [
        {
          title: 'Real Estate Asset Management',
          text: 'Day-to-day operations, maintenance, staff and transparent financial reporting — your property runs to clear standards.',
        },
        {
          title: 'Brand Creation',
          text: 'A distinctive name, visual identity and positioning that set your property apart in the market.',
        },
        {
          title: 'Website Development',
          text: 'A beautiful, fast website with direct booking that showcases your property and turns visitors into guests.',
        },
        {
          title: 'Rental to Our Clients',
          text: 'We place your property with our network of vetted tenants and guests, keeping occupancy and income high.',
        },
        {
          title: 'Investment & Acquisition Support',
          text: 'Consultation, property selection, analysis and legal support at every step of a purchase.',
        },
      ],
    },
  },

  guides: {
    hero: {
      eyebrow: 'Property insights',
      title: 'Guides & tips',
      paragraphs: [
        'Discover expert insights, practical advice, and thoughtful ideas to help you make the most of your property.',
        "From everyday management and property care to guest experience and long-term value, we share useful knowledge to help you make confident decisions and unlock your property's full potential.",
      ],
      imageAlt: 'Lounge with a soft grey sofa and rust-coloured cushions beside a tall window',
    },
    list: {
      eyebrow: 'Guide',
      title: ['Insights for better', 'property living'],
      text: 'Discover practical guides, expert advice, and thoughtful insights on property management, hospitality, and creating lasting value.',
      filterLabel: 'Filter guides by topic',
      empty: 'No guides in this topic yet.',
    },
    topics: {
      all: 'Articles',
      hospitality: 'Hospitality',
      interior: 'Interior & Lifestyle',
      strategy: 'Rental Strategy',
      advice: 'Expert Advice',
    },
    by: 'By',
    minRead: 'min read',
    expand: 'Expand',
    collapse: 'Collapse',
    copyLink: 'Copy link',
    linkCopied: 'Link copied',
    blocks: { tip: 'Pro tip', takeaways: 'Key takeaways', checklist: 'Checklist' },
    // Credit under each article photo.
    properties: {
      aristo: 'Aristo Boutique Hotel, Lviv',
      royal: 'Royal Apart, Lviv',
      prime: 'Prime Rest Apartments, Lviv',
    },
    cta: {
      title: 'Want us to look at your property?',
      text: 'Book a free consultation — we will review your listing, pricing and operations and show where the property can earn more.',
      button: 'Request a call',
    },
    newsletter: {
      eyebrow: 'Stay informed',
      title: 'Get the latest guides & tips',
      text: 'Subscribe to our newsletters and never miss expert advice!',
      button: 'Subscribe',
      thanks: "Thank you — you're on the list.",
    },
  },
}
