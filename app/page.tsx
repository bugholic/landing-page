import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Statement } from "./components/Statement";
import { ServicesGrid } from "./components/ServicesGrid";
import { BuiltForModernLife } from "./components/BuiltForModernLife";
import { BookAClarityCall } from "./components/BookAClarityCall";
import { Footer } from "./components/Footer";

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