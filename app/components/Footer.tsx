import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative flex min-h-[600px] flex-col overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/footer.jpg" alt="" fill className="object-cover" />
      </div>

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