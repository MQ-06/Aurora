import React, { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";

const UserProfile = () => {
  const { user } = useUser();
  const [quizProgress, setQuizProgress] = useState([]);
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    const storedProgress = JSON.parse(localStorage.getItem("quizProgress")) || [];
    setQuizProgress(storedProgress);

    if (storedProgress.length > 0) {
      const totalCorrect = storedProgress.reduce((acc, curr) => acc + curr.score, 0);
      const totalQuestions = storedProgress.reduce((acc, curr) => acc + curr.total, 0);
      const percentage = Math.round((totalCorrect / totalQuestions) * 100);
      setProgressPercentage(percentage);
    } else {
      setProgressPercentage(0);
    }
  }, []);

  if (!user) return <p className="text-center mt-10">Loading user...</p>;

  const userData = {
    name: user.name,
    email: user.email,
    disabilities: ["Dyslexia", "ADHD"],
    quizProgress: progressPercentage,
    currentLessons: [
      { title: "Firmcs Basics", progress: 80 },
      { title: "Focus Techniques", progress: 45 },
    ],
    recentQuizzes: quizProgress.slice(-2).reverse().map((quiz) => ({
      title: quiz.title,
      score: Math.round((quiz.score / quiz.total) * 100),
    })),
    badges: [
      { label: "First Quiz", icon: "⭐" },
      { label: "3-Day Streak", icon: "🔥" },
      { label: `Progress: ${progressPercentage}%`, icon: "🏅" },
    ],
    quote:
      "Keep your face always toward the sunshine—and shadows will fall behind you.",
    accessibility: {
      fontSize: "Large",
      contrastMode: "High",
      format: "Text + Audio",
      quizSupport: "Instant AI Feedback",
    },
  };

  return (
    <div className="min-h-screen bg-yellow-50 text-gray-800 font-sans">
      {/* Header */}
      <div className="bg-white flex justify-between items-center px-6 py-4 shadow-sm">
        <h1 className="text-4xl font-bold text-secondary font-serifDisplay">Aurora</h1>
        <button className="text-sm bg-red-100 text-red-600 px-4 py-1 rounded hover:bg-red-200 transition">
          Logout
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-10">
        {/* Banner */}
        <div className="bg-yellow-100 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm font-lato">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2 font-serifDisplay">
              Welcome back, {userData.name} <span>👋</span>
            </h2>
            <p className="text-sm"><strong>Email:</strong> {userData.email}</p>
            <p className="text-sm mb-4"><strong>Disabilities:</strong> {userData.disabilities.join(", ")}</p>
            <blockquote className="italic text-gray-600 text-sm border-l-4 border-yellow-400 pl-4">
              “{userData.quote}”
            </blockquote>
          </div>
          <img
            src="/src/assets/user.png"
            alt="Illustration"
            className="w-60 h-auto object-contain"
          />
        </div>

        {/* Section Grid */}
        <div className="grid md:grid-cols-3 gap-6 font-lato">
          {/* Quiz Progress */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2 font-serifDisplay">Quiz Progress</h3>
            <p className="text-yellow-500 text-4xl font-bold">{userData.quizProgress}%</p>
            <div className="w-full h-4 bg-yellow-100 rounded mt-2">
              <div
                className="h-full bg-yellow-400 rounded"
                style={{ width: `${userData.quizProgress}%` }}
              ></div>
            </div>
          </div>

          {/* Current Lessons */}
          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <h3 className="font-semibold text-lg font-serifDisplay">Current Lessons</h3>
            {userData.currentLessons.map((lesson, index) => (
              <div key={index}>
                <p className="text-sm font-medium">{lesson.title}</p>
                <div className="w-full h-3 bg-gray-200 rounded">
                  <div
                    className="h-full bg-blue-400 rounded"
                    style={{ width: `${lesson.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Quizzes */}
          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <h3 className="font-semibold text-lg font-serifDisplay">Recent Quizzes</h3>
            {userData.recentQuizzes.length > 0 ? (
              userData.recentQuizzes.map((quiz, index) => (
                <div key={index} className="text-sm flex justify-between">
                  <span>{quiz.title}</span>
                  <span className="font-bold text-green-600">{quiz.score}%</span>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No quiz attempts yet.</p>
            )}
          </div>
        </div>

        {/* Badges + Accessibility */}
        <div className="grid md:grid-cols-2 gap-6 font-lato">
          {/* Badges */}
          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <h3 className="font-semibold text-lg font-serifDisplay">Your Badges</h3>
            <div className="flex gap-3 flex-wrap">
              {userData.badges.map((badge, index) => (
                <span
                  key={index}
                  className="bg-yellow-200 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"
                >
                  <span>{badge.icon}</span> {badge.label}
                </span>
              ))}
            </div>
          </div>

          {/* Accessibility */}
          <div className="bg-white p-6 rounded-xl shadow space-y-2">
            <h3 className="font-semibold text-lg font-serifDisplay">Accessibility Preferences</h3>
            {Object.entries(userData.accessibility).map(([key, value]) => (
              <p key={key} className="text-sm">
                <strong>{key.replace(/([A-Z])/g, " $1")}: </strong> {value}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
