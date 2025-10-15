"use client";
import HitShotHeader from "@/components/base/HitShotHeader";
import { ThemeProvider } from "./theme-provider";
import HitShotFooter from "@/components/base/HitShotFooter";

export default function ConfigProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex flex-col min-h-screen relative">
        <HitShotHeader></HitShotHeader>
        <main className="flex-grow">{children}</main>
        <HitShotFooter></HitShotFooter>
      </div>
    </ThemeProvider>
  );
}
