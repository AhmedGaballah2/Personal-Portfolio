import "../Projects.css";
import "swiper/css";
import "swiper/css/pagination";

import beitAlAluminium from "../assets/Beit-Al-Aliminium.png";
import craftora from "../assets/Craftora.png";
import portfolio from "../assets/Portfolio.png";
import tailor from "../assets/Tailor.png";
import beitAlAluminiumWebsite from "../assets/Beit-Al-Aliminium (Website).png";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

function Projects() {
  return (
    <div
      id="projects"
      className="projects d-flex flex-column align-items-start justify-content-start"
    >
      <motion.h4
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "ease", duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-3"
      >
        FROM CONCEPT TO CODE
      </motion.h4>

      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "ease", duration: 0.4, delay: 0.4 }}
        viewport={{ once: true }}
        className="mb-5"
      >
        PROJECTS
      </motion.h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1400: { slidesPerView: 4 },
        }}
        modules={[Pagination]}
        className="projects-swiper"
      >
        <SwiperSlide>
          <ProjectCard
            img={beitAlAluminium}
            title="Freelance - Store Management System (Inventory & Accounting App)"
            text="Inventory tracking, invoicing, profit/loss system."
            link=""
            pos={50}
            delay={0.1}
            view_btn={false}
          />
        </SwiperSlide>

        <SwiperSlide>
          <ProjectCard
            img={beitAlAluminiumWebsite}
            title="Freelance - Complete Online Store System (In Progress)"
            text="A complete E-Commerce platform with product management, order processing, and an admin dashboard for full store control."
            link="#"
            pos={-50}
            delay={0.2}
            view_btn={false}
          />
        </SwiperSlide>

        <SwiperSlide>
          <ProjectCard
            img={craftora}
            title="Craftora E-Commerce Website (Full Project)"
            text="Full-featured online store with cart system"
            link="https://craftedhub.vercel.app/"
            pos={50}
            delay={0.3}
            view_btn={true}
          />
        </SwiperSlide>

        <SwiperSlide>
          <ProjectCard
            img={tailor}
            title="Tailor Landing Page"
            text="Creative landing page focused on clean UI and smooth UX"
            link="https://tailor-template.vercel.app/"
            pos={-50}
            delay={0.4}
            view_btn={true}
          />
        </SwiperSlide>

        <SwiperSlide>
          <ProjectCard
            img={portfolio}
            title="Personal Portfolio Website"
            text="Modern responsive portfolio showcasing projects"
            link="https://ahmed-gaballah-portfolio.vercel.app/"
            pos={50}
            delay={0.5}
            view_btn={true}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

function ProjectCard({ img, title, text, link, pos, delay, view_btn }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial={isMobile ? { x: pos, opacity: 0 } : { y: pos, opacity: 0 }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.3 }}
      className="card d-flex flex-column h-auto"
    >
      <img src={img} className="card-img-top" alt={title} />

      <div className="card-body d-flex justify-content-between align-items-start flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>

        {view_btn && (
          <button
            className="btn px-5 p-2"
            onClick={() => window.open(link, "_blank")}
          >
            View Project
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default Projects;
