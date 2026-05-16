export const COLORS = {
  background: '#1E1B4B', // Deepest Midnight Purple
  primary: '#8B5CF6',    // Vibrant Amethyst
  secondary: '#C084FC',  // Soft Lilac
  text: '#F8FAFC'        // Crisp Off-White
};

export interface Project {
  title: string;
  description: string;
  highlight?: string;
  tech: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export const PROJECTS: Project[] = [
  {
    title: 'LPO.PLUS – Connected Logistics Platform',
    description: 'A premium, mobile-responsive PWA logistics management suite designed for Licensed Post Offices (LPOs). Streamlines parcel pickups and deliveries, bridging the gap between LPOs, franchisee drivers, and end customers by establishing a single source of truth for dispatch and billing.',
    highlight: "Engineered bi-directional NetSuite synchronization for billing and real-time job status management. Features a 3-step booking wizard with Google Places Autocomplete and dynamic 'Mirror-then-Override' billing logic.",
    tech: ['PWA', 'NetSuite API', 'Firestore', 'Google Places', 'React']
  },
  {
    title: 'ProspectPlus – B2B Sales Management CRM',
    description: 'A premium B2B business application for managing Field Sales operations and Outbound activities. Orchestrated the "Antigravity" update to enforce outcome-specific mandatory field logic, ensuring high-quality lead data collection.',
    highlight: "Implemented strict validation rules for appointment setting and dynamic workflow routing. Developed AI-driven training walkthroughs and authored the application's modern brand identity.",
    tech: ['CRM Systems', 'Lead Validation', 'System Logic', 'Design Strategy']
  },
  {
    title: 'LocalMile.Plus',
    description: 'A delivery booking platform connecting customers directly with Licensed Post Offices, featuring strong UI/UX branding and real-time job management.',
    tech: ['Angular', 'PHP', 'Laravel']
  },
  {
    title: 'MailPlus Digital Workflows',
    description: 'Enterprise-level NetSuite upgrades including Run Digitalization, Automated Invoicing, and Sendle Hybrid integration.',
    tech: ['NetSuite', 'Oracle', 'JavaScript']
  },
  {
    title: 'AI Portfolio Builder',
    description: 'A generative AI tool that crafts personalized professional portfolios by analyzing career history through Google AI Studio.',
    highlight: "Leverages Gemini 1.5 Pro to synthesize complex work experiences into compelling narrative structures.",
    tech: ['Google AI Studio', 'React', 'Gemini API']
  },
  {
    title: 'Smart Logistics Predictor',
    description: 'An intelligent operational dashboard that uses large language models to forecast supply chain bottlenecks and suggest alternative routing.',
    tech: ['Google AI Studio', 'Python', 'FastAPI']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'MailPlus Australia',
    role: 'Technical Lead & Franchisee Owner',
    period: 'Aug 2016 - Present',
    description: [
      'Project Lead for LPO.PLUS and ProspectPlus, directing end-to-end technical implementation and bi-directional NetSuite integrations.',
      'Architected "Antigravity" logic updates and high-fidelity data validation systems for sales and logistics workflows.',
      'Managing regional operations and franchise growth while designing modern UI/UX brand identities for enterprise applications.'
    ]
  },
  {
    company: 'CostPrize Online India',
    role: 'R&D Engineer',
    period: 'Apr 2015 - Jul 2016',
    description: [
      'Developed an e-commerce platform from scratch.',
      'Built a dynamic real-time tax calculation module.',
      'Led R&D for scalable web architectures.'
    ]
  },
  {
    company: 'Infosys',
    role: 'Systems Engineer',
    period: 'Aug 2010 - Jul 2012',
    description: [
      'Oracle Siebel database administrator for Telstra Australia.',
      'Optimized database performance and managed large-scale data migrations.',
      'Supported critical telecommunications infrastructure.'
    ]
  }
];

export const SKILLS = [
  'JavaScript', 'jQuery', 'Angular', 'PHP/Laravel', 
  'Flutter', 'Oracle NetSuite Architect', 'Firebase', 'GitHub'
];
