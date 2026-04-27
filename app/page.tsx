import Image from "next/image";

// ─── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex h-[90px] items-center justify-between px-[50px]">
      {/* Logo + nav links */}
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Joyzen" width={32} height={32} />
          <span
            className="text-xl font-semibold text-white"
            style={{ fontFamily: "var(--font-epilogue), Epilogue, sans-serif" }}
          >
            Joyzen
          </span>
        </div>
        <div className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#stories" className="hover:text-white transition-colors">Stories</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>
      </div>
      {/* CTA */}
      <div className="flex items-center gap-4">
        <a href="#login" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
          Log in
        </a>
        <a
          href="#get-started"
          className="rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
        >
          Get started
        </a>
      </div>
    </nav>
  );
}

// ─── Hero ───────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative flex min-h-[910px] flex-col overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/hero-bg.png" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Bottom-left text block */}
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

// ─── Statement ─────────────────────────────────────────────────────────────────
function Statement() {
  return (
    <section className="flex min-h-[870px] items-center justify-center bg-white px-10">
      <p
        className="max-w-[1114px] text-center text-[40px] font-medium leading-[1.1] text-black"
        style={{ fontFamily: "Satoshi, DM Sans, sans-serif" }}
      >
        Joyzen replaces fragmented care with a continuous system{" "}
        where hormones, fertility, and long-term health are managed together.
        <br /><br />
        Online or in clinic, it&apos;s the same person guiding your care.
        Tracking your progress. Adjusting your treatment. Moving you forward.
        <br /><br />
        Joyzen connects you to the right doctor and keeps your care continuous
        across every step. Always accessible — speak to your doctor anytime,
        not just during appointment.
      </p>
    </section>
  );
}

// ─── Services Bento Grid ───────────────────────────────────────────────────────
const glassCard =
  "rounded-3xl border border-white/20 bg-white/[0.06] shadow-[0_2px_17.5px_0_rgba(0,0,0,0.10)] backdrop-blur-sm";

interface CardProps {
  title: string;
  description: string;
  style?: React.CSSProperties;
}

function TextCard({ title, description, style }: CardProps) {
  return (
    <div
      className={`absolute ${glassCard} flex flex-col justify-end p-8`}
      style={style}
    >
      <h3
        className="text-[28px] font-medium leading-[1.07] text-black"
        style={{
          fontFamily: "Satoshi, DM Sans, sans-serif",
          letterSpacing: "-0.56px",
        }}
      >
        {title}
      </h3>
      <p
        className="mt-3.5 text-[18px] font-normal leading-[1.11] text-black"
        style={{
          fontFamily: "Satoshi, DM Sans, sans-serif",
          letterSpacing: "-1px",
        }}
      >
        {description}
      </p>
    </div>
  );
}

function ServicesGrid() {
  return (
    <section
      id="services"
      className="relative flex min-h-[910px] items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src="/gallery-row-1.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Bento grid — 1280×700, matching Pencil layout exactly */}
      <div className="relative z-10" style={{ width: 1280, height: 700 }}>
        {/* Top-left: Beyond Visits */}
        <TextCard
          title="Beyond Visits"
          description="Traditional care treats moments. Joyzen manages the entire journey continuously, not occasionally."
          style={{ left: 0, top: 0, width: 413, height: 340 }}
        />

        {/* Top-center: Integrated Care */}
        <TextCard
          title="Integrated Care"
          description="Doctors, lifestyle, and emotional support, working together as one system."
          style={{ left: 433, top: 0, width: 414, height: 280 }}
        />

        {/* Top-right: image */}
        <div
          className={`absolute ${glassCard} overflow-hidden`}
          style={{ left: 867, top: 0, width: 413, height: 340 }}
        >
          <Image src="/gallery-row-2.jpg" alt="Care" fill className="object-cover" />
        </div>

        {/* Bottom-left: Focused on Root */}
        <TextCard
          title="Focused on Root, Not Symptoms"
          description="Hormones, lifestyle, fertility, long-term health — everything connected, everything managed."
          style={{ left: 0, top: 360, width: 413, height: 340 }}
        />

        {/* Bottom-center: image */}
        <div
          className={`absolute ${glassCard} overflow-hidden`}
          style={{ left: 433, top: 420, width: 414, height: 280 }}
        >
          <Image src="/person-circle.jpg" alt="Care team" fill className="object-cover" />
        </div>

        {/* Bottom-right: Designed for Better Outcomes */}
        <TextCard
          title="Designed for Better Outcomes"
          description="Not more visits, not more confusion. Clear direction. Continuous support. Real results."
          style={{ left: 867, top: 360, width: 413, height: 340 }}
        />
      </div>
    </section>
  );
}

