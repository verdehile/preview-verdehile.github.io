"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import Lottie from "lottie-react";
import yogaDog from "@/public/yoga-dog.json";

const style = {
  height: 200,
};

// const interactivity = {
//   mode: "scroll",
//   actions: [
//     {
//       visibility: [0, 0.2],
//       type: "stop",
//       frames: [0],
//     },
//     {
//       visibility: [0.2, 0.45],
//       type: "seek",
//       frames: [0, 45],
//     },
//     {
//       visibility: [0.45, 1.0],
//       type: "loop",
//       frames: [45, 60],
//     },
//   ],
// };

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle top gradient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-linear-to-b from-primary/20 to-transparent rounded-full blur-3xl opacity-40"></div>
        {/* Animated floating orbs */}
        <div
          className="absolute top-20 right-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="absolute bottom-10 left-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl opacity-0 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        ></div>

        {/* Geometric accent lines */}
        {/* <div
          className="absolute top-32 right-20 w-48 h-1 bg-gradient-to-r from-primary/30 to-transparent opacity-0 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        ></div>
        <div
          className="absolute bottom-32 left-20 w-40 h-1 bg-gradient-to-r from-accent/30 to-transparent opacity-0 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        ></div> */}
      </div>
      <div className="max-w-4xl w-full text-center space-y-8 relative z-10">
        <div
          className={`${isLoaded ? "animate-fade-in" : "opacity-0"}`}
          style={{
            animationDelay: "0.1s",
          }}
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-heading font-bold text-foreground mb-4 tracking-tight">
            Brand
            <br />
            Name
          </h1>
          <div className="w-32 h-1.5 bg-linear-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>
        <div
          className={`${isLoaded ? "animate-fade-in" : "opacity-0"}`}
          style={{
            animationDelay: "0.3s",
          }}
        >
          <p className="text-2xl sm:text-3xl font-heading font-600 text-primary">
            Personalized Nutrition Delivery
          </p>
        </div>
        <Lottie
          animationData={yogaDog}
          style={style}
          // interactivity={interactivity}
        />
        <div
          className={`${isLoaded ? "animate-fade-in" : "opacity-0"}`}
          style={{
            animationDelay: "0.5s",
          }}
        >
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Get fit on your schedule. Personalized meal plans, flexible
            delivery, and a dedicated agent to keep you on track. No more
            guessing about macros or calories.
          </p>
        </div>

        <div
          className={`${
            isLoaded ? "animate-fade-in" : "opacity-0"
          } flex flex-col sm:flex-row gap-4 justify-center`}
          style={{
            animationDelay: "0.7s",
          }}
        >
          <Button className="bg-primary hover:bg-accent text-primary-foreground px-8 py-3 text-lg rounded-full font-heading font-600 shadow-lg hover:shadow-xl transition-all">
            Start Your Journey
          </Button>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-secondary px-8 py-3 text-lg rounded-full bg-transparent font-heading font-600"
          >
            Learn More
          </Button>
        </div>

        <div
          className="pt-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.9s" }}
        >
          <div className="flex justify-center">
            <div className="animate-float">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
