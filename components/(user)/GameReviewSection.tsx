"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  MessageCircle,
  Star,
  Calendar,
} from "lucide-react";
import { HitShotTitle } from "../base/HitShotTitle";
import { HitShotText } from "../base/HitShotText";
import { HitShotButton } from "../base/HitShotButton";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const reviewsData = [
  {
    id: 1,
    title: "Ghost Of Tsushima",
    year: 2020,
    image: "/images/reviews/review1.png",
    description:
      "Step Into The War-Torn World Of Feudal Japan, Where Honor And Sacrifice Are Tested In The Fires Of Conflict, 'Ghost Of Tsushima' Follows Jin Sakai, One Of The Last Remaining Samurai, As He Defends His Homeland From The Mongol Invasion. The Game Offers An Immersive Open-World Filled With Stunning Landscapes And ...",
    genres: ["Action", "RPG", "Samurai", "Adventure"],
    rating: 81,
    maxRating: 100,
    views: "1200+",
    comments: 112,
    userRating: 8.7,
    releaseDate: "September 8, 2024",
  },
  {
    id: 2,
    title: "Cyberpunk",
    year: 2020,
    image: "/images/reviews/review2.png",
    description:
      "Step Into A Dark, Gritty, And Dystopian World Where High-Tech Meets Low-Life. In Cyberpunk 2077, You Play As V, A Mercenary Navigating The Vibrant And Dangerous Night City, Where Choices Shape Your Destiny. The Game Blends First-Person Shooter Mechanics With RPG Elements, Offering Deep Customization, Immersive ...",
    genres: ["Action", "RPG", "Shooting"],
    rating: 86,
    maxRating: 100,
    views: "1000+",
    comments: 86,
    userRating: 8.2,
    releaseDate: "September 7, 2024",
  },
  {
    id: 3,
    title: "Elden Ring",
    year: 2022,
    image: "/images/reviews/review3.png",
    description:
      "Elden Ring is a fantasy action-RPG adventure set within a world created by Hidetaka Miyazaki and George R. R. Martin. Explore a vast, seamless world filled with danger and discovery. Forge your own path through the Lands Between and become the Elden Lord in this epic journey.",
    genres: ["Action", "RPG", "Fantasy"],
    rating: 96,
    maxRating: 100,
    views: "2500+",
    comments: 245,
    userRating: 9.6,
    releaseDate: "September 6, 2024",
  },
  {
    id: 4,
    title: "God of War Ragnarök",
    year: 2022,
    image: "/images/reviews/review4.png",
    description:
      "God of War Ragnarök is an action-adventure game where Kratos and Atreus embark on a mythic journey for answers before Ragnarök arrives. Together they must explore stunning realms and face fearsome enemies in the form of Norse gods and monsters as the twilight of the gods approaches.",
    genres: ["Action", "Adventure", "Mythology"],
    rating: 94,
    maxRating: 100,
    views: "1800+",
    comments: 156,
    userRating: 9.4,
    releaseDate: "September 5, 2024",
  },
  {
    id: 5,
    title: "The Witcher 3",
    year: 2015,
    image: "/images/reviews/review3.png",
    description:
      "The Witcher 3: Wild Hunt Is An Open-World RPG Where Players Follow Geralt Of Rivia, A Monster Hunter, In His Quest To Find His Adopted Daughter, Ciri. Set In A Richly Detailed And Expansive World, The Game Offers A Deep Narrative And Complex Choices That Affect The Game's Outcome.",
    genres: ["Action", "RPG", "Fantasy"],
    rating: 93,
    maxRating: 100,
    views: "3000+",
    comments: 298,
    userRating: 9.3,
    releaseDate: "September 4, 2024",
  },
  {
    id: 6,
    title: "Red Dead Redemption 2",
    year: 2018,
    image: "/images/reviews/review4.png",
    description:
      "Red Dead Redemption 2 is an epic tale of life in America's unforgiving heartland. The game's vast and atmospheric world provides the foundation for a brand new online multiplayer experience. Follow Arthur Morgan and the Van der Linde gang as they fight to survive in a changing world.",
    genres: ["Action", "Adventure", "Western"],
    rating: 97,
    maxRating: 100,
    views: "2800+",
    comments: 267,
    userRating: 9.7,
    releaseDate: "September 3, 2024",
  },
  {
    id: 7,
    title: "Hogwarts Legacy",
    year: 2023,
    image: "/images/reviews/review1.png",
    description:
      "Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books. Embark on a journey through familiar and new locations as you explore and discover magical beasts, customize your character and craft potions, master spell casting.",
    genres: ["Action", "RPG", "Magic", "Adventure"],
    rating: 84,
    maxRating: 100,
    views: "1600+",
    comments: 134,
    userRating: 8.4,
    releaseDate: "September 2, 2024",
  },
  {
    id: 8,
    title: "Starfield",
    year: 2023,
    image: "/images/reviews/review2.png",
    description:
      "Starfield is the first new universe in 25 years from Bethesda Game Studios. In this next generation role-playing game set amongst the stars, create any character you want and explore with unparalleled freedom as you embark on an epic journey to answer humanity's greatest mystery.",
    genres: ["Action", "RPG", "Sci-Fi", "Space"],
    rating: 83,
    maxRating: 100,
    views: "1400+",
    comments: 98,
    userRating: 8.3,
    releaseDate: "September 1, 2024",
  },
];

