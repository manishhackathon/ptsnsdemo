const HeaderBackground = () => {
  return (
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <svg className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <rect width="100%" height="100%" fill="azure" />
      </svg>
    </div>
  );
};

export default HeaderBackground;
