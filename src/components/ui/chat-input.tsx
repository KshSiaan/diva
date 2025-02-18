"use client";

import React, { useState } from "react";
import { Textarea } from "./textarea";
import { Button } from "./button";
import { SendIcon } from "lucide-react";
import { generateText } from "@/lib/api/prompt";
import { useMessageContext } from "@/lib/message-context";

export default function ChatInput() {
  const [text, setText] = useState("");
  const { removeLastMessage, updateMessage } = useMessageContext();

  async function responder(event: React.FormEvent) {
    event.preventDefault();
    if (text.trim() === "") return;

    try {
      updateMessage(1, text);
      setText("");
      updateMessage(3, "");
      const response = await generateText(text);
      removeLastMessage();
      updateMessage(0, response);
    } catch (error) {
      console.error("Error generating text:", error);
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={responder}>
        <div className="w-full h-auto border-t flex flex-row justify-between items-start gap-2 py-2 px-4">
          <Textarea
            rows={1}
            placeholder="Type here.."
            className="font-bodoni resize-none !outline-none !ring-0 border-none"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault(); // Prevent new line
                responder(e as unknown as React.FormEvent); // Call submit function
              }
            }}
          />
          <Button type="submit">
            <SendIcon />
          </Button>
        </div>
      </form>
    </div>
  );
}
