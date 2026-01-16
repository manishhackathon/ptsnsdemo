const BackgroundVectors = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[-1] h-full w-full overflow-hidden"
      aria-hidden="true"
    >
      <svg className="h-full w-full">
        <defs>
          {/* Left side pattern: geometric shapes */}
          <pattern
            id="geometric-pattern-left"
            width="300"
            height="500"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(0.7) rotate(5)"
          >
            <rect width="300" height="500" fill="transparent" />
            <circle
              cx="150"
              cy="120"
              r="100"
              fill="hsl(var(--vector-fill-left))"
              stroke="hsl(var(--vector-stroke-left))"
              strokeWidth="5"
            />
            <path
              d="M 50 300 A 100 100 0 0 1 250 300 L 50 300 Z"
              fill="hsl(var(--vector-fill-left))"
              stroke="hsl(var(--vector-stroke-left))"
              strokeWidth="5"
            />
            <rect
              x="110"
              y="400"
              width="80"
              height="80"
              transform="rotate(45 150 440)"
              fill="hsl(var(--vector-fill-left))"
              stroke="hsl(var(--vector-stroke-left))"
              strokeWidth="5"
            />
          </pattern>

          {/* Right side pattern: geometric shapes */}
          <pattern
            id="geometric-pattern-right"
            width="300"
            height="500"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(0.7) rotate(-5)"
          >
            <rect width="300" height="500" fill="transparent" />
            <path
              d="M150 50 L 50 200 L 250 200 Z"
              fill="hsl(var(--vector-fill-right))"
              stroke="hsl(var(--vector-stroke-right))"
              strokeWidth="5"
            />
            <rect
              x="100"
              y="280"
              width="100"
              height="100"
              fill="hsl(var(--vector-fill-right))"
              stroke="hsl(var(--vector-stroke-right))"
              strokeWidth="5"
            />
            <circle
              cx="150"
              cy="450"
              r="60"
              fill="hsl(var(--vector-fill-right))"
              stroke="hsl(var(--vector-stroke-right))"
              strokeWidth="5"
            />
          </pattern>
        </defs>

        {/* Background colors */}
        <rect
          x="0"
          y="0"
          width="50%"
          height="100%"
          fill="hsl(var(--background-left))"
        />
        <rect
          x="50%"
          y="0"
          width="50%"
          height="100%"
          fill="hsl(var(--background-right))"
        />

        {/* Left side pattern overlay */}
        <rect
          x="0"
          y="0"
          width="50%"
          height="100%"
          fill="url(#geometric-pattern-left)"
          opacity="1"
        />

        {/* Right side pattern overlay */}
        <rect
          x="50%"
          y="0"
          width="50%"
          height="100%"
          fill="url(#geometric-pattern-right)"
          opacity="1"
        />
      </svg>
    </div>
  );
};

export default BackgroundVectors;
