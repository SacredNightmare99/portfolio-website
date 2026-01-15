export type Project = {
  id: string;
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
    title: 'Project 1',
    description: 'A React Native app for tracking fitness and nutrition.',
    imageUrl: 'https://img.freepik.com/free-vector/hand-drawn-psychedelic-colorful-background_23-2149075812.jpg',
    githubLink: 'https://github.com',
  },
  {
    id: 'p2',
    title: 'Project 2',
    description: 'A sleek, modern UI for a social media concept.',
    imageUrl: 'https://media.istockphoto.com/id/534129810/photo/textured-rainbow-painted-background.jpg?s=612x612&w=0&k=20&c=NfTjl7A-0P6XodFPXGpnZuFR9ev9JP__WLStD7KItH4=',
    githubLink: 'https://github.com',
  },
  {
    id: 'p3',
    title: 'Project 3',
    description: 'A React Native app for tracking fitness and nutrition.',
    imageUrl: 'https://www.shutterstock.com/image-vector/colorful-paint-splash-isolated-on-600nw-2616951675.jpg',
    githubLink: 'https://github.com',
  },
  {
    id: 'p4',
    title: 'Project 4',
    description: 'A sleek, modern UI for a social media concept.',
    imageUrl: 'https://s3.envato.com/files/223920975/Low%20Poly%20Colorful%20Background%20Preview.jpg',
    githubLink: 'https://github.com',
  },
  {
    id: 'p5',
    title: 'Project 5',
    description: 'A React Native app for tracking fitness and nutrition.',
    imageUrl: 'https://thumbs.dreamstime.com/b/autumn-nature-landscape-colorful-forest-autumn-nature-landscape-colorful-forest-morning-sunlight-131400332.jpg',
    githubLink: 'https://github.com',
  },
  {
    id: 'p6',
    title: 'Project 6',
    description: 'A sleek, modern UI for a social media concept.',
    imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/065/863/628/small/colorful-autumn-trees-reflecting-on-a-calm-river-in-a-serene-natural-landscape-photo.jpeg',
    githubLink: 'https://github.com',
  },
];
