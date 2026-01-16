import Image from 'next/image';

const BackgroundVectors = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[-1] h-full w-full overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute left-0 top-0 h-full w-1/2">
        <Image
          src="/haldipic.png"
          alt="Left background image"
          fill
          className="object-cover object-center opacity-10"
        />
      </div>
      <div className="absolute right-0 top-0 h-full w-1/2">
        <Image
          src="/university.jpg"
          alt="Right background image"
          fill
          className="object-cover object-center opacity-10"
        />
      </div>
    </div>
  );
};

export default BackgroundVectors;
