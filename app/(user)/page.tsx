import BlogsSection from "@/components/(user)/BlogsSection";
import CategriesSection from "@/components/(user)/CategriesSection";
import FaqsSection from "@/components/(user)/FaqsSection";
import GameExperienceSection from "@/components/(user)/GameExperienceSection";
import GameOfTheMonthSection from "@/components/(user)/GameOfMonthSection";
import GameReviewsSection from "@/components/(user)/GameReviewSection";
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
      <GameOfTheMonthSection></GameOfTheMonthSection>
      <GamesFilterSection></GamesFilterSection>
      <GameReviewsSection></GameReviewsSection>
      <BlogsSection></BlogsSection>
      <GameExperienceSection></GameExperienceSection>
      <UpcommingGamesSection></UpcommingGamesSection>

      <FaqsSection></FaqsSection>
    </>
  );
}
