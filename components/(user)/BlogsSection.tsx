"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { HitShotTitle } from "../base/HitShotTitle";
import { HitShotText } from "../base/HitShotText";

export default function BlogsSection() {
  const swiperRef = useRef<any>(null);

  const slides = [
  { 
    id: 1, 
    title: "Sports & Racing", 
    image: "/images/categries/slide1.png",
    description: "High-speed racing and competitive sports games to test your reflexes."
  },
  { 
    id: 2, 
    title: "Adventure Games", 
    image: "/images/categries/slide2.png",
    description: "Embark on epic journeys and explore immersive story-driven worlds."
  },
  { 
    id: 3, 
    title: "Action Games", 
    image: "/images/categries/slide3.png",
    description: "Fast-paced combat and adrenaline-fueled missions await you."
  },
  { 
    id: 4, 
    title: "Casual & Puzzle", 
    image: "/images/categries/slide4.png",
    description: "Relax and challenge your mind with fun puzzles and casual gameplay."
  },
  { 
    id: 5, 
    title: "Fantasy & RPG", 
    image: "/images/categries/slide5.png",
    description: "Dive into magical worlds and shape your destiny through epic quests."
  },
  { 
    id: 6, 
    title: "Multiplayer", 
    image: "/images/categries/slide6.png",
    description: "Team up or compete with players around the world in thrilling matches."
  },
  { 
    id: 7, 
    title: "Sports & Racing", 
    image: "/images/categries/slide1.png",
    description: "Compete in exciting sports and race your way to victory."
  },
  { 
    id: 8, 
    title: "Adventure Games", 
    image: "/images/categries/slide2.png",
    description: "Explore mysterious lands filled with danger and discovery."
  },
  { 
    id: 9, 
    title: "Action Games", 
    image: "/images/categries/slide3.png",
    description: "Experience heart-pounding action and intense battles."
  },
  { 
    id: 10, 
    title: "Casual & Puzzle", 
    image: "/images/categries/slide4.png",
    description: "Simple, fun, and addictive puzzles for players of all ages."
  },
  { 
    id: 11, 
    title: "Fantasy & RPG", 
    image: "/images/categries/slide5.png",
    description: "Create your hero and embark on unforgettable adventures."
  },
  { 
    id: 12, 
    title: "Multiplayer", 
    image: "/images/categries/slide6.png",
    description: "Join friends or challenge rivals in competitive multiplayer modes."
  },
    { 
    id: 13, 
    title: "Sports & Racing", 
    image: "/images/categries/slide1.png",
    description: "Compete in exciting sports and race your way to victory."
  },
  { 
    id: 14, 
    title: "Adventure Games", 
    image: "/images/categries/slide2.png",
    description: "Explore mysterious lands filled with danger and discovery."
  },
];


  const chunkArray = <T,>(array: T[], size: number): T[][] => {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
      array.slice(i * size, i * size + size)
    );
  };

  // make into two sub arrays for desktop grid
  const slidesDataDesktop = chunkArray(slides, 5);
  const slidesDataMobile = slides.slice(0, 5);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Container */}
      <div className="container relative h-full py-20 sm:py-12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-8">
          {/* Header */}
          <div className="flex flex-row justify-between items-center w-full">
            <HitShotTitle as="h4" color="default">
              Blogs
            </HitShotTitle>

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

            {/* Mobile "View All" */}
            <div className="flex sm:hidden items-center gap-2 text-primary">
              <HitShotText as="span" size="xsmall">
                View All
              </HitShotText>
              <span>
                <ChevronDown size={20} />
              </span>
            </div>
          </div>

          {/* ====== Desktop Grid ====== */}
          <div className="block w-full">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              autoplay={false}
              // autoplay={{ delay: 3000 }}
              loop={false}
              // modules={[Autoplay, Pagination]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="!overflow-visible"
            >
              {slidesDataDesktop.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="hidden sm:grid grid-cols-2 gap-6 w-full">
                    <div className="grid grid-cols-1 gap-6">
                      {slide.slice(0, 1).map((sld) => (
                        <div
                          key={sld.id}
                          className={`${
                            sld.id === 1 || sld.id === 6
                              ? "col-span-2"
                              : "col-span-1"
                          } h-full relative flex flex-col items-start justify-end p-4`}
                        >
                          <div className="absolute inset-0 overflow-hidden rounded-xl z-0">
                            <img
                              src={sld.image}
                              alt={sld.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <HitShotTitle
                            as="h6"
                            color="default"
                            className="relative z-10 text-white"
                          >
                            {sld.title}
                          </HitShotTitle>
                          <HitShotText
                            as="p"
                            size="xsmall"
                            className="relative z-10 text-white"
                          >
                            {sld.description}
                          </HitShotText>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      {slide.slice(1).map((sld) => (
                        <div
                          key={sld.id}
                          className={`${
                            sld.id === 6 || sld.id === 12
                              ? "col-span-2"
                              : "col-span-1"
                          } h-[210px] flex-col justify-end items-start relative flex p-4`}
                        >
                          <div className="absolute inset-0 overflow-hidden rounded-xl z-0">
                            <img
                              src={sld.image}
                              alt={sld.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <HitShotTitle
                            as="h6"
                            color="default"
                            className="relative z-10 text-white"
                          >
                            {sld.title}
                          </HitShotTitle>

                                                    <HitShotText
                            as="p"
                            size="xsmall"
                            className="relative z-10 text-white"
                          >
                            {sld.description}
                          </HitShotText>
                        </div>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* ====== Mobile Swiper ====== */}
          <div className="block sm:hidden w-full">
            <Swiper
              spaceBetween={20}
              slidesPerView={1.2}
              autoplay={{ delay: 3000 }}
              loop={true}
              modules={[Autoplay, Pagination]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="!overflow-visible"
            >
              {slidesDataMobile.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="h-[195px] relative flex items-end p-4">
                    <div className="absolute inset-0 overflow-hidden rounded-xl z-0">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <HitShotTitle
                      as="h6"
                      color="default"
                      className="relative z-10 text-white"
                    >
                      {slide.title}
                    </HitShotTitle>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
