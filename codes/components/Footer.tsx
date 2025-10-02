import Link from 'next/link'
import { Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-heading text-2xl font-bold">
              O2mations
            </Link>
            <p className="mt-4 text-neutral-300 max-w-md">
              Transforming businesses through intelligent automation solutions. 
              We design and implement bespoke systems that eliminate manual processes and drive growth.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Connect</h3>
            <div className="flex flex-col space-y-3">
              <a 
                href="mailto:hello@o2mations.com"
                className="flex items-center text-neutral-300 hover:text-white transition-colors duration-200"
              >
                <Mail className="h-5 w-5 mr-2" />
                hello@o2mations.com
              </a>
              <a 
                href="#"
                className="flex items-center text-neutral-300 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-8 pt-8 text-center text-neutral-400">
          <p>&copy; 2025 O2mations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}