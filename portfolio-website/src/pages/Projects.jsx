import React, { useState, useEffect, useRef } from "react";
import {
  FaRocket,
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaStar,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

// Generate random stars ONCE outside component to prevent re-renders
const staticStars = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 7) % 100}%`, // Deterministic positioning
  top: `${(i * 23 + 11) % 100}%`,
  size: (i % 3) + 1,
  delay: (i % 10) * 2, // 0-18 seconds delay
}));

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [animationPhase, setAnimationPhase] = useState("idle"); // idle, wormhole-open, traveling, arrived
  const [showPlanet, setShowPlanet] = useState(false);
  const [wormholePosition, setWormholePosition] = useState({ x: 0, y: 0 });
  const [orbitAngle, setOrbitAngle] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );
  const containerRef = useRef(null);

  // Track window size for responsive orbit radius
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate orbit radius based on screen size
  const getOrbitRadius = () => {
    if (windowWidth >= 1024) return 300; // lg
    if (windowWidth >= 640) return 225; // sm
    return 170; // mobile
  };

  // Orbit animation using requestAnimationFrame
  useEffect(() => {
    let animationId;
    let lastTime = performance.now();

    const animate = (currentTime) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Rotate 360 degrees every 40 seconds (9 degrees per second)
      setOrbitAngle((prev) => (prev + (deltaTime / 1000) * 9) % 360);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  /* ═══════════════════════════════════════════════════════════════════════════
   * PROJECTS DATA - Add your projects here
   * Each project should have: id, title, shortDesc, fullDesc, image, tech, githubLink, demoLink, planetColor
   * planetColor options: "amber", "blue", "purple", "emerald", "rose"
   *
   * 📸 SCREENSHOTS NEEDED FOR EACH PROJECT:
   * ─────────────────────────────────────────
   * 1. LANDING PAGE SCREENSHOT (Required)
   *    - Full browser screenshot of your project's homepage
   *    - Recommended size: 1920x1080 or 1280x720
   *    - Format: PNG or JPG
   *    - Tip: Use browser's DevTools > Screenshot feature
   *
   * 2. OPTIONAL ADDITIONAL IMAGES:
   *    - Dashboard/Main features page
   *    - Mobile responsive view
   *    - Key feature highlights
   *
   * 💡 HOW TO GET GOOD SCREENSHOTS:
   *    - Deploy your project first (Vercel, Netlify, GitHub Pages)
   *    - Open in browser, press F12 > Ctrl+Shift+P > "Capture full size screenshot"
   *    - Or use tools like: Screely, CleanShot, ShareX
   *    - Upload to: GitHub repo, Imgur, Cloudinary, or your own hosting
   * ═══════════════════════════════════════════════════════════════════════════ */
  const projects = [
    {
      id: 1,
      title: "Gadget Hub",
      shortDesc: "E-commerce Platform",
      fullDesc:
        "A full-featured MERN Stack e-commerce website with user authentication, product management, shopping cart, payment integration, and admin dashboard. Built with React, Node.js, Express, and MongoDB.",
      image: "/GadgetHub.png",
      logo: "https://raw.githubusercontent.com/gtushar8055/E-commerce-MERN/main/frontend/src/assets/logo.png",
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      githubLink: "https://github.com/gtushar8055/E-commerce-MERN",
      demoLink: "https://gadgethub-frontend.vercel.app/",
      planetColor: "amber",
    },
    {
      id: 2,
      title: "ComfySteps",
      shortDesc: "Shoe Brand Website",
      fullDesc:
        "A modern, responsive shoe brand website with elegant animations and smooth user experience. Features product showcases, brand story, and interactive UI elements. Built with vanilla HTML, CSS, and JavaScript.",
      image: "/ComfySteps.png",
      logo: "https://raw.githubusercontent.com/gtushar8055/ComfyStepsShoes/main/logoshoe.png",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      githubLink: "https://github.com/gtushar8055/ComfyStepsShoes",
      demoLink: "https://gtushar8055.github.io/ComfyStepsShoes/",
      planetColor: "blue",
    },
    {
      id: 3,
      title: "Learnezee",
      shortDesc: "Educational Platform",
      fullDesc:
        "An educational content website designed for seamless learning experience. Features course catalogs, interactive content sections, and a clean, user-friendly interface optimized for students and educators.",
      image: "/Learnezee.png",
      logo: "https://raw.githubusercontent.com/gtushar8055/learnzee/main/logowithoutbackground.png",
      tech: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
      githubLink: "https://github.com/gtushar8055/learnzee",
      demoLink: "https://gtushar8055.github.io/learnzee/",
      planetColor: "purple",
    },
    {
      id: 4,
      title: "Vyapaar360",
      shortDesc: "Business Management Platform",
      fullDesc:
        "A full-stack MERN business management platform built for Indian retail shop owners. Features GST-ready billing, inventory management with low stock alerts, smart business insights, purchase tracking, customer management, and professional PDF report generation.",
      image: "/Vyapaar360.png",
      logo: "https://github.com/user-attachments/assets/646a9208-4c99-4534-89c9-44a836ce86c2",
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      githubLink: "https://github.com/gtushar8055/Vyapaar360",
      demoLink: "https://vyapaar360.vercel.app/",
      planetColor: "emerald",
    },
    /* ═══════════════════════════════════════════════════════════════════════════
     * ADD MORE PROJECTS BELOW - Copy this template:
     *
     * {
     *   id: 4, // Increment the id
     *   title: "Project Name",
     *   shortDesc: "Brief tagline (2-4 words)",
     *   fullDesc: "Detailed description of the project. Explain what it does, key features, and what problems it solves. (2-3 sentences)",
     *   image: "URL to project screenshot (landing page recommended)",
     *   logo: "URL to project logo (will be displayed on the planet circle)",
     *   tech: ["Tech1", "Tech2", "Tech3", "Tech4"],
     *   githubLink: "https://github.com/yourusername/repo-name",
     *   demoLink: "https://your-deployed-site.com",
     *   planetColor: "emerald" // Options: "amber", "blue", "purple", "emerald", "rose"
     * },
     *
     * ═══════════════════════════════════════════════════════════════════════════ */
  ];

  // Planet color configurations
  const planetColors = {
    amber: {
      gradient: "from-amber-400 via-amber-500 to-amber-600",
      glow: "shadow-amber-500/50",
      ring: "border-amber-400/30",
      bg: "bg-amber-500/20",
    },
    blue: {
      gradient: "from-blue-400 via-blue-500 to-blue-600",
      glow: "shadow-blue-500/50",
      ring: "border-blue-400/30",
      bg: "bg-blue-500/20",
    },
    purple: {
      gradient: "from-purple-400 via-purple-500 to-purple-600",
      glow: "shadow-purple-500/50",
      ring: "border-purple-400/30",
      bg: "bg-purple-500/20",
    },
    emerald: {
      gradient: "from-emerald-400 via-emerald-500 to-emerald-600",
      glow: "shadow-emerald-500/50",
      ring: "border-emerald-400/30",
      bg: "bg-emerald-500/20",
    },
    rose: {
      gradient: "from-rose-400 via-rose-500 to-rose-600",
      glow: "shadow-rose-500/50",
      ring: "border-rose-400/30",
      bg: "bg-rose-500/20",
    },
  };

  // Handle project click - Start wormhole animation
  const handleProjectClick = (project, event) => {
    if (animationPhase !== "idle") return;

    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    setWormholePosition({ x: centerX, y: centerY });
    setSelectedProject(project);
    setAnimationPhase("wormhole-open");

    // Phase 1: Wormhole opens (0.8s)
    setTimeout(() => {
      setAnimationPhase("traveling");
    }, 800);

    // Phase 2: Traveling through wormhole (1s)
    setTimeout(() => {
      setAnimationPhase("arrived");
      setShowPlanet(true);
    }, 1800);
  };

  // Close planet view
  const closePlanet = () => {
    setShowPlanet(false);
    setAnimationPhase("idle");
    setSelectedProject(null);
  };

  return (
    <div
      id="projects"
      ref={containerRef}
      className="bg-[#02131F] min-h-screen relative overflow-hidden"
    >
      {/* Space Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Nebula gradients */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[150px]"></div>

        {/* Pleasant blinking stars - slow fade in/out */}
        {staticStars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationName: "starTwinkle",
              animationDuration: `${15 + (star.id % 15)}s`,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              animationDelay: `${star.delay}s`,
            }}
          ></div>
        ))}

        {/* Shooting star animation */}
        <div
          className="absolute top-20 right-0 w-1 h-1 bg-white rounded-full animate-[shootingStar_8s_linear_infinite]"
          style={{
            boxShadow:
              "0 0 6px 2px rgba(255,255,255,0.5), -100px 0 30px 10px rgba(255,255,255,0.3)",
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-16 lg:py-24">
        {/* Heading */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/20 via-purple-500/10 to-blue-500/20 border border-amber-500/30 text-amber-300 text-sm font-semibold mb-6 backdrop-blur-sm">
            <HiSparkles className="w-4 h-4" />
            Explore My Universe
            <HiSparkles className="w-4 h-4" />
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-white">My </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-amber-300 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Projects
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-purple-500 to-blue-400 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)]"></span>
            </span>
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Click on any planet to launch your rocket journey
          </p>
        </div>

        {/* Projects Galaxy - Orbital Layout */}
        <div className="relative flex justify-center items-center min-h-[600px] lg:min-h-[800px]">
          {/* Central Sun */}
          <div className="absolute w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-orange-600 flex items-center justify-center shadow-[0_0_60px_20px_rgba(251,191,36,0.3)] z-20">
            <span className="text-3xl lg:text-4xl">☀️</span>
          </div>

          {/* Single Orbital Ring - diameter = radius * 2 */}
          <div className="absolute w-[340px] h-[340px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border border-amber-500/30"></div>

          {/* Project Planets - All on same orbit */}
          {projects.map((project, index) => {
            // Calculate angle for this planet (evenly distributed + current orbit angle)
            const baseAngle = (index * 360) / projects.length;
            const currentAngle = (orbitAngle + baseAngle) * (Math.PI / 180); // Convert to radians

            // Same orbit radius for ALL planets (responsive)
            const radius = getOrbitRadius();

            // Calculate x, y positions on the orbit circle
            const x = Math.cos(currentAngle) * radius;
            const y = Math.sin(currentAngle) * radius;
            const colors =
              planetColors[project.planetColor] || planetColors.amber;

            return (
              <div
                key={project.id}
                className="absolute cursor-pointer group flex flex-col items-center"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
                onClick={(e) => handleProjectClick(project, e)}
              >
                <div className="flex flex-col items-center">
                  {/* Planet Glow */}
                  <div
                    className={`absolute -inset-4 rounded-full ${colors.bg} blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none`}
                  ></div>

                  {/* Planet Container */}
                  <div className="relative">
                    {/* Planet */}
                    <div
                      className={`relative w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br ${colors.gradient} shadow-2xl ${colors.glow} group-hover:scale-110 transition-all duration-500 overflow-hidden`}
                    >
                      {/* Planet surface texture */}
                      <div className="absolute inset-0 bg-black/10 rounded-full"></div>
                      <div className="absolute top-2 left-4 w-6 h-4 bg-white/20 rounded-full blur-sm"></div>
                      <div className="absolute bottom-4 right-3 w-8 h-6 bg-black/20 rounded-full blur-sm"></div>

                      {/* Project Logo */}
                      <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-white/20 bg-white/90 flex items-center justify-center">
                        <img
                          src={project.logo}
                          alt={project.title}
                          className="w-3/4 h-3/4 object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                        />
                      </div>

                      {/* Launch icon on hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/30 rounded-full">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <FaRocket className="w-6 h-6 text-white transform -rotate-45" />
                        </div>
                      </div>
                    </div>

                    {/* Planet Ring */}
                    <div
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 sm:w-40 lg:w-48 h-8 sm:h-10 lg:h-12 border-2 ${colors.ring} rounded-[50%] rotate-[20deg] opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none`}
                    ></div>
                  </div>

                  {/* Project Title Label - Always below planet */}
                  <div className="mt-3 whitespace-nowrap text-center">
                    <p className="text-white font-bold text-sm lg:text-base">
                      {project.title}
                    </p>
                    <p className="text-gray-400 text-xs">{project.shortDesc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Scroll Hint */}
        <div className="lg:hidden text-center mt-20">
          <p className="text-gray-500 text-sm">Tap on any planet to explore</p>
        </div>

        {/* Flying Rocket with GitHub Banner - Below Solar System */}
        <div className="relative w-full h-24 mt-16 overflow-hidden">
          <a
            href="https://github.com/gtushar8055"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute animate-[rocketFly_20s_linear_infinite] flex items-center group cursor-pointer hover:scale-105 transition-transform"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            {/* Banner - On the left */}
            <div className="bg-gradient-to-r from-purple-600/90 via-blue-600/90 to-cyan-500/90 px-5 py-3 rounded-xl border border-white/20 backdrop-blur-sm shadow-lg shadow-purple-500/30 whitespace-nowrap">
              <div className="flex items-center gap-3">
                <FaGithub className="w-6 h-6 text-white" />
                <span className="text-white font-semibold text-sm sm:text-base">
                  For more projects, check out my GitHub!
                </span>
                <FaExternalLinkAlt className="w-4 h-4 text-white/70" />
              </div>
            </div>
            {/* Connecting Line */}
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-cyan-400 via-white to-orange-400 rounded-full"></div>
            {/* Rocket Image - On the right, tip pointing right, fire towards banner */}
            <img
              src="/rocket.png"
              alt="Rocket"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain group-hover:scale-110 transition-transform duration-300"
              style={{ transform: "rotate(45deg)" }}
            />
            {/* Rocket trail */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-24 h-2 bg-gradient-to-r from-orange-500/80 via-orange-400/50 to-transparent rounded-full blur-sm"></div>
          </a>
        </div>
      </div>

      {/* Wormhole Portal Animation */}
      {(animationPhase === "wormhole-open" ||
        animationPhase === "traveling") && (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
          {/* Dark overlay that intensifies */}
          <div
            className="absolute inset-0 bg-black transition-opacity duration-500"
            style={{ opacity: animationPhase === "traveling" ? 0.9 : 0.6 }}
          ></div>

          {/* Wormhole Portal */}
          <div
            className="absolute"
            style={{
              left: wormholePosition.x,
              top: wormholePosition.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Outer energy rings */}
            {[...Array(5)].map((_, i) => (
              <div
                key={`ring-${i}`}
                className="absolute rounded-full border-2"
                style={{
                  width: `${(i + 1) * 80 + 50}px`,
                  height: `${(i + 1) * 80 + 50}px`,
                  left: `${-((i + 1) * 40 + 25)}px`,
                  top: `${-((i + 1) * 40 + 25)}px`,
                  borderColor: `rgba(${139 + i * 20}, ${92 + i * 30}, ${246}, ${0.6 - i * 0.1})`,
                  animation: `wormholeRing ${1.5 + i * 0.2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`,
                  boxShadow: `0 0 ${20 + i * 10}px rgba(139, 92, 246, ${0.4 - i * 0.05}), inset 0 0 ${20 + i * 10}px rgba(139, 92, 246, ${0.2})`,
                }}
              ></div>
            ))}

            {/* Spiraling particles */}
            {[...Array(20)].map((_, i) => (
              <div
                key={`particle-${i}`}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: `linear-gradient(${i % 2 === 0 ? "#8b5cf6" : "#06b6d4"}, transparent)`,
                  animation: `spiralParticle ${2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`,
                  left: "50%",
                  top: "50%",
                  transform: `rotate(${i * 18}deg) translateX(${50 + Math.random() * 150}px)`,
                }}
              ></div>
            ))}

            {/* Core vortex */}
            <div
              className="absolute w-32 h-32 rounded-full"
              style={{
                left: "-64px",
                top: "-64px",
                background:
                  "conic-gradient(from 0deg, #8b5cf6, #06b6d4, #8b5cf6, #ec4899, #8b5cf6)",
                animation: "vortexSpin 1s linear infinite",
                filter: "blur(2px)",
              }}
            ></div>

            {/* Inner black hole */}
            <div
              className="absolute w-24 h-24 rounded-full bg-black"
              style={{
                left: "-48px",
                top: "-48px",
                boxShadow:
                  "0 0 60px 30px rgba(0,0,0,0.8), 0 0 100px 60px rgba(139, 92, 246, 0.3)",
                animation:
                  animationPhase === "traveling"
                    ? "blackHoleExpand 1s ease-out forwards"
                    : "none",
              }}
            ></div>

            {/* Center light */}
            <div
              className="absolute w-8 h-8 rounded-full"
              style={{
                left: "-16px",
                top: "-16px",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(139,92,246,0.5) 50%, transparent 70%)",
                animation: "centerPulse 0.5s ease-in-out infinite",
              }}
            ></div>

            {/* Traveling effect - streaking stars */}
            {animationPhase === "traveling" && (
              <>
                {[...Array(30)].map((_, i) => (
                  <div
                    key={`streak-${i}`}
                    className="absolute bg-white rounded-full"
                    style={{
                      width: "2px",
                      height: `${20 + Math.random() * 60}px`,
                      left: `${(Math.random() - 0.5) * window.innerWidth}px`,
                      top: `${(Math.random() - 0.5) * window.innerHeight}px`,
                      animation: "starStreak 0.5s ease-in forwards",
                      animationDelay: `${Math.random() * 0.3}s`,
                      opacity: 0.8,
                      boxShadow: "0 0 10px rgba(255,255,255,0.8)",
                    }}
                  ></div>
                ))}
              </>
            )}
          </div>

          {/* Screen flash on travel */}
          {animationPhase === "traveling" && (
            <div
              className="absolute inset-0 bg-white"
              style={{
                animation: "screenFlash 1s ease-out forwards",
              }}
            ></div>
          )}
        </div>
      )}

      {/* Planet Detail View */}
      {showPlanet && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          onClick={closePlanet}
        >
          {/* Backdrop with space dust */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md animate-[fadeIn_0.3s_ease-out]">
            {/* Floating space particles */}
            {[...Array(50)].map((_, i) => (
              <div
                key={`dust-${i}`}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.2,
                  animation: `floatDust ${3 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              ></div>
            ))}
          </div>

          {/* Teleportation beam effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-1 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
              style={{
                height: "100vh",
                animation: "teleportBeam 0.5s ease-out forwards",
                opacity: 0,
                boxShadow: "0 0 30px 10px rgba(6, 182, 212, 0.5)",
              }}
            ></div>
          </div>

          {/* Holographic rings around modal */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <div
                key={`holo-ring-${i}`}
                className="absolute border rounded-full"
                style={{
                  width: `${600 + i * 100}px`,
                  height: `${400 + i * 60}px`,
                  borderColor: `rgba(6, 182, 212, ${0.3 - i * 0.08})`,
                  animation: `holoRing ${3 + i}s linear infinite`,
                  boxShadow: `0 0 20px rgba(6, 182, 212, ${0.2 - i * 0.05})`,
                }}
              ></div>
            ))}
          </div>

          {/* Planet Card with holographic effect */}
          <div
            className="relative w-full max-w-3xl bg-gradient-to-br from-[#0a2540]/95 via-[#061a2e]/95 to-[#02131F]/95 rounded-2xl overflow-hidden shadow-2xl animate-[materialze_0.6s_cubic-bezier(0.34,1.56,0.64,1)_forwards] backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
            style={{
              border: "1px solid rgba(6, 182, 212, 0.3)",
              boxShadow:
                "0 0 40px rgba(6, 182, 212, 0.2), inset 0 0 60px rgba(139, 92, 246, 0.1)",
            }}
          >
            {/* Scanning line effect - runs once */}
            <div
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{ borderRadius: "1rem" }}
            >
              <div
                className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                style={{
                  animation: "scanLine 1.5s ease-out forwards",
                  boxShadow: "0 0 15px 3px rgba(6, 182, 212, 0.5)",
                }}
              ></div>
            </div>

            {/* Glow effect */}
            <div
              className={`absolute -inset-1 bg-gradient-to-r ${planetColors[selectedProject.planetColor]?.gradient || "from-amber-400 to-amber-600"} rounded-2xl blur-xl opacity-20`}
            ></div>

            <div className="relative z-10 p-4 sm:p-6">
              {/* Close Button */}
              <button
                onClick={closePlanet}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group z-20"
              >
                <FaTimes className="w-4 h-4 text-white group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Project Image - Landscape Frame */}
              <div className="relative rounded-xl overflow-hidden border border-white/20 shadow-lg">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Project Details - Compact Layout */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${planetColors[selectedProject.planetColor]?.gradient || "from-amber-400 to-amber-600"} flex items-center justify-center shadow-lg flex-shrink-0`}
                    >
                      <FaRocket className="w-5 h-5 text-[#02131F] transform -rotate-45" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {selectedProject.title}
                      </h3>
                      <p className="text-amber-400 text-sm">
                        {selectedProject.shortDesc}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {selectedProject.fullDesc}
                  </p>

                  {/* Tech Stack - Inline */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {selectedProject.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-white/10 text-white rounded-full border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex sm:flex-col gap-2 flex-shrink-0">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 border border-white/10 text-sm"
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${planetColors[selectedProject.planetColor]?.gradient || "from-amber-400 to-amber-600"} text-[#02131F] font-bold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm`}
                  >
                    <FaExternalLinkAlt className="w-3.5 h-3.5" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Keyframes */}
      <style jsx>{`
        @keyframes wormholeRing {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.1) rotate(180deg);
            opacity: 0.8;
          }
        }
        @keyframes spiralParticle {
          0% {
            opacity: 1;
            transform: rotate(var(--rotation, 0deg)) translateX(150px) scale(1);
          }
          100% {
            opacity: 0;
            transform: rotate(var(--rotation, 0deg)) translateX(0px) scale(0);
          }
        }
        @keyframes vortexSpin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes blackHoleExpand {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(50);
          }
        }
        @keyframes centerPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.9;
          }
          50% {
            transform: scale(1.3);
            opacity: 1;
          }
        }
        @keyframes starStreak {
          0% {
            transform: translateY(0) scaleY(1);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) scaleY(3);
            opacity: 0;
          }
        }
        @keyframes screenFlash {
          0% {
            opacity: 0;
          }
          30% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
          }
        }
        @keyframes materialze {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(50px);
            filter: blur(20px) brightness(3);
          }
          50% {
            filter: blur(5px) brightness(1.5);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0) brightness(1);
          }
        }
        @keyframes floatDust {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-5px) translateX(-5px);
          }
          75% {
            transform: translateY(-15px) translateX(3px);
          }
        }
        @keyframes teleportBeam {
          0% {
            opacity: 0;
            width: 0;
          }
          50% {
            opacity: 1;
            width: 4px;
          }
          100% {
            opacity: 0;
            width: 100px;
          }
        }
        @keyframes holoRing {
          0% {
            transform: rotateX(75deg) rotate(0deg);
            opacity: 0.3;
          }
          100% {
            transform: rotateX(75deg) rotate(360deg);
            opacity: 0.3;
          }
        }
        @keyframes scanLine {
          0% {
            top: -10px;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes shootingStar {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateX(-1000px) translateY(300px);
            opacity: 0;
          }
        }
        @keyframes starTwinkle {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes rocketFly {
          0% {
            left: -400px;
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            left: 110%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
