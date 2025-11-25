"use client";

import { useState } from "react";
import MentorGrid from "./MentorGrid";
import mentors from "@/data/mentors";

const MeetOurMentors = () => {
  const [activeTab, setActiveTab] = useState("Consulting");

    return (
        <div>
            <div className="flex justify-center text-3xl font-bold font-playfair mb-12">Meet Our Mentors</div>
            <div className="flex ">
            {(() => {
              const tabs: (keyof typeof mentors)[] = ["Consulting", "Finance", "Accounting", "Tech"];
              return tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={` 
              w-1/4 flex justify-center px-16 py-3 pt-4 rounded-t-3xl text-2xl font-bold font-playfair
              
              ${
                    activeTab === tab
                      ? "bg-ascend-light-orange text-black"
                      : "bg-gray-200 text-ascend-red-orange"
                  }
            `}
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
    )
};

export default MeetOurMentors;
