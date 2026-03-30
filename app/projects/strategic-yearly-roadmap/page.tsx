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
            Strategic Planning Framework
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
              Leadership team lacked centralized strategic infrastructure: board materials assembled ad-hoc, investor data room disorganized, annual roadmap siloed by department, and career progression frameworks did not existS. This created inefficiencies in executive decision-making and limited scalability.
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
              Build a scalable strategic operations framework to streamline board/investor communications, align cross-functional roadmaps, and enable talent retention through clear career pathways—supporting sustainable growth without adding headcount.
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
              <span className="px-3 py-1 bg-background border border-border rounded-full text-sm text-gray-700">Notion</span>
              <span className="px-3 py-1 bg-background border border-border rounded-full text-sm text-gray-700">Google Workspace</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3">Approach</h3>
            <p className="text-gray-700 leading-relaxed">
              Modular template system with standardized workflows for board preparation, investor updates, roadmap alignment, and career planning. Zero-budget implementation, fully documented for replication.
            </p>
          </div>
        </div>

        {/* Strategy Highlight */}
        <div className="mt-12 bg-white rounded-2xl border border-border p-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">
            Strategy
          </h2>
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Strategic Yearly Roadmap
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Developed the master roadmap aligning the company's 5 departments with quarterly milestones, ensuring cross-functional dependencies were mapped and executive priorities were clearly communicated to meeet the company's goal of being profitable by 2027. 
          </p>
        </div>

        {/* Outcome */}
        <div className="mt-12 bg-white rounded-2xl border border-border p-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">
            Strategic Initiatives & Impact
          </h2>
          <div className="mb-6">
            <h3 className="font-semibold text-foreground mb-3">Measured Results</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"></span>
                Reduced board meeting preparation time from 3 weeks to 9 days
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                Established structured 4-week investor data room preparation cycle with audit-ready documentation
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                Aligned all departments' roadmaps with clear Q1-Q4 milestones
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                Career plan framework adopted by HR for 70+ employees with clear progression tracks
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3">Key Metrics</h3>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
                <span className="text-primary font-bold">57% faster board prep</span>
              </div>
              <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
                <span className="text-primary font-bold">4-week data room cycle</span>
              </div>
              <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
                <span className="text-primary font-bold">$0 cost</span>
              </div>
              <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
                <span className="text-primary font-bold">4 departments aligned</span>
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
            Created executive-ready infrastructure that scaled with 70+ person growth target. Enabled CEO to focus on vision vs. operations. Templates replicated across departments. Positioned organization for new round of funding. 
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