import { motion } from "framer-motion";
import "../Experience.css";

const experiences = [
  {
    position: "Full-Stack Developer",
    company: "Freelance",
    duration: "October 2025 - Present",
    description:
      "Built and maintained responsive web applications, developed REST APIs, and collaborated with designers to deliver new features.",
  },
  {
    position: "Frontend Developer Intern",
    company: "Casita - Your Student Home",
    duration: "October 2026 - Present",
    description:
      "Created and maintained accessible user interfaces, improved page performance, and translated design concepts into reusable components.",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="experience d-flex flex-column align-items-center justify-content-center"
    >
      <motion.h4
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "ease", duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-3"
      >
        MY PROFESSIONAL JOURNEY
      </motion.h4>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "ease", duration: 0.4, delay: 0.4 }}
        viewport={{ once: true }}
        className="mb-5"
      >
        EXPERIENCE
      </motion.h2>

      <div className="experience-cards">
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.company}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "ease", duration: 0.4, delay: 0.6 + index * 0.2 }}
            viewport={{ once: true }}
            className="experience-card d-flex flex-column p-4"
          >
            <span className="experience-duration mb-3">
              {experience.duration}
            </span>
            <h3 className="experience-position mb-2">{experience.position}</h3>
            <h4 className="experience-company mb-3">{experience.company}</h4>
            <p className="mb-0">{experience.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
