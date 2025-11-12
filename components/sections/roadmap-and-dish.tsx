"use client"

import { useEffect, useRef, useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const roadmapData = [
  { week: "Week 1", fat: 85, muscle: 15 },
  { week: "Week 2", fat: 82, muscle: 18 },
  { week: "Week 3", fat: 79, muscle: 21 },
  { week: "Week 4", fat: 76, muscle: 24 },
  { week: "Week 5", fat: 73, muscle: 27 },
  { week: "Week 6", fat: 69, muscle: 31 },
  { week: "Week 7", fat: 65, muscle: 35 },
  { week: "Week 8", fat: 60, muscle: 40 },
]

export default function RoadmapAndDish() {
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
    <section id="roadmap" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Roadmap Chart */}
          <div
            ref={ref}
            className="space-y-4 opacity-0 animate-slide-in-left"
            style={{ animation: isVisible ? "slideInLeft 0.7s ease-out forwards" : "none" }}
          >
            <h2 className="text-4xl font-heading font-bold text-foreground">Your Fat-to-Fit Journey</h2>
            <p className="text-foreground/70 leading-relaxed">
              Track your progress through our personalized fat-to-fit plan. Watch as you build lean muscle while
              reducing body fat over 8 weeks of tailored nutrition.
            </p>
            {isVisible && (
              <div
                className="bg-card rounded-lg p-6 border border-border opacity-0 animate-scale-in"
                style={{ animation: "scaleIn 0.6s ease-out forwards" }}
              >
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={roadmapData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                    <XAxis dataKey="week" stroke="var(--color-muted-foreground)" />
                    <YAxis stroke="var(--color-muted-foreground)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--color-card)",
                        border: `1px solid var(--color-border)`,
                        borderRadius: "8px",
                      }}
                      labelStyle={{ color: "var(--color-foreground)" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="fat"
                      stroke="var(--color-chart-1)"
                      strokeWidth={3}
                      dot={false}
                      name="Body Fat %"
                    />
                    <Line
                      type="monotone"
                      dataKey="muscle"
                      stroke="var(--color-chart-2)"
                      strokeWidth={3}
                      dot={false}
                      name="Lean Muscle %"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>

          {/* Dish of the Week */}
          <div
            className="space-y-4 opacity-0 animate-slide-in-right"
            style={{ animation: isVisible ? "slideInRight 0.7s ease-out forwards" : "none" }}
          >
            <h3 className="text-3xl font-heading font-bold text-foreground">Dish of the Week</h3>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 border-2 border-primary/30 space-y-4 hover:border-primary/50 transition-colors">
              <div className="w-32 h-32 bg-muted rounded-lg flex items-center justify-center mx-auto">
                <span className="text-muted-foreground text-sm text-center">Fresh plate image</span>
              </div>
              <h4 className="text-2xl font-heading font-bold text-center text-foreground">
                Grilled Salmon with Quinoa
              </h4>
              <p className="text-center text-foreground/70">
                Omega-3 rich salmon paired with protein-packed quinoa, roasted vegetables, and our signature lime-herb
                dressing.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center pt-4">
                <div className="bg-card rounded p-3 hover:bg-primary/5 transition">
                  <p className="text-xs text-muted-foreground">Protein</p>
                  <p className="font-heading font-bold text-primary">38g</p>
                </div>
                <div className="bg-card rounded p-3 hover:bg-primary/5 transition">
                  <p className="text-xs text-muted-foreground">Carbs</p>
                  <p className="font-heading font-bold text-primary">42g</p>
                </div>
                <div className="bg-card rounded p-3 hover:bg-primary/5 transition">
                  <p className="text-xs text-muted-foreground">Fat</p>
                  <p className="font-heading font-bold text-primary">12g</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
