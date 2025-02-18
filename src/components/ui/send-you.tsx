import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function SendMe({ x }: { x: string }) {
  return (
    <>
      <div className="w-full flex flex-row justify-start items-center p-4 gap-4">
        <Avatar>
          <AvatarImage src="/image/diva.webp" />
          <AvatarFallback>DV</AvatarFallback>
        </Avatar>
        <div className="rounded-full max-w-[66%] text-start">{x}</div>
      </div>
    </>
  );
}
