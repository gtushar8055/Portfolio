import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import {
  SiMongodb,
  SiCplusplus,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";
import { HiSparkles } from "react-icons/hi";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    {
      id: 1,
      icon: FaReact,
      title: "MERN Stack",
      description:
        "Full-stack web development with React, Node.js, Express & MongoDB.",
      details: ["React.js", "Node.js", "Express.js", "MongoDB"],
    },
    {
      id: 2,
      icon: FaDatabase,
      title: "Databases",
      description: "Experience with both SQL (MySQL) & NoSQL (MongoDB).",
      details: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
    },
    {
      id: 3,
      icon: SiCplusplus,
      title: "Programming",
      description: "Strong in C++ (DSA, OOPs) & Python for scripting & ML.",
      details: ["C++", "Python", "JavaScript", "TypeScript"],
    },
    {
      id: 4,
      icon: FaPython,
      title: "Machine Learning",
      description:
        "Learning ML concepts with NumPy, Pandas, Seaborn, Scikit-learn.",
      details: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow"],
    },
    {
      id: 5,
      icon: FaGitAlt,
      title: "Tools & DevOps",
      description:
        "Version control using Git for collaboration & project management.",
      details: ["Git", "GitHub", "VS Code", "Postman"],
    },
    {
      id: 6,
      icon: SiTailwindcss,
      title: "Frontend",
      description:
        "Creating beautiful, responsive UIs with modern CSS frameworks.",
      details: ["Tailwind CSS", "Bootstrap", "Sass", "Framer Motion"],
    },
  ];

  const totalSkills = skills.length;
  const segmentAngle = 360 / totalSkills;
  const gapAngle = 4; // Gap between segments in degrees

  // Generate SVG arc path for donut segment
  const createSegmentPath = (
    index,
    innerRadius,
    outerRadius,
    centerX,
    centerY,
  ) => {
    const startAngle = index * segmentAngle - 90 + gapAngle / 2;
    const endAngle = (index + 1) * segmentAngle - 90 - gapAngle / 2;

    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;

    const x1Outer = centerX + outerRadius * Math.cos(startAngleRad);
    const y1Outer = centerY + outerRadius * Math.sin(startAngleRad);
    const x2Outer = centerX + outerRadius * Math.cos(endAngleRad);
    const y2Outer = centerY + outerRadius * Math.sin(endAngleRad);

    const x1Inner = centerX + innerRadius * Math.cos(endAngleRad);
    const y1Inner = centerY + innerRadius * Math.sin(endAngleRad);
    const x2Inner = centerX + innerRadius * Math.cos(startAngleRad);
    const y2Inner = centerY + innerRadius * Math.sin(startAngleRad);

    const largeArcFlag = segmentAngle - gapAngle > 180 ? 1 : 0;

    return `M ${x1Outer} ${y1Outer} 
            A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x2Outer} ${y2Outer} 
            L ${x1Inner} ${y1Inner} 
            A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x2Inner} ${y2Inner} 
            Z`;
  };

  // Get icon position (center of segment arc)
  const getIconPosition = (index, radius, centerX, centerY) => {
    const midAngle = (index + 0.5) * segmentAngle - 90;
    const midAngleRad = (midAngle * Math.PI) / 180;
    return {
      x: centerX + radius * Math.cos(midAngleRad),
      y: centerY + radius * Math.sin(midAngleRad),
    };
  };

  return (
    <div
      id="skills"
      className="bg-[#02131F] min-h-screen relative overflow-hidden"
    >
      {/* Section Divider at Top */}
      <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <linearGradient
              id="skillsTopGradient"
              x1="0%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#02131F" />
              <stop offset="50%" stopColor="#02131F" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#02131F" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="skillsGlowGradient"
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
            d="M0,0 L0,80 Q360,40 720,80 T1440,80 L1440,0 Z"
            fill="url(#skillsTopGradient)"
          />
          {/* Glowing accent line */}
          <path
            d="M0,75 Q360,35 720,75 T1440,75"
            stroke="url(#skillsGlowGradient)"
            strokeWidth="2"
            fill="none"
            className="drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
          />
        </svg>
        {/* Decorative center element */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-amber-400/60"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.6)] animate-pulse"></div>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-amber-400/60"></div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-amber-400/10 rounded-full blur-3xl"></div>
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(251,191,36,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.5) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-24 lg:py-32">
        {/* Heading */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-amber-500/20 border border-amber-500/30 text-amber-300 text-sm font-semibold mb-6 backdrop-blur-sm">
            <HiSparkles className="w-4 h-4" />
            What I Know
            <HiSparkles className="w-4 h-4" />
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-white">My </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                Skills
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.5)]"></span>
            </span>
          </h2>
        </div>

        {/* Desktop Layout - Wheel + Details Side by Side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Segmented Ring Wheel */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-amber-500/20 blur-3xl opacity-60"></div>

              {/* SVG Wheel */}
              <svg
                width="500"
                height="500"
                viewBox="0 0 500 500"
                className="relative z-10"
              >
                <defs>
                  {/* Gradient definitions */}
                  <linearGradient
                    id="segmentGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#0a2540" />
                    <stop offset="100%" stopColor="#061a2e" />
                  </linearGradient>
                  <linearGradient
                    id="segmentGradientActive"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#1a3a5c" />
                    <stop offset="100%" stopColor="#0d2d47" />
                  </linearGradient>
                  <linearGradient
                    id="amberGlow"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Decorative inner rings */}
                <circle
                  cx="250"
                  cy="250"
                  r="115"
                  fill="none"
                  stroke="rgba(251,191,36,0.1)"
                  strokeWidth="1"
                />
                <circle
                  cx="250"
                  cy="250"
                  r="230"
                  fill="none"
                  stroke="rgba(251,191,36,0.1)"
                  strokeWidth="1"
                />

                {/* Skill Segments */}
                {skills.map((skill, index) => {
                  const isActive = activeSkill === skill.id;
                  const iconPos = getIconPosition(index, 175, 250, 250);

                  return (
                    <g
                      key={skill.id}
                      onClick={() =>
                        setActiveSkill(
                          activeSkill === skill.id ? null : skill.id,
                        )
                      }
                      className="cursor-pointer"
                      style={{
                        transition: "transform 0.3s ease-out",
                        transformOrigin: "250px 250px",
                        transform: isActive ? "scale(1.05)" : "scale(1)",
                      }}
                    >
                      {/* Segment Path */}
                      <path
                        d={createSegmentPath(index, 120, 230, 250, 250)}
                        fill={
                          isActive
                            ? "url(#segmentGradientActive)"
                            : "url(#segmentGradient)"
                        }
                        stroke={isActive ? "#f59e0b" : "rgba(251,191,36,0.3)"}
                        strokeWidth={isActive ? "2" : "1"}
                        filter={isActive ? "url(#glow)" : "none"}
                        className="transition-all duration-300"
                      />

                      {/* Icon Background */}
                      <circle
                        cx={iconPos.x}
                        cy={iconPos.y}
                        r={isActive ? "32" : "28"}
                        fill="url(#amberGlow)"
                        className="transition-all duration-300"
                        filter={isActive ? "url(#glow)" : "none"}
                      />

                      {/* Icon (using foreignObject for React icons) */}
                      <foreignObject
                        x={iconPos.x - 16}
                        y={iconPos.y - 16}
                        width="32"
                        height="32"
                        className="pointer-events-none"
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          <skill.icon
                            className={`text-[#02131F] transition-all duration-300 ${isActive ? "w-6 h-6" : "w-5 h-5"}`}
                          />
                        </div>
                      </foreignObject>
                    </g>
                  );
                })}

                {/* Center Circle */}
                <circle
                  cx="250"
                  cy="250"
                  r="90"
                  fill="#061a2e"
                  stroke="rgba(251,191,36,0.3)"
                  strokeWidth="2"
                />
                <circle cx="250" cy="250" r="85" fill="url(#segmentGradient)" />

                {/* Center Content */}
                <foreignObject x="175" y="200" width="150" height="100">
                  <div className="w-full h-full flex flex-col items-center justify-center text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-2 shadow-lg">
                      <FaCode className="w-6 h-6 text-[#02131F]" />
                    </div>
                    <p className="text-white font-bold text-base">Tushar</p>
                    <p className="text-amber-400/70 text-xs">Full Stack Dev</p>
                  </div>
                </foreignObject>
              </svg>
            </div>
          </div>

          {/* Skill Details Panel */}
          <div className="flex items-center justify-center">
            <div
              className={`w-full max-w-md transition-all duration-500 ${activeSkill ? "opacity-100 translate-x-0" : "opacity-70"}`}
            >
              {activeSkill ? (
                (() => {
                  const skill = skills.find((s) => s.id === activeSkill);
                  return (
                    <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0a2540] to-[#061a2e] border border-amber-500/30 shadow-2xl shadow-amber-500/10">
                      {/* Glow Effect */}
                      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500/20 to-amber-400/20 blur-xl -z-10"></div>

                      <div className="flex items-center gap-5 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                          <skill.icon className="w-8 h-8 text-[#02131F]" />
                        </div>
                        <div>
                          <p className="text-amber-400 font-bold text-2xl">
                            {skill.title}
                          </p>
                          <p className="text-sm text-amber-400/70">
                            Skill Showcase
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        {skill.description}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {skill.details.map((detail, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 text-sm bg-amber-500/15 text-amber-300 rounded-full border border-amber-500/30 hover:bg-amber-500/25 transition-colors"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })()
              ) : (
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#0a2540] to-[#061a2e] border border-amber-500/20 text-center overflow-hidden">
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-amber-400/10 to-amber-500/5 animate-pulse"></div>

                  {/* Decorative rings */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-amber-500/10 animate-ping"
                    style={{ animationDuration: "3s" }}
                  ></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-amber-500/5"></div>

                  <div className="relative z-10">
                    {/* Icon with glow */}
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-500/30 flex items-center justify-center mx-auto mb-5 shadow-[0_0_30px_rgba(251,191,36,0.2)]">
                      <FaRocket
                        className="w-10 h-10 text-amber-400 animate-bounce"
                        style={{ animationDuration: "2s" }}
                      />
                    </div>

                    {/* Main text */}
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent mb-2">
                      Ready to Explore?
                    </h3>
                    <p className="text-gray-400 text-base mb-4">
                      Click on any skill segment to discover my expertise
                    </p>

                    {/* Animated arrow indicators */}
                    <div className="flex justify-center gap-6 text-amber-500/50">
                      <span
                        className="animate-pulse"
                        style={{ animationDelay: "0s" }}
                      >
                        ←
                      </span>
                      <span className="text-amber-400">●</span>
                      <span
                        className="animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      >
                        →
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden flex flex-col items-center">
          {/* Mobile Wheel */}
          <div className="relative mb-8">
            <svg
              width="320"
              height="320"
              viewBox="0 0 500 500"
              className="relative z-10"
            >
              <defs>
                <linearGradient
                  id="segmentGradientMobile"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#0a2540" />
                  <stop offset="100%" stopColor="#061a2e" />
                </linearGradient>
                <linearGradient
                  id="amberGlowMobile"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
              </defs>

              {/* Skill Segments */}
              {skills.map((skill, index) => {
                const isActive = activeSkill === skill.id;
                const iconPos = getIconPosition(index, 175, 250, 250);

                return (
                  <g
                    key={skill.id}
                    onClick={() => setActiveSkill(isActive ? null : skill.id)}
                    className="cursor-pointer"
                  >
                    <path
                      d={createSegmentPath(index, 120, 230, 250, 250)}
                      fill={
                        isActive ? "#0d2d47" : "url(#segmentGradientMobile)"
                      }
                      stroke={isActive ? "#f59e0b" : "rgba(251,191,36,0.3)"}
                      strokeWidth={isActive ? "3" : "1"}
                    />

                    <circle
                      cx={iconPos.x}
                      cy={iconPos.y}
                      r="30"
                      fill="url(#amberGlowMobile)"
                    />

                    <foreignObject
                      x={iconPos.x - 14}
                      y={iconPos.y - 14}
                      width="28"
                      height="28"
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <skill.icon className="w-5 h-5 text-[#02131F]" />
                      </div>
                    </foreignObject>
                  </g>
                );
              })}

              {/* Center */}
              <circle
                cx="250"
                cy="250"
                r="90"
                fill="#061a2e"
                stroke="rgba(251,191,36,0.3)"
                strokeWidth="2"
              />
              <foreignObject x="185" y="210" width="130" height="80">
                <div className="w-full h-full flex flex-col items-center justify-center text-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-1">
                    <FaCode className="w-5 h-5 text-[#02131F]" />
                  </div>
                  <p className="text-white font-bold text-sm">Tushar</p>
                </div>
              </foreignObject>
            </svg>
          </div>

          {/* Mobile Detail Card */}
          <div
            className={`w-full max-w-md transition-all duration-500 ${activeSkill ? "opacity-100" : "opacity-50"}`}
          >
            {activeSkill ? (
              (() => {
                const skill = skills.find((s) => s.id === activeSkill);
                return (
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0a2540] to-[#061a2e] border border-amber-500/30 shadow-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                        <skill.icon className="w-7 h-7 text-[#02131F]" />
                      </div>
                      <div>
                        <p className="text-amber-400 font-bold text-xl">
                          {skill.title}
                        </p>
                        <p className="text-xs text-amber-400/70">
                          Skill Showcase
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.details.map((detail, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-sm bg-amber-500/20 text-amber-300 rounded-full border border-amber-500/30"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })()
            ) : (
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#0a2540] to-[#061a2e] border border-amber-500/20 text-center overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-amber-400/10 to-amber-500/5 animate-pulse"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-500/30 flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(251,191,36,0.15)]">
                    <FaRocket
                      className="w-7 h-7 text-amber-400 animate-bounce"
                      style={{ animationDuration: "2s" }}
                    />
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent mb-2">
                    Ready to Explore?
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Tap any skill segment above
                  </p>

                  {/* Tap indicator */}
                  <div className="mt-4 flex justify-center">
                    <div className="px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                      Tap to explore
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent rounded-full"></div>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path d="M0,80 L0,40 Q720,0 1440,40 L1440,80 Z" fill="#02131F" />
        </svg>
      </div>
    </div>
  );
};

export default Skills;
