import { HitShotButton } from "@/components/base/HitShotButton";
import { HitShotSectionWrapper } from "@/components/base/HitShotSectionWrapper";
import { HitShotText } from "@/components/base/HitShotText";
import { HitShotTitle } from "@/components/base/HitShotTitle";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HitShotSectionWrapper>
        {/* // Basic usage - just specify as */}
        <HitShotTitle as={"h1"}>My Main Title</HitShotTitle>
        <HitShotTitle as={"h2"}>My Subtitle</HitShotTitle>
        {/* // With color (orange/purple theme) */}
        <HitShotTitle as={"h1"} color="primary">
          Orange Heading
        </HitShotTitle>
        <HitShotTitle as={"h2"} color="secondary">
          Purple Heading
        </HitShotTitle>
        {/* // Centered and bold */}
        <HitShotTitle as={"h1"} align="center" weight="bold">
          Centered Title
        </HitShotTitle>
        {/* // Interactive heading */}
        <HitShotTitle
          as={"h3"}
          className="cursor-pointer hover:text-primary"
        >
          Click Me
        </HitShotTitle>
        {/* // Truncated text */}
        <HitShotTitle as={"h2"} truncate className="max-w-md">
          This very long heading will truncate...
        </HitShotTitle>
      </HitShotSectionWrapper>

      <HitShotSectionWrapper isContainerEnabled={false}>
        {/* Default paragraph */}
        <HitShotText>
          This is a default paragraph. It adapts responsively using Tailwind
          breakpoints.
        </HitShotText>

        {/* Muted paragraph */}
        <HitShotText size="xsmall">
          This paragraph uses muted text color.
        </HitShotText>

        {/* Lead paragraph */}
        <HitShotText size="small" weight="medium">
          This is a lead paragraph for emphasis or introductions.
        </HitShotText>

        {/* Small / caption */}
        <HitShotText size="large">
          This is small caption text, uppercase by default.
        </HitShotText>

        {/* Inline span example */}
        <HitShotText as="span" size="xlarge" underline>
          Highlighted inline span text
        </HitShotText>
      </HitShotSectionWrapper>
      <HitShotSectionWrapper>
        <div className="flex flex-col gap-8 p-10 bg-background text-foreground">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Large Buttons</h3>
            <div className="flex gap-4 flex-wrap">
              <HitShotButton size="large" variant="filled">
                Button
              </HitShotButton>
              <HitShotButton size="large" variant="outline">
                Button
              </HitShotButton>
              <HitShotButton size="large" variant="text">
                Button
              </HitShotButton>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Medium Buttons</h3>
            <div className="flex gap-4 flex-wrap">
              <HitShotButton size="medium" variant="filled">
                Button
              </HitShotButton>
              <HitShotButton size="medium" variant="outline">
                Button
              </HitShotButton>
              <HitShotButton size="medium" variant="text">
                Button
              </HitShotButton>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Small Buttons</h3>
            <div className="flex gap-4 flex-wrap">
              <HitShotButton size="small" variant="filled">
                Button
              </HitShotButton>
              <HitShotButton size="small" variant="outline">
                Button
              </HitShotButton>
              <HitShotButton size="small" variant="text">
                Button
              </HitShotButton>
            </div>
          </div>
        </div>
      </HitShotSectionWrapper>
    </div>
  );
}
