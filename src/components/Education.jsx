import "../Education.css";
import { motion } from "framer-motion";

function Education() {
  return (
    <div
      id="education"
      className="education d-flex flex-column align-items-center justify-content-center"
    >
      <motion.h4
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "ease", duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-3"
      >
        WHAT I'VE LEARNED
      </motion.h4>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "ease", duration: 0.4, delay: 0.4 }}
        viewport={{ once: true }}
        className="mb-5"
      >
        EDUCATION
      </motion.h2>

      <div className="education-item mb-4 d-flex  align-items-center justify-content-center flex-column">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "ease", duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
          className="education-card d-flex flex-column align-items-center justify-content-center mt-4 text-center p-4 "
        >
          <span className="month mb-2">
            Intensive Code Camps 6-Month Training
          </span>
          <h2 className="mb-3 fs-4">
            Full-Stack Web & Generative AI Development Using Python
          </h2>
          <p className="mb-3">
            Information Technology Institute (ITI) — Dec 2025 - Jun 2026
          </p>

          <ul className="education-details p-0">
            <li className="mb-2">
              Developed real-world full-stack applications using React & Django
            </li>
            <li className="mb-2">
              Integrated RESTful APIs and managed databases (MySQL, PostgreSQL)
            </li>
            <li>
              Collaborated using Git and version control in team-based
              environments
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "ease", duration: 0.4, delay: 0.7 }}
          viewport={{ once: true }}
          className="education-card d-flex flex-column align-items-center justify-content-center mt-4 text-center p-4 "
        >
          <h2 className="mb-3 fs-4">
            Bachelor's Degree in Mechatronics, Robotics Engineering
          </h2>
          <p className="mb-3">Al-Minufyah University, 2019 - 2024</p>
          <ul className="education-details p-0">
            <li>
              Developed strong analytical thinking and problem-solving skills
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Education;
