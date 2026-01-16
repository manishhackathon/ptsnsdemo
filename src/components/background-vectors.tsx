const BackgroundVectors = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[-1] h-full w-full overflow-hidden"
      aria-hidden="true"
    >
      <svg className="h-full w-full">
        <defs>
          {/* Left side pattern: Tribal / Cave Painting Theme */}
          <pattern
            id="tribal-pattern-left"
            width="500"
            height="700"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(0.5) rotate(5)"
          >
            <rect width="500" height="700" fill="transparent" />
            
            {/* Stick figure hunter */}
            <g transform="translate(100, 150) scale(1.5)">
              <circle cx="10" cy="5" r="5" fill="hsl(var(--vector-fill-left))" />
              <line x1="10" y1="10" x2="10" y2="30" stroke="hsl(var(--vector-stroke-left))" strokeWidth="2" />
              <line x1="10" y1="20" x2="0" y2="15" stroke="hsl(var(--vector-stroke-left))" strokeWidth="2" />
              <line x1="10" y1="20" x2="20" y2="15" stroke="hsl(var(--vector-stroke-left))" strokeWidth="2" />
              <line x1="10" y1="30" x2="0" y2="40" stroke="hsl(var(--vector-stroke-left))" strokeWidth="2" />
              <line x1="10" y1="30" x2="20" y2="40" stroke="hsl(var(--vector-stroke-left))" strokeWidth="2" />
              <line x1="25" y1="5" x2="45" y2="5" stroke="hsl(var(--vector-stroke-left))" strokeWidth="2" />
            </g>

            {/* Animal figure (deer/bison like) */}
            <g transform="translate(300, 80) scale(1.2)">
                <path d="M 0 20 C 10 0, 30 0, 40 20 C 50 40, 60 40, 70 20" stroke="hsl(var(--vector-stroke-left))" fill="none" strokeWidth="3" />
                <line x1="20" y1="20" x2="20" y2="40" stroke="hsl(var(--vector-stroke-left))" strokeWidth="2" />
                <line x1="50" y1="20" x2="50" y2="40" stroke="hsl(var(--vector-stroke-left))" strokeWidth="2" />
                <line x1="0" y1="20" x2="-10" y2="10" stroke="hsl(var(--vector-stroke-left))" strokeWidth="2" />
                <path d="M -10 10 C -15 0, -5 0, -5 5" stroke="hsl(var(--vector-stroke-left))" fill="none" strokeWidth="2" />
            </g>

            {/* Hand print */}
            <g transform="translate(80, 400) rotate(-15) scale(0.8)">
              <path d="M 0 20 C -20 10, -20 -10, 0 -20 C 20 -10, 20 10, 0 20 Z" fill="hsl(var(--vector-fill-left))" />
              <rect x="-5" y="-35" width="10" height="15" rx="5" fill="hsl(var(--vector-fill-left))" transform="rotate(5)" />
              <rect x="10" y="-30" width="10" height="15" rx="5" fill="hsl(var(--vector-fill-left))" transform="rotate(15)" />
              <rect x="-20" y="-30" width="10" height="15" rx="5" fill="hsl(var(--vector-fill-left))" transform="rotate(-15)" />
              <rect x="-30" y="-15" width="15" height="10" rx="5" fill="hsl(var(--vector-fill-left))" transform="rotate(-45)" />
            </g>

             {/* Geometric sun */}
            <g transform="translate(400, 500)">
              <circle cx="0" cy="0" r="20" fill="none" stroke="hsl(var(--vector-stroke-left))" strokeWidth="2"/>
              <line x1="0" y1="-30" x2="0" y2="30" stroke="hsl(var(--vector-stroke-left))" strokeWidth="2"/>
              <line x1="-30" y1="0" x2="30" y2="0" stroke="hsl(var(--vector-stroke-left))" strokeWidth="2"/>
            </g>

            {/* More elements to fill space */}
            <path d="M 50 600 l 10 0 l -5 -10 z" fill="hsl(var(--vector-fill-left))" />
            <path d="M 450 300 l 10 0 l -5 -10 z" fill="hsl(var(--vector-fill-left))" />
            <circle cx="250" cy="650" r="8" fill="none" stroke="hsl(var(--vector-stroke-left))" strokeWidth="2"/>
          </pattern>

          {/* Right side pattern: Tiger & Millets Theme */}
          <pattern
            id="tribal-pattern-right"
            width="500"
            height="700"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(0.5) rotate(-5)"
          >
            <rect width="500" height="700" fill="transparent" />
            
            {/* Tiger stripes */}
            <g transform="translate(50, 100)">
              <path d="M 0 0 Q 20 50, 40 0" stroke="hsl(var(--vector-stroke-right))" strokeWidth="8" fill="none" />
              <path d="M 20 20 Q 40 70, 60 20" stroke="hsl(var(--vector-stroke-right))" strokeWidth="8" fill="none" />
              <path d="M 50 0 Q 70 50, 90 0" stroke="hsl(var(--vector-stroke-right))" strokeWidth="8" fill="none" />
               <path d="M 80 20 Q 100 70, 120 20" stroke="hsl(var(--vector-stroke-right))" strokeWidth="8" fill="none" />
            </g>
             <g transform="translate(300, 400)">
              <path d="M 0 0 Q 20 50, 40 0" stroke="hsl(var(--vector-stroke-right))" strokeWidth="6" fill="none" />
              <path d="M 20 20 Q 40 70, 60 20" stroke="hsl(var(--vector-stroke-right))" strokeWidth="6" fill="none" />
              <path d="M 50 0 Q 70 50, 90 0" stroke="hsl(var(--vector-stroke-right))" strokeWidth="6" fill="none" />
            </g>

            {/* Millets */}
            <g transform="translate(400, 150)">
                <circle cx="0" cy="0" r="3" fill="hsl(var(--vector-fill-right))" />
                <circle cx="10" cy="5" r="3" fill="hsl(var(--vector-fill-right))" />
                <circle cx="-5" cy="12" r="3" fill="hsl(var(--vector-fill-right))" />
                <circle cx="8" cy="18" r="3" fill="hsl(var(--vector-fill-right))" />
                <circle cx="20" cy="15" r="3" fill="hsl(var(--vector-fill-right))" />
                <circle cx="15" cy="-5" r="3" fill="hsl(var(--vector-fill-right))" />
            </g>
            <g transform="translate(100, 500) scale(1.2)">
                <circle cx="0" cy="0" r="3" fill="hsl(var(--vector-fill-right))" />
                <circle cx="10" cy="5" r="3" fill="hsl(var(--vector-fill-right))" />
                <circle cx="-5" cy="12" r="3" fill="hsl(var(--vector-fill-right))" />
                <circle cx="8" cy="18" r="3" fill="hsl(var(--vector-fill-right))" />
                <circle cx="20" cy="15" r="3" fill="hsl(var(--vector-fill-right))" />
                <circle cx="15" cy="-5" r="3" fill="hsl(var(--vector-fill-right))" />
                 <circle cx="5" cy="25" r="3" fill="hsl(var(--vector-fill-right))" />
                <circle cx="-10" cy="20" r="3" fill="hsl(var(--vector-fill-right))" />
            </g>
             <g transform="translate(250, 600) scale(0.8)">
                <circle cx="0" cy="0" r="3" fill="hsl(var(--vector-fill-right))" />
                <circle cx="10" cy="5" r="3" fill="hsl(var(--vector-fill-right))" />
                <circle cx="-5" cy="12" r="3" fill="hsl(var(--vector-fill-right))" />
            </g>

            {/* Tribal sun design */}
            <g transform="translate(250, 300)">
              <circle cx="0" cy="0" r="30" fill="none" stroke="hsl(var(--vector-stroke-right))" strokeWidth="3" />
              <path d="M 0 -35 L 5 -45 L -5 -45 Z" fill="hsl(var(--vector-stroke-right))" />
              <path d="M 0 35 L 5 45 L -5 45 Z" fill="hsl(var(--vector-stroke-right))" transform="rotate(180)" />
              <path d="M -35 0 L -45 5 L -45 -5 Z" fill="hsl(var(--vector-stroke-right))" />
              <path d="M 35 0 L 45 5 L 45 -5 Z" fill="hsl(var(--vector-stroke-right))" transform="rotate(180 35 0) translate(70 0)" />
            </g>
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
          fill="url(#tribal-pattern-left)"
          opacity="1"
        />

        {/* Right side pattern overlay */}
        <rect
          x="50%"
          y="0"
          width="50%"
          height="100%"
          fill="url(#tribal-pattern-right)"
          opacity="1"
        />
      </svg>
    </div>
  );
};

export default BackgroundVectors;
