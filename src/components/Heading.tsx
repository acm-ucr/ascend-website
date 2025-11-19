const dot = "w-2.5 h-2.5 md:w-5 md:h-5 bg-ascend-light-orange rounded-full";

interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className="mb-8 flex flex-col gap-2 md:mb-8 md:gap-4">
        <div className="flex gap-2 md:gap-4">
          <span className={dot} />
          <span className={dot} />
          <span className={dot} />
        </div>
        <div className="flex gap-2 md:gap-4">
          <span className={dot} />
        </div>
        <div className="flex gap-2 md:gap-4">
          <span className={dot} />
        </div>
      </div>

      <h2 className="font-playfair text-ascend-dark-blue mx-11 text-3xl font-bold text-nowrap md:mx-22 md:text-6xl">
        {title}
      </h2>

      <div className="mt-8 flex flex-col items-end gap-2 md:mt-8 md:gap-4">
        <div className="flex gap-2 md:gap-4">
          <span className={dot} />
        </div>
        <div className="flex gap-2 md:gap-4">
          <span className={dot} />
        </div>
        <div className="flex gap-2 md:gap-4">
          <span className={dot} />
          <span className={dot} />
          <span className={dot} />
        </div>
      </div>
    </div>
  );
};

export default Heading;
