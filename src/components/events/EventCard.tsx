interface eventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const EventCard = ({
  title,
  date,
  time,
  location,
  description,
}: eventCardProps) => {
  return (
    <div className="flex h-3/8 w-3/8 flex-col p-8">
      <p className="font-playfair text-ascend-red-orange border-t-2 border-b-2 border-black pt-6 pb-3 text-center text-4xl font-bold">
        {title}
      </p>
      <div className="py-3 text-left text-2xl font-semibold">
        <p>
          {date} | {time}
        </p>
        <p>{location}</p>
      </div>
      <p className="text-left indent-8 font-thin">{description}</p>
    </div>
  );
};

export default EventCard;
