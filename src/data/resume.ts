// Centralized resume data for easy maintenance

export const profile = {
  name: 'Badmus Sulaimon Olawole',
  title: 'Senior Software Engineer',
  email: 'haryobamy.badmus@gmail.com',
  phone: '+2348039433746',
  linkedin: 'https://www.linkedin.com/in/badmussulaimon/',
  github: 'https://github.com/haryobamy',
  summary: `Senior Software Engineer with 5+ years of experience building scalable, high-performance products across fintech, banking, logistics, and e-commerce. Specializes in React Native, React.js, TypeScript, NestJS, C#, and AWS. Experienced owning full product lifecycles — from architecture and development to testing and release — with a consistent record of improving performance, stability, and developer velocity.`,
};

export interface WorkExperience {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  period: string;
  highlights: string[];
}

export const workExperience: WorkExperience[] = [
  {
    id: 1,
    title: 'Senior Mobile Engineer',
    company: 'Shiga',
    location: 'Abu Dhabi, UAE',
    type: 'Remote · Contract',
    period: 'Jan 2025 – Present',
    highlights: [
      'Own the full production React Native app (CLI & Expo) end-to-end — architecture, performance optimization, push notifications, location services, Firebase integration, and automated testing.',
      'Design and ship core wallet, transaction history, and alert flows, improving daily active usage by ~20% among operational users.',
      'Implement real-time delivery workflows using REST APIs and WebSocket services for live order tracking and in-app notifications.',
      'Implement OTA (Over-the-Air) hot updates via AWS, enabling instant bug fixes and feature rollouts without App Store re-submissions.',
      'Set up and manage CI/CD pipelines using GitHub Actions for automated builds, testing, and deployment.',
      'Reduce app crash rates and downtime by ~30% through lazy loading, memoization, batched updates, and list virtualization.',
      'Enforce security best practices — secure token storage, protected routes, and RBAC — contributing to a 5-star app store security rating.',
    ],
  },
  {
    id: 2,
    title: 'Software Engineer',
    company: 'Sterling Bank',
    location: 'Lagos, Nigeria',
    type: 'Remote · Full-time',
    period: 'Jan 2021 – Present',
    highlights: [
      'Built and maintained frontend web interfaces across four core banking product areas — internet banking, payments & transfers, onboarding & KYC, and internal operations dashboards — serving millions of users.',
      'Delivered pixel-accurate, accessible UI using Next.js, Ant Design, and Bootstrap, increasing user engagement by 20%.',
      'Migrated the entire frontend codebase to TypeScript, reducing runtime errors by 70% and significantly improving long-term maintainability.',
      'Contributed to a mobile-responsive redesign of the banking portal, increasing mobile conversion rate by 12%.',
      'Raised automated test coverage to 90%, reducing regressions by 50% and cutting deployment time by 40%.',
      'Implemented SEO best practices across public-facing pages, driving a 15% increase in organic traffic.',
      'Established a codebase documentation system that reduced new engineer ramp-up time by 30%.',
    ],
  },
  {
    id: 3,
    title: 'Senior Software Engineer',
    company: 'Prunedge',
    location: 'Lagos, Nigeria',
    type: 'Remote · Contract',
    period: 'Sep 2023 – Oct 2024',
    highlights: [
      'Worked as a full-stack engineer in a team of 5+, delivering across frontend web, React Native mobile, and backend — spanning government tools, enterprise dashboards, HR portals, consumer apps, and banking products.',
      'Developed and maintained scalable backend systems in C# and NestJS, improving application performance and reliability by 30%.',
      'Designed and implemented an RBAC system using NestJS and C#, reducing unauthorized access incidents by 40%.',
      'Built a reusable React component library adopted across multiple client projects, cutting average development time by 30%.',
      'Reduced website load times by 50% through image optimization and lazy loading, decreasing bounce rate by 15%.',
      'Refactored legacy codebases, reducing complexity by 30% and increasing feature delivery speed by 25%.',
    ],
  },
  {
    id: 4,
    title: 'Senior Software Engineer',
    company: 'Moversly',
    location: 'Australia',
    type: 'Remote · Contract',
    period: 'Sep 2021 – Jan 2023',
    highlights: [
      'Served as Lead Frontend Engineer in a team of 5+, owning the end-to-end frontend across both the web platform and React Native mobile app.',
      'Architected and delivered five core product areas end-to-end: shipment tracking, customer portal, admin dashboard, quoting & pricing system, and payment integration.',
      'Built real-time shipment tracking dashboards that eliminated manual spreadsheet workflows for moving coordinators.',
      'Developed and launched the React Native mobile app for iOS and Android, growing user engagement by 30% within three months of release.',
      'Implemented client-side caching with Service Workers, reducing server load and page load time by 25% for returning users.',
      'Drove UI/UX improvements from customer feedback sessions, reducing support inquiries by 15% and improving task completion rates by 20%.',
    ],
  },
  {
    id: 5,
    title: 'Front-end Mobile Engineer',
    company: 'Bonafide',
    location: 'Lagos, Nigeria',
    type: 'Remote · Contract',
    period: 'Mar 2020 – Aug 2021',
    highlights: [
      'Sole frontend engineer responsible for building and shipping a React Native crypto app to both iOS and Android from the ground up.',
      'Built core product features end-to-end: crypto wallet, portfolio tracking, payment & transfer flows, and cross-border payment functionality.',
      'Transitioned an existing React web application to React Native, ensuring full feature parity across web and mobile platforms.',
      'Resolved critical bugs that reduced the app\'s crash rate by 80%, significantly improving stability and user experience.',
      'Implemented security measures for user data protection and crypto transaction compliance with industry standards.',
      'Diagnosed and resolved performance bottlenecks, reducing production downtime by 30%.',
    ],
  },
];

