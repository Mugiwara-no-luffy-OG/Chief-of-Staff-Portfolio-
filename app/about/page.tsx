import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-secondary font-bold tracking-widest text-sm uppercase mb-4">About</h2>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
            Strategic Operator for High-Growth Environments
          </h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I operate as an extension of the CEO — translating ambiguity into structured execution, transforming manual workflows into scalable systems, and ensuring strategic priorities move with precision and velocity.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            My work spans financial modeling, automation architecture, HR systems design, analytics infrastructure, and strategic planning across multi-department organizations.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            I specialize in identifying operational blind spots, designing repeatable processes, and building the internal infrastructure required for sustainable scale.
          </p>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          <Link href="/projects" className="bg-white border border-border text-foreground px-8 py-4 rounded-full font-medium hover:border-primary transition-all text-center">
            View Strategic Portfolio
          </Link>
          <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all text-center">
            Work with me
          </Link>
        </div>
      </section>
    </main>
  );
}