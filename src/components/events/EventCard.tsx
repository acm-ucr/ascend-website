interface componentProps {
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
}: componentProps) => {
  return (
    <div className="flex h-3/8 w-3/8 flex-col p-8">
      <div className="font-playfair text-ascend-red-orange border-t-2 border-b-2 border-black pt-4 pb-3 text-center text-5xl font-bold">
        {title}
      </div>
      <div className="py-3 text-left text-3xl font-semibold">
        <div>
          {date} | {time}
        </div>
        <div>{location}</div>
      </div>
      <div className="text-left indent-8 text-2xl font-thin">{description}</div>
    </div>
  );
};

export default EventCard;
