import React from "react";
import { Header } from "@/components/layout/Header";
import { ShareActions } from "@/components/engagement/ShareActions";
import { ReadingIndex } from "@/components/engagement/ReadingIndex";
import { FasciaConnectionSection } from "@/components/engagement/FasciaConnectionSection";
import { BodyAwarenessChecklist } from "@/components/engagement/BodyAwarenessChecklist";
import { NeuropathySnaQuestionnaire } from "@/components/engagement/NeuropathySnaQuestionnaire";
import { GuideLeadCard } from "@/components/engagement/GuideLeadCard";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { WelcomingGuideSection } from "@/components/sections/WelcomingGuideSection";
import { CampaignIdentitySection } from "@/components/sections/CampaignIdentitySection";
import { LucyStorySection } from "@/components/sections/LucyStorySection";
import { VideoTestimonialsSection } from "@/components/sections/VideoTestimonialsSection";
import { MethodBridgeSection } from "@/components/sections/MethodBridgeSection";
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
    <div className="flex min-h-screen flex-col pb-20 lg:pb-0">
      <Header />
      <ReadingIndex />
      <main className="reader-friendly flex-1">
        <HeroSection />
        <WelcomingGuideSection />
        <CampaignIdentitySection />
        <DatesPurposeSection />
        <DiabetesSection />
        <MenHealthSection />
        <FasciaConnectionSection />
        <GuideLeadCard />
        <LucyStorySection />
        <VideoTestimonialsSection />
        <NeuropathySection />
        <MethodBridgeSection />
        <BodyAwarenessSection />
        <FaqSection />
        <ShareSection />
        <NeuropathySnaQuestionnaire />
        <BodyAwarenessChecklist />
        <ReferencesSection />
      </main>
      <Footer />
      <ShareActions />
    </div>
  );
}
