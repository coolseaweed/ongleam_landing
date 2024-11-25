import React from "react";
import { Partners } from "@/config/partners";
import Image from "next/image";
const PartnerSection = () => {
  return (
    <section id="partners" className="flex w-full p-4 pt-20">
      <div className="flex w-full flex-col">
        <h1 className="flex text-4xl font-bold">파트너사</h1>
        <div className="flex-warp flex w-full justify-center gap-16">
          {Partners.map((item) => (
            <div
              key={item.company}
              className="flex min-h-[128px] flex-col items-center justify-end"
            >
              <Image
                src={item.image.src}
                alt={item.company}
                width={item.image.width}
                height={item.image.height}
              />
              <h1 className="pt-4 font-bold">{item.company}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
