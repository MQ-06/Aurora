import React from "react";
import { motion } from "framer-motion";
import { FaBell } from "react-icons/fa";
import videoSrc from "../../assets/video.mp4"; // 👈 Import video from assets

const Subscribe = () => {
  return (
    <section  id="about-us" className="bg-[#f7f7f7] py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="grid md:grid-cols-2 items-center gap-12"
        >
          <div className="rounded-xl overflow-hidden shadow-lg ml-5">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover "
            >
              <source src={videoSrc} type="video/mp4" /> {/* ✅ Use imported video */}
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Right: About Us */}
          <div className="space-y-6 text-left">
            <h2 className="text-4xl font-bold text-black font-serifDisplay">
              About Aurora
            </h2>
            <p className="text-gray-700 text-lg font-lato">
              Aurora is a web-based educational platform built for learners of all abilities. Whether you're managing dyslexia, ADHD, or sensory impairments, Aurora delivers personalized, accessible lesson plans that fit your style of learning.
            </p>
            <p className="text-gray-700 text-lg">
              Our platform features adaptive tools like audio lessons, high-contrast UI, and AI-driven feedback to ensure every student feels seen, supported, and empowered to grow.
            </p>
            <a
              href="#"
              className="primary-btn inline-flex items-center gap-3 font-lato"
            >
              Subscribe Now
              <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Subscribe;
