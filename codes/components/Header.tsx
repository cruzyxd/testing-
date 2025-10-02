"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Our Solutions', href: '/solutions' },
    { name: 'Our Approach', href: '/approach' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-heading text-2xl font-bold text-brand-charcoal">
            O2mations
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-700 hover:text-brand-charcoal transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="hidden md:block">
            <Button asChild className="bg-accent hover:bg-accent/90 text-white font-medium">
              <Link href="/contact">Book a Strategy Session</Link>
            </Button>
          </div>
          
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-neutral-700" />
            ) : (
              <Menu className="h-6 w-6 text-neutral-700" />
            )}
          </button>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200 bg-white">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-700 hover:text-brand-charcoal transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-accent hover:bg-accent/90 text-white font-medium mt-4">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Book a Strategy Session
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}