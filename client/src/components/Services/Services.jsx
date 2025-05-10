import React from "react";
import { motion } from "framer-motion";
import Pic1 from "../../assets/pic1.png";
import Pic2 from "../../assets/pic2.png";
import Pic3 from "../../assets/pic3.png";

const services = [
  {
    id: 1,
    title: "Personalized Learning Paths",
    description:
      "Experience education tailored to your progress and goals, ensuring a unique and effective learning journey.",
    image: Pic1,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Access to Rich Resources",
    description:
      "Gain unlimited access to a wide range of support materials, tools, and resources to enhance your learning experience.",
    image: Pic2,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Collaborative Community",
    description:
      "Join a thriving community of learners where you can share ideas, collaborate on projects, and grow together.",
    image: Pic3,
    delay: 0.4,
  },
];

const slideUp = (delay) => ({
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay,
      ease: "easeOut",
    },
  },
});

const Services = () => {
  return (
    <section id="services" className="bg-white py-16"> {/* ← Add id here */}
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-black mb-12 font-serifDisplay text-center">
          Services we provide
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 font-lato">
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={slideUp(service.delay)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto"
            >
              <img
                src={service.image}
                alt={service.title}
                className={`w-full h-64 object-cover ${
                  service.id === 1 ? "object-top mt-4" : ""
                }`}
              />
              <div className="p-6 text-left">
                <h2 className="text-xl font-bold text-black mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <a href="#" className="primary-btn font-lato inline-block">
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Services;
