import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ExternalLink,
  ArrowRight,
  ChevronDown,
  Code,
  Award,
  Cog,
  Briefcase,
  Calendar,
  MapPin,
  Plus,
} from "lucide-react";

const TabButton = ({ active, children, onClick, icon: Icon }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center gap-3 w-40 px-6 py-4 rounded-xl font-medium transition-all duration-300 cursor-pointer ${
      active
        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
        : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-300"
    }`}
  >
    <Icon size={20} />
    <span>{children}</span>
  </button>
);

// Experience Timeline Component
const ExperienceTimeline = () => (
  <div id="experience" className="max-w-4xl mx-auto">
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>

      {/* Timeline Items */}
      <div className="space-y-12">
        {/* Future Opportunity Placeholder */}
        <div className="relative flex items-start">
          <div className="absolute -left-3 md:left-5 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-4 border-gray-900 shadow-lg flex items-center justify-center">
            <Plus className="w-3 h-3 text-white" />
          </div>
          <div className=" ml-5 md:ml-20">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-xl border border-purple-500/30 border-dashed p-6 shadow-xl">
              <div className="text-center">
                <h3 className="text-lg font-bold text-purple-300 mb-2">
                  Next Opportunity Awaits
                </h3>
                <p className="text-gray-400 text-sm">
                  "You can give me a chance to add another experience here"
                </p>
                <div className="mt-4">
                  <span className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">
                    Available for Full-time Roles
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Internship */}
        <div className="relative flex items-start">
          <div className="absolute -left-2 md:left-6 w-4 h-4 bg-green-500 rounded-full border-4 border-gray-900 shadow-lg"></div>
          <div className=" ml-5 md:ml-20 overflow-scroll md:overflow-hidden">
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 shadow-xl">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Software Development Intern
                    </h3>
                    <p className="text-green-400 font-medium">Fourkites</p>
                  </div>
                </div>
                <Link
                  to={`/fourkites`}
                  className="text-xs bg-green-500/20 text-green-400 flex flex-col md:flex-row gap-3 cursor-pointer p-1 md:p-3 rounded-xl border border-transparent hover:border-green-400 hover:shadow-[0_0_10px_2px_rgba(34,197,94,0.4)] transition-all duration-300"
                >
                  View details <ArrowRight size={14} />
                </Link>
              </div>

              <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>Jun 2024 - Jun 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>Chennai, India</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Worked as a Full Stack Developer, actively contributing to the
                enhancement and maintenance of FourKites’ legacy tools.
                Collaborated closely with the team to improve system
                functionality, ensure smooth feature delivery, and support
                ongoing development efforts within a fast-paced, agile
                environment.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React.js",
                  "AngularJS",
                  "Spring Boot",
                  "Ruby",
                  "PostgreSQL",
                  "Git",
                  "GitHub",
                  "Agile (Scrum)",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Projects Component (existing)
const ProjectCard = ({ title, description, image, githubLink }) => (
  <div className="w-96 h-[25rem] bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden shadow-xl">
    <div className={`relative h-56 p-4`}>
      <div
        className={`w-full h-full bg-gray-900/50 rounded-lg overflow-hidden`}
      >
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover rounded-lg`}
        />
      </div>
    </div>
    <div className="p-6 pt-0 h-45 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-between mt-auto">
        <a
          href={githubLink}
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium border border-blue-400 rounded-xl p-3 pt-2 pb-2 cursor-pointer"
        >
          <span>Code</span>
          <Code size={16} />
        </a>
        <Link
          to={`/${title}`}
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
        >
          <span>Details</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  </div>
);

