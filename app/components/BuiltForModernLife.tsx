import Image from "next/image";

export function BuiltForModernLife() {
  return (
    <section
      id="about"
      className="relative flex min-h-[910px] flex-col items-center justify-center overflow-hidden bg-white px-8"
    >
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
        <Image src="/person-circle.jpg" alt="Modern care" fill className="object-cover object-top" />
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