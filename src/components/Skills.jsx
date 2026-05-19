import "../Skills.css";
import { motion } from "framer-motion";
import html from "../assets/html5.webp";
import css from "../assets/css.webp";
import bootstrap from "../assets/bootstrap.webp";
import js from "../assets/javascript.webp";
import react from "../assets/react.png";
import python from "../assets/python.webp";
import django from "../assets/django.webp";
import mysql from "../assets/mysql.webp";
import postgresql from "../assets/postgresql.webp";
import github from "../assets/github.webp";
import docker from "../assets/docker.webp";
import { useState, useEffect } from "react";

function Skills() {
  return (
    <div
      id="skills"
      className="skills-container d-flex justify-content-center align-items-center flex-column"
    >
      <motion.h4
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "ease", duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-3"
      >
        TECHNOLOGIES I WORK WITH
      </motion.h4>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "ease", duration: 0.4, delay: 0.4 }}
        viewport={{ once: true }}
        className="mb-5"
      >
        SKILLS
      </motion.h2>

      <div className="cards-container d-flex justify-content-center align-items-center gap-3 flex-wrap w-100">
        <SkillCard
          image={html}
          title={"HTML"}
          percentage={"90"}
          delay={0.6}
          pos={50}
        />
        <SkillCard
          image={css}
          title={"CSS"}
          percentage={"90"}
          delay={0.7}
          pos={-50}
        />
        <SkillCard
          image={bootstrap}
          title={"Bootstrap"}
          percentage={"80"}
          delay={0.8}
          pos={50}
        />
        <SkillCard
          image={js}
          title={"JavaScript"}
          percentage={"80"}
          delay={0.9}
          pos={-50}
        />
        <SkillCard
          image={react}
          title={"React"}
          percentage={"80"}
          delay={1}
          pos={50}
        />
        <SkillCard
          image={python}
          title={"Python"}
          percentage={"80"}
          delay={1.1}
          pos={-50}
        />
        <SkillCard
          image={django}
          title={"Django"}
          percentage={"80"}
          delay={1.2}
          pos={50}
        />
        <SkillCard
          image={mysql}
          title={"MySQL"}
          percentage={"75"}
          delay={1.3}
          pos={-50}
        />
        <SkillCard
          image={postgresql}
          title={"PostgreSQL"}
          percentage={"75"}
          delay={1.4}
          pos={50}
        />
        <SkillCard
          image={github}
          title={"Git & GitHub"}
          percentage={"85"}
          delay={1.5}
          pos={-50}
        />
        <SkillCard
          image={docker}
          title={"Docker"}
          percentage={"80"}
          delay={1.6}
          pos={50}
        />
      </div>
    </div>
  );
}

function SkillCard({ image, title, percentage, pos, delay }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleSize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <motion.div
      initial={isMobile ? { x: 0, opacity: 0 } : { y: pos, opacity: 0 }}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="card p-3"
      style={{ width: "230px" }}
    >
      <div className="d-flex align-items-center mb-3 justify-content-center">
        <img
          src={image}
          alt={title}
          style={{ width: "40px", marginRight: "10px" }}
        />
        <h6 className="mb-0 fs-5">{title}</h6>
      </div>

      <div className="d-flex align-items-center">
        <div className="progress flex-grow-1" style={{ height: "6px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <span className="per ms-2">{percentage}%</span>
      </div>
    </motion.div>
  );
}

export default Skills;
