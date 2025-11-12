"use client";

import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">
                Contact Information
              </h3>
              <p className="text-foreground/70">
                Have questions? We'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <Mail className="text-primary mt-1" size={24} />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a
                    href="mailto:hello@brandname.com"
                    className="text-primary hover:underline"
                  >
                    hello@brandname.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone className="text-primary mt-1" size={24} />
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <a
                    href="tel:+1234567890"
                    className="text-primary hover:underline"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <MapPin className="text-primary mt-1" size={24} />
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-foreground/70">
                    Dubai, United Arab Emirates
                    <br />
                    Available nationwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                required
                className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                placeholder="Tell us what you think..."
                rows={5}
                required
                className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              ></textarea>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-accent text-primary-foreground py-3 text-base"
            >
              {isSubmitted ? "Message Sent!" : "Send Message"}
            </Button>
          </form>
        </div>

        {/* Footer */}
        <div className="border-t border-border mt-12 pt-8 text-center text-foreground/60">
          <p>&copy; 2025 Healthy Food. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
