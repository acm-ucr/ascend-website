import Image from "next/image";

type Mentor = { name: string; major: string; linkedin?: string; image?: string };

const MentorGrid = ({ data }: { data: Mentor[] }) => {
  const selected = data || [];

  return (
    <div className="grid grid-cols-3 gap-10">
      {selected.map((mentor, idx) => (
        <div key={idx} className="flex flex-col items-center gap-3">
          {mentor.image ? (
            <Image
              src={mentor.image}
              alt={`${mentor.name} photo`}
              width={192}
              height={192}
              className="rounded-xl object-cover"
            />
          ) : (
            <div className="w-48 h-48 bg-gray-400 rounded-xl" />
          )}

          <p className="text-sm text-gray-600">{mentor.major}</p>

          {mentor.linkedin ? (
            <a
              href={mentor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0b143c] text-white px-6 py-1 rounded-full underline"
            >
              Linkedin
            </a>
          ) : (
            <button className="bg-gray-300 text-gray-700 px-6 py-1 rounded-full" disabled>
              Linkedin
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default MentorGrid;