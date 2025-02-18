"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Moon, Sun, UserCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [logo, setLogo] = useState<string>("logo");
  const { toast } = useToast();
  useEffect(() => {
    if (theme == "light") {
      setLogo("logo");
    } else {
      setLogo("logo-dark");
    }
  }, [theme]);

  return (
    <nav className="h-[64px] w-full border-b px-3 md:px-12 flex flex-row justify-between">
      <div className="h-[64px] w-[200px] flex flex-row justify-start items-center">
        <div
          className="w-[28px] h-[28px] bg-cover"
          style={{
            backgroundImage: `url('/${logo}.svg')`,
          }}
          suppressHydrationWarning
        ></div>
        <h1 className="text-2xl font-megrim font-bold m-0">Diva</h1>
      </div>
      <div className=""></div>
      <div className="h-[64px] w-[200px] flex flex-row justify-start items-center space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          variant="outline"
          className="font-bodoni"
          onClick={() => {
            toast({
              title: "Coming soon..",
              description: "More functionality may will be added soon.. (v1.0)",
            });
          }}
        >
          <UserCircle2 /> Authenticate
        </Button>
      </div>
    </nav>
  );
}
