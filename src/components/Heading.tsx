export default function Heading({ title = "About Us" }) {
  const dot = "w-5 h-5 bg-ascend-light-orange rounded-full";

  return (
    <div className="flex items-center justify-center">
      <div className="mb-8 flex flex-col gap-3">
        <div className="flex gap-3">
          <span className={dot}/>
          <span className={dot}/>
          <span className={dot}/>
        </div>
        <div className="flex gap-3">
          <span className={dot}/>
        </div>
        <div className="flex gap-3">
          <span className={dot}/>
        </div>
      </div>

      <h2 className="mx-12 font-playfair text-6xl font-bold text-ascend-dark-blue">
        {title}
      </h2>

      <div className="mt-8 flex flex-col items-end gap-3">
        <div className="flex gap-3">
          <span className={dot}/>
        </div>
        <div className="flex gap-3">
          <span className={dot}/>
        </div>
        <div className="flex gap-3">
          <span className={dot}/>
          <span className={dot}/>
          <span className={dot}/>
        </div>
      </div>
    </div>
  );
}
