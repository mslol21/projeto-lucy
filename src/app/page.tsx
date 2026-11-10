import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { DatesPurposeSection } from "@/components/sections/DatesPurposeSection";
import { DiabetesSection } from "@/components/sections/DiabetesSection";
import { NeuropathySection } from "@/components/sections/NeuropathySection";
import { MenHealthSection } from "@/components/sections/MenHealthSection";
import { BodyAwarenessSection } from "@/components/sections/BodyAwarenessSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ShareSection } from "@/components/sections/ShareSection";
import { ReferencesSection } from "@/components/sections/ReferencesSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <DatesPurposeSection />
        <DiabetesSection />
        <NeuropathySection />
        <MenHealthSection />
        <BodyAwarenessSection />
        <FaqSection />
        <ShareSection />
        <ReferencesSection />
      </main>
      <Footer />
    </div>
  );
}
