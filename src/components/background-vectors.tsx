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

            {/* MORE STUFF */}
            <g transform="translate(20, 20) scale(0.7)">
              <circle cx="10" cy="5" r="5" fill="hsl(var(--vector-fill-left))" />
              <line x1="10" y1="10" x2="10" y2="30" stroke="hsl(var(--vector-stroke-left))" strokeWidth="2" />
              <line x1="10" y1="30" x2="0" y2="40" stroke="hsl(var(--vector-stroke-left))" strokeWidth="2" />
              <line x1="10" y1="30" x2="20" y2="40" stroke="hsl(var(--vector-stroke-left))" strokeWidth="2" />
            </g>
            <g transform="translate(450, 250) rotate(45) scale(0.9)">
              <path d="M 0 20 C -20 10, -20 -10, 0 -20 C 20 -10, 20 10, 0 20 Z" fill="hsl(var(--vector-fill-left))" />
              <rect x="-5" y="-35" width="10" height="15" rx="5" fill="hsl(var(--vector-fill-left))" transform="rotate(5)" />
            </g>
             <g transform="translate(250, 350) scale(1.1)">
                <path d="M 0 20 C 10 0, 30 0, 40 20" stroke="hsl(var(--vector-stroke-left))" fill="none" strokeWidth="2" />
                <line x1="20" y1="20" x2="20" y2="40" stroke="hsl(var(--vector-stroke-left))" strokeWidth="2" />
            </g>
            <path d="M 50 600 l 10 0 l -5 -10 z" fill="hsl(var(--vector-fill-left))" />
            <path d="M 450 300 l 10 0 l -5 -10 z" fill="hsl(var(--vector-fill-left))" />
            <circle cx="250" cy="650" r="8" fill="none" stroke="hsl(var(--vector-stroke-left))" strokeWidth="2"/>
            <path d="M 150 600 q 50 -50 100 0" stroke="hsl(var(--vector-stroke-left))" fill="none" strokeWidth="2" />
            <path d="M 20 500 q 30 -30 60 0" stroke="hsl(var(--vector-stroke-left))" fill="none" strokeWidth="2" />
            <path d="M 350 650 q 20 -20 40 0" stroke="hsl(var(--vector-stroke-left))" fill="none" strokeWidth="2" />

            {/* EVEN MORE STUFF FOR DENSITY */}
            <g transform="translate(350, 200) scale(0.8)">
              <circle cx="10" cy="5" r="5" fill="hsl(var(--vector-fill-left))" />
              <line x1="10" y1="10" x2="10" y2="30" stroke="hsl(var(--vector-stroke-left))" strokeWidth="2" />
              <line x1="10" y1="20" x2="0" y2="25" stroke="hsl(var(--vector-stroke-left))" strokeWidth="2" />
              <line x1="10" y1="20" x2="20" y2="25" stroke="hsl(var(--vector-stroke-left))" strokeWidth="2" />
            </g>
            <g transform="translate(50, 250) scale(1.0)">
                <path d="M 0 20 C 10 0, 30 0, 40 20" stroke="hsl(var(--vector-stroke-left))" fill="none" strokeWidth="2" />
                <line x1="20" y1="20" x2="20" y2="35" stroke="hsl(var(--vector-stroke-left))" strokeWidth="2" />
            </g>
            <g transform="translate(180, 280) rotate(30) scale(0.7)">
              <path d="M 0 20 C -20 10, -20 -10, 0 -20 C 20 -10, 20 10, 0 20 Z" fill="hsl(var(--vector-fill-left))" />
            </g>
            <circle cx="480" cy="400" r="12" fill="none" stroke="hsl(var(--vector-stroke-left))" strokeWidth="2"/>
            <path d="M 20 650 q 50 30 100 0" stroke="hsl(var(--vector-stroke-left))" fill="none" strokeWidth="2" />
            <path d="M 120 50 q 20 -20 40 0" stroke="hsl(var(--vector-stroke-left))" fill="none" strokeWidth="2" />
            <path d="M 400 600 l 15 0 l -7 -12 z" fill="hsl(var(--vector-fill-left))" />
            <g transform="translate(300, 600) scale(1.3)">
              <circle cx="0" cy="0" r="20" fill="none" stroke="hsl(var(--vector-stroke-left))" strokeWidth="2"/>
              <line x1="0" y1="-25" x2="0" y2="25" stroke="hsl(var(--vector-stroke-left))" strokeWidth="1"/>
              <line x1="-25" y1="0" x2="25" y2="0" stroke="hsl(var(--vector-stroke-left))" strokeWidth="1"/>
            </g>
            <g transform="translate(150, 500) scale(0.9) rotate(-30)">
              <path d="M 0 20 C 10 0, 30 0, 40 20 C 50 40, 60 40, 70 20" stroke="hsl(var(--vector-stroke-left))" fill="none" strokeWidth="3" />
              <line x1="20" y1="20" x2="20" y2="40" stroke="hsl(var(--vector-stroke-left))" strokeWidth="2" />
              <line x1="50" y1="20" x2="50" y2="40" stroke="hsl(var(--vector-stroke-left))" strokeWidth="2" />
            </g>
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

            {/* MORE STUFF */}
            <g transform="translate(20, 400)">
              <path d="M 0 0 Q 15 40, 30 0" stroke="hsl(var(--vector-stroke-right))" strokeWidth="5" fill="none" />
              <path d="M 25 0 Q 40 40, 55 0" stroke="hsl(var(--vector-stroke-right))" strokeWidth="5" fill="none" />
            </g>
            <g transform="translate(420, 550) scale(1.5)">
                <circle cx="0" cy="0" r="3" fill="hsl(var(--vector-fill-right))" />
                <circle cx="10" cy="5" r="3" fill="hsl(var(--vector-fill-right))" />
                <circle cx="-5" cy="12" r="3" fill="hsl(var(--vector-fill-right))" />
            </g>
            <g transform="translate(50, 650) scale(1.2)">
              <circle cx="0" cy="0" r="20" fill="none" stroke="hsl(var(--vector-stroke-right))" strokeWidth="2" />
              <path d="M 0 -25 L 5 -35 L -5 -35 Z" fill="hsl(var(--vector-stroke-right))" />
              <path d="M 0 25 L 5 35 L -5 35 Z" fill="hsl(var(--vector-stroke-right))" transform="rotate(180)" />
            </g>

            {/* EVEN MORE STUFF FOR DENSITY */}
            <g transform="translate(150, 220) rotate(90)">
              <path d="M 0 0 Q 20 50, 40 0" stroke="hsl(var(--vector-stroke-right))" strokeWidth="7" fill="none" />
              <path d="M 20 20 Q 40 70, 60 20" stroke="hsl(var(--vector-stroke-right))" strokeWidth="7" fill="none" />
            </g>
            <g transform="translate(20, 250) scale(1.1)">
                <circle cx="0" cy="0" r="3" fill="hsl(var(--vector-fill-right))" />
                <circle cx="10" cy="5" r="3" fill="hsl(var(--vector-fill-right))" />
                <circle cx="-5" cy="12" r="3" fill="hsl(var(--vector-fill-right))" />
                <circle cx="8" cy="18" r="3" fill="hsl(var(--vector-fill-right))" />
                <circle cx="15" cy="25" r="3" fill="hsl(var(--vector-fill-right))" />
            </g>
            <g transform="translate(450, 50) scale(0.9)">
                <circle cx="0" cy="0" r="3" fill="hsl(var(--vector-fill-right))" />
                <circle cx="-10" cy="5" r="3" fill="hsl(var(--vector-fill-right))" />
                <circle cx="5" cy="12" r="3" fill="hsl(var(--vector-fill-right))" />
            </g>
            <g transform="translate(450, 450)">
              <circle cx="0" cy="0" r="25" fill="none" stroke="hsl(var(--vector-stroke-right))" strokeWidth="2" />
              <path d="M 0 -30 L 5 -40 L -5 -40 Z" fill="hsl(var(--vector-stroke-right))" />
              <path d="M 0 30 L 5 40 L -5 40 Z" fill="hsl(var(--vector-stroke-right))" transform="rotate(180)" />
            </g>
            <g transform="translate(180, 580) rotate(-45)">
              <path d="M 0 0 Q 15 40, 30 0" stroke="hsl(var(--vector-stroke-right))" strokeWidth="4" fill="none" />
              <path d="M 25 0 Q 40 40, 55 0" stroke="hsl(var(--vector-stroke-right))" strokeWidth="4" fill="none" />
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
