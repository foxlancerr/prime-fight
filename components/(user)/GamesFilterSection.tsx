// "use client";
// import React, { useState } from "react";
// import {
//   Search,
//   ChevronLeft,
//   ChevronRight,
//   Calendar,
//   ArrowRight,
// } from "lucide-react";
// import { HitShotTitle } from "../base/HitShotTitle";
// import { HitShotText } from "../base/HitShotText";
// import { HitShotButton } from "../base/HitShotButton";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Switch } from "@/components/ui/switch";
// import { Slider } from "@/components/ui/slider";
// import { Card } from "../ui/card";
// import { Badge } from "../ui/badge";

// const genres = [
//   "Action",
//   "RPG",
//   "Samurai",
//   "Sports",
//   "Shooting",
//   "Racing",
//   "Battle",
//   "Survival",
//   "Strategy",
//   "Horror",
//   "Adventure",
//   "Puzzle",
// ];

// export default function GamesFilterSection() {
//   const [selectedGenres, setSelectedGenres] = useState<string[]>([
//     "Action",
//     "RPG",
//     "Sports",
//   ]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [platform, setPlatform] = useState("all");
//   const [publisher, setPublisher] = useState("all");
//   const [players, setPlayers] = useState("all");
//   const [releaseYear, setReleaseYear] = useState([2000, 2024]);
//   const [rating, setRating] = useState([0, 10]);
//   const [isOnline, setIsOnline] = useState(false);
//   const [isFree, setIsFree] = useState(false);
//   const [genreScrollPosition, setGenreScrollPosition] = useState(0);

//   const toggleGenre = (genre: string) => {
//     setSelectedGenres((prev) =>
//       prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
//     );
//   };

//   const scrollGenres = (direction: "left" | "right") => {
//     const container = document.getElementById("genre-container");
//     if (container) {
//       const scrollAmount = 200;
//       const newPosition =
//         direction === "left"
//           ? Math.max(0, genreScrollPosition - scrollAmount)
//           : genreScrollPosition + scrollAmount;
//       container.scrollTo({ left: newPosition, behavior: "smooth" });
//       setGenreScrollPosition(newPosition);
//     }
//   };

//   const trendingGamesData = [
//     {
//       id: 1,
//       title: "Black Myth Wukong",
//       image: "/images/games/slider1.png",
//       year: 2024,
//       rating: 81,
//       maxRating: 100,
//       originalPrice: 60,
//       discountedPrice: 51,
//       discountPercent: 15,
//     },
//     {
//       id: 2,
//       title: "Alan Wake 2",
//       image: "/images/games/slider2.png",

//       year: 2024,
//       rating: 86,
//       maxRating: 100,
//       originalPrice: 40,
//       discountedPrice: 32,
//       discountPercent: 20,
//     },
//     {
//       id: 3,
//       title: "Elden Ring",
//       image: "/images/games/slider3.png",

//       year: 2023,
//       rating: 96,
//       maxRating: 100,
//       originalPrice: 60,
//       discountedPrice: 45,
//       discountPercent: 25,
//     },
//     {
//       id: 4,
//       title: "God of War Ragnarök",
//       image: "/images/games/slider4.png",

//       year: 2023,
//       rating: 94,
//       maxRating: 100,
//       originalPrice: 70,
//       discountedPrice: 56,
//       discountPercent: 20,
//     },
//     {
//       id: 5,
//       title: "Cyberpunk 2077",
//       image: "/images/games/slider5.png",

//       year: 2024,
//       rating: 86,
//       maxRating: 100,
//       originalPrice: 50,
//       discountedPrice: 40,
//       discountPercent: 20,
//     },
//     {
//       id: 6,
//       title: "Cyberpunk 2077",
//       image: "/images/games/slider6.png",

//       year: 2024,
//       rating: 86,
//       maxRating: 100,
//       originalPrice: 50,
//       discountedPrice: 40,
//       discountPercent: 20,
//     },
//     {
//       id: 7,
//       title: "Cyberpunk 2077",
//       image: "/images/games/slider7.png",

