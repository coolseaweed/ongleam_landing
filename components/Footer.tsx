import React from "react";
import Image from "next/image";
import { companyInfo } from "@/config/footer";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFax } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <div className="flex w-full items-center bg-gray-500 px-8 py-20 text-white">
        <div className="flex w-full flex-col">
          <div className="flex flex-row items-center gap-4">
            <Image
              className="rounded-xl"
              src="/shared/logo.png"
              alt="logo"
              width={64}
              height={64}
            />
            <h1 className="text-2xl font-bold">{companyInfo.name}</h1>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <FaLocationDot size={24} />
              <p>{companyInfo.address}</p>
            </div>
            <div className="flex flex-row gap-4">
              <FaPhoneAlt size={24} />
              <p>{companyInfo.phone}</p>
            </div>
            <div className="flex flex-row gap-4">
              <MdEmail size={24} />
              <p>{companyInfo.email}</p>
            </div>
            <div className="flex flex-row gap-4">
              <FaFax size={24} />
              <p>{companyInfo.fax}</p>
            </div>
          </div>
          <div className="mt-8 w-full border-t-2 border-gray-400">
            <h1 className="mt-8 font-bold text-gray-400">
              {companyInfo.copyright}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
