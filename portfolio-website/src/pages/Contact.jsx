import React, { useState, useRef } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiSparkles, HiMail } from "react-icons/hi";

const Contact = () => {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const formRef = useRef(null);

  // Your email for contact
  const myEmail = "tushargupta12312021@gmail.com";

  // Track cursor position for owl eyes
  const handleMouseMove = (e) => {
    if (!formRef.current) return;
    const formRect = formRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - formRect.left) / formRect.width;
    const relativeY = (e.clientY - formRect.top) / formRect.height;
    const eyeX = (relativeX - 0.5) * 16;
    const eyeY = Math.min(relativeY * 10, 6);
    setEyePosition({
      x: Math.max(-8, Math.min(8, eyeX)),
      y: Math.max(-4, Math.min(6, eyeY)),
    });
  };

  // Open Gmail website
  const openGmail = () => {
    window.open("https://mail.google.com", "_blank");
  };

  // Open default mail client
  const openMailClient = () => {
    window.location.href = `mailto:${myEmail}`;
  };

  return (
    <div
      id="contact"
      className="w-full min-h-screen bg-[#02131F] relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#02131F] via-[#041c2c] to-[#02131F]"></div>

        {/* Glowing Orbs - Yellow theme */}
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
            Let's Connect
            <HiSparkles className="w-4 h-4" />
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-white">Contact </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Me
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 rounded-full shadow-[0_0_20px_rgba(250,204,21,0.5)]"></span>
            </span>
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Have a question or want to work together? Drop me a message!
          </p>
        </div>

        {/* Contact Card with Owl */}
        <div className="max-w-2xl mx-auto">
          <div
            ref={formRef}
            onMouseMove={handleMouseMove}
            className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8 lg:p-10"
          >
            {/* Owl Face - Top Right */}
            <div className="absolute -top-16 right-4 sm:right-8">
              <div className="relative">
                {/* Owl Body */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-b from-amber-600 via-amber-700 to-amber-800 rounded-full relative overflow-hidden shadow-xl">
                  {/* Owl Ears */}
                  <div className="absolute -top-3 left-3 w-6 h-8 bg-gradient-to-b from-amber-600 to-amber-700 rounded-t-full transform -rotate-12"></div>
                  <div className="absolute -top-3 right-3 w-6 h-8 bg-gradient-to-b from-amber-600 to-amber-700 rounded-t-full transform rotate-12"></div>

                  {/* Face Circle */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-20 sm:w-28 sm:h-24 bg-gradient-to-b from-amber-100 via-amber-50 to-white rounded-full"></div>

                  {/* Eyes Container */}
                  <div className="absolute top-6 sm:top-7 left-1/2 -translate-x-1/2 flex gap-3 sm:gap-4">
                    {/* Left Eye */}
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full border-2 border-amber-800 overflow-hidden shadow-inner">
                      <div
                        className="absolute w-4 h-4 sm:w-5 sm:h-5 bg-gray-900 rounded-full transition-all duration-100 ease-out"
                        style={{
                          left: `calc(50% + ${eyePosition.x}px - 8px)`,
                          top: `calc(50% + ${eyePosition.y}px - 8px)`,
                        }}
                      >
                        <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                    </div>
                    {/* Right Eye */}
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full border-2 border-amber-800 overflow-hidden shadow-inner">
                      <div
                        className="absolute w-4 h-4 sm:w-5 sm:h-5 bg-gray-900 rounded-full transition-all duration-100 ease-out"
                        style={{
                          left: `calc(50% + ${eyePosition.x}px - 8px)`,
                          top: `calc(50% + ${eyePosition.y}px - 8px)`,
                        }}
                      >
                        <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Beak */}
                  <div className="absolute top-14 sm:top-16 left-1/2 -translate-x-1/2">
                    <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[12px] border-l-transparent border-r-transparent border-t-orange-500"></div>
                  </div>

                  {/* Belly Pattern */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-8 bg-amber-100/30 rounded-t-full"></div>
                </div>
              </div>
            </div>

            {/* Contact Content */}
            <div className="space-y-8 mt-8 sm:mt-4">
              {/* Info Text */}
              <div className="text-center">
                <p className="text-gray-300 text-lg mb-2">
                  Ready to collaborate or have questions?
                </p>
                <p className="text-gray-400 text-sm">
                  Click below to send me an email directly through Gmail or your
                  default mail client.
                </p>
              </div>

              {/* Email Display */}
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <FaEnvelope className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-medium">{myEmail}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Gmail Button */}
                <button
                  onClick={openGmail}
                  className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-500 text-black font-bold rounded-xl hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] transition-all duration-300 hover:scale-[1.02]"
                >
                  <HiMail className="w-6 h-6" />
                  Open Gmail
                </button>

                {/* Default Mail Client Button */}
                <button
                  onClick={openMailClient}
                  className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:border-yellow-500/50 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
                >
                  <FaEnvelope className="w-5 h-5" />
                  Use Mail App
                </button>
              </div>

              {/* Social Links */}
              <div className="text-center pt-4 border-t border-white/10">
                <p className="text-gray-400 text-sm mb-4">
                  Or connect with me on social media
                </p>
                <div className="flex items-center justify-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/tushar-gupta-546790296"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 transition-all duration-300"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/gtushar8055"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-300"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="mt-20 flex justify-center">
          <div className="relative group px-12 py-10 rounded-2xl bg-gradient-to-br from-yellow-500/10 via-white/5 to-amber-500/5 backdrop-blur-md border border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-500 overflow-hidden">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute -bottom-20 -left-20 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3 group-hover:scale-105 transition-transform duration-300">
                <span className="inline-block animate-pulse">✨</span>
                <span className="mx-2 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(250,204,21,0.5)]">
                  Thanks for Visiting
                </span>
                <span className="inline-block animate-pulse">✨</span>
              </h3>
              <div className="mt-6 flex justify-center">
                <img
                  src="/Radhe_Radhe.png"
                  alt="Radhe Radhe"
                  className="h-16 sm:h-20 object-contain drop-shadow-[0_0_30px_rgba(251,146,60,0.6)] animate-pulse group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
