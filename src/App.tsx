import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import { useHashRoute } from "@/lib/useHashRoute";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

export default function App() {
  const route = useHashRoute();

  // Reset scroll position on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [route]);

  // Keep document title in sync with the page
  useEffect(() => {
    const titles: Record<string, string> = {
      home: "Lone Star Comfort — HVAC & Plumbing | Austin, TX",
      services: "Services — Lone Star Comfort | HVAC & Plumbing Austin, TX",
      about: "About Us — Lone Star Comfort | Austin's Trusted HVAC & Plumbing Team",
      contact: "Contact Us — Lone Star Comfort | HVAC & Plumbing Austin, TX",
    };
    document.title = titles[route] ?? titles.home;
  }, [route]);

  const page = {
    home: <Home />,
    services: <Services />,
    about: <About />,
    contact: <Contact />,
  }[route];

  return (
    <div className="min-h-screen bg-cream-50 font-sans">
      <Header route={route} />
      <main>{page}</main>
      <Footer />
      <MobileCallBar />
    </div>
  );
}
