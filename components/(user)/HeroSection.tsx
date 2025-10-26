"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { ArrowLeft, ArrowRight, Calendar, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { HitShotTitle } from "../base/HitShotTitle";
import { HitShotButton } from "../base/HitShotButton";
import { HitShotText } from "../base/HitShotText";

const gamesData = [
  {
    id: "1",
    title: "The Witcher 3",
    description:
      "The Witcher 3: Wild Hunt Is An Open-World RPG Where Players Follow Geralt Of Rivia, A Monster Hunter, In His Quest To Find His Adopted Daughter, Ciri. Set In A Richly Detailed And Expansive World, The Game Offers A Deep Narrative And Complex Choices That Affect The Game's Outcome.",
    rating: 93,
    maxRating: 100,
    releaseDate: "May 19, 2015",
    platforms: ["PC", "Ps 4", "Xbox One"],
    genre: "Action RPG",
    backgroundImage: "/images/witcher-slide1.png",
  },
  {
    id: "2",
    title: "Cyberpunk 2077",
    description:
      "Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamour, and ceaseless body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant.",
    rating: 86,
    maxRating: 100,
    releaseDate: "Dec 10, 2020",
    platforms: ["PC", "Ps 4", "Xbox One"],
    genre: "Action RPG",
    backgroundImage: "/images/witcher-slide2.png",
  },
  {
    id: "3",
    title: "Red Dead Redemption 2",
    description:
      "Red Dead Redemption 2 is an epic tale of life in America's unforgiving heartland. The game's vast and atmospheric world provides the foundation for a brand new online multiplayer experience. Follow Arthur Morgan and the Van der Linde gang as they fight to survive in a changing world.",
    rating: 97,
    maxRating: 100,
    releaseDate: "Oct 26, 2018",
    platforms: ["PC", "Ps 4", "Xbox One"],
    genre: "Action Adventure",
    backgroundImage: "/images/witcher-slide3.png",
  },
  {
    id: "4",
    title: "Elden Ring",
    description:
      "Elden Ring is a fantasy action-RPG adventure set within a world created by Hidetaka Miyazaki and George R. R. Martin. Explore a vast, seamless world filled with danger and discovery. Forge your own path through the Lands Between and become the Elden Lord.",
    rating: 96,
    maxRating: 100,
    releaseDate: "Feb 25, 2022",
    platforms: ["PC", "Ps 4", "Ps 5", "Xbox One"],
    genre: "Action RPG",
    backgroundImage: "/images/witcher-slide4.png",
  },
  {
    id: "5",
    title: "God of War Ragnarök",
    description:
      "God of War Ragnarök is an action-adventure game where Kratos and Atreus embark on a mythic journey for answers before Ragnarök arrives. Together they must explore stunning realms and face fearsome enemies in the form of Norse gods and monsters as the twilight of the gods approaches.",
    rating: 94,
    maxRating: 100,
    releaseDate: "Nov 9, 2022",
    platforms: ["Ps 4", "Ps 5"],
    genre: "Action Adventure",
    backgroundImage: "/images/witcher-slide5.png",
  },
];

export default function GameHeroSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const swiperRef = useRef<any>(null);

  const game = gamesData[activeIndex];

  return (
    <>
      <MobileHeroSection
        game={game}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        swiperRef={swiperRef}
      />
      <DesktopHeroSection
        game={game}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        swiperRef={swiperRef}
      />
    </>
  );
}

