import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex min-h-[910px] flex-col overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/hero-bg.png" alt="" fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-x-0 bottom-0 h-[50px] bg-gradient-to-t from-white to-transparent" />
      </div>

      <div
        className="relative z-10 mt-auto pb-[130px] pl-[50px]"
        style={{ maxWidth: 1063 }} 
      >
        <h1
          className="text-[60px] font-normal leading-[1.067] text-white"
          style={{
            fontFamily: "var(--font-epilogue), Epilogue, sans-serif",
            letterSpacing: "-1.2px",
          }}
        >
          A New Health System
        </h1>
        <p
          className="mt-[14px] text-[20px] font-normal leading-[1.1] text-white"
          style={{ fontFamily: "var(--font-epilogue), Epilogue, sans-serif" }}
        >
          Joyzen is not a clinic.
          <br />
          It&apos;s a new way of delivering reproductive healthcare.
        </p>
      </div>
    </section>
  );
}