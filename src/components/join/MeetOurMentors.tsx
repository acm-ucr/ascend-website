"use client";

import { useState } from "react";
import MentorGrid from "./MentorGrid";

const Groups = [

]
const MeetOurMentors = () => {
const [activeTab,  setActiveTab] = useState("Consulting");

    return (
        <div>
            <div>Meet Our Mentors</div>
            <div className="flex">
            {["Consulting", "Finance", "Accounting", "Tech"].map((tab) => (
                <button 
                    onClick = {() => setActiveTab(tab)}
                     className={`
              px-8 py-3 rounded-t-xl text-lg font-semibold
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
            <MentorGrid data={activeTab} />
        </div>
    )
};



export default MeetOurMentors;
