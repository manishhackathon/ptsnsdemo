const HeaderBackground = () => {
  return (
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <svg className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient
            id="header-gradient"
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
          >
            <stop
              offset="0%"
              style={{ stopColor: 'hsl(var(--header-bg-left))' }}
            />
            <stop
              offset="100%"
              style={{ stopColor: 'hsl(var(--header-bg-right))' }}
            />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#header-gradient)" />
        {/* Circles */}
        <circle cx="10%" cy="30%" r="20%" fill="hsla(0, 0%, 100%, 0.08)" />
        <circle cx="5%" cy="80%" r="15%" fill="hsla(0, 0%, 100%, 0.05)" />
        <circle cx="85%" cy="60%" r="25%" fill="hsla(0, 0%, 100%, 0.07)" />
        <circle cx="95%" cy="20%" r="10%" fill="hsla(0, 0%, 100%, 0.06)" />
        <circle cx="40%" cy="50%" r="18%" fill="hsla(0, 0%, 100%, 0.04)" />
        <circle cx="60%" cy="90%" r="12%" fill="hsla(0, 0%, 100%, 0.05)" />
      </svg>
    </div>
  );
};

export default HeaderBackground;
