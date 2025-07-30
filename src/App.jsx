import React, { useEffect, useState } from "react";
import "./App.css";
import { Download, Menu, X, Mail } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
// import ExperienceSection from "./sections/Experience";
import PortfolioSections from "./sections/Experience";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [selected, setSelected] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("experience");

  const navItems = [
    "About",
    "Experience",
    "Projects",
    "Certificates",
    "Skills",
    "Connect",
  ];

  useEffect(() => {
    const sectionIds = ["about", "experience", "projects", "certificates", "skills", "connect"]; // Update based on your IDs

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setSelected(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleNavClick = (key) => {
    setSelected(key);
    setMenuOpen(false); // close menu on selection
  };

  return (
    <>
      {/* Header */}
      <div
        className={`Portfolio_header fixed w-full z-50 flex justify-between items-center px-6 py-4 transition-all duration-500 ease-out ${
          scrolled
            ? "bg-black/25 backdrop-blur-md backdrop-saturate-150"
            : "bg-transparent"
        } text-white`}
      >
        {/* Left Section - Logo & Name */}
        <div className="left-section z-50 flex items-center">
          <img
            src="images/logo.jpeg"
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="pl-5 flex flex-col justify-center text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400 text-sm sm:text-base md:text-xl lg:text-2xl font-semibold tracking-wide">
            Siddharth Sharma
          </div>
        </div>

        {/* Right Section - Navigation (Desktop) */}
        <div className="hidden md:flex items-center space-x-6 pr-12">
          {navItems.map((label, idx) => {
            const key = label.toLowerCase();
            const isSelected = selected === key;

            return (
              <a
                key={idx}
                href={
                  ["experience", "projects", "skills", "certificates"].includes(
                    key
                  )
                    ? "#portfolioSection"
                    : `#${key}`
                }
                onClick={() => {
                  handleNavClick(key);
                  setActiveTab(key);
                }}
                className="group relative px-1 py-2 text-sm font-medium"
              >
                <span
                  className={`relative z-10 transition-colors duration-300 ease hover:text-white ${
                    isSelected ? "text-[#a855f7]" : "text-[#e2d3fd]"
                  }`}
                >
                  {label}
                </span>

                {/* Underline */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 ${
                    isSelected
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </a>
            );
          })}
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-20 right-6 bg-black bg-opacity-90 rounded-lg shadow-lg p-6 flex flex-col space-y-4 md:hidden z-40 w-48 backdrop-blur">
            {navItems.map((label, idx) => {
              const key = label.toLowerCase();
              const isSelected = selected === key;

              return (
                <a
                  key={idx}
                  href={`#${key}`}
                  onClick={() => {
                    handleNavClick(key);
                    setActiveTab(key);
                  }}
                  className="group relative px-1 py-2 text-sm font-medium"
                >
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      isSelected ? "text-[#a855f7]" : "text-white"
                    }`}
                  >
                    {label}
                  </span>

                  {!isSelected && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
                  )}
                </a>
              );
            })}
          </div>
        )}
      </div>

      <div
        id="about"
        className="pt-40 px-4 flex flex-col lg:flex-row items-center justify-center gap-12 text-center lg:text-left bg-transparent"
      >
        {/* Left - Text Content */}
        <div className="flex-1 max-w-2xl lg:pl-8">
          <h2 className="text-xl md:text-3xl font-medium text-[#d4d4d8] mb-2">
            Hello there — I'm
          </h2>

          <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] text-transparent bg-clip-text mb-4 leading-tight">
            <Typewriter
              words={[
                "Full Stack Web Developer",
                "CSE Graduate, 2025",
                "Tech-Driven Problem Solver",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h1>

          <p className="text-[#d1d5db] text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            I'm a passionate Full Stack Developer and a Computer Science &
            Engineering graduate with a strong interest in building dynamic web
            applications, exploring emerging technologies, and solving
            real-world problems through code. I thrive in collaborative
            environments and am always eager to learn, grow, and contribute
            meaningfully in the ever-evolving world of tech.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-4">
            {/* Download CV Button */}
            <a
              href="../public/resume/Siddharth_Sharma_Resume.pdf"
              download
              className="px-6 py-3 flex items-center justify-center gap-2 text-white bg-black bg-opacity-30 border border-transparent rounded-lg relative overflow-hidden hover:scale-105 transition-transform duration-300 min-w-[160px]"
            >
              <span className="absolute inset-0 rounded-lg border-[1.5px] border-transparent pointer-events-none z-0 animate-gradient-border"></span>
              <span className="relative z-10 flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </span>
            </a>

            {/* Contact Button */}
            <a
              href="mailto:siddharthsharma0722@gmail.com"
              className="px-6 py-3 flex items-center justify-center gap-2 text-white bg-black bg-opacity-30 border border-transparent rounded-lg relative overflow-hidden hover:scale-105 transition-transform duration-300 min-w-[160px]"
            >
              <span className="absolute inset-0 rounded-lg border-[1.5px] border-transparent pointer-events-none z-0 animate-gradient-border"></span>
              <span className="relative z-10 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </span>
            </a>
          </div>

          <div
            class="hidden sm:flex gap-4 cursor-pointer justify-start aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            <a
              href="https://github.com/sid07003"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button class="group relative cursor-pointer p-3">
                <div class="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div class="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-github w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </div>
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/sid07003/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button class="group relative cursor-pointer p-3">
                <div class="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div class="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-linkedin w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
              </button>
            </a>
            <a
              href="https://www.instagram.com/myself_siddharth_sharma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button class="group relative cursor-pointer p-3">
                <div class="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div class="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-instagram w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </div>
              </button>
            </a>
          </div>
        </div>

        {/* Right - Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="images/Programming-pana.svg"
            alt="Developer Illustration"
            className="max-w-xs md:max-w-sm lg:max-w-md w-full h-auto object-contain"
          />
        </div>
      </div>

      <PortfolioSections
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setSelected={setSelected}
      />
      <div id="connect" className="w-full bg-gray-900">
        <div className="w-full p-6 
             grid grid-cols-2 gap-4 
             md:flex md:flex-row md:justify-center md:items-center 
             bg-black/25 backdrop-blur-md backdrop-saturate-150 text-white">
          <a
            href="to:siddharthsharma0722@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 rounded-lg 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                         bg-gradient-to-r from-[#0A66C2] to-[#0077B5]"
            ></div>
            <div className="relative flex items-center gap-4">
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                             group-hover:scale-110 group-hover:opacity-30"
                  style={{ backgroundColor: "rgb(10, 102, 194)" }}
                ></div>
                <div className="relative p-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail w-6 h-6 transition-all duration-500 group-hover:scale-105"
                    style={{ color: "#EA4335" }} // Optional: Gmail red color
                  >
                    <rect
                      width="20"
                      height="16"
                      x="2"
                      y="4"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M22 6 12 13 2 6"></path>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                  Let's Connect
                </span>
                <span className="text-sm text-gray-400">on Email</span>
              </div>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/sid07003/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 rounded-lg 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                         bg-gradient-to-r from-[#0A66C2] to-[#0077B5]"
            ></div>
            <div className="relative flex items-center gap-4">
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                             group-hover:scale-110 group-hover:opacity-30"
                  style={{ backgroundColor: "rgb(10, 102, 194)" }}
                ></div>
                <div className="relative p-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin w-6 h-6 transition-all duration-500 group-hover:scale-105"
                    style={{ color: "rgb(10, 102, 194)" }}
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                  Let's Connect
                </span>
                <span className="text-sm text-gray-400">on Linkedin</span>
              </div>
            </div>
          </a>
          <a
            href="https://www.instagram.com/myself_siddharth_sharma/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 rounded-lg 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                         bg-gradient-to-r from-[#833AB4] via-[#E4405F] to-[#FCAF45]"
            ></div>
            <div className="relative flex items-center gap-4">
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                             group-hover:scale-110 group-hover:opacity-30"
                  style={{ backgroundColor: "rgb(228, 64, 95)" }}
                ></div>
                <div className="relative p-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-instagram w-6 h-6 transition-all duration-500 group-hover:scale-105"
                    style={{ color: "rgb(228, 64, 95)" }}
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                  Lets connect
                </span>
                <span className="text-sm text-gray-400">
                  on Instagram
                </span>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/sid07003"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 rounded-lg 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                         bg-gradient-to-r from-[#333] to-[#24292e]"
            ></div>
            <div className="relative flex items-center gap-4">
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                             group-hover:scale-110 group-hover:opacity-30"
                  style={{ backgroundColor: "rgb(255, 255, 255)" }}
                ></div>
                <div className="relative p-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-github w-6 h-6 transition-all duration-500 group-hover:scale-105"
                    style={{ color: "rgb(255, 255, 255)" }}
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                  Lets connect
                </span>
                <span className="text-sm text-gray-400">on Github</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
