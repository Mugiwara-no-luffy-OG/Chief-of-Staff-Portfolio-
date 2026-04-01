import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NationalGrantFundingPage() {
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
            Finance & Compliance
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            National Grant Funding
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Two strategic initiatives that secured non-dilutive funding through systematic analysis and workflow automation—transforming a failed consulting engagement into guaranteed funding success while eliminating 95% of administrative reporting burden.
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="/images/national-grant-funding.jpg"
            alt="National Grant Funding - Strategic financial framework and automated reporting system" 
            className="w-full h-96 object-cover"
          />
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
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div>
                <p className="font-semibold text-foreground mb-2">1. Grant Eligibility Framework:</p>
                <p>The company hired a consulting company who failed to secure a 6-figure grant funding for the company.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">2. Grant Reports Automation:</p>
                <p>Grant funding is issued in two parts. To receive the remaining funds, reports need to be sent. The team was overwhelmed, had no budget for additional headcount, and project managers could not spend a week working on these reports.</p>
              </div>
            </div>
          </div>

          {/* Strategic Objective */}
          <div className="bg-white rounded-2xl border border-border p-8">
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              Strategic Objective
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <span className="font-semibold text-foreground">What executive goal did it support?</span>
            </p>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div>
                <p className="font-semibold text-foreground mb-2">1. Grant Eligibility Framework:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                    <span>Analyzed and synthesized 300+ pages of documents regarding national grant eligibility into actionable insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                    <span>Created action plan and framing of grant application to guarantee funding success</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                    <span>Wrote grant application dossier</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">2. Grant Reports Automation:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                    <span>Creating workflow automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                    <span>Implementing AI within the department while ensuring data accuracy and confidentiality</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Execution */}
        <div className="mt-12 bg-white rounded-2xl border border-border p-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">
            Execution
          </h2>
          
          <div className="mb-8">
            <h3 className="font-semibold text-foreground mb-3 text-lg">1. Grant Eligibility Framework</h3>
            <div className="mb-4">
              <p className="font-semibold text-foreground mb-2">Tools:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-background border border-border rounded-full text-sm text-gray-700">Google Workspace</span>
              </div>
            </div>
            <div className="mb-4">
              <p className="font-semibold text-foreground mb-2">Approach:</p>
              <p className="text-gray-700 leading-relaxed">
                Met with different stakeholders (CFO, national grant employee funding) to ensure alignment and proper framing of the company to secure funding.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">Constraints:</p>
              <p className="text-gray-700 leading-relaxed">
                Building upon consultants' work, making sure not to be rejected a second time.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3 text-lg">2. Grant Reports Automation</h3>
            <div className="mb-4">
              <p className="font-semibold text-foreground mb-2">Tools:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-background border border-border rounded-full text-sm text-gray-700">Google Sheets</span>
                <span className="px-3 py-1 bg-background border border-border rounded-full text-sm text-gray-700">App Script</span>
                <span className="px-3 py-1 bg-background border border-border rounded-full text-sm text-gray-700">n8n</span>
              </div>
            </div>
          </div>
        </div>

        {/* Measured Impact */}
        <div className="mt-12 bg-white rounded-2xl border border-border p-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">
            Measured Impact
          </h2>
          
          <div className="mb-8">
            <h3 className="font-semibold text-foreground mb-3 text-lg">1. Grant Eligibility Framework:</h3>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                <span>Application under review</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                <span>Improved business relationship with national grant agency</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3 text-lg">2. Grant Reports Automation:</h3>
            <ul className="space-y-3 text-gray-700 leading-relaxed mb-6">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                <span>95% time savings: Reduced reporting time from 44 hours to 2 hours per cycle (42 hours saved)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                <span>Allowed project managers to focus on higher-stakes activities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                <span>System scaled without additional resources (no budget, no additional headcount)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                <span>Enabled receipt of $50,000 in anticipated payments before Q4 closing</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Leadership Impact */}
        <div className="mt-12 bg-linear-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/20 p-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">
            Chief of Staff Impact
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            These initiatives demonstrate how strategic operations can directly impact the bottom line without external consultants or additional headcount:
          </p>
          <ul className="space-y-3 text-gray-700 leading-relaxed mb-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
              <span>Rescued a failed engagement: Turned a 6-figure grant rejection into a successful application through systematic analysis and stakeholder alignment</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
              <span>Eliminated operational drag: Automated reporting that consumed 42+ hours per cycle down to 2 hours, freeing PMs for strategic work</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
              <span>Accelerated cash flow: Secured $50K in anticipated payments before Q4 closing through automated compliance reporting</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
              <span>Built institutional capability: Created repeatable frameworks that continue generating value without ongoing effort</span>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed text-lg italic">
          </p>
        </div>

      </div>
    </main>
  );
}