//       year: 2024,
//       rating: 86,
//       maxRating: 100,
//       originalPrice: 50,
//       discountedPrice: 40,
//       discountPercent: 20,
//     },
//     {
//       id: 8,
//       title: "Cyberpunk 2077",
//       image: "/images/games/slider8.png",

//       year: 2024,
//       rating: 86,
//       maxRating: 100,
//       originalPrice: 50,
//       discountedPrice: 40,
//       discountPercent: 20,
//     },
//   ];

//   return (
//     <section className="relative w-full overflow-hidden bg-background/50 backdrop-blur-sm">
//       <div className="container relative py-12 mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col items-center gap-6">
//           {/* Header */}
//           <div className="text-center space-y-3 flex flex-col justify-center items-center">
//             <HitShotTitle as="h3" color="default">
//               Games By Filter
//             </HitShotTitle>
//             <HitShotText as="p" size="small" className="text-muted-foreground">
//               At This Section You Can Search For Games By Multiple Filters
//             </HitShotText>
//           </div>

//           {/* Filter Container */}
//           <div className="w-full space-y-6">
//             {/* Search Input */}
//             <div className="relative bg-black">
//               <Search
//                 className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
//                 size={28}
//               />
//               <Input
//                 type="text"
//                 placeholder="Game Name"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="pl-16 h-14 border-none bg-background/50 rounded-xl text-base"
//               />
//             </div>

//             {/* Genre Tags with Scroll */}
//             <div className="relative">
//               <button
//                 onClick={() => scrollGenres("left")}
//                 className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm p-2 hover:bg-background transition-colors
//                  rounded-lg border border-foreground cursor-pointer
//                 "
//                 aria-label="Scroll left"
//               >
//                 <ChevronLeft size={20} />
//               </button>

//               <div
//                 id="genre-container"
//                 className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth px-12"
//                 style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//               >
//                 {genres.map((genre) => (
//                   <button
//                     key={genre}
//                     onClick={() => toggleGenre(genre)}
//                     className={`px-4 text-foreground py-2 sm:px-6 sm:py-2.5  rounded-full whitespace-nowrap font-medium transition-all duration-300 text-xs sm:text-sm ${
//                       selectedGenres.includes(genre)
//                         ? "bg-primary "
//                         : "bg-background/50 hover:bg-background border border-border/50"
//                     }`}
//                   >
//                     {genre}
//                   </button>
//                 ))}
//               </div>

//               <button
//                 onClick={() => scrollGenres("right")}
//                 className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm p-2 hover:bg-background transition-colors
//                  rounded-lg border border-foreground cursor-pointer
//                 "
//                 aria-label="Scroll right"
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </div>

//             {/* Dropdowns Row */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//               {/* Platform */}
//               <div className="space-y-2 flex flex-row gap-6 items-center">
//                 <label className="text-sm font-medium text-foreground">
//                   Platform
//                 </label>
//                 <Select value={platform} onValueChange={setPlatform}>
//                   <SelectTrigger className="!h-10 rounded-lg flex-1 border-none">
//                     <SelectValue placeholder="All" className="" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All</SelectItem>
//                     <SelectItem value="pc">PC</SelectItem>
//                     <SelectItem value="ps4">PS4</SelectItem>
//                     <SelectItem value="ps5">PS5</SelectItem>
//                     <SelectItem value="xbox">Xbox</SelectItem>
//                     <SelectItem value="switch">Nintendo Switch</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Publisher */}
//               <div className="space-y-2 flex flex-row gap-6 items-center">
//                 <label className="text-sm font-medium text-foreground">
//                   Publisher
//                 </label>
//                 <Select value={publisher} onValueChange={setPublisher}>
//                   <SelectTrigger className="!h-10 rounded-lg flex-1 border-none">
//                     <SelectValue placeholder="All" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All</SelectItem>
//                     <SelectItem value="ea">EA Games</SelectItem>
//                     <SelectItem value="ubisoft">Ubisoft</SelectItem>
//                     <SelectItem value="activision">Activision</SelectItem>
//                     <SelectItem value="bethesda">Bethesda</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Players */}
//               <div className="space-y-2 flex flex-row gap-6 items-center">
//                 <label className="text-sm font-medium text-foreground">
//                   Players
//                 </label>
//                 <Select value={players} onValueChange={setPlayers}>
//                   <SelectTrigger className="!h-10 rounded-lg flex-1 border-none">
//                     <SelectValue placeholder="All" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All</SelectItem>
//                     <SelectItem value="single">Single Player</SelectItem>
//                     <SelectItem value="multi">Multiplayer</SelectItem>
//                     <SelectItem value="coop">Co-op</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>

