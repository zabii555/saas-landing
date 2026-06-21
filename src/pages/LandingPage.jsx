import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Rocket, Zap, Shield, Users, BarChart, Globe, Award, 
  Star, CheckCircle, ArrowRight, Mail, Phone, MapPin 
} from 'lucide-react'

const LandingPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
      setFormData({ name: '', email: '', message: '' })
    }
  }

  const features = [
    { icon: Rocket, title: 'Lightning Fast', desc: 'Built for speed with optimal performance' },
    { icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade encryption for your data' },
    { icon: Users, title: 'Team Collaboration', desc: 'Work together seamlessly in real-time' },
    { icon: BarChart, title: 'Analytics Dashboard', desc: 'Track your growth with powerful insights' },
    { icon: Globe, title: 'Global Scale', desc: 'Deploy worldwide with CDN support' },
    { icon: Award, title: 'Premium Support', desc: '24/7 dedicated support team' },
  ]

  const testimonials = [
    { name: 'Ahmed Raza', role: 'CEO, TechCorp', text: 'SaaSPro transformed our workflow. Highly recommended!', rating: 5 },
    { name: 'Sara Khan', role: 'Product Manager', text: 'The onboarding experience is seamless and intuitive.', rating: 5 },
    { name: 'Usman Malik', role: 'Startup Founder', text: 'Best SaaS platform I\'ve ever used.', rating: 5 },
  ]

  const pricing = [
    { name: 'Starter', price: '$29', features: ['5 Projects', '10GB Storage', 'Basic Support'], popular: false },
    { name: 'Professional', price: '$79', features: ['Unlimited Projects', '100GB Storage', 'Priority Support', 'Advanced Analytics'], popular: true },
    { name: 'Enterprise', price: '$199', features: ['Unlimited Everything', '1TB Storage', '24/7 Support', 'Custom Domain'], popular: false },
  ]

  const faqs = [
    { q: 'What is SaaSPro?', a: 'SaaSPro is a complete business management platform for modern teams.' },
    { q: 'Is there a free trial?', a: 'Yes! You get 14 days free trial with full features.' },
    { q: 'Can I cancel anytime?', a: 'Yes, cancel anytime with no hidden fees.' },
  ]

  return (
    <div>
      
     {/* Hero */}
<section className="pt-32 pb-20 md:pt-40 bg-gradient-to-br from-indigo-50 via-purple-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-6">
      Build Your SaaS<br />
      <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Faster & Smarter</span>
    </h1>
    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
      Everything you need to launch and grow your SaaS product — from onboarding to analytics.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link to="/onboarding" className="btn-primary flex items-center gap-2">
        Start Free Trial <ArrowRight size={18} />
      </Link>
      <button className="btn-secondary">Watch Demo</button>
    </div>
  </div>
</section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Why Choose SaaSPro</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="card hover:shadow-xl transition">
                <f.icon className="text-indigo-600 mb-4" size={40} />
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="card">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">"{t.text}"</p>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Simple Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((p, i) => (
              <div key={i} className={`card ${p.popular ? 'border-2 border-indigo-600 shadow-xl' : ''}`}>
                {p.popular && <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">Most Popular</span>}
                <h3 className="text-2xl font-bold mt-4">{p.name}</h3>
                <p className="text-4xl font-bold mt-2">{p.price}<span className="text-base font-normal text-gray-500">/mo</span></p>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle size={18} className="text-indigo-600" />{f}</li>
                  ))}
                </ul>
                <Link to="/onboarding" className="btn-primary w-full text-center mt-6 block">Get Started</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="card hover:shadow-md transition">
                <h3 className="font-bold">{f.q}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONTACT SECTION (ADDED) ========== */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">Get In Touch</h2>
          <div className="card">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-green-600">Thank You!</h3>
                <p className="text-gray-600 dark:text-gray-400">Your message has been sent successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    name="message"
                    placeholder="Write your message..."
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none"
                    required
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message <ArrowRight size={18} className="inline ml-2" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg opacity-90 mb-6">Join thousands of teams already using SaaSPro.</p>
          <Link to="/onboarding" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:scale-105 transition inline-block">
            Start Your Free Trial
          </Link>
        </div>
      </section>
    </div>
  )
}

export default LandingPage;