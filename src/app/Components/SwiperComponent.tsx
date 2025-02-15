"use client";

import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Dynamically import Swiper components
const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import("swiper/react").then((mod) => mod.SwiperSlide), { ssr: false });
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Image imports (Replace with actual paths)
import ResidentialConstruction from "../assets/images/service/04.svg";
import InteriorFinishing from "../assets/images/service/05.svg";
import ProjectManagement from "../assets/images/service/06.svg";

interface Service {
  id: number;
  name: string;
  description: string;
  image: string;
}

const services: Service[] = [
  { id: 1, name: "Residential Construction", description: "Building homes with skilled labor and technology.", image: ResidentialConstruction },
  { id: 2, name: "Interior Finishing", description: "Enhancing interior spaces with quality craftsmanship.", image: InteriorFinishing },
  { id: 3, name: "Project Management", description: "Ensuring projects meet deadlines and budgets.", image: ProjectManagement },
];

export default function SwiperComponent() {
  const [mounted, setMounted] = useState(false);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <div className="swiper-area-wrapper" dir="ltr">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        loop={true}
        
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        onInit={(swiper) => {
          // Attach navigation buttons properly after mount
          if (prevRef.current && nextRef.current) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
      >
        {services.map((service) => (
          <SwiperSlide 
          key={service.id}
           slot="wrapper-start"
          >
            <div className="single-service-one h-[400px]">
              <div className="icon">
                <Image src={service.image} alt={service.name} width={100} height={100} priority />
              </div>
              <div className="inner">
                <h5 className="title text-light">{service.name}</h5>
                <p className="disc">{service.description}</p>
                <a href="/service-details" className="read-more-narrow">Explore More</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button ref={prevRef} className="swiper-button-prev">❮</button>
      <button ref={nextRef} className="swiper-button-next">❯</button>

      {/* Custom Styling */}
      <style jsx>{`
        .swiper-button-prev, .swiper-button-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          padding: 10px 15px;
          cursor: pointer;
          font-size: 20px;
          z-index: 10;
          border-radius: 50%;
        }
        .swiper-button-prev { left: -10px; }
        .swiper-button-next { right: -10px; }
      `}</style>
    </div>
  );
}
