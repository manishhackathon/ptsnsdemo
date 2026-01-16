const BackgroundVectors = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[-1] h-full w-full overflow-hidden"
      aria-hidden="true"
    >
      <svg className="h-full w-full">
        <defs>
          {/* Left side pattern: Turmeric farmers inspired */}
          <pattern
            id="turmeric-pattern"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1) rotate(-15)"
          >
            <rect width="100" height="100" fill="transparent" />
            {/* Simple plant/leaf shape */}
            <path
              d="M50 20 C 40 40, 60 60, 50 80"
              stroke="hsl(var(--accent))"
              strokeWidth="0.5"
              fill="none"
            />
            <path
              d="M50 50 C 60 40, 70 40, 75 50"
              stroke="hsl(var(--accent))"
              strokeWidth="0.5"
              fill="none"
            />
            <path
              d="M50 50 C 40 60, 30 60, 25 50"
              stroke="hsl(var(--accent))"
              strokeWidth="0.5"
              fill="none"
            />
            <path
              d="M10 0 L 10 100"
              stroke="hsl(var(--accent))"
              strokeWidth="0.2"
              fill="none"
            />
            <path
              d="M90 0 L 90 100"
              stroke="hsl(var(--accent))"
              strokeWidth="0.2"
              fill="none"
            />
          </pattern>

          {/* Right side pattern: Bandhavgarh tigers and Tribal culture */}
          <pattern
            id="tiger-tribal-pattern"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1) rotate(15)"
          >
            <rect width="120" height="120" fill="transparent" />
            {/* Tiger stripes */}
            <path
              d="M10 0 C 10 30, 40 20, 40 50 C 40 80, 10 70, 10 100"
              stroke="hsl(var(--accent))"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M70 10 C 70 40, 100 30, 100 60 C 100 90, 70 80, 70 110"
              stroke="hsl(var(--accent))"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
            />
            {/* Tribal symbols */}
            <path
              d="M 50 60 L 60 70 L 50 80"
              stroke="hsl(var(--accent))"
              strokeWidth="0.5"
              fill="none"
            />
            <circle cx="110" cy="20" r="2" fill="hsl(var(--accent))" />
            <circle cx="30" cy="110" r="1" fill="hsl(var(--accent))" />
          </pattern>
        </defs>

        {/* Left side background */}
        <rect
          x="0"
          y="0"
          width="50%"
          height="100%"
          fill="url(#turmeric-pattern)"
          opacity="0.3"
        />

        {/* Right side background */}
        <rect
          x="50%"
          y="0"
          width="50%"
          height="100%"
          fill="url(#tiger-tribal-pattern)"
          opacity="0.3"
        />
      </svg>
    </div>
  );
};

export default BackgroundVectors;
