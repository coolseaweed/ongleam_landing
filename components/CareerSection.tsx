import React from "react";
import { Careers } from "@/config/careers";
import CareerCard from "./cards/CareerCard";

const CareerSection = () => {
  return (
    <section id="career" className="flex w-full flex-col px-4 pt-20">
      <h1 className="flex pb-8 text-4xl font-bold">대표이력</h1>

      {Careers.map((career) => (
        <CareerCard key={career.company} career={career} />
      ))}
    </section>
  );
};

export default CareerSection;
