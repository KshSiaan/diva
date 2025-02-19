"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export interface messageType {
  sender: number;
  text: string;
}

interface MessageContextType {
  messages: messageType[];
  updateMessage: (sentBy: number, x: string) => void;
  removeLastMessage: () => void;
  resetMessages: () => void;
}

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export function MessageProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<messageType[]>([]);

  const updateMessage = (sentBy: number, x: string) => {
    setMessages((prev) => [...prev, { sender: sentBy, text: x }]);
  };

  const removeLastMessage = () => {
    setMessages((prev) => prev.slice(0, -1));
  };

  const resetMessages = () => {
    setMessages([]);
  };

  return (
    <MessageContext.Provider
      value={{ messages, updateMessage, removeLastMessage, resetMessages }}
    >
      {children}
    </MessageContext.Provider>
  );
}

export function useMessageContext() {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("useMessageContext must be used within a MessageProvider");
  }
  return context;
}
