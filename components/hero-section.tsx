"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 pb-20 relative"
    >
      <div
        className={`container mx-auto px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 overflow-hidden rounded-full border-4 border-primary/20 p-1">
            <div className="h-32 w-32 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">PS</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            <span className="gradient-text">Pranaya Shrestha</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 animate-slide-up">
            Software Developer
          </h2>
          <p className="max-w-2xl text-center text-muted-foreground mb-8 animate-slide-up delay-100">
            I am a passionate and dedicated developer with a strong foundation in software development. 
            I thrive on challenges that foster both personal and professional growth, 
            with a particular motivation for problem-solving in innovative environments.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-slide-up delay-200">
            <Link
              href="#contact"
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors"
            >
              Contact Me
            </Link>
            <Link
              href="#projects"
              className="px-6 py-3 bg-secondary text-foreground rounded-md hover:bg-secondary/80 transition-colors"
            >
              View Projects
            </Link>
          </div>
          <div className="flex space-x-6 animate-slide-up delay-300">
            <Link
              href="https://github.com/fazeshrestha009"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/pranaya07/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:pranayashrestha50@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-primary" />
        </Link>
      </div>
    </section>
  )
}