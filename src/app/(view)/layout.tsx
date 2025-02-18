"use client";
import Navbar from "@/components/shared/navbar";
import Sidebar from "@/components/shared/sidebar";
import ChatInput from "@/components/ui/chat-input";
import { MessageProvider } from "@/lib/message-context";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <MessageProvider>
        <div className="sm:pl-[20dvw] h-[calc(100vh-64px)] flex flex-col justify-start items-start">
          {children}
          <ChatInput />
        </div>
      </MessageProvider>
    </>
  );
}
