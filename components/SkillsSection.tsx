
import React from 'react';

const EXPERTISE = [
  "Core Backend & System Architecture Expert",
  "Professional Web UI/UX Designer",
  "Hardware Interaction Specialist",
  "Windows OS & Unity Engine Expert",
  "Advanced Bot Programming & Automation",
  "Server Infrastructure & JDA Framework",
  "Data Formatting & Visualization Master"
];

const SKILLS_CATEGORIES = [
  {
    title: "Core Development",
    items: ["HTML5", "CSS3", "Vanilla JavaScript", "Node.js", "Python", "Java", "C++", "C#", "Next.js", "Tailwind CSS", "Architecture", "TypeScript", "React", "SEO", "GEO"],
    description: "Full-cycle engineering from high-level architecture to clean implementation."
  },
  {
    title: "Bot Development & Automation",
    items: ["JDA", "Discord.js", "Aiogram", "API & Scripting Integration", "Automated Workflows"],
    description: "Crafting efficient automated systems and sophisticated bot infrastructures."
  },
  {
    title: "Systems & DevOps",
    items: ["Docker", "Redis", "Git", "Supabase", "SQL", "Maven", "Unity Engine", "Windows Expert", "Godot", "Cache", "CI/CD", "DB Index", "Garbage Collection"],
    description: "Managing operational environments and low-level system interactions."
  },
  {
    title: "Data & Graphics",
    items: ["SQL", "Redis", "Supabase", "WebGL", "Three.js", "JSON/Base64", "Chart.js"],
    description: "Data visualization and complex data processing with premium graphics."
  }
];

const CONCEPTS = [
  "Three.js Ecosystem", "TWEEN.js Animation", "Dat.GUI Controls", "FontLoader/TextGeometry", "Base64 Encoding", "JSON Structures"
];

const SkillsSection: React.FC = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="text-accent center">02. _SKILLS_AND_STACK</h2>

        <div className="expertise-wrapper">
          <div className="expertise-list">
            <h4 className="expertise-title">// CORE_EXPERTISE_SUMMARY</h4>
            <ul>
              {EXPERTISE.map((point, i) => (
                <li key={i}>
                  <span className="bullet">0{i+1}</span>
                  <span className="text">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="skills-stack">
          {SKILLS_CATEGORIES.map((cat, index) => (
            <div key={index} className="skill-category-full">
              <div className="category-header">
                <span className="category-line"></span>
                <h3>{cat.title.toUpperCase()}</h3>
                <span className="category-line"></span>
              </div>
              <p className="category-desc">{cat.description}</p>
              <div className="skill-tags">
                {cat.items.map(skill => (
                  <div key={skill} className="skill-item">
                    <span className="skill-tag">{skill}</span>
                    <div className="skill-glow"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="concepts-section">
          <h4 className="concepts-title">// ADVANCED_CONCEPTS_&_LIBRARIES</h4>
          <div className="concepts-tags">
            {CONCEPTS.map(concept => (
              <span key={concept} className="concept-tag">{concept}</span>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default SkillsSection;
