import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Target, Lightbulb, Users, Zap } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - O2mations',
  description: 'Meet the visionary founders behind O2mations and discover our mission to transform businesses through intelligent automation solutions.',
}

export default function About() {
  return (
    <div className="pt-16">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
              Building the Future of{' '}
              <span className="brand-emerald">Business Automation</span>
            </h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Founded on the belief that every business has untapped potential waiting to be unlocked through intelligent automation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-charcoal mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                O2mations was founded with a clear mission: to help businesses unlock their potential through intelligent automation. 
                In a world where efficiency and agility determine success, we saw an opportunity to bridge the gap between ambitious goals and operational reality.
              </p>
              <p className="text-neutral-600 mb-6">
                As a new agency, we bring fresh perspectives, modern approaches, and agile methodologies that legacy firms often can't match. 
                Our newness is our strength—it allows us to be more responsive, more innovative, and more focused on what truly matters: your success.
              </p>
              <p className="text-neutral-600">
                We believe that being client-focused and results-driven matters more than years in business. 
                Every client is a partnership, every project is a chance to prove our value, and every success is a step toward building the automation future we envision.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center border-2 border-accent/20">
                <CardContent className="pt-6">
                  <Target className="h-10 w-10 text-accent mx-auto mb-4" />
                  <h3 className="font-heading text-lg font-semibold text-brand-charcoal mb-2">
                    Mission-Driven
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Every solution we build serves a clear purpose: transforming how you work
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center border-2 border-accent/20">
                <CardContent className="pt-6">
                  <Lightbulb className="h-10 w-10 text-accent mx-auto mb-4" />
                  <h3 className="font-heading text-lg font-semibold text-brand-charcoal mb-2">
                    Innovation-First
                  </h3>
                  <p className="text-sm text-neutral-600">
                    We leverage cutting-edge technology to solve tomorrow's challenges today
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center border-2 border-accent/20">
                <CardContent className="pt-6">
                  <Users className="h-10 w-10 text-accent mx-auto mb-4" />
                  <h3 className="font-heading text-lg font-semibold text-brand-charcoal mb-2">
                    Client-Centric
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Your success is our success—we're invested in your long-term growth
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center border-2 border-accent/20">
                <CardContent className="pt-6">
                  <Zap className="h-10 w-10 text-accent mx-auto mb-4" />
                  <h3 className="font-heading text-lg font-semibold text-brand-charcoal mb-2">
                    Results-Focused
                  </h3>
                  <p className="text-sm text-neutral-600">
                    We measure our success by the tangible value we deliver to your business
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-charcoal mb-6">
              Meet the Founders
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Two visionaries united by a shared passion for transforming businesses through intelligent automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 border-2 border-accent/20">
              <CardContent className="pt-6 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-16 w-16 text-accent" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-brand-charcoal mb-2">
                  Syed Umar
                </h3>
                <p className="text-accent font-medium mb-6">Co-Founder & Strategic Architect</p>
                <p className="text-neutral-600 mb-6 text-left">
                  Syed brings a unique blend of technical expertise and business acumen to O2mations. 
                  His passion lies in identifying transformational opportunities within complex business processes 
                  and designing elegant automation solutions that drive measurable results.
                </p>
                <p className="text-neutral-600 text-left">
                  With a deep understanding of both technology capabilities and business needs, 
                  Syed ensures that every solution we deliver creates lasting value and competitive advantage for our clients.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-2 border-accent/20">
              <CardContent className="pt-6 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-16 w-16 text-accent" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-brand-charcoal mb-2">
                  Omar Gamal
                </h3>
                <p className="text-accent font-medium mb-6">Co-Founder & Innovation Leader</p>
                <p className="text-neutral-600 mb-6 text-left">
                  Omar is the visionary force behind O2mations' innovative approach to business automation. 
                  His expertise in emerging technologies and strategic planning enables us to deliver solutions 
                  that not only solve today's challenges but also prepare businesses for tomorrow's opportunities.
                </p>
                <p className="text-neutral-600 text-left">
                  Omar's commitment to excellence and continuous innovation drives our mission to push the boundaries 
                  of what's possible in business automation, always with our clients' success as the ultimate goal.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-16 text-center">
            <Card className="p-8 bg-neutral-50 border-2 border-accent/20">
              <CardContent className="pt-6">
                <h3 className="font-heading text-2xl font-bold text-brand-charcoal mb-6">
                  Our Shared Vision
                </h3>
                <p className="text-lg text-neutral-600 mb-6">
                  Together, Syed and Omar founded O2mations on the belief that automation should amplify human potential, not replace it. 
                  Their combined expertise in technology, strategy, and business transformation creates a unique foundation for delivering 
                  exceptional results.
                </p>
                <p className="text-neutral-600">
                  Their partnership is built on complementary strengths: Syed's strategic architecture and Omar's innovation leadership 
                  combine to create solutions that are both technically sophisticated and strategically sound. 
                  This collaborative approach ensures that every client receives the full benefit of their diverse expertise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-charcoal mb-6">
              Why Choose O2mations?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-brand-charcoal mb-4">
                  Agile & Modern
                </h3>
                <p className="text-neutral-600">
                  Our fresh perspective allows us to leverage the latest technologies and methodologies without legacy constraints.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-brand-charcoal mb-4">
                  Partnership-Focused
                </h3>
                <p className="text-neutral-600">
                  Every client is a valued partner. We're invested in your success and committed to building long-term relationships.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-brand-charcoal mb-4">
                  Proven Results
                </h3>
                <p className="text-neutral-600">
                  We measure our success by the tangible value and transformational results we deliver to your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
            Let's explore how our vision and expertise can help transform your business operations and accelerate your growth.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-medium text-lg px-8 py-4">
            <Link href="/contact">
              Start the Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}