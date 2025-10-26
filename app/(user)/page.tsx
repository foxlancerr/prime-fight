import BlogsSection from "@/components/(user)/BlogsSection";
import CategriesSection from "@/components/(user)/CategriesSection";
import FaqsSection from "@/components/(user)/FaqsSection";
import GamesFilterSection from "@/components/(user)/GamesFilterSection";
import GameHeroSection from "@/components/(user)/HeroSection";
import TrendingGamesSection from "@/components/(user)/TrendingGamesSection";
import UpcommingGamesSection from "@/components/(user)/UpcommingGamesSection";

export default function Home() {
  return (
    <>
      <GameHeroSection></GameHeroSection>
      <CategriesSection></CategriesSection>
      <TrendingGamesSection></TrendingGamesSection>
      <GamesFilterSection></GamesFilterSection>
      <BlogsSection></BlogsSection>
      <UpcommingGamesSection></UpcommingGamesSection>

      <FaqsSection></FaqsSection>
    </>
  );
}
