const dot = "w-3 h-3 md:w-5 md:h-5 bg-ascend-light-orange rounded-full";

const gap = "gap-2 md:gap-4";

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

      <h2 className="font-playfair text-ascend-dark-blue mx-10 text-3xl font-bold text-nowrap md:text-5xl lg:text-6xl">
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
