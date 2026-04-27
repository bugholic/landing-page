export function BookAClarityCall() {
  return (
    <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 px-8">
      <div
        className={`relative z-10 flex w-full max-w-[1064px] items-center justify-between gap-16 rounded-3xl border border-white/30 bg-white/[0.06] px-[90px] py-[100px] shadow-[0_2px_17.5px_0_rgba(0,0,0,0.10)] backdrop-blur-sm`}
      >
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