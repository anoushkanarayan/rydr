"use client";

import { useRef, useState } from "react";
import RydrLogo from "../components/RydrLogo";

export default function Home() {
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState<'drivers' | 'riders'>('drivers');

  const scrollToHowItWorks = () => {
    howItWorksRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Sticky Menu */}
      <nav className="sticky top-0 z-50 bg-[#111827]/80 backdrop-blur flex items-center justify-between w-full px-[7%] py-5">
        <div className="w-32">
          <RydrLogo className="w-full h-auto" />
        </div>
        <button
          className="font-display text-white text-lg font-semibold hover:text-blue-400 transition-colors"
          onClick={scrollToHowItWorks}
        >
          How It Works
        </button>
      </nav>

      {/* Hero Section */}
      <main className="min-h-[80vh] bg-transparent flex flex-col items-start justify-center w-[95%] max-w-7xl mx-auto pt-8">
        <div className="space-y-4">
          <h1 className="font-display text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-gradient uppercase tracking-wide whitespace-nowrap">
            Cash in on your commute
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 whitespace-nowrap font-light">
            Share your unused car space and get paid for your daily commute.
          </p>
        </div>
        <div className="flex flex-col items-start mt-8">
          <button className="font-display px-8 py-4 text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition-all duration-200 text-white shadow-lg hover:shadow-xl">
            Join the waitlist
          </button>
        </div>
      </main>

      {/* Wave Transition */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-24">
          <path d="M0,40 C360,120 1080,0 1440,80 L1440,120 L0,120 Z" fill="#fff" />
        </svg>
      </div>

      {/* How It Works Section */}
      <section ref={howItWorksRef} className="bg-white min-h-[60vh] w-full py-20">
        <div className="w-[95%] max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex gap-8 border-b border-gray-200 mb-8 justify-center">
            <button
              className={`pb-2 text-lg font-semibold transition-colors ${tab === 'drivers' ? 'text-blue-600 border-b-4 border-blue-500' : 'text-gray-400 border-b-4 border-transparent'} font-display`}
              onClick={() => setTab('drivers')}
            >
              For Drivers
            </button>
            <button
              className={`pb-2 text-lg font-semibold transition-colors ${tab === 'riders' ? 'text-blue-600 border-b-4 border-blue-500' : 'text-gray-400 border-b-4 border-transparent'} font-display`}
              onClick={() => setTab('riders')}
            >
              For Riders
            </button>
          </div>
          <div className="text-gray-700 text-xl min-h-[120px] text-center">
            {tab === 'drivers' ? (
              <div>
                <h2 className="text-2xl font-bold mb-2">How It Works for Drivers</h2>
                <p>Placeholder: Explain how drivers can earn by sharing their commute, set their route, accept riders, and get paid automatically.</p>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold mb-2">How It Works for Riders</h2>
                <p>Placeholder: Explain how riders can find a driver, book a seat, pay securely, and enjoy a convenient commute.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
