import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";

export default function SalesDepartmentPerformanceTrackerPage() {
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
            Sales & Revenue
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Sales Department Performance Tracker
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Transforming fragmented sales data into a dynamic, executive-ready intelligence system—eliminating manual reporting errors while enabling real-time risk assessment and pipeline forecasting.
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="/images/sales-department-performance-tracker.jpg"
            alt="Sales Department Performance Tracker - Real-time pipeline dashboard" 
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
              src="https://www.youtube.com/embed/d1B9PkRxmWE"
              title="Sales Department Performance Tracker - Project Demo"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-sm text-gray-500 mt-4">
            *Demo video with anonymized data • Built with Google Sheets, Google Workspace, and dynamic formula architecture
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
              The sales leadership team lacked a unified, accurate view of pipeline health. Sales system had not been updated in 4 years which led to critical discrepancies between CRM system and excel reporting. Sales managers spent hours manually reconciling numbers instead of focusing on deal strategy.
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
              Enable data-driven sales leadership by creating a single source of truth for pipeline visibility. The dashboard needed to:
            </p>
            <ul className="space-y-2 text-gray-700 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                <span>Accurately identify truly at-risk deals using weighted risk scoring (age + stage)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                <span>Provide real-time pipeline breakdowns by stage and rep with zero manual intervention</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                <span>Support executive decision-making with clean, formatted metrics that update automatically when source data changes</span>
              </li>
            </ul>
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
              <span className="px-3 py-1 bg-background border border-border rounded-full text-sm text-gray-700">Google Workspace</span>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-foreground mb-3">Approach</h3>
            <p className="text-gray-700 leading-relaxed">
              Created system from scratch to replace the outdated infrastructure.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3">Constraints</h3>
            <ul className="space-y-2 text-gray-700 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                <span>Zero budget for external tools or additional headcount</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                <span>Must preserve existing data structure while fixing underlying logic</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                <span>All formulas must be dynamic—no hardcoded values that break when dates or reps change</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                <span>Risk assessment must balance quantitative (days) and qualitative (stage) factors without over-indexing on either</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Measured Impact */}
        <div className="mt-12 bg-white rounded-2xl border border-border p-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">
            Measured Impact
          </h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
              <span><strong>100% formula reliability:</strong> Eliminated all #REF!, #VALUE!, and date-parsing errors across hundreds of interconnected cells</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
              <span><strong>Dynamic reporting:</strong> Analysis date can be modified in a single location to re-analyze pipeline at any point—no formula edits required</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
              <span><strong>Accurate risk identification:</strong> At-Risk section now flags only genuinely concerning deals (4 high-priority vs. 19 false positives), enabling focused intervention</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
              <span><strong>Time savings:</strong> Reduced manual reconciliation from ~3 hours/week to zero—dashboard updates automatically when source data refreshes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
              <span><strong>Executive clarity:</strong> Pipeline metrics by stage and representative now display precise counts and monetary values totaling $1.7M with professional formatting</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
              <span><strong>Scalable framework:</strong> Risk assessment methodology and data structures can be adapted for future reporting needs without reconstruction</span>
            </li>
          </ul>
        </div>

        {/* Chief of Staff Impact */}
        <div className="mt-12 bg-linear-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/20 p-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">
            Chief of Staff Impact
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            This initiative demonstrates how operational rigor in spreadsheet architecture directly enables strategic sales execution:
          </p>
          <ul className="space-y-3 text-gray-700 leading-relaxed mb-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
              <span>Restored decision-making confidence by rebuilding a broken, error-filled dashboard into a trusted executive tool through systematic diagnosis of root causes rather than surface-level fixes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
              <span>Eliminated operational drag by automating risk assessment—leadership now sees only the 4 deals requiring attention instead of manually reviewing 20, with color-coded urgency and quantified risk scores</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
              <span>Built institutional capability by creating repeatable patterns for dynamic date handling, weighted scoring, and cross-tab data integration applicable to forecasting, compensation tracking, or territory planning without consultant support or new software</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
              <span>Accelerated strategic focus by guaranteeing data accuracy and automatic updates, enabling the sales leadership team to shift from "Are these numbers right?" to "Which deals do we prioritize this week?"—turning operational maintenance into competitive advantage</span>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed text-lg italic">
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-8 border-t border-gray-200">
          <Link 
            href="/contact"
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium inline-block"
          >
            Discuss Similar Project
          </Link>
          <Link 
            href="/projects"
            className="px-6 py-3 border border-border rounded-lg hover:bg-background transition-colors font-medium inline-block"
          >
            View All Projects
          </Link>
        </div>

      </div>
    </main>
  );
}