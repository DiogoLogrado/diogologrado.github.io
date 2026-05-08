export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  repo?: string;
  image?: string; // path relative to /public, e.g. '/images/projects/aas.png'
  gif?: string;   // path relative to /public, e.g. '/images/projects/aas.gif'
}

export const projects: Project[] = [
  {
    title: 'SmarTomorrow',
    description:
      'Investment platform where users can explore EU funding and initiatives across the European Union.',
    tags: ['React', 'Supabase'],
    url: 'https://www.smartomorrow.eu/',
    image: '/images/projects/smartomorrow.png',
    gif: '/images/projects/smartomorrow.gif',
  },
  {
    title: 'AAS Specification Validator',
    description:
      'Dissertation project. A validator for Asset Administration Shell (AAS) specifications, ensuring compliance with the standard.',
    tags: ['AAS', 'Python'],
    repo: 'https://github.com/DiogoLogrado/AAS-Specification-Validator',
    image: '/images/projects/tese_aas.jpg',
  },
  // Add more projects here
];
