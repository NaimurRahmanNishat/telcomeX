import React from "react";
import Logo from "./Logo";
import { X } from "lucide-react";
import { headerData } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialLinks from "./SocialLinks";
import { useOutsideClick } from "@/lib/hooks";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<Props> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose)

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-full bg-darkColor/50 shadow-xl transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } hoverEffect`}
    >
      <div ref={sidebarRef} className="min-w-72 max-w-96 bg-darkColor h-full text-white p-4 flex flex-col">
        {/* Logo */}
        <div className="flex justify-between items-center">
          <Logo className="text-white" subClass="group-hover:text-white" />
          <button onClick={onClose} className="text-white hover:text-darkRed transition cursor-pointer">
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="pt-5 flex flex-col gap-3 text-base font-semibold tracking-wide text-white/80">
          {headerData.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className={`hover:text-darkRed ${pathname === item?.href ? "text-darkRed" : ""}`}
              onClick={onClose} 
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <div>
          <SocialLinks/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
