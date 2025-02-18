import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
// import { Skeleton } from "./skeleton";

export default function LoaderYou() {
  return (
    <div className="w-full flex flex-row justify-start items-center p-4 gap-4">
      <Avatar>
        <AvatarImage src="/image/diva.webp" />
        <AvatarFallback>DV</AvatarFallback>
      </Avatar>
      <div className="rounded-full max-w-[66%] text-start flex flex-row justify-start gap-4 text-gray-600 dark:text-gray-400">
        Thinking..
      </div>
    </div>
  );
}
