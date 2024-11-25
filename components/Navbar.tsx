"use client";

import Image from "next/image";
import { siteRoutes } from "@/config/navbar";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState(""); // State to track active section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -40% 0%" },
    );

    siteRoutes.forEach((item) => {
      const section = document.getElementById(item.route);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      siteRoutes.forEach((item) => {
        const section = document.getElementById(item.route);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const scrollToSection = ({ id }: { id: string }) => {
    const elements = document.getElementById(id);
    elements!.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sticky top-0 flex w-full items-center justify-between bg-white p-4 px-4 backdrop-saturate-150">
      <div
        className="flex w-fit cursor-pointer items-center"
        onClick={() => scrollToSection({ id: siteRoutes[0].route })}
      >
        <Image
          className="rounded-full"
          src="/shared/logo.png"
          alt="huscale logo"
          width={36}
          height={36}
        />
        <h1 className="ml-2 text-xl font-bold">{siteRoutes[0].label}</h1>
      </div>

      <nav className="flex gap-4">
        {siteRoutes.slice(1).map((item) => (
          <div
            key={item.route}
            className={`cursor-pointer font-bold transition-colors hover:text-primary ${activeSection === item.route ? "text-primary" : undefined}`}
            onClick={() => scrollToSection({ id: item.route })}
          >
            {item.label}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
