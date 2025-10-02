import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Zap, Database, Brain, CircleCheck as CheckCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Solutions - O2mations',
  description: 'Discover our comprehensive automation solutions designed to transform your business operations and drive growth.',
}

export default function Solutions() {
  return (
    <div className="pt-16">
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Technology solutions"
            className="w-full h-full object-cover opacity-8"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
              Intelligent Solutions for a{' '}
              <span className="brand-emerald">Smarter Business</span>
            </h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Our outcome-oriented approach focuses on delivering measurable results that transform your operations, 
              eliminate inefficiencies, and accelerate your business growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Automated workflow"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-charcoal mb-6">
                  Workflow & Process Automation
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  Transform your manual processes into efficient, automated workflows that run seamlessly in the background. 
                  Our solutions eliminate repetitive tasks, reduce human error, and free your team to focus on high-value activities.
                </p>
                <p className="text-neutral-600 mb-8">
                  From approval workflows to data processing pipelines, we design custom automation that adapts to your unique business requirements and scales with your growth.
                </p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-white">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <Card className="p-8 border-2 border-accent/20">
                <CardContent className="pt-6">
                  <h3 className="font-heading text-xl font-semibold text-brand-charcoal mb-6">
                    Common Problems We Solve:
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-600">Eliminates manual data entry and document processing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-600">Automates approval and review workflows</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-600">Reduces processing time from hours to minutes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-600">Ensures consistent execution of business processes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-600">Provides audit trails and compliance tracking</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Card className="p-8 border-2 border-accent/20 lg:order-1">
                <CardContent className="pt-6">
                  <h3 className="font-heading text-xl font-semibold text-brand-charcoal mb-6">
                    Common Problems We Solve:
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-600">Creates a single source of truth for your data</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-600">Eliminates data silos and duplicate entry</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-600">Enables real-time reporting and analytics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-600">Improves data accuracy and consistency</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-600">Connects legacy systems with modern platforms</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <div className="lg:order-2">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Database className="h-8 w-8 text-accent" />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-charcoal mb-6">
                  Platform & Data Integration
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  Break down data silos and connect your disparate systems into a unified ecosystem. 
                  Our integration solutions ensure your data flows seamlessly between platforms, providing real-time insights and eliminating manual data transfer.
                </p>
                <p className="text-neutral-600 mb-8">
                  Whether you're connecting CRM to marketing platforms, syncing e-commerce with inventory systems, or integrating financial software, 
                  we create robust connections that keep your business data synchronized and accessible.
                </p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-white">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Brain className="h-8 w-8 text-accent" />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-charcoal mb-6">
                  Custom Automation Strategy
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  Every business is unique, and your automation strategy should be too. We work closely with you to understand your specific challenges, 
                  goals, and operational requirements to develop a comprehensive automation roadmap.
                </p>
                <p className="text-neutral-600 mb-8">
                  Our strategic approach ensures that every automation investment delivers maximum ROI while building a foundation for sustainable, 
                  scalable growth that evolves with your business needs.
                </p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-white">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <Card className="p-8 border-2 border-accent/20">
                <CardContent className="pt-6">
                  <h3 className="font-heading text-xl font-semibold text-brand-charcoal mb-6">
                    Common Problems We Solve:
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-600">Develops phased automation implementation plans</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-600">Identifies high-impact automation opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-600">Aligns technology investments with business goals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-600">Creates scalable automation architectures</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-600">Provides ongoing optimization and support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can transform your business operations and accelerate your growth.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-medium text-lg px-8 py-4">
            <Link href="/contact">
              Book a Strategy Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}