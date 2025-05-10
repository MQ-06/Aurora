import React from "react";
import BannerPng from "../../assets/banner.png"; // Make sure this is a relevant Aurora banner
import { motion } from "framer-motion";

const Banner2 = () => {
  return (
    <section className="bg-white">
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[500px]">
            <h1 className="text-4xl font-bold leading-snug text-black font-serifDisplay">
              Empower Your Learning Journey with Aurora
            </h1>
            <p className="text-gray-700 text-lg font-lato">
              Join a vibrant community where inclusive education meets cutting-edge AI support.
              Whether you're overcoming challenges or striving for excellence Aurora is your path to success.
            </p>
            <a
              href="/"
              className="primary-btn mt-6 inline-block font-lato"
            >
              Join Now
            </a>
          </div>
        </motion.div>

       
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            src={BannerPng}
            alt="Aurora Learning Banner"
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
