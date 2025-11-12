import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FitnessAssessment() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold text-foreground">Start With a Free Fitness Assessment</h2>

        <p className="text-lg text-foreground/70 leading-relaxed">
          We believe every body is unique. Our personalized fitness assessment helps us understand your goals, current
          fitness level, and dietary preferences so we can craft the perfect meal plan just for you.
        </p>

        <div className="bg-card rounded-lg p-8 border border-border space-y-4">
          <h3 className="font-bold text-xl text-foreground">What we'll assess:</h3>
          <ul className="text-foreground/70 space-y-2 text-left max-w-md mx-auto">
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Your fitness goals and timeline</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Current activity level and habits</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Dietary preferences and restrictions</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Medical considerations we should know about</span>
            </li>
          </ul>
        </div>

        <Button className="bg-primary hover:bg-accent text-primary-foreground px-8 py-3 text-lg rounded-full inline-flex gap-2 items-center">
          Take the Assessment
          <ArrowRight size={20} />
        </Button>
      </div>
    </section>
  )
}
