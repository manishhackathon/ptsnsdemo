const BackgroundVectors = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[-1] h-full w-full overflow-hidden"
      aria-hidden="true"
    >
      <svg className="h-full w-full">
        <defs>
          {/* Left side pattern: cosmos theme */}
          <pattern
            id="cosmos-pattern-left"
            width="400"
            height="600"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(0.6) rotate(10)"
          >
            <rect width="400" height="600" fill="transparent" />
            {/* Planet with rings */}
            <g transform="translate(150, 150) scale(0.8)">
              <circle
                cx="0"
                cy="0"
                r="70"
                fill="hsl(var(--vector-fill-left))"
                stroke="hsl(var(--vector-stroke-left))"
                strokeWidth="4"
              />
              <ellipse
                cx="0"
                cy="0"
                rx="120"
                ry="30"
                fill="none"
                stroke="hsl(var(--vector-stroke-left))"
                strokeWidth="4"
                transform="rotate(-20)"
              />
            </g>
            {/* Spiral galaxy */}
            <g transform="translate(300, 450) scale(0.7) rotate(30)">
              <path
                d="M 0,0
                   C 50,-50 100,-50 120,0
                   S 100,50 50,50
                   C 0,50 -50,50 -70,0
                   S -50,-50 0,-50
                   Z"
                fill="hsl(var(--vector-fill-left))"
                stroke="hsl(var(--vector-stroke-left))"
                strokeWidth="3"
                transform="scale(0.8)"
              />
              <path
                d="M 0,0
                   C 40,-40 80,-40 100,0
                   S 80,40 40,40
                   C 0,40 -40,40 -60,0
                   S -40,-40 0,-40
                   Z"
                fill="hsl(var(--vector-fill-left))"
                stroke="hsl(var(--vector-stroke-left))"
                strokeWidth="2"
                transform="scale(0.5) rotate(45)"
              />
            </g>
            {/* Stars */}
            <circle cx="50" cy="400" r="5" fill="hsl(var(--vector-stroke-left))" />
            <circle cx="350" cy="100" r="3" fill="hsl(var(--vector-stroke-left))" />
            <path d="M100 500 l5 5 l-5 5 l-5 -5 z" fill="hsl(var(--vector-stroke-left))" />
          </pattern>

          {/* Right side pattern: cosmos theme */}
          <pattern
            id="cosmos-pattern-right"
            width="400"
            height="600"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(0.6) rotate(-10)"
          >
            <rect width="400" height="600" fill="transparent" />
            {/* Neutron Star / Pulsar */}
            <g transform="translate(200, 120)">
              <circle
                cx="0"
                cy="0"
                r="40"
                fill="hsl(var(--vector-fill-right))"
                stroke="hsl(var(--vector-stroke-right))"
                strokeWidth="3"
              />
              <line x1="-70" y1="0" x2="70" y2="0" stroke="hsl(var(--vector-stroke-right))" strokeWidth="2" />
              <line x1="0" y1="-70" x2="0" y2="70" stroke="hsl(var(--vector-stroke-right))" strokeWidth="2" />
              <line x1="-50" y1="-50" x2="50" y2="50" stroke="hsl(var(--vector-stroke-right))" strokeWidth="2" />
              <line x1="-50" y1="50" x2="50" y2="-50" stroke="hsl(var(--vector-stroke-right))" strokeWidth="2" />
            </g>

            {/* Comet */}
            <g transform="translate(100, 450)">
              <path
                d="M 0 0 C 30 10, 60 10, 90 0 L 70 -20 C 40 -30, 20 -30, 0 0 Z"
                fill="hsl(var(--vector-fill-right))"
                stroke="hsl(var(--vector-stroke-right))"
                strokeWidth="3"
                transform="rotate(15)"
              />
              <circle cx="0" cy="0" r="10" fill="hsl(var(--vector-stroke-right))" />
            </g>

            {/* Asteroid */}
            <path
              d="M300 300 l20 5 l10 20 l-15 15 l-20 -10 z"
              fill="hsl(var(--vector-fill-right))"
              stroke="hsl(var(--vector-stroke-right))"
              strokeWidth="2"
            />
            <circle cx="350" cy="500" r="4" fill="hsl(var(--vector-stroke-right))" />
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
          fill="url(#cosmos-pattern-left)"
          opacity="1"
        />

        {/* Right side pattern overlay */}
        <rect
          x="50%"
          y="0"
          width="50%"
          height="100%"
          fill="url(#cosmos-pattern-right)"
          opacity="1"
        />
      </svg>
    </div>
  );
};

export default BackgroundVectors;
