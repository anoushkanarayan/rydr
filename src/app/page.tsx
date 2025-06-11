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
      <nav className="sticky top-0 z-50 bg-[#111827]/80 backdrop-blur flex items-center justify-between w-full px-4 sm:px-[7%] py-3 sm:py-5">
        <div className="w-24 sm:w-32">
          <RydrLogo className="w-full h-auto" />
        </div>
        <button
          className="font-display text-white text-base sm:text-lg font-semibold hover:text-blue-400 transition-colors px-2 sm:px-0"
          onClick={scrollToHowItWorks}
        >
          How It Works
        </button>
      </nav>

      {/* Hero Section */}
      <main className="min-h-[70vh] bg-transparent flex flex-col items-center sm:items-start justify-center w-full sm:w-[95%] sm:max-w-7xl mx-auto pt-8 px-4 sm:px-0">
        <div className="space-y-3 sm:space-y-4 w-full sm:w-auto">
          <h1 className="font-display text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-gradient uppercase tracking-wide text-center sm:text-left">
            Cash in on your commute
          </h1>
          <p className="text-base xs:text-lg md:text-2xl text-gray-300 font-light text-center sm:text-left">
            Share your unused car space and get paid for your daily commute.
          </p>
        </div>
        <div className="flex flex-col items-center sm:items-start mt-6 sm:mt-8 w-full sm:w-auto">
          <button className="font-display px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition-all duration-200 text-white shadow-lg hover:shadow-xl w-full sm:w-auto">
            Join the waitlist
          </button>
        </div>
      </main>

      {/* Wave Transition */}
      <div className="w-full overflow-hidden leading-none -mb-1">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-12 sm:h-24">
          <path d="M0,40 C360,120 1080,0 1440,80 L1440,120 L0,120 Z" fill="#fff" />
        </svg>
      </div>

      {/* How It Works Section */}
      <section ref={howItWorksRef} className="bg-white min-h-[60vh] w-full pt-10 sm:pt-20 pb-10 sm:pb-20 px-4 sm:px-0">
        <div className="w-full sm:w-[95%] sm:max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex flex-row gap-2 sm:gap-8 border-b border-gray-200 mb-8 w-full justify-center items-center">
            <button
              className={`pb-2 px-4 sm:px-6 py-2 text-base sm:text-lg font-semibold transition-colors rounded-t-md rounded-b-none sm:rounded-t-none sm:rounded-l-md sm:rounded-r-none ${tab === 'drivers' ? 'text-blue-600 border-b-4 border-blue-500' : 'text-gray-400 border-b-4 border-transparent'} font-display w-full sm:w-auto text-center`}
              onClick={() => setTab('drivers')}
            >
              For Drivers
            </button>
            <button
              className={`pb-2 px-4 sm:px-6 py-2 text-base sm:text-lg font-semibold transition-colors rounded-t-md rounded-b-none sm:rounded-t-none sm:rounded-r-md sm:rounded-l-none ${tab === 'riders' ? 'text-blue-600 border-b-4 border-blue-500' : 'text-gray-400 border-b-4 border-transparent'} font-display w-full sm:w-auto text-center`}
              onClick={() => setTab('riders')}
            >
              For Riders
            </button>
          </div>
          <div className="text-gray-700 text-base sm:text-xl min-h-[120px] text-center w-full">
            {tab === 'drivers' ? (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2">How It Works for Drivers</h2>
                <p>Placeholder: Explain how drivers can earn by sharing their commute, set their route, accept riders, and get paid automatically.</p>
              </div>
            ) : (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2">How It Works for Riders</h2>
                <p>Placeholder: Explain how riders can find a driver, book a seat, pay securely, and enjoy a convenient commute.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