const MobileHeroSection = ({
  game,
  activeIndex,
  setActiveIndex,
swiperRef,
}: {
  game: (typeof gamesData)[0];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  swiperRef: React.RefObject<any>;
}) => {
  return (
    <section
      className="
      sm:hidden block
      !bg-cover !bg-right
      relative w-full overflow-hidden items-center justify-center"
      style={{
        background: `url(${"/images/hero-bg.png"}) no-repeat`,
      }}
    >
      {/* Content Container */}
      <div className="container relative h-[600px] my-auto mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 h-full items-center justify-center">
          {/* Left Side - Game Info */}
          <div className="space-y-3 z-10 w-full flex flex-col items-center">
            {/* arrow buttons */}
            <div className="flex flex-row w-full justify-between gap-3 text-white items-center mb-14">
              <span
                className="flex justify-center items-center rounded-md border-foreground size-12 border-1
                  cursor-pointer
                  "
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <ArrowLeft size={24}></ArrowLeft>
              </span>
              <span
                className="flex justify-center items-center rounded-md border-foreground size-12 border-1
                  cursor-pointer"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <ArrowRight size={24}></ArrowRight>
              </span>
            </div>
            <HitShotTitle as="h1" color="default">
              {game.title}
            </HitShotTitle>

            {/* Rating and Date */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Rating Badge */}
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="">
                    <div className="text-center flex flex-row items-center gap-4">
                      <HitShotText
                        as="span"
                        className="text-white w-8 h-8 items-center justify-center transform -rotate-45 rounded-full border-yellow-400 border-2 inline-flex shrink-0 "
                      >
                        m
                      </HitShotText>
                      <div>
                        <HitShotText
                          as="span"
                          size="large"
                          className="text-yellow-400 font-semibold"
                        >
                          {game.rating}
                        </HitShotText>
                        <HitShotText as="span" size="small" className="">
                          /{game.maxRating}
                        </HitShotText>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Release Date */}
              <div className="flex items-center gap-2 px-4 py-2">
                <Calendar className="size-7 text-muted-foreground" />
                <HitShotText as="p" size="small">
                  {game.releaseDate}
                </HitShotText>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 w-full">
              <HitShotButton rounded="xl" className="w-full">
                Buy Now
              </HitShotButton>
              <HitShotButton variant="outline" rounded="xl" className="w-full">
                Game review
              </HitShotButton>
            </div>
          </div>

          {/* Right Side - Popular Games Carousel */}
          <div className="flex w-full mt-10">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={16}
              slidesPerView={4}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              // navigation
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className=" w-3/5"
            >
              {gamesData.map((popGame, index) => (
                <SwiperSlide key={popGame.id}>
                  <Card
                    className={`flex shrink-0 w-full group cursor-pointer overflow-hidden transition-all rounded-full duration-300 p-0`}
                    onClick={() => {
                      setActiveIndex(index);
                      swiperRef.current?.slideToLoop(index);
                    }}
                  >
                    <div
                      className={`mt-auto ${
                        index === activeIndex
                          ? "bg-primary h-[12px] rounded-sm"
                          : "bg-primary h-[8px] rounded-full"
                      }`}
                    ></div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
const DesktopHeroSection = ({
  game,
  activeIndex,
  setActiveIndex,
  swiperRef,
}: {
  game: (typeof gamesData)[0];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  swiperRef: React.RefObject<any>;
}) => {
  return (
    <section
      className="!bg-cover bg-center hidden sm:block relative w-full h-[calc(100vh+100px)] overflow-hidden"
      style={{
        background: `url(${"/images/hero-bg.png"}) no-repeat`,
      }}
    >
      {/* Content Container */}
      <div className="container relative h-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center">
          {/* Left Side - Game Info */}
          <div className="space-y-6 z-10 w-full sm:w-4/5">
            <HitShotTitle as="h1" color="default">
              {game.title}
            </HitShotTitle>

            <HitShotText as="p" size="normal" className="hidden sm:block">
              {game.description}
            </HitShotText>

            {/* Rating and Date */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Rating Badge */}
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="">
                    <div className="text-center flex flex-row items-center gap-4">
                      <HitShotText
                        as="span"
                     className="text-white w-8 h-8 items-center justify-center transform -rotate-45 rounded-full border-yellow-400 border-2 inline-flex shrink-0 "
                      >
                        m
                      </HitShotText>
                      <div>
                        <HitShotText
                          as="span"
                          size="large"
                          className="text-yellow-400 font-semibold"
                        >
                          {game.rating}
                        </HitShotText>
                        <HitShotText as="span" size="small" className="">
                          /{game.maxRating}
                        </HitShotText>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Release Date */}
              <div className="flex items-center gap-2 px-4 py-2">
                <Calendar className="size-10 text-muted-foreground" />
                <HitShotText as="p" size="normal">
                  {game.releaseDate}
                </HitShotText>
              </div>
            </div>

            {/* Available For & Genre */}
            <div className="space-y-3 hidden sm:block">
              <div className="flex items-center gap-4 flex-wrap">
                <div>
                  <HitShotTitle as="h6" color="default">
                    Available For:
                  </HitShotTitle>

                  <HitShotText as="p" size="small">
                    {game.platforms.join(" - ")}
                  </HitShotText>
                </div>

                <div>
                  <HitShotTitle as="h6" color="default">
                    Genre:
                  </HitShotTitle>

                  <HitShotText as="p" size="small">
                    {game.genre}
                  </HitShotText>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                {game.platforms.map((platform) => (
                  <Badge
                    key={platform}
                    variant="outline"
                    className="text-xs px-4 py-2 border-white text-white
                    
                    "
                  >
                    {platform}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 flex-wrap">
              <HitShotButton rounded="xl">Buy Now</HitShotButton>
              <HitShotButton variant="outline" rounded="xl">
                Game review
              </HitShotButton>
            </div>
          </div>

          {/* Right Side - Popular Games Carousel */}
          <div className="hidden lg:flex items-end justify-end h-full pb-20">
            <div className="w-full max-w-2xl">
              <div className="mb-4 flex flex-row justify-between items-center">
                <h3 className="text-xl font-bold">
                  The Most <span className="text-primary">Popular</span> Games
                </h3>

                <div className="flex flex-row gap-3 text-white items-center">
                  <span
                    className="flex justify-center items-center rounded-md border-foreground size-12 border-1
                  cursor-pointer
                  "
                    onClick={() => swiperRef.current?.slidePrev()}
                  >
                    <ArrowLeft size={24}></ArrowLeft>
                  </span>
                  <span
                    className="flex justify-center items-center rounded-md border-foreground size-12 border-1
                  cursor-pointer"
                    onClick={() => swiperRef.current?.slideNext()}
                  >
                    <ArrowRight size={24}></ArrowRight>
                  </span>
                </div>
              </div>

              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={16}
                slidesPerView={4}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                // navigation
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                breakpoints={{
                  320: { slidesPerView: 2, spaceBetween: 12 },
                  640: { slidesPerView: 3, spaceBetween: 12 },
                  1024: { slidesPerView: 4, spaceBetween: 16 },
                  1280: { slidesPerView: 5, spaceBetween: 16 },
                }}
                className=""
              >
                {gamesData.map((popGame, index) => (
                  <SwiperSlide key={popGame.id}>
                    <Card
                      className={`group cursor-pointer overflow-hidden border-primary border-1 hover:border-primary transition-all rounded-sm duration-300 hover:shadow-e4 p-0 ${
                        index === activeIndex ? "border-2" : "border-0"
                      }`}
                      onClick={() => {
                        setActiveIndex(index);
                        swiperRef.current?.slideToLoop(index);
                      }}
                    >
                      <div
                        className={`relative overflow-hidden ${
                          index === activeIndex ? "h-[210px]" : "aspect-[3/4]"
                        }`}
                      >
                        <img
                          src={popGame.backgroundImage}
                          alt={popGame.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-xs font-semibold text-foreground line-clamp-2">
                            {popGame.title}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
