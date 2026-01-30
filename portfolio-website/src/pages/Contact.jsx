import React, { useState, useRef, useEffect } from "react";
import { FaPaperPlane, FaEnvelope, FaUser, FaEye } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const [visitorCount, setVisitorCount] = useState(0);
  const formRef = useRef(null);

  // Track cursor/typing position for owl eyes
  const handleInputFocus = (e) => {
    updateEyePosition(e.target);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    updateEyePosition(e.target);
  };

  const updateEyePosition = (element) => {
    if (!element || !formRef.current) return;

    const formRect = formRef.current.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    // Calculate relative position of the input to the owl
    const relativeX =
      (elementRect.left + elementRect.width / 2 - formRect.left) /
      formRect.width;
    const relativeY = (elementRect.top - formRect.top) / formRect.height;

    // Map to eye movement range (-8 to 8 pixels)
    const eyeX = (relativeX - 0.5) * 16;
    const eyeY = Math.min(relativeY * 10, 6);

    setEyePosition({ x: eyeX, y: eyeY });
  };

  // Fetch visitor count from localStorage (simple implementation)
  // For production, use Vercel Analytics or a backend counter
  useEffect(() => {
    const storedCount = localStorage.getItem("visitorCount");
    const hasVisited = sessionStorage.getItem("hasVisited");

    let count = storedCount ? parseInt(storedCount) : 0;

    if (!hasVisited) {
      count += 1;
      localStorage.setItem("visitorCount", count.toString());
      sessionStorage.setItem("hasVisited", "true");
    }

    setVisitorCount(count);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Using FormSubmit.co service for email sending
      const response = await fetch(
        "https://formsubmit.co/ajax/tushargupta12312021@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _subject: `Portfolio Contact: ${formData.subject}`,
          }),
        },
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
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

        {/* Contact Form with Owl */}
        <div className="max-w-2xl mx-auto">
          <div
            ref={formRef}
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

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 mt-8 sm:mt-4">
              {/* Email Field */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Your Email
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 focus:shadow-[0_0_20px_rgba(250,204,21,0.15)] transition-all duration-300"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    required
                    placeholder="What's this about?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 focus:shadow-[0_0_20px_rgba(250,204,21,0.15)] transition-all duration-300"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 focus:shadow-[0_0_20px_rgba(250,204,21,0.15)] transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-500 text-black font-bold rounded-xl hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400 text-center">
                  🎉 Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 text-center">
                  ❌ Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Visitor Counter Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
              <FaEye className="w-4 h-4" />
              <span>Unique Visitors</span>
            </div>

            {/* Counter Display */}
            <div className="flex items-center gap-1">
              {visitorCount
                .toString()
                .padStart(5, "0")
                .split("")
                .map((digit, index) => (
                  <div
                    key={index}
                    className="w-12 h-16 sm:w-16 sm:h-20 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg border border-gray-700 flex items-center justify-center shadow-lg"
                  >
                    <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-b from-yellow-300 to-amber-500 bg-clip-text text-transparent">
                      {digit}
                    </span>
                  </div>
                ))}
            </div>

            <p className="text-gray-500 text-xs mt-4">
              Thanks for visiting my portfolio! 🙏
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
