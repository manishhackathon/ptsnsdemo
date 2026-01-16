const BackgroundVectors = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[-1] h-full w-full overflow-hidden bg-background"
      aria-hidden="true"
    >
      <svg className="h-full w-full">
        <defs>
          <pattern
            id="tribal-pattern"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1.5) rotate(45)"
          >
            <rect width="80" height="80" fill="transparent" />
            <path
              d="M10 10 L20 20 M30 10 L20 20 M30 30 L20 20 M10 30 L20 20"
              stroke="hsl(var(--muted))"
              strokeWidth="0.5"
            />
            <path
              d="M50 50 L60 60 M70 50 L60 60 M70 70 L60 60 M50 70 L60 60"
              stroke="hsl(var(--muted))"
              strokeWidth="0.5"
            />
            <circle cx="40" cy="40" r="1" fill="hsl(var(--muted))" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tribal-pattern)" opacity="0.3" />
      </svg>
    </div>
  );
};

export default BackgroundVectors;
