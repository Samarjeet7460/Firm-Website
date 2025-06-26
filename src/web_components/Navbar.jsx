import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false) // close Sheet after navigation
    }
  }

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'contact', label: 'Contact Us' }
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <nav className="flex items-center justify-between px-6 lg:px-12 py-4">
        {/* Brand */}
        <h1
          onClick={() => scrollToSection('home')}
          className="font-black text-3xl text-gray-900 tracking-tight cursor-pointer hover:text-amber-500 transition-colors duration-300"
        >
          TMI
        </h1>

        {/* Desktop navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="relative text-gray-600 hover:text-gray-900 font-medium text-base transition-all duration-300 px-3 py-2 rounded-lg group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
          <li>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-amber-500 text-white px-6 py-2.5 rounded-none font-medium text-sm transition-all duration-300 hover:shadow-lg hover:bg-amber-600"
            >
              +91-8504000069
            </Button>
          </li>
        </ul>

        {/* Mobile navigation using shadcn Sheet */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="Toggle navigation"
              className="block lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              <Menu className="w-8 h-8" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-3/4 max-w-xs bg-white border-l border-gray-200/60 flex flex-col px-6 py-8"
          >
            {/* Sheet title */}
            <h2 className="mb-10 self-center font-semibold text-2xl text-gray-900">Menu</h2>

            {/* Links */}
            <ul className="flex flex-col gap-10 flex-1">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="block w-full text-left text-gray-700 hover:text-gray-900 font-medium text-base transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA button */}
            <Button
              onClick={() => scrollToSection('contact')}
              className="mt-auto w-full bg-amber-500 text-white py-2 rounded-none font-medium text-sm transition-all duration-300 hover:shadow-lg hover:bg-amber-600"
            >
              +91-8504000069
            </Button>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

export default Navbar
