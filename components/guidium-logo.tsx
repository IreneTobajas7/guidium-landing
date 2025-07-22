"use client"

export function GuidiumLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-wider font-sans">
        Gu
      </span>

      {/* Two people holding hands with animated 'd' formation */}
      <div className="mx-2 flex items-center relative">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-pulse"
          style={{ animationDuration: "8s", animationTimingFunction: "ease-in-out" }}
        >
          {/* First person */}
          <circle cx="8" cy="7" r="3.5" fill="url(#gradient1)" />
          <path
            d="M4.5 14c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5v9c0 1.5-1 2.5-2.5 2.5h-2c-1.5 0-2.5-1-2.5-2.5v-9z"
            fill="url(#gradient1)"
            rx="1"
          />

          {/* Second person */}
          <circle cx="24" cy="7" r="3.5" fill="url(#gradient2)" />
          <path
            d="M20.5 14c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5v9c0 1.5-1 2.5-2.5 2.5h-2c-1.5 0-2.5-1-2.5-2.5v-9z"
            fill="url(#gradient2)"
            rx="1"
          />

          {/* Holding hands connection */}
          <ellipse
            cx="16"
            cy="18"
            rx="4"
            ry="1.5"
            fill="url(#gradient3)"
            className="animate-pulse"
            style={{ animationDelay: "2s", animationDuration: "6s", animationTimingFunction: "ease-in-out" }}
          />

          {/* Animated 'd' that forms from the connection */}
          <g
            className="animate-pulse"
            style={{ animationDelay: "4s", animationDuration: "8s", animationTimingFunction: "ease-in-out" }}
          >
            {/* 'd' letter formed by the connection */}
            <path
              d="M14 12c-2 0-3.5 1.5-3.5 3.5v5c0 2 1.5 3.5 3.5 3.5h2c1 0 1.5-0.5 1.5-1.5v-9c0-1-0.5-1.5-1.5-1.5h-2z"
              fill="url(#gradient4)"
              opacity="0.6"
            />
            <circle cx="15" cy="15" r="2" fill="none" stroke="url(#gradient4)" strokeWidth="0.5" opacity="0.4" />
          </g>

          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-wider font-sans">
        um
      </span>
    </div>
  )
}
