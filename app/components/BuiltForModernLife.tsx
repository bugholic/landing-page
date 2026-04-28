import Image from "next/image";
import styles from "./BuiltForModernLife.module.css";

export function BuiltForModernLife() {
  return (
    <section
      id="about"
      className="relative flex min-h-[910px] flex-col items-center justify-center overflow-hidden bg-[#f5f5ee] px-8"
    >
      <div
        className={`pointer-events-none absolute bottom-[2%] right-[5%] z-0 h-[80px] w-[60%] rounded-full bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#6ee7b7] opacity-40 blur-3xl ${styles.bottomGlow}`}
      />
      <div
        className="pointer-events-none absolute bottom-[5%] left-[5%] z-0 h-[150px] w-[25%] rounded-full bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#93c5fd] opacity-35 blur-3xl"
      />

      <div className="flex flex-col items-center gap-3 text-center">
        <h2
          className="text-[50px] font-normal leading-[1.04] text-black"
          style={{
            fontFamily: "var(--font-epilogue), Epilogue, sans-serif",
            letterSpacing: "-3px",
          }}
        >
          Built for
        </h2>
        <h2
          className="text-[80px] font-normal leading-[1.025] text-black"
          style={{
            fontFamily: "var(--font-epilogue), Epilogue, sans-serif",
            letterSpacing: "-3px",
          }}
        >
          Modern Life
        </h2>
      </div>

      <div
        className="relative mt-10 h-[340px] w-[340px] overflow-hidden rounded-full shadow-[0_2px_17.5px_0_rgba(0,0,0,0.10)]"
      >
        <Image src="/person-circle.jpg" alt="Modern care" fill sizes="(max-width: 768px) 100vw, 340px" className="object-cover object-top" />
      </div>

      <div className="mt-14 flex max-w-[800px] flex-col items-center gap-[30px] text-center">
        <h3
          className="text-[28px] font-medium leading-[1.07] text-black"
          style={{
            fontFamily: "Satoshi, DM Sans, sans-serif",
            letterSpacing: "-0.56px",
          }}
        >
          Focused on Root, Not Symptoms
        </h3>
        <p
          className="text-[20px] font-normal leading-[1.2] text-black"
          style={{
            fontFamily: "var(--font-epilogue), Epilogue, sans-serif",
            letterSpacing: "-1px",
          }}
        >
          Joyzen was built on a simple realization: life has changed, but healthcare hasn&apos;t kept up.
          Care still begins too late. Joyzen enables earlier understanding, proactive care, and
          continuous guidance.
        </p>
      </div>
    </section>
  );
}
