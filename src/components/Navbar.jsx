import { useState } from "react";
import "../Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navBar-container d-flex justify-content-between align-items-center">
      <div className="logo d-flex justify-content-center align-items-center">
        <a className="logo-AG" href="#home">
          <Logo />
        </a>
      </div>

      <ul className="nav-items d-flex justify-content-center align-items-center g-5">
        <li onClick={() => (window.location.href = "#home")}>
          <a>Home</a>
        </li>
        <li onClick={() => (window.location.href = "#about")}>
          <a>About</a>
        </li>
        <li onClick={() => (window.location.href = "#education")}>
          <a>Education</a>
        </li>
        <li onClick={() => (window.location.href = "#services")}>
          <a>Services</a>
        </li>
        <li onClick={() => (window.location.href = "#projects")}>
          <a>Projects</a>
        </li>
        <li onClick={() => (window.location.href = "#skills")}>
          <a>Skills</a>
        </li>
        <li onClick={() => (window.location.href = "#contact")}>
          <a>Contact</a>
        </li>
      </ul>

      <button
        className=" lets-talk p-2 px-5"
        onClick={() => (window.location.href = "mailto:agaballah223@gmail.com")}
      >
        Let's Talk
      </button>

      <label className="hamburger">
        <input type="checkbox" checked={open} onChange={() => setOpen(!open)} />
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
      </label>

      <div
        className={`side-drawer d-flex justify-content-start align-items-start p-2 px-3 ${
          open ? "open" : ""
        }`}
      >
        <ul className="side-items d-flex flex-column justify-content-start align-items-start gap-4 p-2 w-100 fs-5">
          <li onClick={() => (window.location.href = "#home")}>
            <a>Home</a>
          </li>
          <li onClick={() => (window.location.href = "#about")}>
            <a>About</a>
          </li>
          <li onClick={() => (window.location.href = "#education")}>
            <a>Education</a>
          </li>
          <li onClick={() => (window.location.href = "#services")}>
            <a>Services</a>
          </li>
          <li onClick={() => (window.location.href = "#projects")}>
            <a>Projects</a>
          </li>
          <li onClick={() => (window.location.href = "#skills")}>
            <a>Skills</a>
          </li>
          <li onClick={() => (window.location.href = "#contact")}>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );

  function Logo() {
    return (
      <svg width="85" height="85" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* fluid background curve */}
        <path
          d="M20 65 C30 20, 70 20, 80 65"
          fill="none"
          stroke="url(#goldGrad)"
          strokeWidth="2"
          opacity="0.4"
        />

        {/* A */}
        <text
          x="18"
          y="70"
          fontSize="55"
          fontWeight="700"
          fontFamily="Poppins, sans-serif"
          fill="url(#goldGrad)"
          filter="url(#glow)"
        >
          A
        </text>

        {/* G slightly merged */}
        <text
          x="45"
          y="70"
          fontSize="55"
          fontWeight="700"
          fontFamily="Poppins, sans-serif"
          fill="url(#goldGrad)"
          opacity="0.9"
          filter="url(#glow)"
        >
          G
        </text>

        {/* small connecting dot accent */}
        <circle cx="40" cy="45" r="2" fill="#D4AF37" opacity="0.6" />
      </svg>
    );
  }
}

export default Navbar;