//             {/* Sliders and Toggles Row */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {/* Release Year Slider */}
//               <div className="space-y-3">
//                 <label className="text-sm font-medium text-foreground">
//                   Release Year
//                 </label>
//                 <div className="pt-2">
//                   <Slider
//                     value={releaseYear}
//                     onValueChange={setReleaseYear}
//                     min={2000}
//                     max={2024}
//                     step={1}
//                     className="w-full"
//                   />
//                   <div className="flex justify-between mt-2">
//                     <span className="text-xs text-muted-foreground">
//                       {releaseYear[0]}
//                     </span>
//                     <span className="text-xs text-muted-foreground">
//                       {releaseYear[1]}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Rating Slider */}
//               <div className="space-y-3">
//                 <label className="text-sm font-medium text-foreground">
//                   Rating
//                 </label>
//                 <div className="pt-2">
//                   <Slider
//                     value={rating}
//                     onValueChange={setRating}
//                     min={0}
//                     max={10}
//                     step={1}
//                     className="w-full"
//                   />
//                   <div className="flex justify-between mt-2">
//                     <span className="text-xs text-muted-foreground">
//                       {rating[0]}
//                     </span>
//                     <span className="text-xs text-muted-foreground">
//                       {rating[1]}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex flex-row items-center justify-between">
//                 {/* Online Toggle */}
//                 <div className="flex items-center justify-between space-x-4">
//                   <label className="text-sm font-medium text-foreground">
//                     Online
//                   </label>
//                   <Switch checked={isOnline} onCheckedChange={setIsOnline} />
//                 </div>

//                 {/* Free Toggle */}
//                 <div className="flex items-center justify-between space-x-4">
//                   <label className="text-sm font-medium text-foreground">
//                     Free
//                   </label>
//                   <Switch checked={isFree} onCheckedChange={setIsFree} />
//                 </div>
//               </div>
//             </div>

//             {/* Search Button */}
//             <div className="pt-2">
//               <HitShotButton
//                 rounded="xl"
//                 className="w-full h-14 text-base font-semibold"
//               >
//                 <Search size={20} className="mr-2" />
//                 Search For Games
//               </HitShotButton>
//             </div>
//           </div>
//         </div>

//         {/* card section */}
//         {/* Games Swiper */}
//         <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-6 mt-12">
//           {trendingGamesData.map((game) => (
//             <Card
//               key={game.id}
//               className="group relative overflow-hidden border-2 border-border/50 hover:border-primary transition-all duration-300 bg-card/50 backdrop-blur-sm p-0"
//             >
//               {/* Game Image */}
//               <div className="relative overflow-hidden px-3 pt-3">
//                 <img
//                   src={game.image}
//                   alt={game.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Content */}
//               <div className="px-3 pb-3 space-y-3">
//                 {/* Title */}
//                 <HitShotTitle as="h5" color="default" className="line-clamp-1">
//                   {game.title}
//                 </HitShotTitle>

