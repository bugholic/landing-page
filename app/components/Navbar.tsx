import Image from "next/image";

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex h-[90px] items-center justify-between px-[50px]">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-3">
          <Image
            src="/nav-logo.png"
            alt="Joyzen"
            width={150}
            height={100}
            className=""
          />
        </div>
      </div>
      <div className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
        <a href="#services" className="hover:text-white transition-colors">
          About
        </a>
        <a href="#about" className="hover:text-white transition-colors">
          Programs{" "}
        </a>
        <a href="#stories" className="hover:text-white transition-colors">
          {
            "Who It's For"
          }
        </a>
        <a href="#pricing" className="hover:text-white transition-colors">
          Products
        </a>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="#get-started"
          className="flex gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
        >
          Book Clarity Call
           <Image
            src="/nav-cta.svg"
            alt="Joyzen"
            width={15}
            height={15}
            className=""
          />
        </a>
      </div>
    </nav>
  );
}
