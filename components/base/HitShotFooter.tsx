import { footerContent } from "@/constants/footer";
import { HitShotSectionWrapper } from "./HitShotSectionWrapper";
import { HitShotTitle } from "./HitShotTitle";
import { HitShotText } from "./HitShotText";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

const HitShotFooter = () => {
  const {
    logo,
    tagline,
    menuItems = [],
    copyright,
    bottomLinks = [],
    description,
  } = footerContent;

  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black">
      <HitShotSectionWrapper>
        <div>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-7">
            <div className="col-span-2 sm:col-span-3 mb-8 lg:mb-0">
              <div className="flex items-center gap-4 lg:justify-start">
                <img src={logo.src} className="" alt={logo.alt} />
                <HitShotText as="p" size="small" className="">
                  {tagline}
                </HitShotText>
              </div>
              <HitShotText
                as="p"
                size="small"
                className=" mt-4 text-muted-foreground"
              >
                {description}
              </HitShotText>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <HitShotTitle
                  as="h6"
                  color="primary"
                  className="mb-4 font-bold"
                >
                  {section.title}
                </HitShotTitle>
                <ul className="text-muted-foreground space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-muted-foreground mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center">
            <HitShotText as="p" size="small" className="">
              {"@ " + currentYear + " " + copyright}
            </HitShotText>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="hover:text-primary underline">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </HitShotSectionWrapper>
    </footer>
  );
};

export default HitShotFooter;
