import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { buttonVariants } from "./ui/button";
import logo from "../assets/tech-info-logo.png";

interface MainNavProps {
  className?: string;
}

export function MainNav({ className }: MainNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={cn("flex h-16 items-center justify-between relative", className)}>
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Tech Info" className="h-5 w-auto" />
      </Link>

      <button
        onClick={toggleMenu}
        className="ml-auto rounded-md p-2 text-gray-700 hover:bg-gray-100"
        aria-label="Toggle navigation"
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      <div
        className={cn(
          "absolute right-0 top-full z-10 w-48 rounded-md bg-white shadow-lg transition-all duration-300 ease-in-out mt-2",
          {
            hidden: !isOpen,
            block: isOpen,
          }
        )}
      >
        <Link
          to="/"
          className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "block w-full text-left")}
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "block w-full text-left")}
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "block w-full text-left")}
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}