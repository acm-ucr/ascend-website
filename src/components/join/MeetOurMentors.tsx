"use client";

import { useState } from "react";
import MentorGrid from "./MentorGrid";
import mentors from "@/data/mentors";

const MeetOurMentors = () => {
  const [activeTab, setActiveTab] = useState("Consulting");

  return (
    <div className="w-76/100 m-auto">
      <div className="font-playfair mb-12 flex justify-center text-3xl font-bold">
        Meet Our Mentors
      </div>
      <div className="flex">
        {(() => {
          const tabs: (keyof typeof mentors)[] = [
            "Consulting",
            "Finance",
            "Accounting",
            "Tech",
          ];
          return tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-playfair flex w-1/4 justify-center rounded-t-3xl px-16 py-3 pt-4 text-2xl font-bold ${
                activeTab === tab
                  ? "bg-ascend-light-orange text-black"
                  : "text-ascend-red-orange bg-gray-200"
              } `}
            >
              {tab}
            </button>
          ));
        })()}
      </div>
      <div className="border-2 border-orange-300 px-14 py-12">
        <MentorGrid data={mentors[activeTab as keyof typeof mentors]} />
      </div>
    </div>
  );
};

export default MeetOurMentors;
