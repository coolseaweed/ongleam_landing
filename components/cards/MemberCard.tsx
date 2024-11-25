import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";
interface Member {
  name: string;
  image: string;
  position: string;
  skill: string[];
  career: string[];
}

const MemberCard = ({ member }: { member: Member }) => {
  return (
    <div className="flex flex-col gap-2 rounded-xl border-2 p-4 shadow-lg">
      <div className="flex h-[120px] flex-row items-center gap-4">
        <Image
          className="rounded-full"
          src={member.image}
          alt={member.name}
          width={120}
          height={120}
        />
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">{member.name}</h1>
          <h1 className="font-bold">{member.position}</h1>
        </div>
      </div>

      <div className="flex flex-wrap gap-1 text-white">
        {member.skill.map((skill) => (
          <Badge className="rounded-xl" key={skill}>
            {skill}
          </Badge>
        ))}
      </div>

      <div className="flex flex-col">
        {member.career.map((career) => (
          <div className="flex items-center gap-2" key={career}>
            <strong>•</strong>
            <h1 className="text-lg font-bold">{career}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberCard;
