"use client";
import LoaderYou from "@/components/ui/loaderYou";
import { ScrollArea } from "@/components/ui/scroll-area";
import SendMe from "@/components/ui/send-me";
import SendYou from "@/components/ui/send-you";
import { useMessageContext } from "@/lib/message-context";
import { Key, useEffect, useRef } from "react";

export default function Home() {
  const { messages } = useMessageContext();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <ScrollArea className="flex-grow w-full p-6 text-sm" ref={scrollRef}>
      {messages.map(
        (item: { sender: number; text: string }, i: Key | null | undefined) =>
          item.sender === 0 ? (
            <SendYou x={item.text} key={i} />
          ) : item.sender == 3 ? (
            <LoaderYou key={i} />
          ) : (
            <SendMe x={item.text} key={i} />
          )
      )}
    </ScrollArea>
  );
}
