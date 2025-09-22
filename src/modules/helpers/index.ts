export const experiences = [
  {
    title: 'Software Developer',
    company: 'Instadiver',
    period: 'February 2024 - Present',
    responsibilities: [
      'Spearheaded migration from React.js to Next.js, cutting page load times by 50% and boosting Core Web Vitals scores.',
      'Built and optimized responsive, accessible UI components with Next.js, React Query, and Tailwind CSS, ensuring seamless cross-device usability.',
      'Integrated ImaliPay APIs to enable M-Pesa and bank transactions, powering driver and partner wallets with secure payouts/top-ups.',
      'Implemented code-splitting and lazy loading, enhancing scalability and performance for high-traffic pages.',
      'Collaborated with backend engineers and designers in agile sprints, performing code reviews and improving maintainability.',
      'Contributed to backend development with Python/Django, implementing API endpoints and ensuring seamless integration with frontend features.',
      'Optimized database queries in Django (PostgreSQL), improving transaction processing speed and reducing API response times.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Qawqal',
    period: 'August 2024 - Present',
    responsibilities: [
      'Completed the development of the Qawqal admin website, focusing on UI implementation and optimizing usability.',
      'Worked on the user-facing application, leveraging Next.js, GraphQL, Apollo, and Tailwind CSS to create responsive and interactive interfaces.',
      'Developed an AI selection feature, enabling users to choose between OpenAI, Claude, and Google AI for a customized experience.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'EpicApp Ltd',
    period: 'May 2023 - December 2023',
    responsibilities: [
      'Developed and optimized dynamic web applications using Angular, enhancing user engagement and performance.',
      'Collaborated closely with cross-functional teams to deliver high-quality, scalable frontend solutions.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'United States of Africa',
    period: 'November 2022 - May 2023',
    responsibilities: [
      'Developed and optimized dynamic web applications using React JS, enhancing user engagement and performance',
      'Collaborated closely with cross-functional teams to deliver high-quality, scalable frontend solutions.',
    ],
  },
  {
    title: 'Internship',
    company: 'Gitstart',
    period: 'August 2022 - September 2022',
    responsibilities: [
      'Contributed to Storybook as an open-source project, enhancing UI component documentation and reusability.',
      'Developed and refined client applications, focusing on responsive design and user experience.',
      'Leveraged React and Next.js to build efficient, scalable web applications for diverse client needs.',
    ],
  },
];

export const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const skills = [
  { name: 'React/Next.js/Angular', level: 95 },
  { name: 'React Native', level: 90 },
  { name: 'TypeScript/JavaScript', level: 90 },
  { name: 'Java', level: 85 },
  { name: 'Node.js', level: 85 },
  { name: 'SQL/NoSQL/PostgreSQL', level: 80 },
  { name: 'Docker/Git/GitHub', level: 90 },
  { name: 'TailwindCSS/Shadcn/UI', level: 90 },
  { name: 'GraphQL/Redux/ReactQuery', level: 75 },
  { name: 'Python/Django/FastAPI', level: 70 },
  { name: 'ERPNext (Frappe) ', level: 70 },
];

export const projects = [
  {
    title: 'MoversHaven',
    description:
      'A platform for finding professional and reliable movers. Enables users to easily find, compare, and book movers.',
    link: 'https://movershaven.com/',
    github: 'https://github.com/MoversHaven/',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn/UI', 'GraphQL'],
  },
];

export const codeSnippets = [
  {
    language: 'TypeScript',
    code: `interface Developer {
  name: string;
  role: string;
  skills: string[];
}

const me: Developer = {
  name: "Dorcas Oloo",
  role: "Full Stack Engineer",
  skills: [
    "React", "Next.js",
    "Node.js", "GraphQL"
  ]
};`,
  },
  {
    language: 'Python',
    code: `class WebDeveloper:
    def __init__(self):
        self.name = "Dorcas"
        self.stack = ["Python", "Django"]
        
    async def create_api(self):
        """Building efficient APIs"""
        return {
            "status": "success",
            "passion": "Clean Code"
        }`,
  },
  {
    language: 'GraphQL',
    code: `type Project {
  title: String!
  tech: [String!]!
  github: String
}

query GetProjects {
  projects {
    title
    tech
  }
}`,
  },
];
