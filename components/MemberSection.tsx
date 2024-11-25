import React from "react";
import MemberCard from "./cards/MemberCard";
import { Members } from "@/config/members";
const MemberSection = () => {
  return (
    <section
      id="members"
      className="flex w-full items-center justify-center px-4 py-20"
    >
      <div className="flex flex-col gap-8">
        <h1 className="flex text-4xl font-bold">구성원</h1>
        {/* Leaders Member */}
        <div>
          <h2 className="flex text-2xl font-bold">임원</h2>
          <div className="grid grid-flow-row grid-cols-3 gap-2">
            {Members["leaders"].map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h2 className="flex text-2xl font-bold">팀원</h2>
          <div className="flex-warp grid grid-flow-row grid-cols-3 gap-2">
            {Members["members"].map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberSection;
