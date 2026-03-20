import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";

export default function MeetriqPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 pt-40 pb-8">
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>

      {/* Project Header */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="max-w-4xl">
          <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-bold rounded-full mb-4">
            Product & Engineering
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Meetriq: Operational Efficiency Tracker
          </h1>
          <p className="text-sm text-gray-500 mb-6 font-mono">
            V1 website: <a href="https://meetriq.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://meetriq.vercel.app/</a>
          </p>
          <p className="text-xl text-gray-600 leading-relaxed">
            A 24-hour MVP that makes meeting costs visible and forces outcome accountability—helping leaders optimize organizational time capital through real-time burn tracking and structured decision logging.
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
            alt="Meetriq dashboard showing live meeting cost ticker" 
            className="w-full h-96 object-cover"
          />
        </div>
      </div>

      {/* Video Section */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl border border-border p-8">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-2">
            <Play className="w-6 h-6 text-primary" />
            Project Demo V2
          </h2>
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/XeMogwvJm1A"
              title="Meetriq: Operational Efficiency Tracker - Project Demo V2"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-sm text-gray-500 mt-4">
            *Demo video with anonymized data • Built with Next.js, Tailwind CSS, and BLS public data
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Context */}
          <div className="bg-white rounded-2xl border border-border p-8">
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              Context
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <span className="font-semibold text-foreground">What business problem existed?</span>
            </p>
            <p className="text-gray-700 leading-relaxed">
              Executive teams consistently invest significant capital in meetings—yet lack visibility into the financial cost or strategic return. Time is treated as infinite, outcomes are rarely logged, and low-value forums persist because "that's how we've always done it." This creates hidden operational drag, misaligned incentives, and missed opportunities for leverage.
            </p>
          </div>

          {/* Strategic Objective */}
          <div className="bg-white rounded-2xl border border-border p-8">
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              Strategic Objective
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <span className="font-semibold text-foreground">What executive goal did it support?</span>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Build a lightweight, shareable tool that:
            </p>
            <ul className="space-y-2 text-gray-700 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <span>Makes the <strong>unit economics of time</strong> visible in real-time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <span>Forces <strong>outcome accountability</strong> through a structured decision gate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <span>Provides a <strong>standardized efficiency metric</strong> (Efficiency per $100) for cross-meeting comparison</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <span>Demonstrates how behavioral design + operational finance principles can be applied to knowledge-work optimization</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4 italic">
              All within a 24-hour build window using free, public tools.
            </p>
          </div>

        </div>

        {/* Execution */}
        <div className="mt-12 bg-white rounded-2xl border border-border p-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">
            Execution
          </h2>
          <div className="mb-6">
            <h3 className="font-semibold text-foreground mb-3">Tools Used</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-background border border-border rounded-full text-sm text-gray-700">Next.js</span>
              <span className="px-3 py-1 bg-background border border-border rounded-full text-sm text-gray-700">TypeScript</span>
              <span className="px-3 py-1 bg-background border border-border rounded-full text-sm text-gray-700">Tailwind CSS</span>
              <span className="px-3 py-1 bg-background border border-border rounded-full text-sm text-gray-700">Vercel</span>
              <span className="px-3 py-1 bg-background border border-border rounded-full text-sm text-gray-700">BLS OEWS Data</span>
              <span className="px-3 py-1 bg-background border border-border rounded-full text-sm text-gray-700">canvas-confetti</span>
              <span className="px-3 py-1 bg-background border border-border rounded-full text-sm text-gray-700">lucide-react</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3">Approach</h3>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <span><strong>Data Foundation:</strong> Hardcoded salary bands derived from U.S. Bureau of Labor Statistics OEWS (May 2024), with transparent sourcing for credibility</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <span><strong>Core Logic:</strong> Live cost accumulator (hourly burn × duration) + normalized efficiency metric (Impact Points ÷ (Cost ÷ $100))</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <span><strong>Behavioral Design:</strong> Decision Gate forces outcome logging before "success" is granted; confetti + color zones reinforce high-efficiency patterns</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <span><strong>UX Polish:</strong> Executive-grade typography, dark mode support, mobile-responsive layout, plain-English metric explanations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <span><strong>Privacy-First:</strong> No backend, no user accounts, mailto: email integration (zero data collection)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Leadership Impact */}
        <div className="mt-12 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/20 p-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">
            Leadership / Chief of Staff Impact
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Built as a <strong>proof-of-concept for operational rigor</strong>, Meetriq demonstrates how a senior CoS can:
          </p>
          <ul className="space-y-3 text-gray-700 leading-relaxed mb-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
              <span>Translate abstract strategy ("optimize meetings") into a tangible, shareable instrument</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
              <span>Balance speed (24-hour MVP) with credibility (transparent data sourcing, plain-English explanations)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
              <span>Design for behavior change, not just data display</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
              <span>Create force multipliers that scale executive attention without adding headcount</span>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed text-lg italic">
            This project reflects the same operational discipline, user-centered design thinking, and focus on making invisible value visible that I bring to all strategic initiatives.
          </p>
        </div>

      </div>
    </main>
  );
}