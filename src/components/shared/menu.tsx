import React from "react";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navs } from "./sidebar";

export default function Menu() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="flex sm:hidden">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <ul className="divide-y border-b">
              {navs.map((item, i) => (
                <li
                  className="p-4 px-8 flex flex-row text-xs md:text-sm lg:text-base justify-start items-center space-x-2 text-foreground hover:bg-secondary cursor-pointer active:scale-90 transition-transform"
                  key={i}
                >
                  {item.icon} <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
