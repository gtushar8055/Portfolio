import React, { useState, useRef, useEffect } from "react";
import {
  FaEnvelope,
  FaEye,
  FaHeart,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { HiSparkles, HiMail } from "react-icons/hi";

const Contact = () => {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const [visitorCount, setVisitorCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isLiking, setIsLiking] = useState(false);
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

  // Fetch visitor count and like count from localStorage
  useEffect(() => {
    // Visitor count
    const storedCount = localStorage.getItem("visitorCount");
    const hasVisited = sessionStorage.getItem("hasVisited");

    let count = storedCount ? parseInt(storedCount) : 0;

    if (!hasVisited) {
      count += 1;
      localStorage.setItem("visitorCount", count.toString());
      sessionStorage.setItem("hasVisited", "true");
    }

    setVisitorCount(count);

    // Like count
    const storedLikes = localStorage.getItem("portfolioLikes");
    const userLiked = localStorage.getItem("userHasLiked");

    setLikeCount(storedLikes ? parseInt(storedLikes) : 0);
    setHasLiked(userLiked === "true");
  }, []);

  // Handle like button click
  const handleLike = () => {
    if (hasLiked || isLiking) return;

    setIsLiking(true);

    // Animate and update
    setTimeout(() => {
      const newLikeCount = likeCount + 1;
      setLikeCount(newLikeCount);
      setHasLiked(true);
      localStorage.setItem("portfolioLikes", newLikeCount.toString());
      localStorage.setItem("userHasLiked", "true");
      setIsLiking(false);
    }, 300);
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

        {/* Visitor Counter & Like Section */}
        <div className="mt-20">
          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-6 sm:gap-8">
            {/* Visitor Counter */}
            <div className="group w-full sm:w-80 flex flex-col items-center justify-between p-8 rounded-2xl bg-gradient-to-br from-yellow-500/10 via-white/5 to-amber-500/5 backdrop-blur-md border border-yellow-500/20 hover:border-yellow-400/50 hover:shadow-[0_0_40px_rgba(250,204,21,0.15)] transition-all duration-500 relative overflow-hidden">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-all duration-500"></div>

              <div className="relative z-10 flex items-center gap-2 text-gray-300 text-sm font-medium mb-6">
                <div className="p-2 rounded-lg bg-yellow-500/20 group-hover:bg-yellow-500/30 transition-all duration-300">
                  <FaEye className="w-4 h-4 text-yellow-400 group-hover:text-yellow-300" />
                </div>
                <span className="group-hover:text-white transition-colors duration-300">
                  Unique Visitors
                </span>
              </div>

              {/* Counter Display */}
              <div className="relative z-10 flex items-center gap-1.5 mb-5">
                {visitorCount
                  .toString()
                  .padStart(5, "0")
                  .split("")
                  .map((digit, index) => (
                    <div
                      key={index}
                      className="w-11 h-16 bg-gradient-to-b from-gray-800/80 to-gray-900/90 rounded-xl border border-yellow-500/20 group-hover:border-yellow-500/40 flex items-center justify-center shadow-lg shadow-yellow-500/5 group-hover:shadow-yellow-500/20 transition-all duration-300 backdrop-blur-sm"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="text-2xl font-bold bg-gradient-to-b from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-lg">
                        {digit}
                      </span>
                    </div>
                  ))}
              </div>

              <p className="relative z-10 text-gray-400 text-xs group-hover:text-yellow-300/70 transition-colors duration-300">
                Thanks for visiting! 🙏
              </p>
            </div>

            {/* Like Counter / Show Support */}
            <div className="group w-full sm:w-80 flex flex-col items-center justify-between p-8 rounded-2xl bg-gradient-to-br from-pink-500/10 via-white/5 to-red-500/5 backdrop-blur-md border border-pink-500/20 hover:border-pink-400/50 hover:shadow-[0_0_40px_rgba(236,72,153,0.15)] transition-all duration-500 relative overflow-hidden">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl group-hover:bg-pink-500/20 transition-all duration-500"></div>

              <div className="relative z-10 flex items-center gap-2 text-gray-300 text-sm font-medium mb-6">
                <div className="p-2 rounded-lg bg-pink-500/20 group-hover:bg-pink-500/30 transition-all duration-300">
                  <FaHeart className="w-4 h-4 text-pink-400 group-hover:text-pink-300" />
                </div>
                <span className="group-hover:text-white transition-colors duration-300">
                  Show Your Love & Support
                </span>
              </div>

              {/* Like Button & Count */}
              <button
                onClick={handleLike}
                disabled={hasLiked}
                className={`relative z-10 flex flex-col items-center transition-all duration-300 ${
                  hasLiked
                    ? "cursor-default"
                    : "cursor-pointer hover:scale-105 active:scale-95"
                }`}
              >
                {/* Heart Icon */}
                <div
                  className={`relative w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 mb-5 ${
                    hasLiked
                      ? "bg-gradient-to-br from-pink-500/40 to-red-500/40 shadow-lg shadow-pink-500/30"
                      : "bg-white/5 hover:bg-pink-500/20"
                  }`}
                >
                  <FaHeart
                    className={`w-7 h-7 transition-all duration-300 ${
                      hasLiked
                        ? "text-pink-400 scale-110 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]"
                        : "text-gray-400 group-hover:text-pink-400"
                    } ${isLiking ? "animate-ping" : ""}`}
                  />
                  {/* Floating hearts animation on like */}
                  {isLiking && (
                    <>
                      <FaHeart className="absolute w-4 h-4 text-pink-400 animate-bounce -top-2 -left-1" />
                      <FaHeart
                        className="absolute w-3 h-3 text-red-400 animate-bounce -top-3 right-0"
                        style={{ animationDelay: "0.1s" }}
                      />
                      <FaHeart
                        className="absolute w-3 h-3 text-pink-300 animate-bounce -top-1 -right-2"
                        style={{ animationDelay: "0.2s" }}
                      />
                    </>
                  )}
                  {/* Pulse ring when liked */}
                  {hasLiked && (
                    <div className="absolute inset-0 rounded-full border-2 border-pink-400/50 animate-pulse"></div>
                  )}
                </div>

                {/* Like Count Display */}
                <div className="flex items-center gap-1.5">
                  {likeCount
                    .toString()
                    .padStart(5, "0")
                    .split("")
                    .map((digit, index) => (
                      <div
                        key={index}
                        className="w-11 h-16 bg-gradient-to-b from-gray-800/80 to-gray-900/90 rounded-xl border border-pink-500/20 group-hover:border-pink-500/40 flex items-center justify-center shadow-lg shadow-pink-500/5 group-hover:shadow-pink-500/20 transition-all duration-300 backdrop-blur-sm"
                      >
                        <span className="text-2xl font-bold bg-gradient-to-b from-pink-200 via-pink-400 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
                          {digit}
                        </span>
                      </div>
                    ))}
                </div>
              </button>

              {/* Status Text */}
              <p
                className={`relative z-10 text-xs mt-5 transition-all duration-300 ${
                  hasLiked
                    ? "text-pink-400 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]"
                    : "text-gray-400 group-hover:text-pink-300/70"
                }`}
              >
                {hasLiked ? "Thanks for the love! ❤️" : "Tap to like! 💗"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
