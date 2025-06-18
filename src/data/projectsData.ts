// projectsData.ts

export interface Project {
  title: string;
  image: string;
  link: string;
}

const projectsData: Project[] = [
  {
    title: "X Clone",
    image: "/images/Projects/image.png",
    link: "https://github.com/yourusername/x-clone",
  },
  {
    title: "Spotify Clone",
    image: "/images/projects/spotifyclone.png",
    link: "https://github.com/yourusername/spotify-clone",
  },
  {
    title: "PixelTube",
    image: "/images/projects/pixeltube.png",
    link: "https://github.com/yourusername/pixeltube",
  },
  {
    title: "BlinkIt Data Analysis",
    image: "/images/projects/blinkit.png",
    link: "https://github.com/yourusername/blinkit-analysis",
  },
  {
    title: "AI Book Recommender",
    image: "/images/projects/bookrecommender.png",
    link: "https://github.com/yourusername/book-recommender",
  },
  {
    title: "Movie Mobile App",
    image: "/images/projects/movieapp.png",
    link: "https://github.com/yourusername/movie-app",
  },
  {
    title: "Campus Ease",
    image: "/images/projects/campusease.png",
    link: "https://github.com/yourusername/campus-ease",
  },
  {
    title: "Comments Toxicity Model",
    image: "/images/projects/toxicity.png",
    link: "https://github.com/yourusername/toxicity-detector",
  },
  {
    title: "FlyEasy - Airport System",
    image: "/images/projects/flyeasy.png",
    link: "https://github.com/yourusername/flyeasy-airport",
  },
];

export default projectsData;
