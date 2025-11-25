"use client";

import { useState } from "react";
import MentorGrid from "./MentorGrid";

const Groups = [

]
const MeetOurMentors = () => {
const [activeTab,  setActiveTab] = useState("Consulting");

    return (
        <div>
            <div className="flex justify-center">Meet Our Mentors</div>
            <div className="flex ">
            {["Consulting", "Finance", "Accounting", "Tech"].map((tab) => (
                <button 
                    onClick = {() => setActiveTab(tab)}
                     className={`
              w-1/4 flex justify-center px-12 py-3 rounded-t-xl text-lg font-semibold
              transition
              ${
                activeTab === tab
                  ? "bg-orange-200 text-orange-600"
                  : "bg-gray-200 text-gray-600"
              }
            `}>{tab}
                    </button>
            ))
            }
            </div>
            <div className="border border-orange-300 p-8">
        <MentorGrid data={activeTab} />
      </div>
        </div>
    )
};



export default MeetOurMentors;
