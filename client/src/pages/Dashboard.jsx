import React from "react";
import { useNavigate } from "react-router-dom";
import defaultProfile from "/src/assets/Default-profile.jpg";
const disabilities = [
  { id: 3, name: "Autism", image: "/src/assets/autism.jpeg" },
  { id: 4, name: "Visual Impairment", image: "/src/assets/visual.jpeg" },
  { id: 2, name: "Hearing & Speech", image: "/src/assets/hear.jpeg" },
  { id: 1, name: "Dyslexia", image: "/src/assets/dyslexia.jpeg" },
];


const userProfileImage = null;

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-yellow-100 font-poppins px-4 py-6">
      {/* Header and Soft Card */}
      <div className="flex justify-center mb-10">
        <div className="w-full max-w-6xl">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl md:text-3xl font-serif text-gray-800">
              Hey, welcome to <span className="text-teal-600">Aurora</span>
            </h1>
            <button onClick={() => navigate("/profile")}>
              <img
                src={userProfileImage || defaultProfile}
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover border-2 border-yellow-500 hover:border-teal-500 transition cursor-pointer"
              />
            </button>
          </div>

          {/* Soft Card Section */}
          <div
            className="relative rounded-2xl bg-cover bg-center px-10 py-16 shadow-md"
            style={{
              backgroundImage: "url('/src/assets/soft-card.jpg')",
              height: "320px",
            }}
          >
            <div className="flex flex-col items-start text-black">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                Beyond limitations, learning illuminates
              </h2>
              <span className="italic mb-3">
                Empowering minds with diverse needs,
              </span>
              <p className="text-sm md:text-base leading-relaxed text-justify">
                Aurora illuminates learning through accessible tools and tailored support,
                <br />
                turning challenges into triumphs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Disabilities Section */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {disabilities.map((disability, index) => (
            <button
              key={index}
              onClick={() => navigate(`/disability/${disability.id}`, { state: { disability } })}
              className="flex flex-col items-center transform hover:scale-105 transition duration-300 focus:outline-none"
            >
              <div className="w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-yellow-500 shadow-lg hover:shadow-yellow-400 transition">
                <img
                  src={disability.image}
                  alt={disability.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-gray-800 font-bold text-lg mt-4">
                {disability.name}
              </h3>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
