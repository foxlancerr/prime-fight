"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  ChevronRight,
  Calendar,
  ArrowRight,
  ChevronDown,
  ArrowLeft,
} from "lucide-react";
import { HitShotTitle } from "../base/HitShotTitle";
import { HitShotText } from "../base/HitShotText";
import { HitShotButton } from "../base/HitShotButton";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

const trendingGamesData = [
  {
    id: 1,
    title: "Black Myth Wukong",
    image: "/images/games/slider1.png",
    year: 2024,
    rating: 81,
    maxRating: 100,
    originalPrice: 60,
    discountedPrice: 51,
    discountPercent: 15,
  },
  {
    id: 2,
    title: "Alan Wake 2",
    image: "/images/games/slider2.png",

    year: 2024,
    rating: 86,
    maxRating: 100,
    originalPrice: 40,
    discountedPrice: 32,
    discountPercent: 20,
  },
  {
    id: 3,
    title: "Elden Ring",
    image: "/images/games/slider3.png",

    year: 2023,
    rating: 96,
    maxRating: 100,
    originalPrice: 60,
    discountedPrice: 45,
    discountPercent: 25,
  },
  {
    id: 4,
    title: "God of War Ragnarök",
    image: "/images/games/slider4.png",

    year: 2023,
    rating: 94,
    maxRating: 100,
    originalPrice: 70,
    discountedPrice: 56,
    discountPercent: 20,
  },
  {
    id: 5,
    title: "Cyberpunk 2077",
    image: "/images/games/slider5.png",

    year: 2024,
    rating: 86,
    maxRating: 100,
    originalPrice: 50,
    discountedPrice: 40,
    discountPercent: 20,
  },
];

export default function TrendingGamesSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Container */}
      <div className="container relative h-full py-20 sm:py-12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:gap-4">
          {/* Header */}
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row gap-5">
              <HitShotTitle as="h3" color="default">
                Trending Games
              </HitShotTitle>

              {/* Mobile "View All" */}
              <div className="flex items-center gap-2 text-primary">
                <HitShotText as="span" size="xsmall">
                  View All
                </HitShotText>
                <span>
                  <ChevronDown size={20} />
                </span>
              </div>
            </div>

            {/* Arrow buttons (desktop only) */}
            <div className="hidden sm:flex flex-row gap-3 text-white items-center">
              <span
                className="flex justify-center items-center rounded-md border border-foreground size-12 cursor-pointer"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <ArrowLeft size={24} />
              </span>
              <span
                className="flex justify-center items-center rounded-md border border-foreground size-12 cursor-pointer"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <ArrowRight size={24} />
              </span>
            </div>
          </div>

          {/* Games Swiper */}
          <div className="w-full">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={24}
              slidesPerView={1.2}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              speed={600}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
                1280: { slidesPerView: 4, spaceBetween: 24 },
              }}
              className="!overflow-visible"
            >
              {trendingGamesData.map((game) => (
                <SwiperSlide key={game.id}>
                  <Card className="group relative overflow-hidden border-2 border-border/50 hover:border-primary transition-all duration-300 bg-card/50 backdrop-blur-sm p-0">
                    {/* Game Image */}
                    <div className="relative overflow-hidden px-3 pt-3">
                      <img
                        src={game.image}
                        alt={game.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="px-3 pb-3 space-y-3">
                      {/* Title */}
                      <HitShotTitle
                        as="h5"
                        color="default"
                        className="line-clamp-1"
                      >
                        {game.title}
                      </HitShotTitle>

                      {/* Rating and Date */}
                      <div className="flex items-center justify-between flex-row-reverse gap-2 sm:gap-4">
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
                                  <HitShotText
                                    as="span"
                                    size="small"
                                    className=""
                                  >
                                    /{game.maxRating}
                                  </HitShotText>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Release Date */}
                        <div className="flex items-center gap-2">
                          <Calendar className="size-7 text-muted-foreground" />
                          <HitShotText as="p" size="small">
                            {game.year}
                          </HitShotText>
                        </div>
                      </div>

                      {/* Price and Buy Button */}
                      <div className="flex items-center justify-between gap-3 pt-2">
                        {/* Price */}
                        <div className="flex items-end  gap-2">
                          <HitShotText
                            as="span"
                            size="xsmall"
                            className="text-muted-foreground line-through"
                          >
                            {game.originalPrice}$
                          </HitShotText>
                          <div className="flex items-end gap-2">
                            <span className="text-2xl font-bold text-foreground">
                              {game.discountedPrice}$
                            </span>
                            <Badge
                              variant="secondary"
                              className="bg-primary text-white rounded-lg px-2 py-0.5 text-xs font-bold"
                            >
                              -{game.discountPercent}%
                            </Badge>
                          </div>
                        </div>

                        {/* Buy Button */}
                        <button className="flex items-center gap-1 bg-transparent text-foreground p-0 rounded-md transition-all duration-300 group/btn">
                          <HitShotText
                            as="span"
                            size="normal"
                            className="font-semibold"
                          >
                            Buy Now
                          </HitShotText>
                          <ArrowRight
                            size={20}
                            className="group-hover/btn:translate-x-0.5 transition-transform"
                          />
                        </button>
                      </div>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