export default function GameReviewsSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  // Group reviews into chunks of 4 for each slide
  const chunkedReviews = [];
  for (let i = 0; i < reviewsData.length; i += 4) {
    chunkedReviews.push(reviewsData.slice(i, i + 4));
  }

  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="container relative py-12 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <HitShotTitle as="h3" color="default">
            Game Reviews
          </HitShotTitle>

          <div className="flex items-center gap-4">
            {/* View All Link */}
            <button className="text-primary hover:text-primary/80 transition-colors">
              <HitShotText as="span" size="normal">
                View All →
              </HitShotText>
            </button>

            {/* Navigation Arrows */}
            <div className="flex gap-3">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="flex justify-center items-center rounded-md border border-foreground size-12 cursor-pointer hover:border-primary transition-colors"
                aria-label="Previous"
              >
                <ArrowLeft size={24} />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="flex justify-center items-center rounded-md border border-foreground size-12 cursor-pointer hover:border-primary transition-colors"
                aria-label="Next"
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          speed={800}
          className="reviews-swiper"
        >
          {chunkedReviews.map((chunk, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="grid grid-cols-1 gap-6">
                {chunk.map((review) => (
                  <Card
                    key={review.id}
                    className="group relative overflow-hidden border-2 border-border/50 hover:border-primary transition-all duration-300 bg-card/50 backdrop-blur-sm p-0"
                  >
                    <div className="flex flex-col sm:flex-row gap-6 p-2">
                      {/* Left - Game Image */}
                      <div className="relative w-full sm:w-40 h-48 sm:h-auto flex-shrink-0 rounded-lg overflow-hidden">
                        <img
                          src={review.image}
                          alt={review.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      {/* Middle - Game Info */}
                      <div className="flex-1 space-y-3">
                        {/* Title & Year */}
                        <div>
                          <HitShotTitle
                            as="h4"
                            color="default"
                            className="inline"
                          >
                            {review.title}
                          </HitShotTitle>
                          <HitShotText
                            as="span"
                            size="normal"
                            className="text-muted-foreground ml-2"
                          >
                            ({review.year})
                          </HitShotText>
                          <hr className="border border-foreground mb-2" />
                        </div>

                        {/* Description */}
                        <HitShotText
                          as="p"
                          size="normal"
                          className="text-muted-foreground line-clamp-3"
                        >
                          {review.description}
                        </HitShotText>

                        {/* Genres */}
                        <div className="flex flex-wrap gap-2">
                          {review.genres.map((genre) => (
                            <Badge
                              key={genre}
                              variant="default"
                              className="bg-black text-foreground rounded-full px-3 py-1 text-xs"
                            >
                              {genre}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between  gap-2 sm:gap-4">
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
                                      {review.rating}
                                    </HitShotText>
                                    <HitShotText
                                      as="span"
                                      size="small"
                                      className=""
                                    >
                                      /{review.maxRating}
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
                              {review.year}
                            </HitShotText>
                          </div>
                        </div>
                      </div>

                      {/* Right - Stats & Button */}
                      <div className="flex flex-col items-center justify-between gap-4 w-full  sm:w-[200px]">
                        {/* Stats */}
                        <div className="space-y-2 w-full flex gap-3 justify-between flex-row sm:flex-col">
                          <div className="flex items-center flex-col gap-2">
                            <Eye size={24} className="text-muted-foreground" />
                            <div className="flex gap-1 items-center">
                              <HitShotText as="span" size="small">
                                {review.views}
                              </HitShotText>
                              <HitShotText
                                as="span"
                                size="xsmall"
                                className="text-muted-foreground"
                              >
                                Views
                              </HitShotText>
                            </div>
                          </div>
                          <div className="flex items-center flex-col gap-2">
                            <MessageCircle
                              size={24}
                              className="text-muted-foreground"
                            />
                            <div className="flex gap-1 items-center">
                              <HitShotText as="span" size="small">
                                {review.comments}
                              </HitShotText>
                              <HitShotText
                                as="span"
                                size="xsmall"
                                className="text-muted-foreground"
                              >
                                Comments
                              </HitShotText>
                            </div>
                          </div>
                          <div className="flex items-center flex-col gap-2">
                            <Star
                              size={24}
                              className="text-yellow-400"
                              fill="currentColor"
                            />
                            <div className="flex flex-row gap-2 items-center">

                            <HitShotText as="span" size="small">
                              {review.userRating}
                            </HitShotText>
                            <HitShotText
                              as="span"
                              size="xsmall"
                              className="text-muted-foreground"
                              >
                              /10
                            </HitShotText>
                                </div>
                          </div>
                        </div>

                        {/* Full Review Button */}
                        <HitShotButton
                          rounded="xl"
                          className="w-full px-6"
                        >
                          Full Review
                        </HitShotButton>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
