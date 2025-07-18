export interface Project {
  title: string;
  image: string;
  link: string;
  description: string;
  color: string;
}

const projectsData: Project[] = [
  {
    title: "Finance Dashboard",
    image: "/images/Projects/finance-dashboard.png",
    link: "https://financedashboard-portfolio.vercel.app/",
    description:
      "An interactive dashboard visualizing financial metrics, KPIs, and trends with dynamic charts.",
    color: "#38bdf8", // Sky Blue
  },
  {
    title: "EchoBeats",
    image: "/images/Projects/echobeats.png",
    link: "https://spotifyclone-portfolio.vercel.app/",
    description:
      "A Spotify-inspired music streaming platform with custom playlists and smooth audio playback.",
    color: "#9333ea", // Purple
  },
  {
    title: "Chirp",
    image: "/images/Projects/xclone.png",
    link: "https://twitter-clone-fuvp.onrender.com/",
    description:
      "A Twitter clone enabling users to tweet, follow, and interact in real-time.",
    color: "#0ea5e9", // Blue
  },
  {
    title: "PixelTube",
    image: "/images/Projects/pixeltube.png",
    link: "https://pixel-tube.vercel.app/",
    description:
      "A responsive video-sharing platform supporting playback, uploads, and user management.",
    color: "#facc15", // Yellow
  },
  {
    title: "BlinkIt Data Analysis",
    image: "/images/Projects/blinkit-data-analysis.png",
    link: "https://github.com/Kumayl-Lokhandwala/BlinkIt-Data-Analysis",
    description:
      "Performed data analysis to uncover trends, customer behavior, and operational bottlenecks.",
    color: "#34d399", // Emerald
  },
  {
    title: "AI Book Recommender",
    image: "/images/Projects/ai-book-recommender.png",
    link: "https://github.com/Kumayl-Lokhandwala/ai-book-recommender",
    description:
      "Built an intelligent system to recommend books based on user preferences using NLP models.",
    color: "#4ade80", // Green
  },
  {
    title: "Movie Mobile App",
    image: "/images/Projects/movie-app.png",
    link: "https://github.com/Kumayl-Lokhandwala/movie-app-rn",
    description:
      "A cross-platform app to browse, search, and favorite movies using React Native and TMDB API.",
    color: "#f472b6", // Pink
  },
  {
    title: "Comments Toxicity Model",
    image: "/images/Projects/toxicity.png",
    link: "https://github.com/Kumayl-Lokhandwala/Comment-Toxicity-Model",
    description:
      "NLP model to detect toxic language in comments and promote healthier online discussions.",
    color: "#fb7185", // Rose
  },
  {
    title: "FlyEasy - Airport Management System",
    image: "/images/Projects/flyeasy.png",
    link: "https://fly-easy.vercel.app/",
    description:
      "A modern web-based solution for managing flights, staff, and real-time airport operations.",
    color: "#38bdf8", // Light Blue
  },
];

export default projectsData;
