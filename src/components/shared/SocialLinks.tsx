import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { cn } from "@/lib/utils";

const socialLink = [
  {
    title: "Github",
    href: "https://github.com/NaimurRahmanNishat?tab=repositories",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/naimur-rahman-11a621210/",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/Naimur.Rahman.Nishat6246",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "Twitter",
    href: "https://x.com/naimurrahmun34",
    icon: <Twitter className="w-5 h-5" />,
  },
];

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const SocialLinks = ({className, tooltipClassName, iconClassName}:Props) => {
  return (
    <TooltipProvider>
      <div className={cn("pt-5 flex items-center gap-3.5 text-white/80", className)}>
        {socialLink.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link href={item?.href} target="blank" rel="noopener noreferrer" className={cn("p-2 border rounded-full hover:text-white hover:border-darkRed hoverEffect")}>{item?.icon}</Link>
            </TooltipTrigger>
            <TooltipContent className={cn("bg-white text-darkColor font-semibold")}>
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialLinks;
