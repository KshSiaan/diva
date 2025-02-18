import {
  BotMessageSquare,
  MessageSquareDiff,
  MessageSquareDot,
  Settings,
} from "lucide-react";
import React from "react";

export const navs = [
  {
    icon: <MessageSquareDot />,
    label: "Current Chat",
  },
  {
    icon: <MessageSquareDiff />,
    label: "New chat",
  },
  {
    icon: <BotMessageSquare />,
    label: "Configure",
  },
  {
    icon: <Settings />,
    label: "Settings",
  },
];

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-[64px] w-[20dvw] h-[calc(100dvh-64px)] border-r font-bodoni hidden sm:block">
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
    </div>
  );
}
