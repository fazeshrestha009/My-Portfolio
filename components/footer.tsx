import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Pranaya Shrestha</h3>
            <p className="text-muted-foreground max-w-md">
              Software Developer passionate about creating innovative solutions and
              learning new technologies.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Me</h3>
            <div className="flex flex-wrap gap-4">
              <Link
                href="mailto:pranayashrestha50@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>pranayashrestha50@gmail.com</span>
              </Link>
              <Link
                href="tel:+9779808756249"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+977 9808756249</span>
              </Link>
              <Link
                href="https://linkedin.com/in/pranaya07/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>linkedin.com/in/pranaya07</span>
              </Link>
              <Link
                href="https://github.com/fazeshrestha009"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>github.com/fazeshrestha009</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Pranaya Shrestha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}