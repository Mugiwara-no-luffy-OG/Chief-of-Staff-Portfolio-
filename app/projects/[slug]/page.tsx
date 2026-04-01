"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";

interface Project {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  imageUrl: string;
  tags: string[];
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Strategic Projects
          </h1>
          <p className="text-gray-600 max-w-3xl text-lg">
            A selection of operational frameworks, automation systems, and financial models architected for scale.
            <br />
            Real projects, real impact. Fictitious data to ensure privacy.
          </p>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="text-gray-400">Loading initiatives...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link href={`/projects/${project.slug}`} key={project.slug}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  className="group bg-white border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all cursor-pointer h-full"
                >
                  <div className="h-48 overflow-hidden bg-gray-100">
                    <img 
                      src={project.imageUrl} 
                      alt={project.name} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-secondary uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-3 text-foreground">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="text-xs bg-background border border-border px-2 py-1 rounded text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <span className="text-sm font-medium text-primary group-hover:translate-x-2 inline-block transition-transform">
                        View Case Study →
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}