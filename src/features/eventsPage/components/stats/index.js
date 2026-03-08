import React from "react";
import StatsCard from "./statsCard";
import {
  IoDocumentTextOutline,
  IoBriefcaseOutline,
  IoTicketOutline,
} from "react-icons/io5";
import { MdOutlineMoneyOff } from "react-icons/md";

export default function Stats() {
  const statsData = [
    {
      id: 1,
      icon: <IoDocumentTextOutline className="w-10 h-10 stroke-1" />,
      text: "Meet employers and apply for jobs in-person",
      bgColor: "bg-[#ffe8d6]",
    },
    {
      id: 2,
      icon: <IoBriefcaseOutline className="w-10 h-10 stroke-1" />,
      text: "Browse hundreds of jobs from various sectors",
      bgColor: "bg-[#ffdbdb]",
    },
    {
      id: 3,
      icon: <MdOutlineMoneyOff className="w-10 h-10" />,
      text: "Free entry",
      bgColor: "bg-[#e8deed]",
    },
    {
      id: 4,
      icon: <IoTicketOutline className="w-10 h-10 stroke-1" />,
      text: "To attend this job fair you require a ticket",
      bgColor: "bg-[#dbf4f4]",
    },
  ];

  return (
    <section className="py-12 flex justify-center w-full">
      <div className="container px-4 max-w-6xl w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <StatsCard
              key={stat.id}
              icon={stat.icon}
              text={stat.text}
              bgColor={stat.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
