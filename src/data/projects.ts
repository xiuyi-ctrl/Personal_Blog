export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory management, payment integration, and an admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management tool with drag-and-drop boards, real-time updates, and team workspaces.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop",
    tags: ["Next.js", "TypeScript", "Prisma"],
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A real-time weather dashboard with interactive maps, 7-day forecasts, and location-based alerts.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1200&h=800&fit=crop",
    tags: ["React", "D3.js", "OpenWeather API"],
  },
  {
    id: 4,
    title: "Chat Application",
    description:
      "A real-time messaging app with end-to-end encryption, file sharing, and group chat features.",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=1200&h=800&fit=crop",
    tags: ["React", "Socket.io", "MongoDB"],
  },
];