const ProjectsSection = ({ showMore, setShowMore }) => {
  const projects = [
    {
      title: "BeatX",
      description:
        "BeatX is a sleek music streaming app that lets users explore playlists, enjoy their favorite tracks, and create a personalized listening experience.",
      image: "images/Beatx.png",
      githubLink: "https://github.com/sid07003/BeatX3.0",
    },
    {
      title: "Intervia",
      description:
        "Intervia is a real-world mock interview platform connecting students with professionals. It features role-based access, profile building, interview scheduling, feedback sharing, and Kafka-based event streaming.",
      image: "images/Intervia.png",
      githubLink: "https://github.com/sid07003/Intervia",
    },
    {
      title: "Youtellect",
      description:
        "Youtellect is a smart video summarizer that extracts key points, timelines, and study-ready notes from YouTube videos to boost learning efficiency.",
      image: "images/Youtellect.png",
      githubLink: "https://github.com/sid07003/Youtellect-frontend",
    },
    {
      title: "Narayan News",
      description:
        "Narayan News is a modern, category-based news app delivering real-time headlines with a clean UI, seamless navigation, and fast content updates.",
      image: "images/NarayanNews.jpg",
      githubLink: "https://github.com/sid07003/Narayan-News",
    },
  ];

  const displayedProjects = showMore ? projects : projects.slice(0, 3);
  const hasMore = projects.length > 3;

  return (
    <div id="projects" className="max-w-7xl mx-auto">
      <div className="flex flex-wrap gap-6 justify-center mb-8">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white rounded-xl border border-gray-700/50 transition-all duration-300"
          >
            <span>{showMore ? "Show Less" : "See More"}</span>
            <ChevronDown
              size={20}
              className={`transition-transform duration-300 ${
                showMore ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      )}
    </div>
  );
};

// Certificates Component
const CertificateCard = ({ title, issuer, image, date, description }) => (
  <div className="group bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
    <div
      className="relative h-40 bg-gradient-to-br from-gray-700 to-gray-800 p-4 cursor-pointer"
      onClick={() => window.open(image, "_blank")}
    >
      <img src={image} alt={title} className="w-full h-full object-contain" />
      <div className="absolute top-2 right-2">
        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
          Verified
        </span>
      </div>
    </div>

    <div className="p-4">
      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
        {title}
      </h3>
      <p className="text-purple-400 font-medium text-sm mb-2">{issuer}</p>
      <p className="text-gray-400 text-xs mb-3">{date}</p>

      <div className="flex items-center justify-between">
        <span className="text-xs text-white-100">{description}</span>
      </div>
    </div>
  </div>
);

const CertificatesSection = () => {
  const certificates = [
    {
      title: "CODEATHON 2.0",
      issuer: "Association for Computing Machinery (ACM)",
      image: "images/codeathon_certificate.jpeg",
      date: "February 2023",
      description:
        "Secured 1st place in CODEATHON 2.0, a DSA-focused coding competition organized by ACM with over 200 participants. Demonstrated strong problem-solving skills, algorithmic thinking, and consistency under pressure by outperforming peers across multiple rounds of increasing difficulty.",
    },
    {
      title: "Intellimerge 1.0",
      issuer: "IEEE",
      image: "images/intellimerge_certificate.jpeg",
      date: "May 2023",
      description:
        "Secured a position among the top 20 teams out of 50+ participants in Intellimerge 1.0, a university-level project showcase organized by IEEE. Recognized for building a technically sound and innovative project that stood out in terms of creativity, implementation, and problem-solving approach.",
    },
    {
      title: "DSA Bootcamp",
      issuer: "Codechef",
      image: "images/bootcamp_certificate.jpeg",
      date: "Octuber 2023",
      description:
        "Participated in a DSA Bootcamp organized by CodeChef, focused on mastering core data structures and algorithms. Gained hands-on experience by solving a wide range of problems and logical puzzles, enhancing problem-solving skills and algorithmic thinking through structured practice and peer discussions.",
    },
  ];

  return (
    <div id="certificates" className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <CertificateCard key={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    { name: "JavaScript", path: "javascriptIcon" },
    { name: "TypeScript", path: "typescriptIcon" },
    { name: "React.js", path: "reactIcon" },
    { name: "AngularJS", path: "angularIcon" },
    { name: "Node.js", path: "nodeIcon" },
    { name: "Express.js", path: "expressIcon" },
    { name: "SpringBoot", path: "springIcon" },
    { name: "Java", path: "javaIcon" },
    { name: "Python", path: "pythonIcon" },
    { name: "C++", path: "cppIcon" },
    { name: "MongoDB", path: "mongoIcon" },
    { name: "MySQL", path: "mySqlIcon" },
    { name: "Kafka", path: "javaIcon" },
    { name: "Docker", path: "dockerIcon" },
    { name: "Git", path: "gitIcon" },
    { name: "GitHub", path: "githubIcon" },
    { name: "Postman", path: "postmanIcon" },
    { name: "Tailwind", path: "tailwindIcon" },
    { name: "LLM", path: "llmIcon" },
  ];

  return (
    <div id="skills" className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-10 gap-5">
        {skillCategories.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 pb-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
          >
            <div
              className={`h-9 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
            >
              <img src={`images/${tech.path}.png`} className="h-15" />
            </div>
            <h3 className="font-semibold text-white">{tech.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function CompletePortfolioSections({
  activeTab,
  setActiveTab,
  setSelected,
}) {
  const [showMore, setShowMore] = useState(false);

  const tabs = [
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Code },
    { id: "certificates", label: "Certificates", icon: Award },
    { id: "skills", label: "Tech Stack", icon: Cog },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "experience":
        return <ExperienceTimeline />;
      case "projects":
        return (
          <ProjectsSection showMore={showMore} setShowMore={setShowMore} />
        );
      case "certificates":
        return <CertificatesSection />;
      case "skills":
        return <SkillsSection />;
      default:
        return <ExperienceTimeline />;
    }
  };

  return (
    <div
      id="portfolioSection"
      className="min-h-screen bg-gray-900 p-8 pt-15 mt-35"
    >
      <motion.div
        className="flex flex-wrap gap-4 mb-12 justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            active={activeTab === tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setShowMore(false);
              setSelected(tab.id);
            }}
            icon={tab.icon}
          >
            {tab.label}
          </TabButton>
        ))}
      </motion.div>
      <div className="min-h-[600px]">{renderContent()}</div>
    </div>
  );
}
