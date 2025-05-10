import React from "react";
import { MdLocationOn, MdPhone, MdEmail, MdLanguage } from "react-icons/md";
import contactImage from "../../assets/contact.jpg"; // Make sure this image exists

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="max-w-6xl w-full bg-yellow-50 shadow-lg rounded-xl overflow-hidden flex flex-col font-lato">
        <div className="flex flex-wrap justify-center gap-8 py-8 border-b border-yellow-200">
          <div className="flex items-center gap-2 text-black">
            <MdLocationOn size={24} />
            <span className="text-sm font-medium">
              Main Gulberg road, Lahore
            </span>
          </div>
          <div className="flex items-center gap-2 text-black">
            <MdPhone size={24} />
            <a href="tel:+1235235598" className="text-sm font-medium hover:underline">
              +923221491064
            </a>
          </div>
          <div className="flex items-center gap-2 text-black">
            <MdEmail size={24} />
            <a href="mailto:info@yoursite.com" className="text-sm font-medium hover:underline">
              Aurora@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-black">
            <MdLanguage size={24} />
            <a href="https://yoursite.com" target="_blank" className="text-sm font-medium hover:underline">
              Aurora.com
            </a>
          </div>
        </div>

        {/* Main Content: Form + Image */}
        <div className="flex flex-col lg:flex-row">
          {/* Left: Form */}
          <div className="w-full lg:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-secondary mb-6 text-center font-serifDisplay">
              Contact Us
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600">Full Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Email Address</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Message</label>
                <textarea
                  rows="4"
                  placeholder="Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary text-white font-semibold py-1 px-7 rounded-lg hover:bg-secondary font-lato"
              >
                Send Message
              </button>
            </form>
          </div>


          {/* Right: Image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
            <img
              src={contactImage}
              alt="Contact"
              className="w-full max-w-md object-cover rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
