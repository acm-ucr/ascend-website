
const MentorGrid = ({data}) => {
    const mentors = {
    Consulting: [
      { name: "Mentor 1", major: "Business" },
      { name: "Mentor 2", major: "Econ" },
      { name: "Mentor 3", major: "Marketing" },
      { name: "Mentor 4", major: "Finance" },
      { name: "Mentor 5", major: "CS" },
      { name: "Mentor 6", major: "Math" },
    ],
    Finance: [
      { name: "Mentor A", major: "Finance" },
      { name: "Mentor B", major: "Accounting" },
      // ...
    ],
    Accounting: [
      { name: "Mentor C", major: "Accounting" },
      // ...
    ],
    Tech: [
      { name: "Mentor Z", major: "Computer Science" },
      // ...
    ],
  };

  const selected = mentors[data];

    return (
    <div className="grid grid-cols-3 gap-12">
      {selected.map((mentor, idx) => (
        <div key={idx} className="flex flex-col items-center gap-3">
          <div className="w-48 h-48 bg-gray-400 rounded-xl"></div>

          <p className="text-sm text-gray-600">Major</p>

          <button className="bg-[#0b143c] text-white px-6 py-1 rounded-full">
            {mentor.major}
          </button>
        </div>
      ))}
    </div>
  );



}
export default MentorGrid;