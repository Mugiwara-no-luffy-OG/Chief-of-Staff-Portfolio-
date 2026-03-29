"use client";
import Navbar from "@/components/Navbar";
import { Phone, MapPin, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Let me be your Force Multiplier
              </h1>
            </div>

            <div className="space-y-6">
              {/* WhatsApp Button */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">WhatsApp</p>
                  <a 
                    href="https://wa.me/33762985969" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-colors"
                  >
                    Text me on WhatsApp
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-foreground font-medium">Available in New York, United States or Worldwide (Remote)</p>
                </div>
              </div>

              {/* LinkedIn - My Profile Button */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/ana%C3%AFs-azilinon-a3b24614b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-colors"
                  >
                    My Profile
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative">
            {/* Decorative Orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-brrom-primary/10 to-secondary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-linear-to-tr from-secondary/10 to-primary/10 rounded-full blur-2xl -z-10"></div>
            
            {/* Formspree Form */}
            <form 
              action="https://formspree.io/f/xnjoprdy" 
              method="POST"
              className="space-y-6 bg-white p-8 rounded-2xl border border-border shadow-sm"
            >
              {/* Redirect after submission */}
              <input type="hidden" name="_next" value="https://chief-of-staff-portfolio-.vercel.app/contact?success=1" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-foreground/30 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-foreground/30 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-foreground/30 resize-none transition-colors"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}