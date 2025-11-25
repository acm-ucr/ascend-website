"use client";

import { useState } from "react";
import MentorGrid from "./MentorGrid";

const Groups = [

]
const MeetOurMentors = () => {
const [activeTab,  setActiveTab] = useState("Consulting");

    return (
        <div>
            <div className="flex justify-center text-3xl font-bold font-playfair mb-12">Meet Our Mentors</div>
            <div className="flex ">
            {["Consulting", "Finance", "Accounting", "Tech"].map((tab) => (
                <button 
                    onClick = {() => setActiveTab(tab)}
                     className={`
              w-1/4 flex justify-center px-16 py-3 pt-4 rounded-t-3xl text-2xl font-bold font-playfair
              transition
              ${
                activeTab === tab
                  ? "bg-ascend-light-orange text-black"
                  : "bg-gray-200 text-ascend-red-orange"
              }
            `}>{tab}
                    </button>
            ))
            }
            </div>
            <div className="border-2 border-orange-300 px-14 py-12">
        <MentorGrid data={activeTab} />
      </div>
        </div>
    )
};



export default MeetOurMentors;