// ─── Built for Modern Life ─────────────────────────────────────────────────────
function BuiltForModernLife() {
  return (
    <section
      id="about"
      className="relative flex min-h-[910px] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 px-8"
    >
      {/* Heading */}
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

      {/* Circular image */}
      <div
        className="relative mt-10 h-[340px] w-[340px] overflow-hidden rounded-full shadow-[0_2px_17.5px_0_rgba(0,0,0,0.10)]"
      >
        <Image src="/person-circle.jpg" alt="Modern care" fill className="object-cover" />
      </div>

      {/* Description */}
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

// ─── Book a Clarity Call ───────────────────────────────────────────────────────
function BookAClarityCall() {
  return (
    <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 px-8">
      <div
        className={`relative z-10 flex w-full max-w-[1064px] items-center justify-between gap-16 rounded-3xl border border-white/30 bg-white/[0.06] px-[90px] py-[100px] shadow-[0_2px_17.5px_0_rgba(0,0,0,0.10)] backdrop-blur-sm`}
      >
        {/* Text */}
        <div className="flex max-w-[593px] flex-col items-end gap-5 text-right">
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
            If you would like to understand your reproductive health better or learn how Joyzen can
            support your journey, you can schedule a conversation with our care team.
          </p>
          <a
            href="#book"
            className="mt-4 flex h-[50px] items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 text-[11px] font-medium text-black shadow-md backdrop-blur-sm hover:bg-white/20 transition-colors"
            style={{ fontFamily: "Satoshi, DM Sans, sans-serif" }}
          >
            Book Clarity Call
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </a>
        </div>

        {/* Decorative wavy shapes (mirroring Pencil z606M group) */}
        <div className="flex flex-col gap-6 opacity-60 shrink-0">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-8 rounded-full"
              style={{
                width: i % 2 === 0 ? 133 : 46,
                backgroundColor: "#ddc5df",
                transform: i >= 2 ? "translateY(4px)" : undefined,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="relative flex min-h-[600px] flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src="/footer.jpg" alt="" fill className="object-cover" />
      </div>

      {/* Top-right contacts */}
      <div
        className="relative z-10 ml-auto flex items-center gap-10 pr-[213px] pt-[97px]"
        style={{ fontFamily: "var(--font-epilogue), Epilogue, sans-serif" }}
      >
        <span className="text-[14px] font-medium leading-[1.14] text-black">
          Email: info@joyzenlife.com
        </span>
        <span className="text-[14px] font-medium leading-[1.14] text-black">
          Instagram: @joyzen.in
        </span>
      </div>

      {/* Bottom copyright bar */}
      <div
        className="relative z-10 mx-auto mt-auto flex w-full max-w-[1340px] items-center justify-between border-t border-black/10 py-6"
        style={{ fontFamily: "Satoshi, DM Sans, sans-serif" }}
      >
        <p className="text-[14px] font-medium leading-[1.14] text-black">
          2026 Joyzen. Built for healthcare. Designed for trust.
        </p>
        <p className="text-[14px] font-medium leading-[1.14] text-black">
          Designed and Developed by TIC Global Services
        </p>
      </div>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Statement />
      <ServicesGrid />
      <BuiltForModernLife />
      <BookAClarityCall />
      <Footer />
    </div>
  );
}
