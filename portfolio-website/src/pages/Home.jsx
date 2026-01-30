import React from "react";
import MeImg2 from "../assets/mw2.png";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

const Home = () => {
  return (
    <div
      id="home"
      className="w-full min-h-screen bg-[#02131F] relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0a2540]/50 rounded-full blur-3xl"></div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(250, 204, 21, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(250, 204, 21, 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400/40 rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-yellow-400/60 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-yellow-400/50 rounded-full animate-bounce delay-700"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 lg:pt-24 pb-10 gap-8 lg:gap-12">
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left space-y-6 sm:space-y-8 max-w-2xl">
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Available for opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <span className="flex items-center gap-2 sm:gap-3">
              नमस्ते
              <img
                src="/namaste.png"
                alt="Namaste"
                className="inline-block w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 animate-pulse"
              />
              मैं,
            </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                Tushar Gupta
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></span>
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90">
            <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">
              <Typewriter
                words={[
                  "A Student",
                  "A MERN Stack Developer",
                  "A Learning Enthusiast",
                  "A Coder",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={1500}
              />
            </span>
          </h2>

          {/* Description with glassmorphism card */}
          <div className="relative p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              A passionate web developer who loves creating sleek and responsive
              designs. I build user-friendly websites that solve real-world
              problems.
            </p>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <p className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              ✦ Let's Connect ✦
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tushar-gupta-546790296/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-black hover:scale-110 hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaLinkedin
                  size={22}
                  className="relative z-10 group-hover:text-yellow-400 transition-colors duration-300"
                />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/gtushar8055"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-black hover:scale-110 hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaGithub
                  size={22}
                  className="relative z-10 group-hover:text-yellow-400 transition-colors duration-300"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-black hover:scale-110 hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaInstagram
                  size={22}
                  className="relative z-10 group-hover:text-yellow-400 transition-colors duration-300"
                />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@tushargupta2150"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-black hover:scale-110 hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaYoutube
                  size={22}
                  className="relative z-10 group-hover:text-yellow-400 transition-colors duration-300"
                />
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a
              href="#projects"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-full hover:shadow-[0_0_40px_rgba(250,204,21,0.4)] hover:scale-105 transition-all duration-300 text-sm sm:text-base text-center"
            >
              View My Work
            </a>
            <a
              href="/Tushar_Resume.pdf"
              download
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-yellow-400/50 text-yellow-400 font-bold rounded-full hover:bg-yellow-400/10 hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(250,204,21,0.2)] transition-all duration-300 text-sm sm:text-base backdrop-blur-sm text-center"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center lg:justify-end items-center">
          <div className="relative group">
            {/* Multi-layered Glowing Rings */}
            <div className="absolute -inset-6 sm:-inset-8 md:-inset-10 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 opacity-20 blur-3xl group-hover:opacity-40 animate-pulse transition-opacity duration-500"></div>
            <div
              className="absolute -inset-8 sm:-inset-10 md:-inset-12 rounded-full bg-gradient-to-l from-yellow-300 via-transparent to-yellow-400 opacity-10 blur-2xl group-hover:opacity-30 animate-pulse transition-opacity duration-700"
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Rotating Gradient Borders - Multiple Layers */}
            <div
              className="absolute -inset-3 sm:-inset-4 rounded-full bg-gradient-to-r from-yellow-400 via-transparent to-yellow-600 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                animation: "spin 10s linear infinite",
              }}
            ></div>
            <div
              className="absolute -inset-2 sm:-inset-3 rounded-full bg-gradient-to-l from-yellow-300 via-yellow-500 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-300"
              style={{
                animation: "spin 6s linear infinite reverse",
              }}
            ></div>
            <div
              className="absolute -inset-4 sm:-inset-5 rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-300"
              style={{
                animation: "spin 15s linear infinite",
              }}
            ></div>

            {/* Orbiting Particles */}
            <div className="absolute -inset-3 sm:-inset-4 rounded-full">
              <div
                className="absolute top-0 left-1/2 w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.8)]"
                style={{ animation: "spin 8s linear infinite" }}
              ></div>
              <div
                className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-yellow-300 rounded-full shadow-[0_0_8px_rgba(250,204,21,0.6)]"
                style={{ animation: "spin 12s linear infinite reverse" }}
              ></div>
              <div
                className="absolute bottom-0 left-1/2 w-2 h-2 bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.8)]"
                style={{ animation: "spin 10s linear infinite" }}
              ></div>
            </div>

            {/* Image Container - Increased Size */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] rounded-full overflow-hidden border-4 sm:border-[6px] border-white/30 shadow-[0_0_60px_rgba(250,204,21,0.3)] group-hover:border-yellow-400/70 group-hover:shadow-[0_0_80px_rgba(250,204,21,0.5)] transition-all duration-500">
              <img
                src={MeImg2}
                alt="Tushar Gupta"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Image Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#02131F]/60 via-transparent to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Hexagonal Grid Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(250, 204, 21, 0.1) 20px, rgba(250, 204, 21, 0.1) 21px),
                                    repeating-linear-gradient(60deg, transparent, transparent 20px, rgba(250, 204, 21, 0.1) 20px, rgba(250, 204, 21, 0.1) 21px),
                                    repeating-linear-gradient(120deg, transparent, transparent 20px, rgba(250, 204, 21, 0.1) 20px, rgba(250, 204, 21, 0.1) 21px)`,
                }}
              ></div>
            </div>

            {/* Corner Accent Lines */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-l-4 border-t-4 border-yellow-400/60 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-4 border-b-4 border-yellow-400/60 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
    </div>
  );
};

export default Home;
