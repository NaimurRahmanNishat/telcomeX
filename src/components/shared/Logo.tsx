import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = ({ className, subClass }: { className?: string; subClass?: string }) => {
  return (
    <div className={cn(className)}> {/* Apply className to the wrapper */}
      <Link href={"/"}>
        <span
          className={cn(
            "text-2xl font-black tracking-wider hover:text-darkRed font-sans uppercase group hoverEffect"
          )}
        >
          Telecom
          <span className={cn("text-darkRed group-hover:text-darkColor hoverEffect", subClass)}>
            x
          </span>
        </span>
      </Link>
    </div>
  );
};

export default Logo;
