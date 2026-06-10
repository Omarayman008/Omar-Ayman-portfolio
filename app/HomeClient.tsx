'use client';

import React, { useState } from 'react';
import GlitchName from '../components/GlitchName';
import DinoGame from '../components/DinoGame';
import AdminPanel from '../components/AdminPanel';

interface Project {
  id?: number;
  name: string;
  tech: string;
  description: string;
  link: string;
  level: number;
  color: string;
  biomeColor?: string;
  characterType?: 'rex' | 'pterodactyl' | 'anky' | 'triceratops' | 'spinosaurus';
}

interface HomeClientProps {
  initialProjects: Project[];
  editMode: boolean;
}

export default function HomeClient({ initialProjects, editMode }: HomeClientProps) {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [showAdmin, setShowAdmin] = useState(editMode);

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/projects', { cache: 'no-store' });
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        const mappedData = data.map((p: any) => ({
          ...p,
          biomeColor: p.biome_color,
          characterType: p.character_type
        }));
        setProjects(mappedData);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const handleAddProject = async (newProject: Project) => {
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProject)
      });
      if (res.ok) fetchProjects();
    } catch (error) {
      console.error('Add error:', error);
    }
  };

  const handleDeleteProject = async (index: number) => {
    const project = projects[index];
    if (!project.id) return;
    
    if (window.confirm("ARE_YOU_SURE_YOU_WANT_TO_DELETE_THIS_DATA?")) {
      try {
        const res = await fetch(`/api/projects?id=${project.id}`, { method: 'DELETE' });
        if (res.ok) fetchProjects();
      } catch (error) {
        console.error('Delete error:', error);
      }
    }
  };

  const handleUpdateProject = async (index: number, updatedProject: Project) => {
    const project = projects[index];
    if (!project.id) return;

    try {
      const res = await fetch('/api/projects', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...updatedProject, id: project.id })
      });
      if (res.ok) fetchProjects();
    } catch (error) {
      console.error('Update error:', error);
    }
  };

  return (
    <>
      {showAdmin && (
        <AdminPanel 
          projects={projects} 
          onAddProject={handleAddProject} 
          onDeleteProject={handleDeleteProject}
          onUpdateProject={handleUpdateProject}
        />
      )}

      <section className="section hero">
        <div className="container">
          <GlitchName name="OMAR AYMAN" />
          <p className="tagline">"From idea to deployment — I handle it all"</p>
          
          <div className="game-wrapper">
            <div className="game-header">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="game-title">PROJECT_RUNNER_v1.0</span>
            </div>
            <DinoGame projects={projects} />
            <div className="game-footer">
              <p>[SPACE/ALT] to restart</p>
              <p>RUN TO REVEAL PROJECTS</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
