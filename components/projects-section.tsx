"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

type Project = {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  liveLink?: string
}

const projects: Project[] = [
  {
    id: "emis",
    title: "EMIS Portal (+2 Level Management System)",
    description: "A role-based portal for school management, enabling admins to manage teachers/students and monitor activities. Teachers upload resources; students access materials via a clean interface.",
    image: "Emis.png",
    technologies: ["Laravel (Blade, Livewire)", "PHP", "Tailwind CSS", "JavaScript", "Git"],
    github: "https://github.com/fazeshrestha009/EMIS-Portal"
  },
  {
    id: "futsal",
    title: "Futsal Booking System",
    description: "Developed a location-based futsal booking platform using Haversine formula to calculate distance. Implemented user authentication, map-based futsal search, and admin dashboard.",
    image: "FutsalBooking.png",
    technologies: ["PHP", "JavaScript", "HTML/CSS", "Git"],
    github: "https://github.com/fazeshrestha009/FutsalBooking"
  },
  {
    id: "movie",
    title: "Yts Movie Buying",
    description: "Developed a React-based movie platform that allows users to register, log in, add movies to cart, and complete purchases. Implemented user authentication, dynamic routing, shopping cart logic, and a responsive UI.",
    image: "Ytsclone.png",
    technologies: ["React.js", "JavaScript", "HTML/CSS", "Git"],
    github: "https://github.com/fazeshrestha009/yts-clone-using-React"
  },
  {
    id: "student",
    title: "SP Record (Student Management System)",
    description: "Developed a student management system allowing users to view their records and attendance history in a clean, user-friendly interface. Implemented role-based access where admins can manage user profiles and track attendance by date.",
    image: "SPRecord.png",
    technologies: ["PHP", "JavaScript", "HTML/CSS", "Git"],
    github: "https://github.com/fazeshrestha009/SP-Record"
  }
]

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<string | null>(null)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`object-cover transition-transform duration-500 ${
                    activeProject === project.id ? "scale-110" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-5">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-3">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <Github className="h-4 w-4" />
                    <span>View Code</span>
                  </Link>
                  
                  {project.liveLink && (
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}