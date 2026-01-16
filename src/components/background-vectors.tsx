import React from 'react';

const DegreeCapIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%" className={className}>
    <path d="M12 3L2 8l10 5 10-5-10-5zM4.4 9.4l7.6 3.8 7.6-3.8-7.6-4.2-7.6 4.2zM4 11v6l8 4 8-4v-6l-8 4-8-4z" />
  </svg>
);

const BookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%" className={className}>
    <path d="M19 2H9c-1.11 0-2 .89-2 2v10c0 1.11.89 2 2 2h10c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm-1 12H10V4h8v10z" />
    <path d="M5 6H3v12c0 1.11.89 2 2 2h12v-2H5V6z" />
  </svg>
);

const MilletIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="currentColor" width="100%" height="100%" className={className}>
    <path d="M32 60 C40 40 40 30 30 18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    <circle cx="28" cy="22" r="2.5" />
    <circle cx="32" cy="26" r="2.5" />
    <circle cx="26" cy="30" r="2.5" />
    <circle cx="30" cy="35" r="2.5" />
    <circle cx="24" cy="39" r="2.5" />
  </svg>
);

const TurmericIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="currentColor" width="100%" height="100%" className={className}>
    <path d="M30,20 C40,15 45,25 40,35 C35,45 20,45 18,35 C16,25 20,25 30,20z" />
    <path d="M40,35 C50,30 55,40 50,50 C45,60 30,60 28,50 C26,40 30,40 40,35z" opacity="0.8" />
  </svg>
);

const vectors = [
  // Left Side
  { Icon: DegreeCapIcon, style: { top: '15%', left: '2%', width: '80px', height: '80px', transform: 'rotate(-20deg)' } },
  { Icon: BookIcon, style: { top: '40%', left: '3%', width: '60px', height: '60px', transform: 'rotate(15deg)' } },
  { Icon: MilletIcon, style: { top: '65%', left: '1%', width: '90px', height: '90px', transform: 'rotate(-10deg)' } },
  { Icon: TurmericIcon, style: { top: '85%', left: '2%', width: '50px', height: '50px', transform: 'rotate(25deg)' } },
  { Icon: BookIcon, style: { top: '5%', left: '1%', width: '40px', height: '40px', transform: 'rotate(-5deg)' } },

  // Right Side
  { Icon: DegreeCapIcon, style: { top: '20%', right: '2%', width: '90px', height: '90px', transform: 'rotate(15deg)' } },
  { Icon: BookIcon, style: { top: '50%', right: '3%', width: '70px', height: '70px', transform: 'rotate(-12deg)' } },
  { Icon: MilletIcon, style: { top: '75%', right: '1%', width: '80px', height: '80px', transform: 'rotate(20deg)' } },
  { Icon: TurmericIcon, style: { top: '90%', right: '2%', width: '60px', height: '60px', transform: 'rotate(-15deg)' } },
  { Icon: DegreeCapIcon, style: { top: '8%', right: '1.5%', width: '50px', height: '50px', transform: 'rotate(5deg)' } },
];

const BackgroundVectors = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] h-full w-full overflow-hidden text-[#F72F35]"
      aria-hidden="true"
    >
      {vectors.map(({ Icon, style }, index) => (
        <Icon
          key={index}
          className="absolute"
          style={style as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default BackgroundVectors;
