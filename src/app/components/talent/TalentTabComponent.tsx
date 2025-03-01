"use client";

import { useState } from "react";
import { tabsTanlentPoolData } from "../../talentpool/core/const";
import ForTalent from "@/app/talentpool/ForTalent";
import ForRecruiters from "@/app/talentpool/ForRecruiters";

type TabType = "talents" | "recruiters";

const tabs: { id: TabType; label: string }[] = [
  { id: "talents", label: "For Talents" },
  { id: "recruiters", label: "For Recruiters" },
];

export default function TalentTabComponent() {
  const [activeTab, setActiveTab] = useState<TabType>("talents");

  return (
    <div>
      <div className="flex justify-center my-6 md:my-12 space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`text-lg sm:text-lg px-2 py-1 md:px-5 md:py-2 rounded-md md:text-3xl font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? "text-primary bg-secondary-default/20 text-secondary-default text-2xl font-semibold"
                : "text-[#D9D9D9]"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        className={`grid ${
          activeTab === "talents"
            ? "md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "grid-rows-[300px_300px_300px] md:grid-cols-[1fr_1fr] gap-4 md:grid-rows-[365px_365px] "
        }  pt-3`}
      >
        {activeTab === "talents"
          ? tabsTanlentPoolData[activeTab].map((item, index) => (
              <ForTalent key={index} item={item} id={index} />
            ))
          : activeTab === "recruiters" &&
            tabsTanlentPoolData[activeTab].map((item, index) => (
              <ForRecruiters key={index} item={item} id={index} />
            ))}
      </div>
    </div>
  );
}