export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  href?: string;
  github?: string;
  image?: string;
  isMobile?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Shiga App',
    description: 'Full production React Native app with wallet, transaction history, real-time delivery tracking, push notifications, and OTA updates via AWS. Achieved 5-star app store security rating.',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'WebSockets', 'AWS'],
    isMobile: true,
  },
  {
    id: 2,
    name: 'GoFlexNow Driver App',
    description: 'React Native mobile app for delivery drivers — real-time order assignments, GPS navigation, live status updates via WebSockets, push notifications, and earnings tracking.',
    technologies: ['React Native', 'TypeScript', 'WebSockets', 'Firebase', 'Maps API'],
    isMobile: true,
  },
  {
    id: 3,
    name: 'GoFlexNow Customer App',
    description: 'Customer-facing mobile app for on-demand delivery, food ordering, and bill payments — featuring real-time driver tracking, in-app payments, and push notifications.',
    technologies: ['React Native', 'TypeScript', 'WebSockets', 'Firebase', 'Redux'],
    isMobile: true,
  },
  {
    id: 4,
    name: 'GoFlexNow Merchant Portal',
    description: 'Web dashboard for merchants to manage orders, track deliveries, view analytics, and configure their storefront settings.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
  },
  {
    id: 5,
    name: 'GoFlexNow Internal Ops',
    description: 'Internal operations dashboard for managing drivers, monitoring deliveries, handling disputes, and overseeing platform analytics.',
    technologies: ['React', 'TypeScript', 'Ant Design', 'WebSockets'],
  },
  {
    id: 6,
    name: 'Aerrand',
    description: 'Logistics and delivery web platform for package delivery services — order management, real-time tracking, and delivery coordination.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
  },
  {
    id: 7,
    name: 'ExportToWealth',
    description: 'Parent platform for international trade and shipping services between the USA and Nigeria. Houses ShipToNaija as a sub-product within the broader export ecosystem.',
    technologies: ['Vite', 'Tailwind CSS', 'TypeScript'],
    href: 'https://exporttowealth.com',
  },
  {
    id: 8,
    name: 'ShipToNaija',
    description: 'USA-to-Nigeria shipping platform with streamlined logistics and affordable international shipping rates.',
    technologies: ['React', 'TypeScript', 'AWS', 'Google APIs'],
    href: 'https://shiptonaija.com',
  },
  {
    id: 9,
    name: 'Moversly',
    description: 'SaaS platform for international moving companies — end-to-end relocation management covering lead capture, quotations, shipment tracking, and customer communication.',
    technologies: ['Vite', 'TypeScript', 'MUI', 'AWS', 'React Native'],
    href: 'https://moversly.com',
  },
  {
    id: 10,
    name: 'TryZonely',
    description: 'Feature-rich calendar app with event management, reminders, and scheduling.',
    technologies: ['Next.js', 'Chakra UI', 'TypeScript', 'Redux', 'AWS'],
    href: 'https://tryzonely.com',
  },
  {
    id: 11,
    name: 'Doubble',
    description: 'Financial savings and investment app supporting both Naira & Dollars.',
    technologies: ['Next.js', 'TypeScript', 'CryptoJS', 'Redux'],
    href: 'https://doubble.ng',
  },
  {
    id: 12,
    name: 'Zest Payment',
    description: 'Multi-railed payments and e-commerce platform.',
    technologies: ['Next.js', 'TypeScript', 'Chakra UI', 'Azure', 'Framer Motion'],
    href: 'https://zest-dev.netlify.app/',
  },
];

