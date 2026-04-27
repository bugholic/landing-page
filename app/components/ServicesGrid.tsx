import Image from "next/image";

const glassCard =
  "rounded-3xl border border-white/20 bg-white/[0.06] shadow-[0_2px_17.5px_0_rgba(0,0,0,0.10)] backdrop-blur-sm";

interface TextCardProps {
  title: string;
  description: string;
  style?: React.CSSProperties;
}

function TextCard({ title, description, style }: TextCardProps) {
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

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="relative flex min-h-[910px] items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image src="/gallery-row-1.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

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
          className={`absolute ${glassCard} overflow-hidden`}
          style={{ left: 867, top: 0, width: 413, height: 340 }}
        >
          <Image src="/gallery-row-2.jpg" alt="Care" fill className="object-cover" />
        </div>

        <TextCard
          title="Focused on Root, Not Symptoms"
          description="Hormones, lifestyle, fertility, long-term health — everything connected, everything managed."
          style={{ left: 0, top: 360, width: 413, height: 340 }}
        />

        <div
          className={`absolute ${glassCard} overflow-hidden`}
          style={{ left: 433, top: 420, width: 414, height: 280 }}
        >
          <Image src="/person-circle.jpg" alt="Care team" fill className="object-cover" />
        </div>

        <TextCard
          title="Designed for Better Outcomes"
          description="Not more visits, not more confusion. Clear direction. Continuous support. Real results."
          style={{ left: 867, top: 360, width: 413, height: 340 }}
        />
      </div>
    </section>
  );
}