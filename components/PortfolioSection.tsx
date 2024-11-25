"use client";

import React from "react";
import PortfolioCard from "./cards/PortfolioCard";
import { Portfolios } from "@/config/portfolios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="flex w-full flex-col pt-20">
      <h1 className="flex p-4 text-4xl font-bold">포트폴리오</h1>
      <div className="">
        <Swiper
          id="preview-carousel"
          navigation={true}
          grabCursor={true}
          freeMode={true}
          loop={true}
          spaceBetween={10}
          modules={[FreeMode, Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            340: {
              slidesPerView: 2,
            },
            680: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {Portfolios.map((portfolio) => (
            <SwiperSlide key={portfolio.title}>
              <PortfolioCard portfolio={portfolio} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PortfolioSection;
