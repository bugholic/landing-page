import Image from "next/image";

export function BookAClarityCall() {
  return (
    <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-white px-8">
      {/* Background Gradients */}
      <div className="pointer-events-none absolute -bottom-[10%] -left-[10%] h-[400px] w-[800px] rounded-[100%] bg-[#C6EDFC] opacity-100 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-[10%] -right-[10%] h-[400px] w-[800px] rounded-[100%] bg-[#ECD1F3] opacity-100 blur-[140px]" />

      <div
        className={`relative z-10 flex w-full max-w-7xl items-center justify-between gap-16 rounded-3xl border border-white/30 bg-white/[0.06] px-[90px] py-[100px] shadow-[0_2px_17.5px_0_rgba(0,0,0,0.10)] backdrop-blur-sm`}
      >
        <div className="flex max-w-[593px] flex-col items-start gap-5">
          <h2
            className="text-[50px] font-normal leading-[1.08] text-black"
            style={{
              fontFamily: "var(--font-epilogue), Epilogue, sans-serif",
              letterSpacing: "-1px",
            }}
          >
            Book a clarity call
          </h2>
          <p
            className="text-[20px] font-normal leading-[1.1] text-black"
            style={{ fontFamily: "var(--font-epilogue), Epilogue, sans-serif" }}
          >
            If you would like to understand your reproductive health better or
            learn how Joyzen can support your journey, you can schedule a
            conversation with our care team.
          </p>
          <a
            href="#book"
            className="mt-4 flex h-[50px] items-center gap-2 rounded-full border border-white/40 bg-white/20 px-7 text-[11px] font-medium text-black shadow-[0_4px_24px_0_rgba(0,0,0,0.10),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md hover:bg-white/30 transition-"
            style={{ fontFamily: "Satoshi, DM Sans, sans-serif" }}
          >
            Book Clarity Call
            <Image
              src="/nav-cta.svg"
              alt="Joyzen"
              width={15}
              height={15}
              className="h-auto w-auto"
            />
          </a>
        </div>

        <div className="relative flex h-[200px] w-[200px] shrink-0 flex-col gap-6 opacity-60">
          <Image src={"/logo.svg"} alt="logo" fill sizes="200px" className="object-contain" />
        </div>
      </div>
    </section>
  );
}
