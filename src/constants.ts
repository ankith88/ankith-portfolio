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
    title: 'ProspectPlus',
    description: 'A custom CRM application built to streamline the management of sales leads. Handles complex customer data with a clean, intuitive interface.',
    tech: ['React', 'Firebase', 'Tailwind']
  },
  {
    title: 'LocalMile',
    description: 'A delivery booking platform connecting customers directly with Licensed Post Offices, featuring strong UI/UX branding and real-time job management.',
    tech: ['Angular', 'PHP', 'Laravel']
  },
  {
    title: 'LPO.PLUS',
    description: 'A comprehensive management dashboard for Licensed Post Offices.',
    highlight: "Architected the navigation to ensure 'Outbound Reporting' and 'Field Activity Reporting' operate strictly as two separate, isolated pages to prevent data routing overlaps.",
    tech: ['Vue', 'Express', 'PostgreSQL']
  },
  {
    title: 'MailPlus Digital Workflows',
    description: 'Enterprise-level NetSuite upgrades including Run Digitalization, Automated Invoicing, and Sendle Hybrid integration.',
    tech: ['NetSuite', 'Oracle', 'JavaScript']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'MailPlus Australia',
    role: 'Technical Lead & Franchisee Owner',
    period: 'Aug 2016 - Present',
    description: [
      'Directing technical architecture and NetSuite workflows.',
      'Managing regional operations and franchise growth.',
      'Specializing in end-to-end solutions for business logic.'
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
