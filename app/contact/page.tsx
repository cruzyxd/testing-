"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, MessageSquare, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    businessGoal: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    
    // Reset form
    setFormData({
      fullName: '',
      companyName: '',
      workEmail: '',
      businessGoal: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-8">
            <MessageSquare className="h-10 w-10 text-white" />
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-brand-charcoal mb-6">
            Thank You for Your Interest!
          </h1>
          <p className="text-lg text-neutral-600 mb-6">
            We have received your strategy session request and will be in touch within one business day to schedule our conversation.
          </p>
          <p className="text-neutral-600 mb-8">
            During our strategy session, we'll discuss your business goals, current challenges, and explore how automation can drive your growth.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="outline" 
            className="border-accent text-accent hover:bg-accent hover:text-white"
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
              Ready to Build a More{' '}
              <span className="brand-emerald">Efficient Future?</span>
            </h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Let's start with a strategic conversation about your business goals and how automation can help you achieve them faster and more efficiently.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl font-bold text-brand-charcoal mb-6">
                What to Expect
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-brand-charcoal mb-2">
                      45-Minute Strategic Session
                    </h3>
                    <p className="text-neutral-600">
                      A focused conversation about your business challenges, goals, and automation opportunities.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-brand-charcoal mb-2">
                      Personalized Insights
                    </h3>
                    <p className="text-neutral-600">
                      Custom recommendations based on your specific industry, business model, and operational needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-brand-charcoal mb-2">
                      No Obligation
                    </h3>
                    <p className="text-neutral-600">
                      This is a consultative conversation with no pressure—just valuable insights for your business.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-lg border border-neutral-200">
                <h3 className="font-heading text-lg font-semibold text-brand-charcoal mb-3">
                  Alternative Contact
                </h3>
                <p className="text-neutral-600 mb-3">
                  Prefer to reach out directly? Send us an email:
                </p>
                <a 
                  href="mailto:strategy@o2mations.com"
                  className="text-accent hover:text-accent/80 font-medium"
                >
                  strategy@o2mations.com
                </a>
              </div>
            </div>
            
            <Card className="border-2 border-accent/20">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-bold text-brand-charcoal mb-6">
                  Request Your Strategy Session
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-brand-charcoal mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="border-neutral-300 focus:border-accent focus:ring-accent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-brand-charcoal mb-2">
                      Company Name *
                    </label>
                    <Input
                      id="companyName"
                      name="companyName"
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      className="border-neutral-300 focus:border-accent focus:ring-accent"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="workEmail" className="block text-sm font-medium text-brand-charcoal mb-2">
                      Work Email *
                    </label>
                    <Input
                      id="workEmail"
                      name="workEmail"
                      type="email"
                      required
                      value={formData.workEmail}
                      onChange={handleChange}
                      className="border-neutral-300 focus:border-accent focus:ring-accent"
                      placeholder="Enter your work email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="businessGoal" className="block text-sm font-medium text-brand-charcoal mb-2">
                      What is your primary business goal? *
                    </label>
                    <Textarea
                      id="businessGoal"
                      name="businessGoal"
                      required
                      rows={4}
                      value={formData.businessGoal}
                      onChange={handleChange}
                      className="border-neutral-300 focus:border-accent focus:ring-accent"
                      placeholder="Describe your main business objectives and any specific challenges you're facing..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Request My Strategy Session'}
                  </Button>
                </form>
                
                <p className="text-xs text-neutral-500 mt-4">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}