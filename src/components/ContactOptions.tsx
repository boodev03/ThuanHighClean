import { MessengerIcon } from "@/icons/MessengerIcon";
import { ZaloIconV1 } from "@/icons/ZaloIconV1";
import { Phone } from "lucide-react";
import "./styles.css";

export default function ContactOptions() {
  return (
    <div className="flex flex-col items-center p-4 fixed right-3 bottom-3 z-[9999] space-y-10">
      <a
        href="https://zalo.me/0357111566"
        className="size-12 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors relative group animate-button"
        aria-label="Contact via Zalo"
        target="_blank"
      >
        <ZaloIconV1 />
        <span
          style={{
            animationDuration: "1500ms",
          }}
          className="absolute delay-500 -inset-1 rounded-full animate-ping bg-blue-400 opacity-75 group-hover:opacity-0 transition-opacity"
        ></span>
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100064357351583"
        className="size-12 bg-[#a033ff] rounded-full flex items-center justify-center text-white transition-colors relative group animate-button"
        aria-label="Send a message"
        target="_blank"
      >
        <MessengerIcon />
        <span
          style={{
            animationDuration: "1500ms",
          }}
          className="absolute delay-500 -inset-1 rounded-full animate-ping bg-gradient-to-br from-[#00B2FF] via-[#a033ff] to-[#ff5280] opacity-75 group-hover:opacity-0 transition-opacity"
        ></span>
      </a>
      <a
        href="tel:0357111566"
        className="size-12 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors relative group animate-button"
        aria-label="Call phone number"
      >
        <Phone className="size-6" />
        <span
          style={{
            animationDuration: "1500ms",
          }}
          className="absolute delay-500 -inset-1 rounded-full animate-ping bg-red-400 opacity-75 group-hover:opacity-0 transition-opacity"
        ></span>
      </a>
    </div>
  );
}
