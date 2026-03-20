import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Section 1: Introduction */}
      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <div className="space-y-8">
          <div>
            <h2 className="text-secondary font-bold tracking-widest text-sm uppercase mb-4">Chief of Staff</h2>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight">
              Anaïs Azilinon
            </h1>
          </div>
          
          <div className="max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-medium text-primary mb-6">
              Operationalizing Strategy. Accelerating Execution. <br />
              <span className="text-foreground">Enabling CEOs to Move Faster.</span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Chief of Staff with experience architecting automation systems, financial governance frameworks, cross-functional roadmaps, and executive-level reporting infrastructures to scale high-growth organizations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects" className="bg-white border border-border text-foreground px-8 py-4 rounded-full font-medium hover:border-primary transition-all text-center">
                View Strategic Portfolio
              </Link>
              <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all text-center">
                Work with me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Executive Summary */}
      <section className="py-20 bg-white border-y border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h4 className="font-serif text-3xl font-bold text-foreground">
                Strategic Operator for High-Growth Environments
              </h4>
            </div>
            <div className="md:col-span-8 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I operate as an extension of the CEO — translating ambiguity into structured execution, transforming manual workflows into scalable systems, and ensuring strategic priorities move with precision and velocity.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My work spans financial modeling, automation architecture, HR systems design, analytics infrastructure, and strategic planning across multi-department organizations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I specialize in identifying operational blind spots, designing repeatable processes, and building the internal infrastructure required for sustainable scale.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}