//                 {/* Rating and Date */}
//                 <div className="flex items-center justify-between flex-row-reverse gap-2 sm:gap-4">
//                   {/* Rating Badge */}
//                   <div className="flex items-center gap-2">
//                     <div className="relative">
//                       <div className="">
//                         <div className="text-center flex flex-row items-center gap-4">
//                           <HitShotText
//                             as="span"
//                             className="text-white w-8 h-8 items-center justify-center transform -rotate-45 rounded-full border-yellow-400 border-2 inline-flex shrink-0 "
//                           >
//                             m
//                           </HitShotText>
//                           <div>
//                             <HitShotText
//                               as="span"
//                               size="large"
//                               className="text-yellow-400 font-semibold"
//                             >
//                               {game.rating}
//                             </HitShotText>
//                             <HitShotText as="span" size="small" className="">
//                               /{game.maxRating}
//                             </HitShotText>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Release Date */}
//                   <div className="flex items-center gap-2">
//                     <Calendar className="size-7 text-muted-foreground" />
//                     <HitShotText as="p" size="small">
//                       {game.year}
//                     </HitShotText>
//                   </div>
//                 </div>

//                 {/* Price and Buy Button */}
//                 <div className="flex items-center justify-between flex-col gap-3 pt-2">
//                   {/* Price */}
//                   <div className="flex items-end  gap-2">
//                     <HitShotText
//                       as="span"
//                       size="xsmall"
//                       className="text-muted-foreground line-through"
//                     >
//                       {game.originalPrice}$
//                     </HitShotText>
//                     <div className="flex items-end gap-2">
//                       <span className="text-2xl font-bold text-foreground">
//                         {game.discountedPrice}$
//                       </span>
//                       <Badge
//                         variant="secondary"
//                         className="bg-primary text-white rounded-lg px-2 py-0.5 text-xs font-bold"
//                       >
//                         -{game.discountPercent}%
//                       </Badge>
//                     </div>
//                   </div>

//                   {/* Buy Button */}
//                   <button className="flex items-center gap-1 bg-transparent text-foreground p-0 rounded-md transition-all duration-300 group/btn">
//                     <HitShotText
//                       as="span"
//                       size="normal"
//                       className="font-semibold"
//                     >
//                       Buy Now
//                     </HitShotText>
//                     <ArrowRight
//                       size={20}
//                       className="group-hover/btn:translate-x-0.5 transition-transform"
//                     />
//                   </button>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";
import React, { useState, useMemo } from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { HitShotTitle } from "../base/HitShotTitle";
import { HitShotText } from "../base/HitShotText";
import { HitShotButton } from "../base/HitShotButton";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

const genres = [
  "Action",
  "RPG",
  "Samurai",
  "Sports",
  "Shooting",
  "Racing",
  "Battle",
  "Survival",
  "Strategy",
  "Horror",
  "Adventure",
  "Puzzle",
];

const allGamesData = [
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
    genre: ["Action", "RPG"],
    platform: ["pc", "ps5"],
    publisher: "Game Science",
    players: "single",
    isOnline: false,
    isFree: false,
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
    genre: ["Horror", "Adventure"],
    platform: ["pc", "ps5", "xbox"],
    publisher: "Remedy Entertainment",
    players: "single",
    isOnline: false,
    isFree: false,
  },
  {
    id: 3,
    title: "Elden Ring",
    image: "/images/games/slider3.png",
    year: 2022,
    rating: 96,
    maxRating: 100,
    originalPrice: 60,
    discountedPrice: 45,
    discountPercent: 25,
    genre: ["RPG", "Action"],
    platform: ["pc", "ps4", "ps5", "xbox"],
    publisher: "FromSoftware",
    players: "multi",
    isOnline: true,
    isFree: false,
  },
  {
    id: 4,
    title: "God of War Ragnarök",
    image: "/images/games/slider4.png",
    year: 2022,
    rating: 94,
    maxRating: 100,
    originalPrice: 70,
    discountedPrice: 56,
    discountPercent: 20,
    genre: ["Action", "Adventure"],
    platform: ["ps4", "ps5"],
    publisher: "Sony Interactive",
    players: "single",
    isOnline: false,
    isFree: false,
  },
  {
    id: 5,
    title: "Cyberpunk 2077",
    image: "/images/games/slider5.png",
    year: 2020,
    rating: 86,
    maxRating: 100,
    originalPrice: 50,
    discountedPrice: 40,
    discountPercent: 20,
    genre: ["RPG", "Shooting"],
    platform: ["pc", "ps4", "ps5", "xbox"],
    publisher: "CD Projekt Red",
    players: "single",
    isOnline: false,
    isFree: false,
  },
  {
    id: 6,
    title: "Fortnite",
    image: "/images/games/slider6.png",
    year: 2017,
    rating: 78,
    maxRating: 100,
    originalPrice: 0,
    discountedPrice: 0,
    discountPercent: 0,
    genre: ["Battle", "Shooting"],
    platform: ["pc", "ps4", "ps5", "xbox", "switch"],
    publisher: "Epic Games",
    players: "multi",
    isOnline: true,
    isFree: true,
  },
  {
    id: 7,
    title: "Grand Theft Auto V",
    image: "/images/games/slider7.png",
    year: 2013,
    rating: 97,
    maxRating: 100,
    originalPrice: 30,
    discountedPrice: 15,
    discountPercent: 50,
    genre: ["Action", "Adventure"],
    platform: ["pc", "ps4", "ps5", "xbox"],
    publisher: "Rockstar Games",
    players: "multi",
    isOnline: true,
    isFree: false,
  },
  {
    id: 8,
    title: "The Witcher 3",
    image: "/images/games/slider8.png",
    year: 2015,
    rating: 93,
    maxRating: 100,
    originalPrice: 40,
    discountedPrice: 20,
    discountPercent: 50,
    genre: ["RPG", "Action"],
    platform: ["pc", "ps4", "ps5", "xbox", "switch"],
    publisher: "CD Projekt Red",
    players: "single",
    isOnline: false,
    isFree: false,
  },
];