export interface TechSkill {
  id: number;
  title: string;
  style: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: TechSkill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Mobile & Frontend',
    skills: [
      { id: 1, title: 'React Native', style: 'shadow-cyan-500' },
      { id: 2, title: 'React.js', style: 'shadow-blue-600' },
      { id: 3, title: 'Next.js', style: 'shadow-white' },
      { id: 4, title: 'TypeScript', style: 'shadow-blue-600' },
      { id: 5, title: 'JavaScript', style: 'shadow-yellow-500' },
      { id: 6, title: 'Redux/Zustand', style: 'shadow-purple-500' },
      { id: 7, title: 'Tailwind CSS', style: 'shadow-sky-400' },
      { id: 8, title: 'Chakra UI', style: 'shadow-teal-400' },
    ],
  },
  {
    category: 'Backend & APIs',
    skills: [
      { id: 9, title: 'Node.js', style: 'shadow-green-600' },
      { id: 10, title: 'NestJS', style: 'shadow-red-600' },
      { id: 11, title: 'C#', style: 'shadow-purple-600' },
      { id: 12, title: 'ASP.NET Core', style: 'shadow-purple-500' },
      { id: 13, title: 'REST APIs', style: 'shadow-green-500' },
      { id: 14, title: 'WebSockets', style: 'shadow-orange-500' },
      { id: 15, title: 'Firebase', style: 'shadow-yellow-600' },
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { id: 16, title: 'AWS', style: 'shadow-orange-500' },
      { id: 17, title: 'Azure', style: 'shadow-blue-500' },
      { id: 18, title: 'Docker', style: 'shadow-blue-400' },
      { id: 19, title: 'Git/GitHub', style: 'shadow-gray-400' },
      { id: 20, title: 'CI/CD', style: 'shadow-green-400' },
      { id: 21, title: 'Jest', style: 'shadow-red-400' },
    ],
  },
];

export interface Education {
  id: number;
  degree: string;
  field: string;
  institution: string;
  period: string;
}

export const education: Education[] = [
  {
    id: 1,
    degree: 'Higher National Diploma',
    field: 'Electrical & Electronics Engineering',
    institution: 'Yaba College of Technology, Lagos',
    period: 'Sep 2016 – Feb 2018',
  },
  {
    id: 2,
    degree: 'Ordinary National Diploma',
    field: 'Electrical & Electronics Engineering',
    institution: 'Yaba College of Technology, Lagos',
    period: '2013 – 2015',
  },
];

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    name: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    year: '2025',
  },
];
