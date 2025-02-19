import { useMessageContext } from "@/lib/message-context";
import {
  BotMessageSquare,
  MessageSquareDiff,
  MessageSquareDot,
  Settings,
} from "lucide-react";
import Link from "next/link";
import React from "react";
export const navs = [
  {
    icon: <MessageSquareDot />,
    label: "Current Chat",
    action: {
      type: "link",
      to: "/",
    },
  },
  {
    icon: <MessageSquareDiff />,
    label: "New chat",
    action: {
      type: "function",
      do: "reset",
    },
  },
  {
    icon: <BotMessageSquare />,
    label: "Configure",
    action: {
      type: "link",
      to: "/config",
    },
  },
  {
    icon: <Settings />,
    label: "Settings",
    action: {
      type: "link",
      to: "/settings",
    },
  },
];

export default function Sidebar() {
  const { resetMessages } = useMessageContext();
  return (
    <div className="fixed left-0 top-[64px] w-[20dvw] h-[calc(100dvh-64px)] border-r font-bodoni hidden sm:block">
      <ul className="divide-y border-b">
        {navs.map((item, i) =>
          item.action.type == "link" ? (
            <Link href={item.action.to ? item.action.to : "/"} key={i}>
              <li className="p-4 px-8 flex flex-row text-xs md:text-sm lg:text-base justify-start items-center space-x-2 text-foreground hover:bg-secondary cursor-pointer active:scale-90 transition-transform">
                {item.icon} <span>{item.label}</span>
              </li>
            </Link>
          ) : (
            <li
              className="p-4 px-8 flex flex-row text-xs md:text-sm lg:text-base justify-start items-center space-x-2 text-foreground hover:bg-secondary cursor-pointer active:scale-90 transition-transform"
              key={i}
              onClick={() => {
                resetMessages();
              }}
            >
              {item.icon} <span>{item.label}</span>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
