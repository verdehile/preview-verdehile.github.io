"use client"

import { useRef, useEffect, useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  "Choose your meals from our ever-growing menu",
  "Set dates and times for delivery that work for you",
  "Change dishes guilt-free (2-day notice)",
  "Personalized agent tracks progress via WhatsApp & Calendar",
  "Unlimited modifications and adjustments",
]

export default function SubscriptionModel() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="subscription" className="py-20 px-4 sm:px-6 lg:px-8 bg-background" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div
          className="opacity-0 animate-fade-in"
          style={{ animation: isVisible ? "fadeIn 0.6s ease-out forwards" : "none" }}
        >
          <h2 className="text-4xl font-heading font-bold text-center mb-4 text-foreground">
            The Healthy Food Difference
          </h2>
          <p className="text-center text-foreground/70 mb-12">
            Everything you need to reach your fitness goals without the hassle
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 items-start opacity-0 animate-slide-in-left"
                style={{ animation: isVisible ? `slideInLeft 0.7s ease-out ${index * 0.1}s forwards` : "none" }}
              >
                <div className="flex-shrink-0 mt-1">
                  <Check className="text-primary" size={24} />
                </div>
                <p className="text-foreground/80 text-lg">{feature}</p>
              </div>
            ))}
          </div>

          <div
            className="bg-gradient-to-br from-primary to-accent rounded-lg p-8 text-primary-foreground space-y-6 flex flex-col justify-between opacity-0 animate-slide-in-right shadow-xl hover:shadow-2xl transition-shadow"
            style={{ animation: isVisible ? "slideInRight 0.7s ease-out forwards" : "none" }}
          >
            <div>
              <p className="text-5xl font-heading font-bold mb-2">$14</p>
              <p className="text-lg opacity-90">per day</p>
              <p className="text-sm opacity-75 mt-4">Billed monthly for best value</p>
            </div>

            <div className="space-y-4">
              <p className="text-sm leading-relaxed opacity-90">
                Never settle for unhealthy takeout again. Get restaurant-quality nutrition delivered to your door on
                your schedule.
              </p>
              <Button className="w-full bg-primary-foreground text-primary hover:bg-secondary text-base py-3 font-heading font-600 hover:scale-105 transition-transform">
                Subscribe Now
              </Button>
              <p className="text-xs text-center opacity-75">7-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
