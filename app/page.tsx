import Hero from "@/components/sections/hero";
import RoadmapAndDish from "@/components/sections/roadmap-and-dish";
import MealsCarousel from "@/components/sections/meals-carousel";
import SubscriptionModel from "@/components/sections/subscription-model";
import FitnessAssessment from "@/components/sections/fitness-assessment";
import ContactSection from "@/components/sections/contact";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-background ">
      <Navigation />
      <Hero />
      <RoadmapAndDish />
      <MealsCarousel />
      <SubscriptionModel />
      <FitnessAssessment />
      <ContactSection />
    </main>
  );
}
