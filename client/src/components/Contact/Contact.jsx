import React, { useState } from "react";
import { sendContactMessage } from "../../services/contactService";
import { MdLocationOn, MdPhone, MdEmail, MdLanguage } from "react-icons/md";
import contactImage from "../../assets/contact.jpg";

const Contact = () => {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendContactMessage(form);
      setStatus("Message sent successfully!");
      setForm({ full_name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="max-w-6xl w-full bg-yellow-50 shadow-lg rounded-xl overflow-hidden flex flex-col font-lato">
        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-8 py-8 border-b border-yellow-200">
          <div className="flex items-center gap-2 text-black"><MdLocationOn size={24} /><span>Main Gulberg road, Lahore</span></div>
          <div className="flex items-center gap-2 text-black"><MdPhone size={24} /><a href="tel:+923221491064">+923221491064</a></div>
          <div className="flex items-center gap-2 text-black"><MdEmail size={24} /><a href="mailto:Aurora@gmail.com">Aurora@gmail.com</a></div>
          <div className="flex items-center gap-2 text-black"><MdLanguage size={24} /><a href="https://aurora.com" target="_blank" rel="noreferrer">Aurora.com</a></div>
        </div>

        {/* Form + Image */}
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-secondary mb-6 text-center">Contact Us</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input name="full_name" value={form.full_name} onChange={handleChange} type="text" placeholder="Name" required className="w-full px-4 py-2 border rounded-md" />
              <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" required className="w-full px-4 py-2 border rounded-md" />
              <input name="subject" value={form.subject} onChange={handleChange} type="text" placeholder="Subject" required className="w-full px-4 py-2 border rounded-md" />
              <textarea name="message" value={form.message} onChange={handleChange} rows="4" placeholder="Message" required className="w-full px-4 py-2 border rounded-md"></textarea>
              <button type="submit" className="bg-yellow-400 text-white font-semibold py-2 px-6 rounded-lg hover:bg-yellow-500">Send Message</button>
              {status && <p className="text-sm mt-2">{status}</p>}
            </form>
          </div>

          <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
            <img src={contactImage} alt="Contact" className="w-full max-w-md object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
