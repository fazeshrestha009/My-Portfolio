"use client"

import { useState } from "react"
import { Code, Database, Terminal, Wrench, CheckCircle2 } from "lucide-react"

const skillCategories = [
  {
    name: "Languages",
    icon: <Code className="h-6 w-6" />,
    skills: ["HTML/CSS", "JavaScript", "PHP"],
  },
  {
    name: "Frameworks",
    icon: <Terminal className="h-6 w-6" />,
    skills: ["React.js", "Next.js", "Laravel", "Tailwind CSS"],
  },
  {
    name: "Database",
    icon: <Database className="h-6 w-6" />,
    skills: ["MySQL", "Laragon", "DbGate"],
  },
  {
    name: "Tools",
    icon: <Wrench className="h-6 w-6" />,
    skills: ["VS Code", "Git", "Postman"],
  },
  {
    name: "Expertise",
    icon: <CheckCircle2 className="h-6 w-6" />,
    skills: ["Communication Skills", "Quick Learner", "Research Skills", "Flexible"],
  },
]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name)

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          <div className="col-span-1">
            <div className="bg-card rounded-lg shadow-md p-4">
              <ul className="space-y-2">
                {skillCategories.map((category) => (
                  <li key={category.name}>
                    <button
                      className={`w-full flex items-center gap-3 p-3 rounded-md transition-colors ${
                        activeCategory === category.name
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-secondary text-muted-foreground"
                      }`}
                      onClick={() => setActiveCategory(category.name)}
                    >
                      {category.icon}
                      <span>{category.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="col-span-1 lg:col-span-2">
            <div className="bg-card rounded-lg shadow-md p-6 h-full">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                {skillCategories.find(c => c.name === activeCategory)?.icon}
                <span>{activeCategory}</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skillCategories
                  .find(c => c.name === activeCategory)
                  ?.skills.map((skill) => (
                    <div 
                      key={skill} 
                      className="bg-secondary/50 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-8 bg-primary rounded-full"></div>
                        <h4 className="font-medium">{skill}</h4>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}