"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              CSK FAN HUB
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/players" className="text-foreground hover:text-primary transition-colors">
                Players
              </Link>
              <Link href="/moments" className="text-foreground hover:text-primary transition-colors">
                Moments
              </Link>
              <Link href="/quiz" className="text-foreground hover:text-primary transition-colors">
                Quiz
              </Link>
              <Link href="/dashboard" className="text-foreground hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Link href="/Playing11" className="text-foreground hover:text-primary transition-colors">
                Select Playing 11
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            <Link href="/" className="block px-3 py-2 text-foreground hover:text-primary">
              Home
            </Link>
            <Link href="/players" className="block px-3 py-2 text-foreground hover:text-primary">
              Players
            </Link>
            <Link href="/moments" className="block px-3 py-2 text-foreground hover:text-primary">
              Moments
            </Link>
            <Link href="/quiz" className="block px-3 py-2 text-foreground hover:text-primary">
              Quiz
            </Link>
            <Link href="/dashboard" className="block px-3 py-2 text-foreground hover:text-primary">
              Dashboard
            </Link>
            <Link href="/Playing11" className="block px-3 py-2 text-foreground hover:text-primary">
              Select Playing 11
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
