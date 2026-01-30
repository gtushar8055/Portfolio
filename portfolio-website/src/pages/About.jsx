import React from "react";
import {
  FaCode,
  FaGraduationCap,
  FaLightbulb,
  FaRocket,
  FaTerminal,
  FaDatabase,
  FaServer,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const About = () => {
  const highlights = [
    { icon: FaGraduationCap, title: "Education", desc: "IIIT Sonepat" },
    { icon: FaCode, title: "Expertise", desc: "MERN Stack" },
    { icon: FaLightbulb, title: "Interest", desc: "AI/ML" },
    { icon: FaRocket, title: "Goal", desc: "Build Solutions" },
  ];

  const stats = [
    { value: "10+", label: "Projects" },
    { value: "2+", label: "Years" },
    { value: "5+", label: "Technologies" },
  ];

  return (
    <div
      id="about"
      className="w-full min-h-screen bg-[#02131F] relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#02131F] via-[#041c2c] to-[#02131F]"></div>

        {/* Glowing Amber Orbs */}
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-amber-400/15 via-yellow-500/10 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-500/5 via-amber-400/10 to-amber-500/5 rounded-full blur-3xl"></div>

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(251,191,36,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>

        {/* Floating Particles */}
        <div
          className="absolute top-1/4 right-1/3 w-2 h-2 bg-amber-400/60 rounded-full animate-ping"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-amber-300/50 rounded-full animate-ping"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 left-1/4 w-1 h-1 bg-amber-500/40 rounded-full animate-ping"
          style={{ animationDuration: "5s", animationDelay: "2s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-24">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-amber-500/20 border border-amber-500/30 text-amber-300 text-sm font-semibold mb-6 backdrop-blur-sm">
            <HiSparkles className="w-4 h-4" />
            Get to know me
            <HiSparkles className="w-4 h-4" />
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-white">About </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                Me
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.5)]"></span>
            </span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Animated Code/Tech Visual Element (Replaces Photo) */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative group">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-amber-500/30 via-amber-400/20 to-amber-500/30 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>

              {/* Main Container - Terminal/Code Style */}
              <div className="relative w-80 sm:w-96 lg:w-[420px] bg-gradient-to-br from-[#0a2540] via-[#061a2e] to-[#041525] rounded-2xl border border-amber-500/20 shadow-2xl shadow-amber-500/10 overflow-hidden group-hover:border-amber-400/40 transition-all duration-500">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#0a1f35] border-b border-amber-500/10">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="ml-3 text-amber-400/60 text-xs font-mono">
                    tushar_portfolio.js
                  </span>
                </div>

                {/* Code Content */}
                <div className="p-6 font-mono text-sm space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-500">const</span>
                    <span className="text-amber-300">developer</span>
                    <span className="text-white">=</span>
                    <span className="text-amber-400">{"{"}</span>
                  </div>
                  <div className="pl-4 space-y-2">
                    <div>
                      <span className="text-amber-300/70">name:</span>{" "}
                      <span className="text-green-400">"Tushar Gupta"</span>
                      <span className="text-white">,</span>
                    </div>
                    <div>
                      <span className="text-amber-300/70">role:</span>{" "}
                      <span className="text-green-400">
                        "Full Stack Developer"
                      </span>
                      <span className="text-white">,</span>
                    </div>
                    <div>
                      <span className="text-amber-300/70">
                        Graduating from:
                      </span>{" "}
                      <span className="text-green-400">"IIIT Sonepat"</span>
                      <span className="text-white">,</span>
                    </div>
                    <div>
                      <span className="text-amber-300/70">hometown:</span>{" "}
                      <span className="text-green-400">
                        "Dibai , Bulandshahr"
                      </span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="flex items-start gap-1">
                      <span className="text-amber-300/70">skills:</span>
                      <span className="text-amber-400">[</span>
                    </div>
                    <div className="pl-4 text-green-400">
                      <div>"React", "Node.js",</div>
                      <div>"MongoDB", "Express"</div>
                    </div>
                    <div>
                      <span className="text-amber-400">]</span>
                      <span className="text-white">,</span>
                    </div>
                    <div>
                      <span className="text-amber-300/70">passion:</span>{" "}
                      <span className="text-green-400">
                        "Building Solutions"
                      </span>
                    </div>
                  </div>
                  <div className="text-amber-400">{"};"}</div>
                  <div className="flex items-center gap-2 pt-2">
                    <span className="text-amber-500">export default</span>
                    <span className="text-amber-300">developer</span>
                    <span className="text-white">;</span>
                  </div>
                </div>

                {/* Animated cursor line */}
                <div className="px-6 pb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-500">{">"}</span>
                    <span className="w-2 h-5 bg-amber-400 animate-pulse"></span>
                  </div>
                </div>

                {/* Decorative Icons */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                  <FaTerminal className="w-5 h-5 text-[#02131F]" />
                </div>
                <div
                  className="absolute -bottom-3 -left-3 w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300"
                  style={{ animationDelay: "0.1s" }}
                >
                  <FaDatabase className="w-4 h-4 text-[#02131F]" />
                </div>
                <div
                  className="absolute top-1/2 -right-4 w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300"
                  style={{ animationDelay: "0.2s" }}
                >
                  <FaServer className="w-3 h-3 text-[#02131F]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 text-center lg:text-left order-1 lg:order-2">
            {/* Introduction */}
            <div className="space-y-5">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Hello! I'm{" "}
                <span className="relative inline-block px-4 py-1 rounded-lg bg-gradient-to-r from-amber-500/20 to-amber-400/10 border border-amber-500/30">
                  <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                    Tushar Gupta
                  </span>
                  <span className="absolute inset-0 rounded-lg shadow-[0_0_20px_rgba(251,191,36,0.3)]"></span>
                </span>
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
                A passionate web developer and tech enthusiast from{" "}
                <span className="font-semibold text-amber-400">
                  IIIT Sonepat
                </span>
                . I specialize in{" "}
                <span className="font-semibold text-amber-400">
                  MERN stack development
                </span>
                , crafting responsive and dynamic web applications that solve
                real-world problems.
              </p>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl">
                I'm constantly exploring cutting-edge technologies like{" "}
                <span className="font-semibold text-amber-300">AI/ML</span> and
                applying them to innovative projects. Beyond coding, I love
                creating content and sharing my learning journey with the
                community.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group/card p-4 rounded-xl bg-gradient-to-br from-[#0a2540] to-[#061a2e] border border-amber-500/10 hover:border-amber-400/40 shadow-lg hover:shadow-amber-500/10 hover:scale-105 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-3 group-hover/card:scale-110 group-hover/card:shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-all duration-300">
                    <item.icon className="w-5 h-5 text-[#02131F]" />
                  </div>
                  <p className="text-xs sm:text-sm text-amber-400/60">
                    {item.title}
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-white">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/20 to-amber-600/20 blur-xl group-hover:from-amber-400/40 group-hover:to-amber-600/40 transition-all duration-300"></div>
                    {/* Circle */}
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#0a2540] to-[#061a2e] border-2 border-amber-500/30 group-hover:border-amber-400/60 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-amber-400/70 mt-3">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#resume"
                className="group relative px-8 py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-[#02131F] font-bold rounded-full overflow-hidden hover:shadow-[0_10px_40px_rgba(251,191,36,0.4)] hover:scale-105 transition-all duration-300 text-sm sm:text-base text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  📄 View Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 border-2 border-amber-500/50 text-amber-400 font-bold rounded-full hover:bg-amber-500/10 hover:border-amber-400 hover:text-amber-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.2)] transition-all duration-300 text-sm sm:text-base backdrop-blur-sm text-center"
              >
                💬 Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section Divider - Bottom */}
      <div className="relative w-full h-32 overflow-hidden">
        {/* Smooth wave divider */}
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
        >
          <defs>
            <linearGradient
              id="aboutWaveGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#02131F" stopOpacity="0" />
              <stop offset="50%" stopColor="#02131F" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#02131F" />
            </linearGradient>
            <linearGradient
              id="aboutGlowGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(251,191,36,0)" />
              <stop offset="50%" stopColor="rgba(251,191,36,0.6)" />
              <stop offset="100%" stopColor="rgba(251,191,36,0)" />
            </linearGradient>
          </defs>
          {/* Main wave shape */}
          <path
            d="M0,120 L0,40 Q360,60 720,40 T1440,40 L1440,120 Z"
            fill="url(#aboutWaveGradient)"
          />
          {/* Glowing accent line */}
          <path
            d="M0,45 Q360,65 720,45 T1440,45"
            stroke="url(#aboutGlowGradient)"
            strokeWidth="2"
            fill="none"
            className="drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
          />
        </svg>
        {/* Decorative center element */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-amber-400/60"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.6)] animate-pulse"></div>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-amber-400/60"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
