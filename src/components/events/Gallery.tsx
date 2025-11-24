import Image from "next/image";
import photos from "@/data/photos";

const Gallery = () => {
  return (
    <div className="lg::p-30 grid grid-cols-3 gap-6 p-10 sm:p-15 md:p-25">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="relative aspect-[4/3] w-full overflow-hidden"
        >
          <Image
            src={photo.image}
            alt={photo.alt}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
