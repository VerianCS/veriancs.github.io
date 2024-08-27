import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Github } from "lucide-react"

export default function FooterComponent() {
  return (
    <footer className="relative w-full bg-background/80 backdrop-blur-sm border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="space-y-4 text-center">
            <h3 className="text-lg font-semibold sr-only">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center space-x-2">
                <Github className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">github.com/veriancs</span>
              </li>
              <li className="flex items-center justify-center space-x-2">
                <Linkedin className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">BRIAN A.V</span>
              </li>
              <li className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Cuba</span>
              </li>
            </ul>
          </div>
          
          <div className="flex space-x-4">
            <Link href="https://x.com/ring6dev" className="text-muted-foreground hover:text-primary">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://www.linkedin.com/in/brian-av-57aba8231/" className="text-muted-foreground hover:text-primary">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://github.com/veriancs" className="text-muted-foreground hover:text-primary">
              <Github className="w-5 h-5" />
              <span className="sr-only">Github</span>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} NVAEIL - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}