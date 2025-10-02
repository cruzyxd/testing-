import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Zap, Database, TrendingUp, Users, Brain, Workflow } from 'lucide-react'

export default function Home() {
  return (
    <div className="pt-16">
      <section className="hero-gradient py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Modern technology background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-brand-charcoal mb-6">
            The Future of Your Business is{' '}
            <span className="brand-emerald">Effortless</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
            Transform your operations with intelligent automation solutions that eliminate manual processes, 
            connect your systems, and unlock your team's potential to focus on what truly matters.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-medium text-lg px-8 py-4">
            <Link href="/contact">
              Book a Strategy Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">
              The Problems We Solve
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We understand the operational challenges that limit your growth potential
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-2 hover:border-accent/20 transition-colors duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Workflow className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-brand-charcoal mb-4">
                  Repetitive Workflows
                </h3>
                <p className="text-neutral-600">
                  Manual tasks consuming valuable time that could be spent on strategic initiatives and business growth.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-2 hover:border-accent/20 transition-colors duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Database className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-brand-charcoal mb-4">
                  Disconnected Systems
                </h3>
                <p className="text-neutral-600">
                  Data silos and poor system integration creating inefficiencies and limiting your operational visibility.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-2 hover:border-accent/20 transition-colors duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-brand-charcoal mb-4">
                  Growth Plateaus
                </h3>
                <p className="text-neutral-600">
                  Scaling constraints where increasing revenue requires proportionally increasing operational overhead.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Collaborative workspace"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">
              Our Philosophy
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-neutral-600 mb-6">
                Technology should amplify human potential, not replace it. We design automation solutions 
                that eliminate the mundane so your team can focus on creativity, strategy, and innovation.
              </p>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
                <p className="text-xl text-brand-charcoal font-medium italic">
                  "We believe every business has untapped potential waiting to be unlocked through intelligent automation."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">
              Our Solutions
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive automation services designed to transform your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-2 hover:border-accent/20 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <Zap className="h-10 w-10 text-accent mb-6" />
                <h3 className="font-heading text-xl font-semibold text-brand-charcoal mb-4">
                  Workflow & Process Automation
                </h3>
                <p className="text-neutral-600 mb-6">
                  Streamline your operations by automating repetitive tasks, approval workflows, and data processing to increase efficiency and reduce human error.
                </p>
                <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                  <Link href="/solutions">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-2 hover:border-accent/20 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <Database className="h-10 w-10 text-accent mb-6" />
                <h3 className="font-heading text-xl font-semibold text-brand-charcoal mb-4">
                  Platform & Data Integration
                </h3>
                <p className="text-neutral-600 mb-6">
                  Connect disparate systems and create a unified data ecosystem that provides real-time insights and eliminates manual data entry.
                </p>
                <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                  <Link href="/solutions">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-2 hover:border-accent/20 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <Brain className="h-10 w-10 text-accent mb-6" />
                <h3 className="font-heading text-xl font-semibold text-brand-charcoal mb-4">
                  Custom Automation Strategy
                </h3>
                <p className="text-neutral-600 mb-6">
                  Develop tailored automation roadmaps aligned with your business goals, ensuring maximum ROI and sustainable growth.
                </p>
                <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                  <Link href="/solutions">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Professional team environment"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-charcoal mb-6">
                Meet the Founders
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Syed Umar and Omar Gamal founded O2mations with a shared vision: to help businesses unlock their potential through intelligent automation.
              </p>
              <p className="text-neutral-600 mb-8">
                Their combined expertise in technology and business strategy enables them to design solutions that drive real, measurable results for their clients.
              </p>
              <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-32 h-32 bg-neutral-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-neutral-400" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-brand-charcoal">Syed Umar</h3>
                <p className="text-sm text-neutral-600">Co-Founder</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-neutral-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-neutral-400" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-brand-charcoal">Omar Gamal</h3>
                <p className="text-sm text-neutral-600">Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
            Schedule a strategy session to discover how automation can unlock your business potential.
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
