import React from "react";

const UserProfile = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    disabilities: ["Dyslexia", "ADHD"],
    quizProgress: 85,
    currentLessons: [
      { title: "Firmcs Basics", progress: 80 },
      { title: "Focus Techniques", progress: 45 },
    ],
    recentQuizzes: [
      { title: "ADHD Basics", score: 85 },
      { title: "Dyslexia Level 1", score: 72 },
    ],
    badges: [
      { label: "First Quiz", icon: "⭐" },
      { label: "3-Day Streak", icon: "🔥" },
      { label: "Above 80%", icon: "🏅" },
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

      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 py-8 space-y-10">

        {/* Banner */}
        <div className="bg-yellow-100 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm font-lato">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2 font-serifDisplay">
              Welcome back, {user.name} <span>👋</span>
            </h2>
            <p className="text-sm">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-sm mb-4">
              <strong>Disabilities:</strong> {user.disabilities.join(", ")}
            </p>
            <blockquote className="italic text-gray-600 text-sm border-l-4 border-yellow-400 pl-4">
              “{user.quote}”
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
            <p className="text-yellow-500 font-bold text-xl mb-1">
              {user.quizProgress}%{" "}
              <span className="text-sm text-gray-500 font-normal">Completed</span>
            </p>
            <div className="w-full bg-gray-200 h-3 rounded-full">
              <div
                className="h-3 bg-yellow-400 rounded-full"
                style={{ width: `${user.quizProgress}%` }}
              ></div>
            </div>
          </div>

          {/* Current Lessons */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2 font-serifDisplay">Current Lessons</h3>
            <ul className="space-y-2 text-sm">
              {user.currentLessons.map((lesson, i) => (
                <li key={i} className="flex justify-between">
                  <span>✅ {lesson.title}</span>
                  <span>{lesson.progress}%</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Quizzes */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2 font-serifDisplay">Recent Quizzes</h3>
            <ul className="space-y-2 text-sm">
              {user.recentQuizzes.map((quiz, i) => (
                <li key={i} className="flex justify-between">
                  <span>{quiz.title}</span>
                  <span>{quiz.score}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Achievements & Accessibility */}
        <div className="grid md:grid-cols-3 gap-6 items-start font-lato">
          {/* Achievements */}
          <div className="bg-white p-6 rounded-xl shadow col-span-2">
            <h3 className="font-semibold text-lg mb-4 font-serifDisplay">Achievements</h3>
            <div className="flex flex-wrap gap-4">
              {user.badges.map((badge, i) => (
                <div
                  key={i}
                  className="w-20 h-20 rounded-full object-cover border-2 border-yellow-500 hover:border-teal-500 transition cursor-pointer flex items-center justify-center flex-col bg-yellow-400 text-white shadow"
                >
                  <span className="text-lg">{badge.icon}</span>
                  <span className="text-[10px] font-semibold text-center leading-tight">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Accessibility Settings Card */}
          <div className="bg-white p-6 rounded-xl shadow h-full flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg mb-3 font-serifDisplay text-teal-600">
                Your Accessibility Settings
              </h3>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold">Font Size:</span> {user.accessibility.fontSize}
                </li>
               
                <li>
                  <span className="font-semibold">Lesson Format:</span> {user.accessibility.format}
                </li>
                <li>
                  <span className="font-semibold">Quiz Support:</span>{" "}
                  {user.accessibility.quizSupport}
                </li>
              </ul>
            </div>
            
          </div>
        </div>

        {/* Community Forum CTA */}
        <div className="flex justify-center font-lato">
          <button className="px-6 py-3 bg-primary text-white font-lato rounded-lg flex items-center gap-2 group hover:bg-secondary transform duration-300 ease-in-out">
            Join Community Forum
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