export default function GamesFilterSection() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [platform, setPlatform] = useState("all");
  const [publisher, setPublisher] = useState("all");
  const [players, setPlayers] = useState("all");
  const [releaseYear, setReleaseYear] = useState([2000, 2024]);
  const [rating, setRating] = useState([0, 10]);
  const [isOnline, setIsOnline] = useState(false);
  const [isFree, setIsFree] = useState(false);
  const [genreScrollPosition, setGenreScrollPosition] = useState(0);
  const [isFiltered, setIsFiltered] = useState(false);

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const scrollGenres = (direction: "left" | "right") => {
    const container = document.getElementById("genre-container");
    if (container) {
      const scrollAmount = 200;
      const newPosition =
        direction === "left"
          ? Math.max(0, genreScrollPosition - scrollAmount)
          : genreScrollPosition + scrollAmount;
      container.scrollTo({ left: newPosition, behavior: "smooth" });
      setGenreScrollPosition(newPosition);
    }
  };

  // Filter games based on all criteria
  const filteredGames = useMemo(() => {
    if (!isFiltered) return allGamesData;

    return allGamesData.filter((game) => {
      // Search query filter
      if (
        searchQuery &&
        !game.title.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Genre filter
      if (
        selectedGenres.length > 0 &&
        !selectedGenres.some((genre) => game.genre.includes(genre))
      ) {
        return false;
      }

      // Platform filter
      if (platform !== "all" && !game.platform.includes(platform)) {
        return false;
      }

      // Publisher filter
      if (
        publisher !== "all" &&
        !game.publisher.toLowerCase().includes(publisher.toLowerCase())
      ) {
        return false;
      }

      // Players filter
      if (players !== "all" && game.players !== players) {
        return false;
      }

      // Release year filter
      if (game.year < releaseYear[0] || game.year > releaseYear[1]) {
        return false;
      }

      // Rating filter (convert to 0-10 scale)
      const gameRating = game.rating / 10;
      if (gameRating < rating[0] || gameRating > rating[1]) {
        return false;
      }

      // Online filter
      if (isOnline && !game.isOnline) {
        return false;
      }

      // Free filter
      if (isFree && !game.isFree) {
        return false;
      }

      return true;
    });
  }, [
    isFiltered,
    searchQuery,
    selectedGenres,
    platform,
    publisher,
    players,
    releaseYear,
    rating,
    isOnline,
    isFree,
  ]);

  const handleSearch = () => {
    setIsFiltered(true);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedGenres([]);
    setPlatform("all");
    setPublisher("all");
    setPlayers("all");
    setReleaseYear([2000, 2024]);
    setRating([0, 10]);
    setIsOnline(false);
    setIsFree(false);
    setIsFiltered(false);
  };

  return (
    <section className="relative w-full overflow-hidden bg-background/50 backdrop-blur-sm">
      <div className="container relative py-12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Header */}
          <div className="text-center space-y-3 flex flex-col justify-center items-center">
            <HitShotTitle as="h3" color="default">
              Games By Filter
            </HitShotTitle>
            <HitShotText as="p" size="small" className="text-muted-foreground">
              At This Section You Can Search For Games By Multiple Filters
            </HitShotText>
          </div>

          {/* Filter Container */}
          <div className="w-full space-y-6">
            {/* Search Input */}
            <div className="relative bg-black">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={28}
              />
              <Input
                type="text"
                placeholder="Game Name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-16 h-14 border-none bg-background/50 rounded-xl text-base"
              />
            </div>

            {/* Genre Tags with Scroll */}
            <div className="relative">
              <button
                onClick={() => scrollGenres("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm p-2 hover:bg-background transition-colors rounded-lg border border-foreground cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>

              <div
                id="genre-container"
                className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth px-12"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {genres.map((genre) => (
                  <button
                    key={genre}
                    onClick={() => toggleGenre(genre)}
                    className={`px-4 text-foreground py-2 sm:px-6 sm:py-2.5 rounded-full whitespace-nowrap font-medium transition-all duration-300 text-xs sm:text-sm ${
                      selectedGenres.includes(genre)
                        ? "bg-primary"
                        : "bg-background/50 hover:bg-background border border-border/50"
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>

              <button
                onClick={() => scrollGenres("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm p-2 hover:bg-background transition-colors rounded-lg border border-foreground cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Dropdowns Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Platform */}
              <div className="space-y-2 flex flex-row gap-6 items-center">
                <label className="text-sm font-medium text-foreground">
                  Platform
                </label>
                <Select value={platform} onValueChange={setPlatform}>
                  <SelectTrigger className="!h-10 rounded-lg flex-1 border-none">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="pc">PC</SelectItem>
                    <SelectItem value="ps4">PS4</SelectItem>
                    <SelectItem value="ps5">PS5</SelectItem>
                    <SelectItem value="xbox">Xbox</SelectItem>
                    <SelectItem value="switch">Nintendo Switch</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Publisher */}
              <div className="space-y-2 flex flex-row gap-6 items-center">
                <label className="text-sm font-medium text-foreground">
                  Publisher
                </label>
                <Select value={publisher} onValueChange={setPublisher}>
                  <SelectTrigger className="!h-10 rounded-lg flex-1 border-none">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="ea">EA Games</SelectItem>
                    <SelectItem value="ubisoft">Ubisoft</SelectItem>
                    <SelectItem value="activision">Activision</SelectItem>
                    <SelectItem value="bethesda">Bethesda</SelectItem>
                    <SelectItem value="rockstar">Rockstar Games</SelectItem>
                    <SelectItem value="cd projekt">CD Projekt Red</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Players */}
              <div className="space-y-2 flex flex-row gap-6 items-center">
                <label className="text-sm font-medium text-foreground">
                  Players
                </label>
                <Select value={players} onValueChange={setPlayers}>
                  <SelectTrigger className="!h-10 rounded-lg flex-1 border-none">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="single">Single Player</SelectItem>
                    <SelectItem value="multi">Multiplayer</SelectItem>
                    <SelectItem value="coop">Co-op</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Sliders and Toggles Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Release Year Slider */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  Release Year
                </label>
                <div className="pt-2">
                  <Slider
                    value={releaseYear}
                    onValueChange={setReleaseYear}
                    min={2000}
                    max={2024}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-muted-foreground">
                      {releaseYear[0]}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {releaseYear[1]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Rating Slider */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  Rating
                </label>
                <div className="pt-2">
                  <Slider
                    value={rating}
                    onValueChange={setRating}
                    min={0}
                    max={10}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-muted-foreground">
                      {rating[0]}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {rating[1]}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between">
                {/* Online Toggle */}
                <div className="flex items-center justify-between space-x-4">
                  <label className="text-sm font-medium text-foreground">
                    Online
                  </label>
                  <Switch checked={isOnline} onCheckedChange={setIsOnline} />
                </div>

                {/* Free Toggle */}
                <div className="flex items-center justify-between space-x-4">
                  <label className="text-sm font-medium text-foreground">
                    Free
                  </label>
                  <Switch checked={isFree} onCheckedChange={setIsFree} />
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="pt-2 flex gap-4">
              <HitShotButton
                rounded="xl"
                className="flex-1 h-14 text-base font-semibold"
                onClick={handleSearch}
              >
                <Search size={20} className="mr-2" />
                Search For Games
              </HitShotButton>
              {isFiltered && (
                <HitShotButton
                  rounded="xl"
                  variant="outline"
                  className="h-14 text-base font-semibold px-8"
                  onClick={resetFilters}
                >
                  Reset
                </HitShotButton>
              )}
            </div>
          </div>
        </div>

        {/* Results Count */}
        {isFiltered && (
          <div className="mt-8">
            <HitShotText as="p" size="normal" className="text-muted-foreground">
              Found {filteredGames.length} game{filteredGames.length !== 1 ? "s" : ""}
            </HitShotText>
          </div>
        )}

        {/* Card Section */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {filteredGames.map((game) => (
            <Card
              key={game.id}
              className="group relative overflow-hidden border-2 border-border/50 hover:border-primary transition-all duration-300 bg-card/50 backdrop-blur-sm p-0"
            >
              {/* Game Image */}
              <div className="relative overflow-hidden px-3 pt-3">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="px-3 pb-3 space-y-3">
                {/* Title */}
                <HitShotTitle as="h5" color="default" className="line-clamp-1">
                  {game.title}
                </HitShotTitle>

                {/* Rating and Date */}
                <div className="flex items-center justify-between flex-row-reverse gap-2 sm:gap-4">
                  {/* Rating Badge */}
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
                              {game.rating}
                            </HitShotText>
                            <HitShotText as="span" size="small">
                              /{game.maxRating}
                            </HitShotText>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Release Date */}
                  <div className="flex items-center gap-2">
                    <Calendar className="size-5 text-muted-foreground" />
                    <HitShotText as="p" size="small">
                      {game.year}
                    </HitShotText>
                  </div>
                </div>

                {/* Price and Buy Button */}
                <div className="flex justify-center flex-col items-center gap-3 pt-2">
                  {/* Price */}
                  {game.isFree ? (
                    <div className="w-full justify-center items-center flex">
                      <span className="text-2xl font-bold text-primary">
                        Free to Play
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-end justify-center gap-2 w-full">
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
                        {game.discountPercent > 0 && (
                          <Badge
                            variant="secondary"
                            className="bg-primary text-white rounded-lg px-2 py-0.5 text-xs font-bold"
                          >
                            -{game.discountPercent}%
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Buy Button */}
                  <button className="flex items-center gap-1 bg-transparent text-foreground p-0 rounded-md transition-all duration-300 group/btn w-full justify-center">
                    <HitShotText
                      as="span"
                      size="normal"
                      className="font-semibold"
                    >
                      {game.isFree ? "Play Now" : "Buy Now"}
                    </HitShotText>
                    <ArrowRight
                      size={20}
                      className="group-hover/btn:translate-x-0.5 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* No Results Message */}
        {isFiltered && filteredGames.length === 0 && (
          <div className="text-center py-20">
            <HitShotTitle as="h4" color="default" className="mb-4">
              No Games Found
            </HitShotTitle>
            <HitShotText as="p" size="normal" className="text-muted-foreground mb-6">
              Try adjusting your filters to find more games
            </HitShotText>
            <HitShotButton onClick={resetFilters} rounded="xl">
              Reset Filters
            </HitShotButton>
          </div>
        )}
      </div>
    </section>
  );
}