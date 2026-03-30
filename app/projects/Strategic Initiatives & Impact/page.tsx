import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";

export default function StrategicPlanning() {
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
            Strategy & Operations
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Strategic Initiatives & Impact
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A scalable strategic operations system that streamlined board communications, investor readiness, cross-functional roadmaps, and career progression frameworks.
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
            alt="Strategic Planning Framework" 
            className="w-full h-96 object-cover"
          />
        </div>
      </div>

      {/* Context - MOVED BEFORE VIDEO */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl border border-border p-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">
            Context
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <span className="font-semibold text-foreground">What business problem existed?</span>
          </p>
          <p className="text-gray-700 leading-relaxed">
            The leadership team lacked centralized strategic infrastructure: board materials were assembled ad-hoc, the investor data room was disorganized, annual roadmaps were siloed by department, and career progression frameworks did not exist. This created inefficiencies in executive decision-making and limited organizational scalability.
          </p>
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
              src="https://www.youtube.com/embed/R2sO21Ls87g"
              title="Strategic Planning Framework - Project Demo"
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

      {/* Strategic Objective - REWRITTEN */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl border border-border p-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">
            Strategic Objective
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <span className="font-semibold text-foreground">What executive goal did it support?</span>
          </p>
          <p className="text-gray-700 leading-relaxed">
            The video above shows a sample of the master roadmap aligning the company's five departments to the goal of achieving profitability by 2027, as presented during the board meeting for the Series B funding round. The broader objective was to build a scalable strategic operations framework that would streamline board and investor communications, align cross-functional roadmaps, and enable talent retention through clear career progression pathways—all while supporting sustainable growth without adding headcount.
          </p>
        </div>
      </div>

      {/* Execution - TOOLS CLEANED UP */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl border border-border p-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">
            Execution
          </h2>
          <div className="mb-6">
            <h3 className="font-semibold text-foreground mb-3">Tools Used</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-background border border-border rounded-full text-sm text-gray-700">Notion</span>
              <span className="px-3 py-1 bg-background border border-border rounded-full text-sm text-gray-700">Google Workspace</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3">Approach</h3>
            <p className="text-gray-700 leading-relaxed">
              Designed a modular template system with standardized workflows for board preparation, investor updates, roadmap alignment, and career planning. Implemented zero-budget solution with comprehensive documentation to ensure seamless replication across teams.
            </p>
          </div>
        </div>
      </div>

      {/* Outcome - RENAMED FOR CLARITY */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl border border-border p-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">
            Measured Impact
          </h2>
          <div className="mb-6">
            <h3 className="font-semibold text-foreground mb-3">Key Results</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"></span>
                Reduced board meeting preparation time from 3 weeks to 9 days
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                Established a structured 4-week investor data room preparation cycle with audit-ready documentation
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                Aligned all five departments' roadmaps with clear quarterly milestones
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                Career progression framework adopted by HR for 70+ employees with clear progression tracks, strengthening the organization's culture and retention
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3">Quantified Outcomes</h3>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
                <span className="text-primary font-bold">57% faster board prep</span>
              </div>
              <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
                <span className="text-primary font-bold">4-week data room cycle</span>
              </div>
              <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
                <span className="text-primary font-bold">$0 implementation cost</span>
              </div>
              <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
                <span className="text-primary font-bold">5 departments aligned</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Impact */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/20 p-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">
            Chief of Staff Impact
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Created executive-ready infrastructure that scaled to support 70+ person growth targets. Templates replicated across departments. Positioned organization for new round of funding.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex flex-col sm:flex-row gap-4">
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