"use client";

import { useEffect, useRef, useState } from "react";

const words = [
  { text: "Joyzen ", highlight: true },
  { text: "replaces ", highlight: false },
  { text: "fragmented ", highlight: false },
  { text: "care ", highlight: false },
  { text: "with ", highlight: false },
  { text: "a ", highlight: false },
  { text: "continuous ", highlight: false },
  { text: "system ", highlight: false },
  { text: "where ", highlight: false },
  { text: "hormones, ", highlight: false },
  { text: "fertility, ", highlight: false },
  { text: "and ", highlight: false },
  { text: "long-term ", highlight: false },
  { text: "health ", highlight: false },
  { text: "are ", highlight: false },
  { text: "managed ", highlight: false },
  { text: "together. ", highlight: false },
  { text: "Online ", highlight: false },
  { text: "or ", highlight: false },
  { text: "in ", highlight: false },
  { text: "clinic, ", highlight: false },
  { text: "it's ", highlight: false },
  { text: "the ", highlight: false },
  { text: "same ", highlight: false },
  { text: "person ", highlight: false },
  { text: "guiding ", highlight: false },
  { text: "your ", highlight: false },
  { text: "care. ", highlight: false },
  { text: "Tracking ", highlight: false },
  { text: "your ", highlight: false },
  { text: "progress. ", highlight: false },
  { text: "Adjusting ", highlight: false },
  { text: "your ", highlight: false },
  { text: "treatment. ", highlight: false },
  { text: "Moving ", highlight: false },
  { text: "you ", highlight: false },
  { text: "forward. ", highlight: false },
  { text: "Joyzen ", highlight: false },
  { text: "connects ", highlight: false },
  { text: "you ", highlight: false },
  { text: "to ", highlight: false },
  { text: "the ", highlight: false },
  { text: "right ", highlight: false },
  { text: "doctor ", highlight: false },
  { text: "and ", highlight: false },
  { text: "keeps ", highlight: false },
  { text: "your ", highlight: false },
  { text: "care ", highlight: false },
  { text: "continuous ", highlight: false },
  { text: "across ", highlight: false },
  { text: "every ", highlight: false },
  { text: "step. ", highlight: false },
  { text: "Always ", highlight: false },
  { text: "accessible ", highlight: false },
  { text: "— ", highlight: false },
  { text: "speak ", highlight: false },
  { text: "to ", highlight: false },
  { text: "your ", highlight: false },
  { text: "doctor ", highlight: false },
  { text: "anytime, ", highlight: false },
  { text: "not ", highlight: false },
  { text: "just ", highlight: false },
  { text: "during ", highlight: false },
  { text: "appointment.", highlight: false },
];

export function Statement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      const startReveal = windowHeight * 0.7;
      const endReveal = -elementHeight * 0.3;

      if (elementTop > startReveal) {
        return;
      }

      if (elementTop < endReveal) {
        return;
      }

      const totalScroll = startReveal - endReveal;
      const currentScroll = startReveal - elementTop;
      const progress = Math.max(0, Math.min(currentScroll / totalScroll, 1));

      const wordsToReveal = Math.floor(progress * words.length);
      setRevealedCount((prev) => Math.max(prev, wordsToReveal));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex min-h-[870px] items-center justify-center bg-white px-10">
      <div
        className="pointer-events-none absolute"
        style={{
          left: "0%",
          bottom: "5%",
          width: 420,
          height: 220,
          background:
            "radial-gradient(ellipse at center, rgba(255,180,120,0.38) 0%, rgba(255,200,160,0.18) 55%, transparent 80%)",
          filter: "blur(18px)",
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          right: "0%",
          bottom: "5%",
          width: 380,
          height: 200,
          background:
            "radial-gradient(ellipse at center, rgba(220,240,140,0.32) 0%, rgba(200,230,160,0.15) 55%, transparent 80%)",
          filter: "blur(18px)",
        }}
      />
      <div ref={containerRef}>
        <p
          className="max-w-[1114px] text-center text-[40px] font-medium leading-[1.1] text-black"
          style={{ fontFamily: "Satoshi, DM Sans, sans-serif" }}
        >
          {words.map((word, index) => (
            <span
              key={index}
              className={`transition-all duration-300 ${
                word.highlight
                  ? "text-[#EF8F60]"
                  : index < revealedCount
                    ? "text-black"
                    : "text-gray-200"
              }`}
            >
              {word.text}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
