import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Search, Lightbulb, Cog, Users } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Approach - O2mations',
  description: 'Discover our structured, collaborative process for delivering transformational automation solutions that drive real business results.',
}

export default function Approach() {
  return (
    <div className="pt-16">
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Strategic planning"
            className="w-full h-full object-cover opacity-8"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
              Your Blueprint for{' '}
              <span className="brand-emerald">Transformation</span>
            </h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We follow a clear, collaborative path that ensures every automation solution is strategically aligned with your business goals 
              and delivers measurable results from day one.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Process implementation"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent hidden lg:block"></div>
            
            <div className="space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="absolute -left-4 top-8 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl z-10 hidden lg:flex">
                    1
                  </div>
                  <div className="lg:ml-20">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 lg:hidden">
                      <Search className="h-8 w-8 text-accent" />
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-charcoal mb-6">
                      Discovery & Deep Dive
                    </h2>
                    <p className="text-lg text-neutral-600 mb-6">
                      We start by thoroughly understanding your business, current processes, pain points, and strategic objectives. 
                      This comprehensive analysis forms the foundation for all our recommendations.
                    </p>
                    <p className="text-neutral-600">
                      Through detailed interviews, process mapping, and system audits, we identify the highest-impact opportunities 
                      for automation that align with your growth goals.
                    </p>
                  </div>
                </div>
                
                <Card className="p-8 border-2 border-accent/20">
                  <CardContent className="pt-6">
                    <h3 className="font-heading text-xl font-semibold text-brand-charcoal mb-6">
                      Key Activities & Deliverables:
                    </h3>
                    <ul className="space-y-3 text-neutral-600">
                      <li>• Stakeholder interviews and requirements gathering</li>
                      <li>• Current state process documentation and analysis</li>
                      <li>• System architecture and integration assessment</li>
                      <li>• Pain point identification and impact analysis</li>
                      <li>• Opportunity prioritization matrix</li>
                      <li>• Comprehensive discovery report with recommendations</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <Card className="p-8 border-2 border-accent/20 lg:order-1">
                  <CardContent className="pt-6">
                    <h3 className="font-heading text-xl font-semibold text-brand-charcoal mb-6">
                      Key Activities & Deliverables:
                    </h3>
                    <ul className="space-y-3 text-neutral-600">
                      <li>• Future state process design and optimization</li>
                      <li>• Technical architecture and solution blueprints</li>
                      <li>• Integration strategy and data flow mapping</li>
                      <li>• ROI projections and success metrics definition</li>
                      <li>• Implementation roadmap with timeline and milestones</li>
                      <li>• Risk assessment and mitigation strategies</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <div className="relative lg:order-2">
                  <div className="absolute -left-4 top-8 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl z-10 hidden lg:flex">
                    2
                  </div>
                  <div className="lg:ml-20">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 lg:hidden">
                      <Lightbulb className="h-8 w-8 text-accent" />
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-charcoal mb-6">
                      Strategic Design
                    </h2>
                    <p className="text-lg text-neutral-600 mb-6">
                      Based on our discovery insights, we design comprehensive automation solutions that address your specific challenges 
                      while building a scalable foundation for future growth.
                    </p>
                    <p className="text-neutral-600">
                      Every solution is custom-designed to fit your unique business requirements, ensuring seamless integration 
                      with your existing systems and workflows.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="absolute -left-4 top-8 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl z-10 hidden lg:flex">
                    3
                  </div>
                  <div className="lg:ml-20">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 lg:hidden">
                      <Cog className="h-8 w-8 text-accent" />
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-charcoal mb-6">
                      Precision Implementation
                    </h2>
                    <p className="text-lg text-neutral-600 mb-6">
                      Our experienced team brings your automation vision to life with meticulous attention to detail, 
                      rigorous testing, and minimal disruption to your ongoing operations.
                    </p>
                    <p className="text-neutral-600">
                      We follow agile development practices with regular check-ins, ensuring transparency and allowing for 
                      adjustments based on your feedback throughout the implementation process.
                    </p>
                  </div>
                </div>
                
                <Card className="p-8 border-2 border-accent/20">
                  <CardContent className="pt-6">
                    <h3 className="font-heading text-xl font-semibold text-brand-charcoal mb-6">
                      Key Activities & Deliverables:
                    </h3>
                    <ul className="space-y-3 text-neutral-600">
                      <li>• Agile development with regular sprint reviews</li>
                      <li>• Comprehensive testing and quality assurance</li>
                      <li>• User training and change management support</li>
                      <li>• Phased rollout and go-live support</li>
                      <li>• Documentation and knowledge transfer</li>
                      <li>• Performance monitoring and optimization</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <Card className="p-8 border-2 border-accent/20 lg:order-1">
                  <CardContent className="pt-6">
                    <h3 className="font-heading text-xl font-semibold text-brand-charcoal mb-6">
                      Key Activities & Deliverables:
                    </h3>
                    <ul className="space-y-3 text-neutral-600">
                      <li>• Ongoing system monitoring and maintenance</li>
                      <li>• Performance analytics and optimization recommendations</li>
                      <li>• Regular strategy reviews and roadmap updates</li>
                      <li>• New opportunity identification and assessment</li>
                      <li>• Continuous improvement and enhancement support</li>
                      <li>• Strategic technology planning and advisory services</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <div className="relative lg:order-2">
                  <div className="absolute -left-4 top-8 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl z-10 hidden lg:flex">
                    4
                  </div>
                  <div className="lg:ml-20">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 lg:hidden">
                      <Users className="h-8 w-8 text-accent" />
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-charcoal mb-6">
                      Partnership & Evolution
                    </h2>
                    <p className="text-lg text-neutral-600 mb-6">
                      Our relationship doesn't end at implementation. We partner with you for the long term, ensuring your 
                      automation solutions continue to deliver value as your business grows and evolves.
                    </p>
                    <p className="text-neutral-600">
                      Through ongoing monitoring, optimization, and strategic planning, we help you stay ahead of the curve 
                      and continuously unlock new opportunities for efficiency and growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Success metrics"
            className="w-full h-full object-cover opacity-8"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-charcoal mb-6">
              Why Our Approach Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-brand-charcoal mb-4">
                  Data-Driven Decisions
                </h3>
                <p className="text-neutral-600">
                  Every recommendation is backed by thorough analysis and measurable insights, ensuring maximum ROI on your automation investments.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-brand-charcoal mb-4">
                  Collaborative Partnership
                </h3>
                <p className="text-neutral-600">
                  We work closely with your team throughout the entire process, ensuring solutions that truly fit your business needs and culture.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Cog className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-brand-charcoal mb-4">
                  Proven Methodology
                </h3>
                <p className="text-neutral-600">
                  Our structured approach has been refined through numerous successful implementations across various industries and business sizes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
            Let's start with a strategy session to explore how our proven approach can unlock your business potential.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-medium text-lg px-8 py-4">
            <Link href="/contact">
              Book Your Strategy Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}