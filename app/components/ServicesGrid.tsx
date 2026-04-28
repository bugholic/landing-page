import Image from "next/image";
import styles from "./ServicesGrid.module.css";

const glassCard =
  "rounded-3xl border border-white/20 bg-white/[0.06] shadow-[0_2px_17.5px_0_rgba(0,0,0,0.10)] backdrop-blur-sm";
const hoverCard =
  "transition-transform duration-500 ease-out will-change-transform hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_28px_60px_-24px_rgba(15,23,42,0.35)]";

interface TextCardProps {
  title: string;
  description: string;
  style?: React.CSSProperties;
}

function TextCard({ title, description, style }: TextCardProps) {
  return (
    <div
      className={`absolute ${glassCard} ${hoverCard} flex flex-col justify-end p-8`}
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

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="relative flex min-h-[910px] items-center justify-center overflow-hidden bg-white"
    >
      {/* Background gradient blobs */}
      <div
        className="pointer-events-none absolute"
        style={{
          left: "2%",
          bottom: "5%",
          width: 380,
          height: 220,
          background:
            "radial-gradient(ellipse at center, rgba(100,210,230,0.28) 0%, rgba(140,220,240,0.12) 55%, transparent 80%)",
          filter: "blur(18px)",
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          right: "2%",
          bottom: "5%",
          width: 380,
          height: 220,
          background:
            "radial-gradient(ellipse at center, rgba(220,160,220,0.28) 0%, rgba(240,180,230,0.12) 55%, transparent 80%)",
          filter: "blur(18px)",
        }}
      />
      <div
        className={`pointer-events-none absolute bottom-[2%] left-0 right-0 z-0 h-[250px] w-full rounded-full bg-gradient-to-r from-[#ff8a1f] via-[#ffb62a] to-[#fff06a] opacity-35 blur-3xl mix-blend-multiply ${styles.bottomGlow}`}
      />

      <div className="relative z-10" style={{ width: 1280, height: 700 }}>
        <TextCard
          title="Beyond Visits"
          description="Traditional care treats moments. Joyzen manages the entire journey continuously, not occasionally."
          style={{ left: 0, top: 0, width: 413, height: 340 }}
        />

        <TextCard
          title="Integrated Care"
          description="Doctors, lifestyle, and emotional support, working together as one system."
          style={{ left: 433, top: 0, width: 414, height: 280 }}
        />

        <div
           className="absolute flex items-center justify-center"
           style={{ left: 433, top: 300, width: 414, height: 100 }}
         >
           <Image
             src="/nav-logo.png"
             alt="Joyzen Logo"
             fill
             sizes="414px"
             className="object-contain p-4"
           />
         </div>

        <div
          className={`group absolute ${glassCard} ${hoverCard} overflow-hidden`}
          style={{ left: 867, top: 0, width: 413, height: 340 }}
        >
          <Image
             src="/gallery-row-1.jpg"
             alt="Care"
             fill
             sizes="(max-width: 768px) 100vw, 413px"
             className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
           />
        </div>

        <TextCard
          title="Focused on Root, Not Symptoms"
          description="Hormones, lifestyle, fertility, long-term health — everything connected, everything managed."
          style={{
            left: 0,
            top: 360,
            width: 413,
            height: 340,
            background: "linear-gradient(135deg, rgba(160,220,240,0.45) 0%, rgba(200,235,245,0.25) 60%, rgba(255,255,255,0.10) 100%)",
          }}
        />

        <div
          className={`group absolute ${glassCard} ${hoverCard} overflow-hidden`}
          style={{ left: 433, top: 420, width: 414, height: 280 }}
        >
          <Image
             src="/gallery-row-2.jpg"
             alt="Care team"
             fill
             sizes="(max-width: 768px) 100vw, 414px"
             className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
           />
        </div>

        <TextCard
          title="Designed for Better Outcomes"
          description="Not more visits, not more confusion. Clear direction. Continuous support. Real results."
          style={{
            left: 867,
            top: 360,
            width: 413,
            height: 340,
            background: "linear-gradient(135deg, rgba(230,180,230,0.40) 0%, rgba(245,210,240,0.22) 60%, rgba(255,255,255,0.10) 100%)",
          }}
        />
      </div>

    </section>
  );
}
