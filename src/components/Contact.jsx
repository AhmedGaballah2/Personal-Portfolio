import "../Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faXTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div
      id="contact"
      className="contact-container d-flex justify-content-between align-items-center gap-5"
    >
      <div className="data d-flex flex-column justify-content-start align-items-start gap-3 w-100 h-50">
        <motion.h4
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "ease", duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-3"
        >
          LET'S WORK TOGETHER
        </motion.h4>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "ease", duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          HAVE A <span>PROJECT</span> IN MIND?
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "ease", duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          I'd love to hear about your project and help you bring your ideas to
          life.
        </motion.p>
      </div>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "ease", duration: 0.4, delay: 0.6 }}
        viewport={{ once: true }}
        className="form d-flex flex-column justify-content-between align-items-start w-100 h-50 gap-3 p-3 px-4"
      >
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "ease", duration: 0.4, delay: 1 }}
          viewport={{ once: true }}
          className="w-100"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            style={{ width: "100%" }}
            className="p-2"
          />
        </motion.div>
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "ease", duration: 0.4, delay: 1.1 }}
          viewport={{ once: true }}
          className="w-100"
        >
          <input
            type="email"
            placeholder="Your Email"
            required
            style={{ width: "100%" }}
            className="p-2"
          />
        </motion.div>
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "ease", duration: 0.4, delay: 1.2 }}
          viewport={{ once: true }}
          className="w-100"
        >
          <textarea
            name=""
            id=""
            placeholder="Your Message"
            style={{ width: "100%", height: "150px" }}
            className="p-2"
          ></textarea>
        </motion.div>
        <motion.button
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "ease", duration: 0.1, delay: 1.3 }}
          viewport={{ once: true }}
          className="btn p-2 px-5"
        >
          SEND MESSAGE
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "ease", duration: 0.4, delay: 0.6 }}
        viewport={{ once: true }}
        className="contact-details d-flex flex-column justify-content-between align-items-start w-100 h-50 gap-1 p-3 px-4"
      >
        <ContactLine
          icon={faEnvelope}
          title={"Email"}
          desc={"agaballah223@gmail.com"}
          delay={1}
        />
        <ContactLine
          icon={faPhone}
          title={"Phone"}
          desc={"+20 100 036 3294"}
          delay={1.1}
        />
        <ContactLine
          icon={faLocationDot}
          title={"Location"}
          desc={"Cairo, Egypt"}
          delay={1.2}
        />

        <motion.a
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "ease", duration: 0.4, delay: 1.3 }}
          viewport={{ once: true }}
          href="#"
          className="follow m-2 mb-4 fs-5"
        >
          Follow Me
        </motion.a>

        <div className="app-icons">
          <motion.a
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "ease", duration: 0.4, delay: 1.4 }}
            viewport={{ once: true }}
            href="https://www.linkedin.com/in/ahmedgaballah2/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon fs-3 m-2" />
          </motion.a>
          <motion.a
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "ease", duration: 0.4, delay: 1.5 }}
            viewport={{ once: true }}
            href="https://github.com/AhmedGaballah2"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="icon fs-3 m-2" />
          </motion.a>
          <motion.a
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "ease", duration: 0.4, delay: 1.6 }}
            viewport={{ once: true }}
            href="https://www.instagram.com/not_galileoo/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} className="icon fs-3 m-2" />
          </motion.a>
          <motion.a
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "ease", duration: 0.4, delay: 1.7 }}
            viewport={{ once: true }}
            href="https://www.x.com/agaballah_1/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faXTwitter} className="icon fs-3 m-2" />
          </motion.a>
          <motion.a
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "ease", duration: 0.4, delay: 1.8 }}
            viewport={{ once: true }}
            href="https://www.facebook.com/NotGalileoo"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon fs-3 m-2" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}

function ContactLine({ icon, title, desc, delay }) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "ease", duration: 0.4, delay: delay }}
      viewport={{ once: true }}
      className="line d-flex align-items-start justify-content-start w-100 gap-3"
    >
      <FontAwesomeIcon icon={icon} className="icon fs-5 m-2" />

      <div className="details">
        <p className="title mb-2">{title}</p>
        <p className="desc">{desc}</p>
      </div>
    </motion.div>
  );
}

export default Contact;
