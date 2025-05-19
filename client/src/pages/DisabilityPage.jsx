// ✅ DisabilityPage.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import QuizSection from "./QuizSection";
import LessonCarousel from "./LessonCarousel"; // Make sure path is correct

const DisabilityPage = () => {
  const location = useLocation();
  const disability = location.state?.disability;
  const [lessons, setLessons] = useState([]);
  const [selectedOption, setSelectedOption] = useState("lessons");

  const disabilityKeyMap = {
    1: "dyslexia",
    2: "hearing",
    3: "autism",
    4: "visual",
  };

  const quizKey = disabilityKeyMap[disability?.id];

  useEffect(() => {
    if (disability?.id) {
      fetch(`http://127.0.0.1:3000/api/v1/lessons?disability_id=${disability.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch lessons");
          return res.json();
        })
        .then((data) => {
          setLessons(data);
        })
        .catch((error) => {
          console.error("Error fetching lessons:", error);
        });
    }
  }, [disability]);

  return (
    <div className="min-h-screen bg-white font-poppins px-4 py-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-primary mb-6">
          {disability?.name} - {selectedOption === "lessons" ? "Lessons" : "Quizzes"}
        </h1>

        <div className="flex justify-center mb-6">
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="px-4 py-2 rounded-md border border-primary focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            <option value="lessons">Lessons</option>
            <option value="quizzes">Quizzes</option>
          </select>
        </div>

        {/* Content Switcher */}
        {selectedOption === "lessons" ? (
          lessons.length > 0 ? (
            <LessonCarousel lessons={lessons} />
          ) : (
            <p className="text-center text-gray-500">No lessons available.</p>
          )
        ) : quizKey ? (
          <QuizSection disabilityId={quizKey} />
        ) : (
          <p className="text-center text-gray-500">No quiz available.</p>
        )}
      </div>
    </div>
  );
};

export default DisabilityPage;
