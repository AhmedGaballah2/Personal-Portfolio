import "../About.css";
import photo from "../assets/about-photo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function About() {
  return (
    <div
      id="about"
      className="about-container w-100 d-flex justify-content-center align-items-center"
    >
      <div className="inner-container d-flex justify-content-between align-items-center w-100 gap-4">
        <motion.div
          className="image"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "ease", duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img className="w-100" src={photo} alt="" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "ease", duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
            className="experience d-flex flex-column justify-content-center align-items-center flex-wrap g-2 p-2 px-5"
          >
            <h2 className="text-center fs-1">+3</h2>
            <p className="text-center fs-5">Full Stack Projects</p>
          </motion.div>
        </motion.div>

        <div className="content">
          <motion.h4
            className="title mb-3"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "ease", duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            ABOUT ME
          </motion.h4>
          <motion.h2
            className="mb-3"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "ease", duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
          >
            I CREATE FAST AND USER-FRIENDLY WEB APPLICATIONS
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "ease", duration: 0.7, delay: 0.7 }}
            viewport={{ once: true }}
            className="desc mb-4"
          >
            I'm a Full-Stack Developer passionate about creating responsive,
            user-friendly, and efficient web applications. I enjoy turning ideas
            into real products using modern technologies, with a focus on clean
            code and great user experience.
          </motion.p>

          <div className="contact d-flex justify-content-between align-items-start g-5 w-100 mb-4">
            <ContactCard icon={faUser} title="Name" desc="Ahmed Gaballah" />
            <ContactCard
              icon={faLocationDot}
              title="Location"
              desc="Cairo, Egypt"
            />
            <ContactCard
              icon={faEnvelope}
              title="Email"
              desc="agaballah223@gmail.com"
            />
          </div>

          <motion.button
            className="btn px-5 p-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "ease", duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/ahmedgaballah2",
                "_blank",
              )
            }
          >
            MORE ABOUT ME
          </motion.button>
        </div>
      </div>
    </div>
  );
}

function ContactCard({ icon, title, desc }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "ease", duration: 0.6, delay: 0.9 }}
      viewport={{ once: true }}
      className="contact-card d-flex align-items-start justify-content-start w-100 g-3"
    >
      <FontAwesomeIcon icon={icon} className="icon fs-5 m-2" />

      <div className="details">
        <p className="title mb-2 text-start">{title}</p>
        <p className="desc text-start">{desc}</p>
      </div>
    </motion.div>
  );
}
export default About;
