const dot =
  "w-3 h-3 md:w-5 md:h-5 lg:w-7 lg:h-7 xl:w-9 xl:h-9 bg-ascend-light-orange rounded-full";

const gap = "gap-2 md:gap-4 lg:gap-6 xl:gap-8";

interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className={`mb-4 flex flex-col md:mb-8 lg:mb-12 xl:mb-16 ${gap}`}>
        <div className={`flex ${gap}`}>
          <span className={dot} />
          <span className={dot} />
          <span className={dot} />
        </div>
        <div className={`flex ${gap}`}>
          <span className={dot} />
        </div>
        <div className={`flex ${gap}`}>
          <span className={dot} />
        </div>
      </div>

      <h2 className="font-playfair text-ascend-dark-blue mx-10 text-3xl font-bold text-nowrap md:mx-20 md:text-5xl lg:mx-30 lg:text-7xl xl:mx-40 xl:text-9xl">
        {title}
      </h2>

      <div
        className={`mt-4 flex flex-col items-end md:mt-8 lg:mt-12 xl:mt-16 ${gap}`}
      >
        <div className={`flex ${gap}`}>
          <span className={dot} />
        </div>
        <div className={`flex ${gap}`}>
          <span className={dot} />
        </div>
        <div className={`flex ${gap}`}>
          <span className={dot} />
          <span className={dot} />
          <span className={dot} />
        </div>
      </div>
    </div>
  );
};

export default Heading;
