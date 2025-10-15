"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Calendar, Gamepad2 } from "lucide-react";
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
    backgroundImage:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1920&h=1080&fit=crop",
    popularGames: [
      {
        id: "p1",
        title: "The Witcher 3",
        image:
          "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=400&fit=crop",
      },
      {
        id: "p2",
        title: "RED DEAD REDEMPTION",
        image:
          "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=400&fit=crop",
      },
      {
        id: "p3",
        title: "THE LAST OF US PART II",
        image:
          "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=400&fit=crop",
      },
      {
        id: "p4",
        title: "GHOST OF TSUSHIMA",
        image:
          "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=400&fit=crop",
      },
      {
        id: "p5",
        title: "GOD OF WAR",
        image:
          "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=300&h=400&fit=crop",
      },
    ],
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
    backgroundImage:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1920&h=1080&fit=crop",
    popularGames: [
      {
        id: "p1",
        title: "Cyberpunk 2077",
        image:
          "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=400&fit=crop",
      },
      {
        id: "p2",
        title: "Deus Ex",
        image:
          "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=400&fit=crop",
      },
      {
        id: "p3",
        title: "Watch Dogs",
        image:
          "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=400&fit=crop",
      },
      {
        id: "p4",
        title: "GTA V",
        image:
          "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=400&fit=crop",
      },
      {
        id: "p5",
        title: "Saints Row",
        image:
          "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=300&h=400&fit=crop",
      },
    ],
  },
];

export default function GameHeroSection() {
  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      style={{
        background: `url(${"https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1920&h=1080&fit=crop"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {gamesData.map((game) => (
          <SwiperSlide key={game.id}>
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0">
              <img
                src={game.backgroundImage}
                alt={game.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/20" />
            </div>

            {/* Content Container */}
            <div className="container relative h-full mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center">
                {/* Left Side - Game Info */}
                <div className="space-y-6 z-10">
                  <HitShotTitle as="h1" color="default">
                    {game.title}
                  </HitShotTitle>

                  <HitShotText as="p" size="normal">
                    {game.description}
                  </HitShotText>

                  {/* Rating and Date */}
                  <div className="flex items-center gap-4 flex-wrap">
                    {/* Rating Badge */}
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <div className="">
                          <div className="text-center flex flex-row items-center gap-4">
                            <span className="text-white p-1 transform -rotate-45 rounded-full border-yellow-400 border-2 inline-flex shrink-0">
                              m
                            </span>
                            <div>
                              <span className="text-yellow-400 font-semibold text-2xl">
                                {game.rating}
                              </span>
                              <span className="">/{game.maxRating}</span>
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
                  <div className="space-y-3">
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
                    <div className="flex gap-2">
                      {game.platforms.map((platform) => (
                        <Badge
                          key={platform}
                          variant="outline"
                          className="text-xs px-3 py-1 border-white text-white"
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
                    <div className="mb-4">
                      <h3 className="text-xl font-bold">
                        The Most <span className="text-primary">Popular</span>{" "}
                        Games
                      </h3>
                    </div>

                    <Swiper
                      modules={[Navigation, Autoplay]}
                      spaceBetween={16}
                      slidesPerView={4}
                      navigation
                      autoplay={{ delay: 3000, disableOnInteraction: false }}
                      loop={true}
                      breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 12 },
                        640: { slidesPerView: 3, spaceBetween: 12 },
                        1024: { slidesPerView: 4, spaceBetween: 16 },
                        1280: { slidesPerView: 5, spaceBetween: 16 },
                      }}
                      className="popular-games-swiper"
                    >
                      {game.popularGames.map((popGame) => (
                        <SwiperSlide key={popGame.id}>
                          <Card className="group cursor-pointer overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-e4">
                            <div className="relative aspect-[3/4] overflow-hidden">
                              <img
                                src={popGame.image}
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
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: hsl(var(--primary)) !important;
          width: 40px !important;
          height: 40px !important;
          background: hsl(var(--background) / 0.8);
          backdrop-filter: blur(8px);
          border-radius: 50%;
          border: 1px solid hsl(var(--border));
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px !important;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground)) !important;
        }

        .swiper-pagination-bullet {
          background: hsl(var(--muted)) !important;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          background: hsl(var(--primary)) !important;
          opacity: 1;
        }

        .popular-games-swiper .swiper-button-next,
        .popular-games-swiper .swiper-button-prev {
          width: 32px !important;
          height: 32px !important;
        }

        .popular-games-swiper .swiper-button-next:after,
        .popular-games-swiper .swiper-button-prev:after {
          font-size: 14px !important;
        }
      `}</style>
    </section>
  );
}
