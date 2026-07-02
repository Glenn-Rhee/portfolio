interface Project {
  title: string;
  desc: string;
  techs: string[];
  year: number;
  image: string;
}
export const highlightProject = {
  imgOne: "/projects/p-1.png",
  imgTwo: "/projects/p-2.png",
  title: "Lea Juice App",
  description:
    "Lea-Juice-App is an online marketplace for fresh juices, fruits, and salads. Customers can browse products, add items to a cart, checkout using integrated payment gateways, and leave reviews and comments. The project includes an admin interface for managing products, viewing sales and customers, and handling transactions.",
  preview: "https://lea-juice-app.vercel.app/",
};

export const projects: Project[] = [
  {
    title: "Client Landing Page",
    desc: "A landing page website that I created for my client.",
    techs: ["HTML", "CSS", "JS"],
    year: 2025,
    image: "/projects/p-3.jpg",
  },
  {
    title: "Coffee Shop",
    desc: "A simple coffee ordering app",
    techs: ["NextJs", "Typescript", "Prisma", "shadcnUI", "TailwindCss"],
    year: 2024,
    image: "/projects/p-5.png",
  },
  {
    title: "Sistem Informasi KKP",
    desc: "A digital platform that helps manage data for Indonesia's Ministry of Marine Affairs and Fisheries.",
    techs: ["NextJs", "TailwindCss", "Firebase", "Uploadthing"],
    year: 2025,
    image: "/projects/p-9.png",
  },
  {
    title: "Krisfy App",
    desc: "DeFi platform to maximize your crypto assets through lending with top security and competitive yields.",
    techs: ["React", "Redux", "TailwindCSS", "Metamask", "Motoko"],
    year: 2025,
    image: "/projects/p-10.png",
  },
  {
    title: "E Arsip KKP",
    desc: "This project is an employee archive management system designed to record and store employee names.",
    techs: ["NextJs", "TailwindCss", "Supabase", "ShadcnUI"],
    year: 2025,
    image: "/projects/p-11.png",
  },
  {
    title: "Progress Arsip KKP",
    desc: "This project manages and organizes Google Drive links with adjustable access control.",
    techs: ["NextJs", "TailwindCss", "Supabase"],
    year: 2025,
    image: "/projects/p-12.png",
  },
  {
    title: "PDF AI",
    desc: "An AI-powered chatbot that enables users to interact with their PDF documents through natural conversation",
    techs: ["Typescript", "NextJs", "LLM", "TailwindCss"],
    image: "/projects/p-13.png",
    year: 2026,
  },
  {
    title: "Indra Farma",
    desc: "A pharmacy inventory system for Toko Obat Mantri Indra, tracking medicine stock in/out and sales transactions in real time.",
    image: "/projects/p-14.png",
    techs: ["NextJs", "TailwindCss", "Supabase", "Golang"],
    year: 2026,
  },
];
