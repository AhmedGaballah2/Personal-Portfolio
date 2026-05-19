import "../HeroSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import personalPhoto from "../assets/personal-photo-1.png";
import cv from "../assets/Ahmed-Gaballah-Resume.pdf";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div id="home" className="hero-container">
      <div className="inner-container d-flex inner-container align-items-center justify-content-between">
        <div className="content col-12 col-lg-6">
          <motion.h3
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "ease", duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            HELLO, I'M
          </motion.h3>
          <motion.h1
            className="first"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "ease", duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            AHMED
          </motion.h1>
          <motion.h1
            className="last"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "ease", duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            GABALLAH
          </motion.h1>
          <motion.p
            className="fist"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "ease", duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Full Stack Web Developer Using Python
          </motion.p>
          <motion.p
            className="last"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "ease", duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            I build scalable, user-focused web applications using modern
            technologies and clean code practices.
          </motion.p>
          <motion.div
            className="btns d-flex justify-content-start align-items-center gap-3"
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "ease", duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            <button
              className="first p-2 px-6"
              onClick={() => {
                document.querySelector("#projects").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              VIEW MY WORK
            </button>
            <button className="last p-2 px-6" onClick={handleDownloadClick}>
              DOWNLOAD CV <FontAwesomeIcon icon={faDownload} />
            </button>
          </motion.div>
        </div>

        <motion.div
          className="image col-12 col-lg-6"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "ease", duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <img src={personalPhoto} alt="" />
        </motion.div>
      </div>
    </div>
  );

  function handleDownloadClick() {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "Ahmed-Gaballah-Resume.pdf";
    link.click();
  }
}

export default HeroSection;
