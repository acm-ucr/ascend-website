import Image from 'next/image';

const placeholderImage = '/events/gallery-1.webp';

const Gallery = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 md:p-8">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key = {index}
          className="relative aspect-[4/3] w-full overflow-hidden"
        >
          <Image
            src = { placeholderImage }
            alt = { `Placeholder image ${index + 1}` }
            fill
            sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
      </div>
      ))}
    </div>
  )
}

export default Gallery;
