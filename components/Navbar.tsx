"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-background/90 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-serif text-xl font-bold text-primary tracking-tight">
            Anaïs Azilinon
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
            <Link href="/projects" className="text-sm font-medium hover:text-primary transition-colors">Projects</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-2">
            <Link href="/" className="block text-sm font-medium hover:text-primary">Home</Link>
            <Link href="/about" className="block text-sm font-medium hover:text-primary">About</Link>
            <Link href="/projects" className="block text-sm font-medium hover:text-primary">Projects</Link>
            <Link href="/contact" className="block text-sm font-medium hover:text-primary">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}