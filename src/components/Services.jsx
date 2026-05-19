import "../Services.css";
import { FaCode, FaPaintBrush, FaMobileAlt, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Services() {
  return (
    <div
      id="services"
      className="services d-flex justify-content-center align-items-center flex-column"
    >
      <motion.h4
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "ease", duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-3"
      >
        WHAT I DO
      </motion.h4>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "ease", duration: 0.4, delay: 0.4 }}
        viewport={{ once: true }}
        className="mb-5"
      >
        SERVICES
      </motion.h2>

      <div className="service-cards d-flex justify-content-between align-items-stretch gap-2">
        <ServiceCard
          Icon={FaCode}
          title="Web Development"
          description="Building fast, responsive, and scalable web applications using modern technologies."
          delay={0.6}
          pos={50}
        />

        <ServiceCard
          Icon={FaPaintBrush}
          title="UI/UX Design"
          description="Designing clean and intuitive interfaces focused on user experience and usability."
          delay={0.8}
          pos={-50}
        />

        <ServiceCard
          Icon={FaMobileAlt}
          title="App Development"
          description="Creating cross-platform mobile applications with smooth performance and modern UI."
          delay={1}
          pos={50}
        />

        <ServiceCard
          Icon={FaServer}
          title="Backend Development"
          description="Developing secure and scalable backend systems with APIs and database integration."
          delay={1.2}
          pos={-50}
        />
      </div>
    </div>
  );
}

function ServiceCard({ Icon, title, description, delay, pos }) {
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
      initial={isMobile ? { x: pos, opacity: 0 } : { y: pos, opacity: 0 }}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="service-card d-flex flex-column align-items-center text-center h-auto"
    >
      <div className="icon fs-3 mb-4">
        <Icon className="icon-1" />
      </div>

      <h5 className="fw-bold fs-4 mb-3">{title}</h5>
      <p className="fs-6">{description}</p>
    </motion.div>
  );
}

export default Services;
