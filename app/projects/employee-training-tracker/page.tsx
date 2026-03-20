import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";

export default function EmployeeTrainingTracker() {
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
            HR & Talent
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Employee Training Tracker
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A comprehensive training compliance system that eliminated an 8-year documentation gap while reducing administrative overhead by 98%.
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
            alt="Employee Training Tracker" 
            className="w-full h-96 object-cover"
          />
        </div>
      </div>

      {/* Video Section */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl border border-border p-8">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-2">
            <Play className="w-6 h-6 text-primary" />
            Project Demo
          </h2>
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/tnxle7vjj-A"
              title="Employee Training Tracker - Project Demo"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-sm text-gray-500 mt-4">
            *Demo video with anonymized data
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
              The organization faced an 8-year compliance gap in employee training documentation, with critical records scattered across unstructured notes and disparate files.
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
            <p className="text-gray-700 leading-relaxed">
              Designed a system to track employee training to achieve 100% regulatory compliance while reducing training administration time by 98% (from 2 hours to under 2 minutes per employee), enabling HR to scale operations without additional headcount or budget.
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
              <span className="px-3 py-1 bg-background border border-border rounded-full text-sm text-gray-700">Google Sheets</span>
              <span className="px-3 py-1 bg-background border border-border rounded-full text-sm text-gray-700">App Script</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3">Approach</h3>
            <p className="text-gray-700 leading-relaxed">
              Designed centralized database architecture with a two-minute update workflow. Zero budget, fully scalable.
            </p>
          </div>
        </div>

        {/* Outcome */}
        <div className="mt-12 bg-white rounded-2xl border border-border p-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">
            Outcome
          </h2>
          <div className="mb-6">
            <h3 className="font-semibold text-foreground mb-3">Measured Results</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                Eliminated 8-year compliance gap within 24 hours
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                Reduced tracking time from 2 hours to &lt;2 minutes per employee (98% time savings)
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                System scaled without additional resources (no budget, no additional headcount)
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3">Key Metrics</h3>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
                <span className="text-primary font-bold">98% time savings</span>
              </div>
              <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
                <span className="text-primary font-bold">100% compliance</span>
              </div>
              <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
                <span className="text-primary font-bold">$0 cost</span>
              </div>
              <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
                <span className="text-primary font-bold">24-hour deployment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Impact */}
        <div className="mt-12 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/20 p-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">
            Leadership / Chief of Staff Impact
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Identified critical compliance risk invisible to executives. Deployed solution in 24 hours without vendors. Created infrastructure supporting the 70+ employee growth target for 2026. Freed HR Director to focus on strategic hiring systems and career planning. System designed to scale with future headcount increases.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all"
          >
            Discuss Similar Project
          </Link>
          <Link 
            href="/projects" 
            className="inline-flex items-center justify-center gap-2 bg-white border border-border text-foreground px-8 py-4 rounded-full font-medium hover:border-primary transition-all"
          >
            View All Projects
          </Link>
        </div>

      </div>
    </main>
  );
}