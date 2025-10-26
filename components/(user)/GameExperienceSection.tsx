"use client";
import React, { useState, useRef } from "react";
import { Play, Calendar, Cpu, ArrowLeft, ArrowRight } from "lucide-react";
import { HitShotTitle } from "../base/HitShotTitle";
import { HitShotText } from "../base/HitShotText";
import { HitShotButton } from "../base/HitShotButton";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { AppWindowIcon, CodeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


export default function GameExperienceSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="container relative py-12 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Minimum System Requirements */}
          <div className="space-y-6">
            <HitShotTitle as="h3" color="default">
              <span className="text-primary">Minimum</span> System Requirements
            </HitShotTitle>

            <HitShotText
              as="p"
              size="normal"
              className="text-muted-foreground leading-relaxed"
            >
              Before diving into the action, make sure your PC meets the
              following minimum system requirements for the best gaming
              experience.
            </HitShotText>

            <div className="grid grid-cols-2 gap-3">
              {/* OS */}
              <Card className="space-y-4 bg-black border-0 p-6">
                <CardDescription>
                  <HitShotTitle as="h6" color="default">
                    <span className="text-primary">Operating</span> System
                  </HitShotTitle>
                  <HitShotText
                    as="p"
                    size="normal"
                    className="text-muted-foreground leading-relaxed"
                  >
                    Windows 10 64-bit or newer for optimal compatibility and
                    performance.
                  </HitShotText>
                </CardDescription>
              </Card>

              {/* Processor */}
              <Card className="space-y-4 bg-black border-0 p-6">
                <CardDescription>
                  <HitShotTitle as="h6" color="default">
                    <span className="text-primary">Processor</span>
                  </HitShotTitle>
                  <HitShotText
                    as="p"
                    size="normal"
                    className="text-muted-foreground leading-relaxed"
                  >
                    Intel Core i5-8400 or AMD Ryzen 5 1600 equivalent or better.
                  </HitShotText>
                </CardDescription>
              </Card>

              {/* Memory */}
              <Card className="space-y-4 bg-black border-0 p-6">
                <CardDescription>
                  <HitShotTitle as="h6" color="default">
                    <span className="text-primary">Memory</span> (RAM)
                  </HitShotTitle>
                  <HitShotText
                    as="p"
                    size="normal"
                    className="text-muted-foreground leading-relaxed"
                  >
                    At least 16 GB of RAM is required for smooth gameplay.
                  </HitShotText>
                </CardDescription>
              </Card>

              {/* Graphics */}
              <Card className="space-y-4 bg-black border-0 p-6">
                <CardDescription>
                  <HitShotTitle as="h6" color="default">
                    <span className="text-primary">Graphics</span> Card
                  </HitShotTitle>
                  <HitShotText
                    as="p"
                    size="normal"
                    className="text-muted-foreground leading-relaxed"
                  >
                    NVIDIA GeForce GTX 1060 (6GB) or AMD Radeon RX 580 (8GB).
                  </HitShotText>
                </CardDescription>
              </Card>
            </div>
          </div>

          {/* Right Column - Sign In / Sign Up Tabs */}
          <div className="space-y-4">
            <Card className="space-y-4 bg-black border-0 p-6">
              <Tabs defaultValue="signin">
                <TabsList className="items-center bg-transparent space-x-3 mx-auto w-full !text-primary outline-none">
                  <TabsTrigger
                    className="!text-primary outline-0 border-0 !bg-transparent"
                    value="signin"
                  >
                    Sign In
                  </TabsTrigger>

                  <TabsTrigger
                    className="!text-primary outline-0 border-0 !bg-transparent"
                    value="signup"
                  >
                    Sign Up
                  </TabsTrigger>
                </TabsList>

                {/* Sign In */}
                <TabsContent value="signin">
                  <CardDescription>
                    <div className="flex flex-col gap-3">
                      <div>
                        <HitShotTitle as="h6" className="font-semibold">
                          Email
                        </HitShotTitle>
                        <Input
                          placeholder="Enter your email"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <HitShotTitle as="h6" className="font-semibold">
                          Password
                        </HitShotTitle>
                        <Input
                          type="password"
                          placeholder="Enter your password"
                          className="mt-1"
                        />
                      </div>

                      <div className="flex flex-col space-y-3 mt-6">
                        <HitShotButton className="w-full">
                          Sign In
                        </HitShotButton>
                        <HitShotButton className="w-full" variant="outline">
                          Sign In with Google
                        </HitShotButton>
                      </div>
                    </div>
                  </CardDescription>
                </TabsContent>

                {/* Sign Up */}
                <TabsContent value="signup">
                  <CardDescription>
                    <div className="flex flex-col gap-3">
                      <div>
                        <HitShotTitle as="h6" className="font-semibold">
                          Name
                        </HitShotTitle>
                        <Input placeholder="Enter your name" className="mt-1" />
                      </div>

                      <div>
                        <HitShotTitle as="h6" className="font-semibold">
                          Email
                        </HitShotTitle>
                        <Input
                          placeholder="Enter your email"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <HitShotTitle as="h6" className="font-semibold">
                          Password
                        </HitShotTitle>
                        <Input
                          type="password"
                          placeholder="Create a password"
                          className="mt-1"
                        />
                      </div>

                      <div className="flex flex-col space-y-3 mt-6">
                        <HitShotButton className="w-full">
                          Sign Up
                        </HitShotButton>
                        <HitShotButton className="w-full" variant="outline">
                          Sign Up with Google
                        </HitShotButton>
                      </div>
                    </div>
                  </CardDescription>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
