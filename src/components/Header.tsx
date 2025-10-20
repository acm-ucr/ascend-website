export default function Header({ title = "About Us" }) {
  const dot = "w-[12px] h-[12px] bg-[#ffa366] rounded-full";

  return (
    <div className="flex items-center justify-center">
      <div className="mb-5 flex flex-col gap-2">
        <div className="flex gap-2">
          <span className={dot}></span>
          <span className={dot}></span>
          <span className={dot}></span>
        </div>
        <div className="flex gap-2">
          <span className={dot}></span>
        </div>
        <div className="flex gap-2">
          <span className={dot}></span>
        </div>
      </div>

      <h2 className="mx-9 font-[Playfair_Display] text-2xl font-bold text-[#1a1a3b]">
        {title}
      </h2>

      <div className="mt-5 flex flex-col items-end gap-2">
        <div className="flex gap-2">
          <span className={dot}></span>
        </div>
        <div className="flex gap-2">
          <span className={dot}></span>
        </div>
        <div className="flex gap-2">
          <span className={dot}></span>
          <span className={dot}></span>
          <span className={dot}></span>
        </div>
      </div>
    </div>
  );
}
