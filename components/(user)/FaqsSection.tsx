import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HitShotSectionWrapper } from "../base/HitShotSectionWrapper";
import { HitShotTitle } from "../base/HitShotTitle";
import { HitShotText } from "../base/HitShotText";

const faqs = {
  heading: "FAQs",
  items: [
    {
      id: "faq-1",
      question: "What types of games do you offer?",
      answer:
        "We offer a wide variety of games including action, adventure, RPG, strategy, sports, racing, and multiplayer games across multiple platforms.",
    },
    {
      id: "faq-2",
      question: "What are the system requirements to play?",
      answer:
        "System requirements vary by game. Check each game's detail page for specific requirements including RAM, graphics card, processor, and storage space needed.",
    },
    {
      id: "faq-3",
      question: "How do I download and install games?",
      answer:
        "After purchase, go to your game library, select the game you want to download, and click the install button. The game will automatically download and install on your device.",
    },
    {
      id: "faq-4",
      question: "Can I play games offline?",
      answer:
        "Many single-player games can be played offline once downloaded. However, multiplayer games and some features require an active internet connection.",
    },
    {
      id: "faq-5",
      question: "How do I refund a game?",
      answer:
        "You can request a refund within 14 days of purchase if you've played less than 2 hours. Go to your purchase history and select the refund option for eligible games.",
    },
    {
      id: "faq-6",
      question: "Do you offer cross-platform play?",
      answer:
        "Selected games support cross-platform multiplayer, allowing you to play with friends on different devices. Check the game's features to see if cross-play is supported.",
    },
    {
      id: "faq-7",
      question: "How do achievements and leaderboards work?",
      answer:
        "Complete in-game challenges to unlock achievements and earn rewards. Your scores are automatically tracked on global and friend leaderboards to compete with other players.",
    },
  ],
};
const FaqsSection = () => {
  const { heading, items } = faqs;
  return (
    <HitShotSectionWrapper className="">
      <HitShotTitle as="h5" className="text-center">
        {heading}
      </HitShotTitle>
      <Accordion
        type="single"
        collapsible
        className="flex gpa-2 sm:gap-6 flex-col mt-3 sm:mt-6 "
      >
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="font-semibold hover:no-underline">
              <HitShotTitle as="h6" className="">
                {item.question}
              </HitShotTitle>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <HitShotText as="p" className="">
                {item.answer}
              </HitShotText>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </HitShotSectionWrapper>
  );
};

export default FaqsSection;
