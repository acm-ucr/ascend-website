const dot = "w-5 h-5 bg-ascend-light-orange rounded-full";

interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className="mb-8 flex flex-col gap-4">
        <div className="flex gap-4">
          <span className={dot} />
          <span className={dot} />
          <span className={dot} />
        </div>
        <div className="flex gap-4">
          <span className={dot} />
        </div>
        <div className="flex gap-4">
          <span className={dot} />
        </div>
      </div>

      <h2 className="font-playfair text-ascend-dark-blue mx-22 text-6xl font-bold">
        {title}
      </h2>

      <div className="mt-8 flex flex-col items-end gap-4">
        <div className="flex gap-4">
          <span className={dot} />
        </div>
        <div className="flex gap-4">
          <span className={dot} />
        </div>
        <div className="flex gap-4">
          <span className={dot} />
          <span className={dot} />
          <span className={dot} />
        </div>
      </div>
    </div>
  );
};

export default Heading;
