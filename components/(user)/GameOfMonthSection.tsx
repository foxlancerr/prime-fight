"use client";
import React, { useState, useRef } from "react";
import {
  Play,
  Calendar,
  Cpu,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { HitShotTitle } from "../base/HitShotTitle";
import { HitShotText } from "../base/HitShotText";
import { HitShotButton } from "../base/HitShotButton";
import { Card, CardDescription } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

const gamesData = [
  {
    id: 1,
    title: "Black Myth Wukong",
    description:
      "Black Myth: Wukong Is An Action RPG Inspired By The Legendary Chinese Novel 'Journey To The West'. The Game Takes Players On An Epic Journey As The Monkey King, Wukong, Battling Through Mythological Creatures And Mastering Magical Abilities. Featuring Stunning Visuals, Challenging Combat, And An Immersive World, Black Myth: Wukong Aims To Set A New Standard For Action RPGs.",
    rating: 81,
    maxRating: 100,
    releaseDate: "August 20, 2024",
    genre: ["Action RPG", "Adventure"],
    availableFor: ["Ps 5", "Xbox Series X", "Xbox Series S", "Pc"],
    trailerVideo: "/images/game-month/month-main1.png",
    trailerThumbnail: "/images/game-month/month-main1.png",
    galleryImages: [
      "/images/game-month/month-main1.1.png",
      "/images/game-month/month-main1.2.png",
      "/images/game-month/month-main1.3.png",
      "/images/game-month/month-main1.4.png",
    ],
    minimumRequirements: {
      os: "Windows 10 64-Bit Or Newer",
      cpu: "Intel Core i5-8400 / AMD 5 1600",
      memory: "16GB RAM",
      gpu: "NVIDIA GeForce GTX 1060 (6GB) / AMD 9 1600",
      directX: "Version 11",
      storage: "130GB Available Space",
    },
    recommendedRequirements: {
      os: "Windows 10 64-Bit Or Newer",
      cpu: "Intel Core i7 7700 / AMD Ryzen 5 5500",
      memory: "16GB RAM",
      gpu: "NVIDIA GeForce GTX 2060 / AMD Radeon RX 5700X",
      directX: "Version 12",
      storage: "130GB Available Space",
    },
  },
  {
    id: 2,
    title: "Cyberpunk 2077",
    description:
      "Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamour, and ceaseless body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality.",
    rating: 86,
    maxRating: 100,
    releaseDate: "December 10, 2020",
    genre: ["Action RPG", "Open World"],
    availableFor: ["Ps 4", "Ps 5", "Xbox One", "Xbox Series X", "Pc"],
    trailerVideo: "/images/game-month/cyberpunk-main.png",
    trailerThumbnail: "/images/game-month/cyberpunk-main.png",
    galleryImages: [
      "/images/game-month/cyberpunk1.png",
      "/images/game-month/cyberpunk2.png",
      "/images/game-month/cyberpunk3.png",
      "/images/game-month/cyberpunk4.png",
    ],
    minimumRequirements: {
      os: "Windows 10 64-Bit",
      cpu: "Intel Core i7-6700 / AMD Ryzen 5 1600",
      memory: "12GB RAM",
      gpu: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB",
      directX: "Version 12",
      storage: "70GB Available Space",
    },
    recommendedRequirements: {
      os: "Windows 10 64-Bit",
      cpu: "Intel Core i7-12700 / AMD Ryzen 7 7800X3D",
      memory: "20GB RAM",
      gpu: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700 XT",
      directX: "Version 12",
      storage: "70GB SSD",
    },
  },
  {
    id: 3,
    title: "Elden Ring",
    description:
      "Elden Ring is a fantasy action-RPG adventure set within a world created by Hidetaka Miyazaki and George R. R. Martin. Explore a vast, seamless world filled with danger and discovery. Forge your own path through the Lands Between and become the Elden Lord in this epic journey.",
    rating: 96,
    maxRating: 100,
    releaseDate: "February 25, 2022",
    genre: ["Action RPG", "Fantasy"],
    availableFor: ["Ps 4", "Ps 5", "Xbox One", "Xbox Series X", "Pc"],
    trailerVideo: "/images/game-month/elden-main.png",
    trailerThumbnail: "/images/game-month/elden-main.png",
    galleryImages: [
      "/images/game-month/elden1.png",
      "/images/game-month/elden2.png",
      "/images/game-month/elden3.png",
      "/images/game-month/elden4.png",
    ],
    minimumRequirements: {
      os: "Windows 10",
      cpu: "Intel Core i5-8400 / AMD Ryzen 3 3300X",
      memory: "12GB RAM",
      gpu: "NVIDIA GeForce GTX 1060 3GB / AMD Radeon RX 580 4GB",
      directX: "Version 12",
      storage: "60GB Available Space",
    },
    recommendedRequirements: {
      os: "Windows 10/11",
      cpu: "Intel Core i7-8700K / AMD Ryzen 5 3600X",
      memory: "16GB RAM",
      gpu: "NVIDIA GeForce GTX 1070 8GB / AMD Radeon RX Vega 56 8GB",
      directX: "Version 12",
      storage: "60GB Available Space",
    },
  },
];

export default function GameOfTheMonthSection() {
  const [activeTab, setActiveTab] = useState<"trailer" | "gallery">("trailer");
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(0);
  const [currentGameIndex, setCurrentGameIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const currentGame = gamesData[currentGameIndex];

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentGameIndex(swiper.realIndex);
    setActiveTab("trailer");
    setSelectedGalleryIndex(0);
  };

  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="container relative py-12 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center flex justify-center items-center mb-8">
          <HitShotTitle as="h2" color="default">
            Game Of The Month
          </HitShotTitle>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Game Info (Dynamic based on currentGameIndex) */}
          <div className="space-y-6">
            {/* Title */}
            <HitShotTitle as="h4" color="default">
              {currentGame.title}
            </HitShotTitle>

            {/* Description */}
            <HitShotText
              as="p"
              size="normal"
              className="text-muted-foreground leading-relaxed"
            >
              {currentGame.description}
            </HitShotText>

            <div className="grid grid-cols-2 gap-3">
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="">
                    <div className="text-center flex flex-row items-center gap-2">
                      <HitShotText
                        as="span"
                        className="text-white w-7 h-7 text-xs items-center justify-center transform -rotate-45 rounded-full border-yellow-400 border-2 inline-flex shrink-0"
                      >
                        m
                      </HitShotText>
                      <div>
                        <HitShotText
                          as="span"
                          size="large"
                          className="text-yellow-400 font-semibold"
                        >
                          {currentGame.rating}
                        </HitShotText>
                        <HitShotText as="span" size="small">
                          /{currentGame.maxRating}
                        </HitShotText>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Available For */}
              <div className="space-y-1 flex flex-col items-center">
                <HitShotTitle as="h6" className="font-semibold">
                  Available For:
                </HitShotTitle>
                <HitShotText
                  as="p"
                  size="small"
                  className="text-muted-foreground text-center"
                >
                  {currentGame.availableFor.join(", ")}
                </HitShotText>
              </div>

              {/* Release Date */}
              <div className="flex items-center gap-2">
                <Calendar size={28} className="text-muted-foreground" />
                <HitShotText
                  as="span"
                  size="small"
                  className="text-muted-foreground"
                >
                  {currentGame.releaseDate}
                </HitShotText>
              </div>

              {/* Genre */}
              <div className="space-y-1 items-center flex flex-col">
                <HitShotTitle as="h6" className="font-semibold">
                  Genre:
                </HitShotTitle>
                <HitShotText
                  as="p"
                  size="small"
                  className="text-muted-foreground text-center"
                >
                  {currentGame.genre.join(", ")}
                </HitShotText>
              </div>
            </div>

            {/* Platform Buttons */}
            <div className="grid grid-cols-2 gap-3">
              {currentGame.availableFor.map((platform) => (
                <button
                  key={platform}
                  className="px-6 py-2 bg-background/50 border border-foreground rounded-lg hover:border-primary transition-colors text-sm"
                >
                  {platform}
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <HitShotButton rounded="xl" className="flex-1">
                Buy Now
              </HitShotButton>
              <HitShotButton rounded="xl" variant="outline" className="flex-1">
                Game review
              </HitShotButton>
            </div>
          </div>

          {/* Right Column - Trailer & Gallery SLIDER */}
          <div className="space-y-4">
            {/* Tab Buttons */}
            <div className="flex gap-4 justify-between items-center">
              <HitShotTitle as="h6" className="text-sm font-medium">
                Trailer & Gallery
              </HitShotTitle>

              {/* Arrow buttons for slider */}
              <div className="hidden sm:flex flex-row gap-3 text-white items-center">
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="flex justify-center items-center rounded-md border border-foreground size-12 cursor-pointer hover:border-primary transition-colors"
                  aria-label="Previous game"
                >
                  <ArrowLeft size={24} />
                </button>
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className="flex justify-center items-center rounded-md border border-foreground size-12 cursor-pointer hover:border-primary transition-colors"
                  aria-label="Next game"
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>

            {/* Swiper for Main Display */}
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              autoplay={false}
              loop={true}
              speed={800}
              className="trailer-gallery-swiper"
            >
              {gamesData.map((game) => (
                <SwiperSlide key={game.id}>
                  {/* Main Video/Image Display */}
                  <div className="relative aspect-video bg-card rounded-xl overflow-hidden border-none group">
                    {activeTab === "trailer" ? (
                      <>
                        <img
                          src={game.trailerThumbnail}
                          alt="Trailer thumbnail"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                          <button className="w-20 h-20 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-all hover:scale-110">
                            <Play
                              size={32}
                              className="text-primary-foreground ml-1"
                              fill="currentColor"
                            />
                          </button>
                        </div>
                        <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg">
                          <span className="text-xs font-semibold text-white">
                            OFFICIAL TRAILER
                          </span>
                        </div>
                      </>
                    ) : (
                      <img
                        src={game.galleryImages[selectedGalleryIndex]}
                        alt={`Gallery ${selectedGalleryIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Gallery Thumbnails - Updates based on currentGameIndex */}
            <div className="grid grid-cols-4 gap-3">
              {currentGame.galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveTab("gallery");
                    setSelectedGalleryIndex(index);
                  }}
                  className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                    activeTab === "gallery" && selectedGalleryIndex === index
                      ? "border-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* System Requirements - Updates based on currentGameIndex */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Minimum Requirements */}
          <div className="space-y-4">
            <HitShotTitle as="h5" color="default">
              <span className="text-primary">Minimum</span> System Requirements
            </HitShotTitle>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <HitShotText as="p" size="normal" className="font-semibold mb-1">
                  OS:
                </HitShotText>
                <HitShotText
                  as="p"
                  size="small"
                  className="text-muted-foreground"
                >
                  {currentGame.minimumRequirements.os}
                </HitShotText>
              </div>
              <div className="flex items-center gap-2">
                <HitShotText as="p" size="normal" className="font-semibold mb-1">
                  CPU:
                </HitShotText>
                <HitShotText
                  as="p"
                  size="small"
                  className="text-muted-foreground"
                >
                  {currentGame.minimumRequirements.cpu}
                </HitShotText>
              </div>
              <div className="flex items-center gap-2">
                <HitShotText as="p" size="normal" className="font-semibold mb-1">
                  Memory:
                </HitShotText>
                <HitShotText
                  as="p"
                  size="small"
                  className="text-muted-foreground"
                >
                  {currentGame.minimumRequirements.memory}
                </HitShotText>
              </div>
              <div className="flex items-center gap-2">
                <HitShotText as="p" size="normal" className="font-semibold mb-1">
                  GPU:
                </HitShotText>
                <HitShotText
                  as="p"
                  size="small"
                  className="text-muted-foreground"
                >
                  {currentGame.minimumRequirements.gpu}
                </HitShotText>
              </div>
              <div className="flex items-center gap-2">
                <HitShotText as="p" size="normal" className="font-semibold mb-1">
                  DirectX:
                </HitShotText>
                <HitShotText
                  as="p"
                  size="small"
                  className="text-muted-foreground"
                >
                  {currentGame.minimumRequirements.directX}
                </HitShotText>
              </div>
              <div className="flex items-center gap-2">
                <HitShotText as="p" size="normal" className="font-semibold mb-1">
                  Storage:
                </HitShotText>
                <HitShotText
                  as="p"
                  size="small"
                  className="text-muted-foreground"
                >
                  {currentGame.minimumRequirements.storage}
                </HitShotText>
              </div>
            </div>
          </div>

          {/* Recommended Requirements */}
          <div className="space-y-4">
            <HitShotTitle as="h5" color="default">
              <span className="text-primary">Recommended</span> System
              Requirements
            </HitShotTitle>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <HitShotText as="p" size="normal" className="font-semibold mb-1">
                  OS:
                </HitShotText>
                <HitShotText
                  as="p"
                  size="small"
                  className="text-muted-foreground"
                >
                  {currentGame.recommendedRequirements.os}
                </HitShotText>
              </div>
              <div className="flex items-center gap-2">
                <HitShotText as="p" size="normal" className="font-semibold mb-1">
                  CPU:
                </HitShotText>
                <HitShotText
                  as="p"
                  size="small"
                  className="text-muted-foreground"
                >
                  {currentGame.recommendedRequirements.cpu}
                </HitShotText>
              </div>
              <div className="flex items-center gap-2">
                <HitShotText as="p" size="normal" className="font-semibold mb-1">
                  Memory:
                </HitShotText>
                <HitShotText
                  as="p"
                  size="small"
                  className="text-muted-foreground"
                >
                  {currentGame.recommendedRequirements.memory}
                </HitShotText>
              </div>
              <div className="flex items-center gap-2">
                <HitShotText as="p" size="normal" className="font-semibold mb-1">
                  GPU:
                </HitShotText>
                <HitShotText
                  as="p"
                  size="small"
                  className="text-muted-foreground"
                >
                  {currentGame.recommendedRequirements.gpu}
                </HitShotText>
              </div>
              <div className="flex items-center gap-2">
                <HitShotText as="p" size="normal" className="font-semibold mb-1">
                  DirectX:
                </HitShotText>
                <HitShotText
                  as="p"
                  size="small"
                  className="text-muted-foreground"
                >
                  {currentGame.recommendedRequirements.directX}
                </HitShotText>
              </div>
              <div className="flex items-center gap-2">
                <HitShotText as="p" size="normal" className="font-semibold mb-1">
                  Storage:
                </HitShotText>
                <HitShotText
                  as="p"
                  size="small"
                  className="text-muted-foreground"
                >
                  {currentGame.recommendedRequirements.storage}
                </HitShotText>
              </div>
            </div>
          </div>

          {/* PC Check Section */}
          <Card className="space-y-4 bg-black border-0 p-6">
            <CardDescription>
              <div className="flex flex-col gap-1">
                <HitShotTitle as="h6" className="font-semibold">
                  GPU
                </HitShotTitle>
                <div className="border-foreground border rounded-sm p-2 flex items-center gap-3">
                  <span>
                    <Cpu size={24} />
                  </span>
                  <HitShotText
                    as="p"
                    size="xsmall"
                    className="text-muted-foreground"
                  >
                    {currentGame.recommendedRequirements.gpu}
                  </HitShotText>
                </div>
              </div>
              <div className="flex flex-col gap-1 mt-3">
                <HitShotTitle as="h6" className="font-semibold">
                  RAM
                </HitShotTitle>
                <div className="border-foreground border rounded-sm p-2 flex items-center gap-3">
                  <span>
                    <Cpu size={24} />
                  </span>
                  <HitShotText
                    as="p"
                    size="xsmall"
                    className="text-muted-foreground"
                  >
                    {currentGame.recommendedRequirements.memory}
                  </HitShotText>
                </div>
              </div>
              <div className="flex flex-col gap-1 mt-3">
                <HitShotTitle as="h6" className="font-semibold">
                  CPU
                </HitShotTitle>
                <div className="border-foreground border rounded-sm p-2 flex items-center gap-3">
                  <span>
                    <Cpu size={24} />
                  </span>
                  <HitShotText
                    as="p"
                    size="xsmall"
                    className="text-muted-foreground"
                  >
                    {currentGame.recommendedRequirements.cpu}
                  </HitShotText>
                </div>
              </div>

              <div className="flex flex-col space-y-3 mt-6">
                <HitShotButton className="w-full">Can I Run It?</HitShotButton>
                <HitShotButton className="w-full" variant="outline">
                  Test My PC Automatically
                </HitShotButton>
              </div>
            </CardDescription>
          </Card>
        </div>
      </div>
    </section>
  );
}