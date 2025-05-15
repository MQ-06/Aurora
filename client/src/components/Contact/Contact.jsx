import React, { useState } from "react";
import { MdLocationOn, MdPhone, MdEmail, MdLanguage } from "react-icons/md";
import contactImage from "../../assets/contact.jpg";
import { sendContactMessage } from "../../services/contactService";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");
    setStatusType("");

    try {
      await sendContactMessage(formData);
      setStatusMessage("Message sent successfully!");
      setStatusType("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatusMessage(`Failed to send message: ${error.message}`);
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="max-w-6xl w-full bg-yellow-50 shadow-lg rounded-xl overflow-hidden flex flex-col font-lato">
        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-8 py-8 border-b border-yellow-200 text-black">
          <div className="flex items-center gap-2">
            <MdLocationOn size={24} />
            <span className="text-sm font-medium">Main Gulberg road, Lahore</span>
          </div>
          <div className="flex items-center gap-2">
            <MdPhone size={24} />
            <a href="tel:+923221491064" className="text-sm font-medium hover:underline">
              +923221491064
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail size={24} />
            <a href="mailto:Aurora@gmail.com" className="text-sm font-medium hover:underline">
              Aurora@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MdLanguage size={24} />
            <a href="https://Aurora.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline">
              Aurora.com
            </a>
          </div>
        </div>

        {/* Form + Image Section */}
        <div className="flex flex-col lg:flex-row">
          {/* Left: Form */}
          <div className="w-full lg:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-secondary mb-6 text-center font-serifDisplay">
              Contact Us
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm text-gray-600">Full Name</label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Subject</label>
                <input
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary text-white font-semibold py-1 px-7 rounded-lg hover:bg-secondary font-lato"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {/* Status Message */}
              {statusMessage && (
                <div
                  className={`mt-4 p-2 rounded-md text-sm text-center ${
                    statusType === "success"
                      ? "bg-green-100 text-green-800 border border-green-300"
                      : "bg-red-100 text-red-800 border border-red-300"
                  }`}
                >
                  {statusMessage}
                </div>
              )}
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
