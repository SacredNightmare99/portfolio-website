export type Project = {
  id: string;
  type: 'mobile' | 'web'; 
  title: string;
  description: string;
  imageUrl: string;
  githubLink?: string; 
  liveLink?: string;
};

// TODO: Replace these examples with real projects
export const projects: Project[] = [
  {
    id: 'p1',
    type: 'mobile',
    title: 'Health Tracker App',
    description: 'A React Native app for tracking fitness and nutrition.',
    imageUrl: 'https://placehold.co/300x600/0a0a0a/ededed?text=App+Screen+1',
    githubLink: 'https://github.com',
  },
  {
    id: 'p2',
    type: 'web',
    title: 'Social App UI',
    description: 'A sleek, modern UI for a social media concept.',
    imageUrl: 'https://placehold.co/300x600/171717/ededed?text=App+Screen+2',
    githubLink: 'https://github.com',
  },
];
