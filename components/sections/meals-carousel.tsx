"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Menus from "@/components/sections/menus";

const mealsData = [
  {
    id: 1,
    name: "Grilled Chicken Bowl",
    description:
      "Perfectly seasoned grilled chicken with brown rice and seasonal vegetables",
    macro: "P: 42g | C: 48g | F: 8g",
  },
  {
    id: 2,
    name: "Buddha Bowl Deluxe",
    description:
      "Chickpeas, sweet potato, kale, and tahini dressing for complete nutrition",
    macro: "P: 15g | C: 52g | F: 14g",
  },
  {
    id: 3,
    name: "Turkey Meatballs",
    description:
      "Lean ground turkey meatballs with zucchini noodles and marinara",
    macro: "P: 40g | C: 28g | F: 9g",
  },
  {
    id: 4,
    name: "Tofu Stir Fry",
    description: "Crispy tofu with broccoli, snap peas, and ginger-soy sauce",
    macro: "P: 22g | C: 35g | F: 11g",
  },
  {
    id: 5,
    name: "Salmon Teriyaki",
    description: "Fresh salmon fillet with teriyaki glaze and jasmine rice",
    macro: "P: 39g | C: 44g | F: 13g",
  },
];

export default function MealsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + mealsData.length) % mealsData.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % mealsData.length);
  };

  return (
    <section
      id="meals"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className="opacity-0 animate-fade-in"
          style={{
            animation: isVisible ? "fadeIn 0.6s ease-out forwards" : "none",
          }}
        >
          <h2 className="text-4xl font-heading font-bold text-center mb-4 text-foreground">
            A Glimpse of Our Meals
          </h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Explore our diverse menu of healthy, delicious meals crafted to keep
            you on track with your fitness goals.
          </p>
        </div>

        <div className="relative">
          <div className="flex items-center justify-between gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full border-primary text-primary hover:bg-primary/10 bg-transparent transition-all hover:scale-110"
              aria-label="Previous meal"
            >
              <ChevronLeft size={24} />
            </Button>

            <div className="flex-1 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(3)].map((_, i) => {
                  const index = (currentIndex + i) % mealsData.length;
                  const meal = mealsData[index];
                  return (
                    <div
                      key={meal.id}
                      className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all opacity-0 animate-scale-in cursor-pointer hover:scale-105"
                      style={{
                        animation: `scaleIn 0.6s ease-out ${i * 0.1}s forwards`,
                      }}
                    >
                      <div className="w-full h-40 bg-muted rounded-lg flex items-center justify-center hover:bg-muted/80 transition">
                        <span className="text-muted-foreground text-sm">
                          Meal image
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-lg text-foreground mt-4">
                        {meal.name}
                      </h3>
                      <p className="text-sm text-foreground/70 mt-2">
                        {meal.description}
                      </p>
                      <p className="text-xs font-mono text-primary bg-primary/5 p-2 rounded mt-4">
                        {meal.macro}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-primary text-primary hover:bg-primary/10 bg-transparent transition-all hover:scale-110"
              aria-label="Next meal"
            >
              <ChevronRight size={24} />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {mealsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition ${
                  index === currentIndex ? "bg-primary w-8" : "bg-border w-2"
                }`}
                aria-label={`Go to meal ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <Menus />
      </div>
    </section>
  );
}
