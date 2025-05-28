"use client"

import { useState } from "react"
import { Briefcase, Calendar, ChevronRight } from "lucide-react"

const experiences = [
  {
    id: "nccs",
    period: "NOV 2024 - MARCH 2025",
    title: "Full Stack Developer Intern",
    company: "NCCS Software, Kathmandu",
    description: [
      "Developed a role-based Education Management Information System (EMIS) for +2 level institutions using Laravel (Blade & Livewire), PHP, JavaScript, and Tailwind CSS, featuring responsive UI and real-time interactivity.",
      "Designed and implemented modules for student/teacher management, class assignments, and document sharing, with role-specific access for Admins, Teachers, and Students.",
      "Managed database schemas via Laravel migrations and DBgate, and used Laragon for local development and server setup."
    ]
  }
]

export function ExperienceSection() {
  const [expanded, setExpanded] = useState<string | null>("nccs")

  const toggleExpanded = (id: string) => {
    setExpanded(expanded === id ? null : id)
  }

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Work Experience</h2>
        
        <div className="mt-10 space-y-6">
          {experiences.map((exp) => (
            <div 
              key={exp.id}
              className="bg-card rounded-lg shadow-md overflow-hidden"
            >
              <div 
                className={`p-5 cursor-pointer flex justify-between items-center ${
                  expanded === exp.id ? "border-b" : ""
                }`}
                onClick={() => toggleExpanded(exp.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="hidden sm:flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {exp.period}
                  </div>
                  <ChevronRight
                    className={`h-5 w-5 transition-transform ${
                      expanded === exp.id ? "rotate-90" : ""
                    }`}
                  />
                </div>
              </div>
              
              {expanded === exp.id && (
                <div className="p-5 bg-card/50">
                  <div className="sm:hidden mb-3 flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {exp.period}
                  </div>
                  <ul className="space-y-3 list-disc list-inside ml-2 text-muted-foreground">
                    {exp.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}