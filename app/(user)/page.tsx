import FaqsSection from "@/components/(user)/FaqsSection";
import GameHeroSection from "@/components/(user)/HeroSection";
import { HitShotButton } from "@/components/base/HitShotButton";
import { HitShotSectionWrapper } from "@/components/base/HitShotSectionWrapper";
import { HitShotText } from "@/components/base/HitShotText";
import { HitShotTitle } from "@/components/base/HitShotTitle";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <GameHeroSection></GameHeroSection>
      <FaqsSection></FaqsSection>
    </>
  );
}
