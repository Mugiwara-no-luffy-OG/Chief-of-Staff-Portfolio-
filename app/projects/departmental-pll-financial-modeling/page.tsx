import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DepartmentalPLLFinancialModeling() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-40 pb-8">
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-6">
          Departmental P&L Financial Modeling
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Content coming soon.
        </p>
      </div>
    </main>
  );
}