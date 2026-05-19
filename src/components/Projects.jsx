import "../Projects.css";
import beitAlAluminium from "../assets/Beit-Al-Aliminium.png";
import craftora from "../assets/Craftora.png";
import portfolio from "../assets/Portfolio.png";
import tailor from "../assets/Tailor.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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

      <div className="cards-container d-flex justify-content-between align-items-center flex-wrap gap-3">
        <ProjectCard
          img={beitAlAluminium}
          title="Freelance - Store Management System (Inventory & Accounting App)"
          text="Inventory tracking, invoicing, profit/loss system."
          link=""
          delay={0.6}
          pos={50}
        />
        <ProjectCard
          img={craftora}
          title="Craftora E-Commerce Website (Full Project)"
          text="Full-featured online store with cart system"
          link="https://craftedhub.vercel.app/"
          delay={0.8}
          pos={-50}
        />
        <ProjectCard
          img={tailor}
          title="Tailor Landing Page"
          text="Responsive landing page with clean UI design"
          link="https://tailor-template.vercel.app/"
          delay={1}
          pos={50}
        />
        <ProjectCard
          img={portfolio}
          title="Personal Portfolio Website"
          text="Modern responsive portfolio showcasing projects"
          delay={1.2}
          pos={-50}
        />
      </div>
    </div>
  );
}

function ProjectCard({ img, title, text, link, pos, delay }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleSize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <>
      <motion.div
        initial={isMobile ? { x: pos, opacity: 0 } : { y: pos, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="card d-flex flex-column h-auto"
      >
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body d-flex justify-content-between align-items-start flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <button
            className="btn px-5 p-2"
            onClick={() => window.open(link, "_blank")}
          >
            View Project
          </button>
        </div>
      </motion.div>
    </>
  );
}

export default Projects;
