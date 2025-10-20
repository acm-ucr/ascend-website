export default function Header({ title = "About Us" }) {
  const dot = "w-[12px] h-[12px] bg-[#ffa366] rounded-full";

  return (
    <div className="flex items-center justify-center">
 
      <div className="flex flex-col gap-2 mb-5">
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


      <h2 className="text-2xl font-[Playfair_Display] font-bold text-[#1a1a3b] mx-9">{title}</h2>


      <div className="flex flex-col gap-2 items-end mt-5">
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
