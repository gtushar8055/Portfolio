import React, { useState } from "react";
import {
  FaDownload,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaAward,
  FaExternalLinkAlt,
  FaExpand,
  FaTimes,
} from "react-icons/fa";
import { HiSparkles, HiLightningBolt } from "react-icons/hi";

const Resume = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Key Highlights from Resume
  const highlights = [
    {
      icon: FaGraduationCap,
      title: "Education",
      points: ["B.Tech in Information Technology", "IIIT Sonepat (2023-2027)"],
      color: "amber",
    },
    {
      icon: FaCode,
      title: "Technical Skills",
      points: ["MERN Stack Developer", "React, Node.js, MongoDB"],
      color: "yellow",
    },
    {
      icon: FaBriefcase,
      title: "Projects",
      points: ["Gadget Hub - E-commerce", "Vyapaar360 - Business Platform" , "For More Visit My Github Profile"],
      color: "orange",
    },
    {
      icon: FaAward,
      title: "Achievements",
      points: ["Competitive Programming", "5+ Good Projects"],
      color: "amber",
    },
  ];

  const colorClasses = {
    amber: {
      bg: "from-amber-500/20 to-yellow-500/20",
      icon: "text-amber-400",
      border: "border-amber-500/30",
    },
    yellow: {
      bg: "from-yellow-500/20 to-amber-500/20",
      icon: "text-yellow-400",
      border: "border-yellow-500/30",
    },
    orange: {
      bg: "from-orange-500/20 to-amber-500/20",
      icon: "text-orange-400",
      border: "border-orange-500/30",
    },
  };

  return (
    <div
      id="resume"
      className="w-full min-h-screen bg-[#02131F] relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#02131F] via-[#041c2c] to-[#02131F]"></div>

        {/* Glowing Orbs - Amber/Yellow theme */}
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-yellow-500/20 via-amber-600/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-amber-400/15 via-yellow-500/10 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-yellow-500/5 via-amber-400/10 to-yellow-500/5 rounded-full blur-3xl"></div>

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(250,204,21,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,21,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-24">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-yellow-500/20 via-amber-400/10 to-yellow-500/20 border border-yellow-500/30 text-yellow-300 text-sm font-semibold mb-6 backdrop-blur-sm">
            <HiSparkles className="w-4 h-4" />
            Professional Profile
            <HiSparkles className="w-4 h-4" />
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-white">My </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Resume
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 rounded-full shadow-[0_0_20px_rgba(250,204,21,0.5)]"></span>
            </span>
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my education, experience, and skills
          </p>
        </div>

        {/* Main Grid - Preview + Highlights */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left - Resume PDF Preview */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 p-4 sm:p-6 hover:border-yellow-500/30 transition-all duration-500">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <HiLightningBolt className="w-5 h-5 text-yellow-400" />
                Resume Preview
              </h3>
              <button
                onClick={() => setIsPreviewOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-yellow-500/50 transition-all duration-300 text-sm"
              >
                <FaExpand className="w-3 h-3" />
                Full View
              </button>
            </div>

            {/* PDF Preview Container */}
            <div
              className="relative aspect-[1/1.414] rounded-xl overflow-hidden bg-gray-100 shadow-2xl shadow-yellow-500/10 cursor-pointer group"
              onClick={() => setIsPreviewOpen(true)}
            >
              <iframe
                src="/Tushar_Resume.pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=0&page=1&zoom=page-fit"
                title="Resume Preview"
                className="w-full h-full border-0 scale-100"
                style={{
                  transform: "scale(1)",
                  transformOrigin: "top left",
                }}
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="text-white font-medium flex items-center gap-2 bg-black/50 px-4 py-2 rounded-lg">
                  <FaExpand className="w-5 h-5" />
                  Click to expand
                </span>
              </div>
            </div>

            {/* Download Button */}
            <a
              href="/Tushar_Resume.pdf"
              download="Tushar_Gupta_Resume.pdf"
              className="flex items-center justify-center gap-3 mt-6 w-full px-6 py-4 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-500 text-black font-bold rounded-xl hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] transition-all duration-300 hover:scale-[1.02] group"
            >
              <FaDownload className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
              <FaExternalLinkAlt className="w-4 h-4 opacity-70" />
            </a>
          </div>

          {/* Right - Key Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">
              Key Highlights
            </h3>

            {highlights.map((highlight, index) => {
              const colors = colorClasses[highlight.color];
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl border border-white/10 p-5 hover:${colors.border} transition-all duration-500 hover:translate-x-2`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center flex-shrink-0`}
                    >
                      <highlight.icon className={`w-5 h-5 ${colors.icon}`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {highlight.title}
                      </h4>
                      <ul className="space-y-1">
                        {highlight.points.map((point, i) => (
                          <li
                            key={i}
                            className="text-gray-400 text-sm flex items-center gap-2"
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${colors.icon.replace("text-", "bg-")}`}
                            ></span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Contact CTA */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-yellow-500/10 border border-yellow-500/20 mt-8">
              <p className="text-white font-semibold mb-1">
                Interested in working together?
              </p>
              <p className="text-gray-400 text-sm mb-4">
                Let's connect and discuss opportunities
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-medium rounded-lg hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all duration-300 hover:scale-105"
              >
                Contact Me
                <FaExternalLinkAlt className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen PDF Preview Modal */}
      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsPreviewOpen(false)}
        >
          <button
            onClick={() => setIsPreviewOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <FaTimes className="w-6 h-6" />
          </button>

          <div
            className="relative w-full max-w-5xl h-[90vh] bg-gray-100 rounded-lg overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="/Tushar_Resume.pdf#toolbar=1&navpanes=0&scrollbar=1&view=FitH"
              title="Resume Full Preview"
              className="w-full h-full border-0"
            />

            {/* Download Button in Modal */}
            <a
              href="/Tushar_Resume.pdf"
              download="Tushar_Gupta_Resume.pdf"
              className="absolute bottom-4 right-4 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold rounded-xl hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] transition-all duration-300"
            >
              <FaDownload className="w-5 h-5" />
              Download
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume;
