import { query } from '@/lib/db';
import HomeClient from './HomeClient';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import ProjectsSection from '../components/ProjectsSection';

export const dynamic = 'force-dynamic'; // Ensures this route is dynamically rendered for fresh projects

const DEFAULT_PROJECTS = [
  {
    name: "Fluxer.Java",
    tech: "Java / Maven",
    description: "High-performance administrative framework for Java applications with advanced automation features.",
    link: "https://github.com/Omarayman008/fluxer.java",
    level: 1,
    color: "#bdff90",
    biomeColor: "#0a0f0a",
    characterType: 'rex' as const
  },
  {
    name: "Social-Media API",
    tech: "Node.js / Express",
    description: "A scalable backend for social platforms featuring ffmpeg video processing and containerized deployment.",
    link: "https://github.com/Omarayman008/Social-Media",
    level: 2,
    color: "#00fff9",
    biomeColor: "#050a10",
    characterType: 'pterodactyl' as const
  },
  {
    name: "Commander Bot",
    tech: "Java / JDA",
    description: "Advanced Discord management system with auto-moderation, custom rank engine, and leveling system.",
    link: "https://github.com/Omarayman008/commander-bot",
    level: 3,
    color: "#ff00c1",
    biomeColor: "#10050f",
    characterType: 'anky' as const
  }
];

export default async function Home({ searchParams }: { searchParams: { edit?: string } }) {
  let initialProjects = [];
  try {
    const result = await query('SELECT * FROM projects ORDER BY level ASC');
    if (result.rows && result.rows.length > 0) {
      initialProjects = result.rows.map((p: any) => ({
        ...p,
        biomeColor: p.biome_color,
        characterType: p.character_type
      }));
    } else {
      initialProjects = DEFAULT_PROJECTS;
    }
  } catch (error) {
    console.error('Database error on SSR:', error);
    initialProjects = DEFAULT_PROJECTS;
  }

  return (
    <main>
      <HomeClient initialProjects={initialProjects} editMode={searchParams.edit === 'true'} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection projects={initialProjects} />
      <ContactSection />
    </main>
  );
}
