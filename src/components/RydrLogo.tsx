export default function RydrLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity={1} />
          <stop offset="100%" stopColor="#1d4ed8" stopOpacity={1} />
        </linearGradient>
      </defs>
      <text x="0" y="65" fontFamily="Arial, sans-serif" fontSize="56" fontWeight="900" textAnchor="start" fill="url(#gradient2)" letterSpacing="-2px">RYDR</text>
    </svg>
  );
} 