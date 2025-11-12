"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(
      0,
      0
    ); /** @bug mobile view scrolls to chart section onload **/
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-2xl text-primary">Brand Name</div>

          <div className="hidden md:flex gap-8 text-sm">
            <a
              href="#roadmap"
              className="text-foreground/70 hover:text-foreground transition"
            >
              Plan
            </a>
            <a
              href="#meals"
              className="text-foreground/70 hover:text-foreground transition"
            >
              Meals
            </a>
            <a
              href="#subscription"
              className="text-foreground/70 hover:text-foreground transition"
            >
              Subscribe
            </a>
            <a
              href="#contact"
              className="text-foreground/70 hover:text-foreground transition"
            >
              Contact
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a
              href="#roadmap"
              className="block py-2 text-foreground/70 hover:text-foreground"
            >
              Plan
            </a>
            <a
              href="#meals"
              className="block py-2 text-foreground/70 hover:text-foreground"
            >
              Meals
            </a>
            <a
              href="#subscription"
              className="block py-2 text-foreground/70 hover:text-foreground"
            >
              Subscribe
            </a>
            <a
              href="#contact"
              className="block py-2 text-foreground/70 hover:text-foreground"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
