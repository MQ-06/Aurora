import React, { useEffect, useState } from "react";

const quizDataByDisability = {
  autism: [
    { question: "What is Autism?", options: ["Disability", "Disease", "Flu", "Cold"], correct: "Disability" },
    { question: "How to support autistic learners?", options: ["Visual aids", "Ignore", "Shout", "Punish"], correct: "Visual aids" },
    { question: "Is autism curable?", options: ["Yes", "No"], correct: "No" },
    { question: "Which sense may be heightened in autism?", options: ["Hearing", "Taste", "Smell", "None"], correct: "Hearing" },
    { question: "True or False: Autistic individuals always avoid eye contact.", options: ["True", "False"], correct: "False" },
    { question: "What is a common characteristic of autism spectrum disorder (ASD)?", options: ["Difficulty with social communication", "Exceptional athletic ability", "Constant need for loud noises", "A love for spicy food"], correct: "Difficulty with social communication" },
  ],
  visual: [
    { question: "What helps visually impaired users?", options: ["Captions", "Screen Reader", "Noise", "Colorful Text"], correct: "Screen Reader" },
    { question: "Which is a useful device for visual impairment?", options: ["Braille display", "Loudspeaker", "Keyboard", "Mouse"], correct: "Braille display" },
    { question: "What does contrast mean?", options: ["Difference in brightness", "Same color", "No color", "Blur"], correct: "Difference in brightness" },
    { question: "Large text helps?", options: ["Yes", "No"], correct: "Yes" },
    { question: "What is the name of the system of raised dots used by visually impaired people to read?", options: ["Morse Code", "Braille", "Sign Language", "Hieroglyphics"], correct: "Braille" },
    { question: "Which of these colors provides high contrast with white for better visibility?", options: ["Yellow", "Light Gray", "Black", "Beige"], correct: "Black" },
  ],
  hearing: [
    { question: "What is a common communication method for people who are deaf or hard of hearing?", options: ["Shouting", "Sign Language", "Whispering", "Telepathy"], correct: "Sign Language" },
    { question: "What device can amplify sound for individuals with hearing loss?", options: ["Microscope", "Telescope", "Hearing Aid", "Stethoscope"], correct: "Hearing Aid" },
    { question: "True or False: All deaf people can read lips perfectly.", options: ["True", "False"], correct: "False" },
    { question: "What does 'TTY' stand for in assistive technology?", options: ["Talk To You", "Teletypewriter", "Type To You", "Telephonic Type"], correct: "Teletypewriter" },
    { question: "What is an audiogram?", options: ["A test of vision", "A graph showing a person's hearing ability", "A device to measure sound volume", "A type of musical instrument"], correct: "A graph showing a person's hearing ability"},
  ],
  dyslexia: [
    { question: "Dyslexia primarily affects which skill?", options: ["Mathematical ability", "Reading and spelling", "Musical talent", "Athletic coordination"], correct: "Reading and spelling" },
    { question: "Which of these is a common strategy to help learners with dyslexia?", options: ["Using multi-sensory teaching approaches", "Providing texts in very small fonts", "Speaking very quickly", "Avoiding the use of images"], correct: "Using multi-sensory teaching approaches" },
    { question: "True or False: Dyslexia is a sign of low intelligence.", options: ["True", "False"], correct: "False" },
    { question: "What type of font is often recommended for people with dyslexia?", options: ["Cursive fonts", "Serif fonts", "Sans-serif fonts like Arial or Comic Sans", "Ornate, decorative fonts"], correct: "Sans-serif fonts like Arial or Comic Sans" },
    { question: "Can dyslexia be outgrown or cured?", options: ["Yes, with enough effort", "No, but strategies can help manage it", "Yes, by reading more books", "No, it gets worse with age"], correct: "No, but strategies can help manage it" },
  ]
};

const QuizSection = ({ disabilityId, onQuizComplete }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    const pool = quizDataByDisability[disabilityId] || [];
    const randomQuestions = [...pool].sort(() => 0.5 - Math.random()).slice(0, 4);
    setQuestions(randomQuestions);
    setCurrentIndex(0);
    setSelectedOption("");
    setMessage("");
    setScore(0);
    setShowScore(false);
  }, [disabilityId]);

  const currentQuestion = questions[currentIndex];

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setMessage("");
  };

  const handleSubmit = () => {
    if (!selectedOption) {
      setMessage("Please select an answer before submitting.");
      return;
    }
    if (selectedOption === currentQuestion.correct) {
      setScore((prev) => prev + 1);
      setMessage("Correct! 🎉");
    } else {
      setMessage(`Wrong! The correct answer is: ${currentQuestion.correct}`);
    }
    setTimeout(() => {
      setMessage("");
      setSelectedOption("");
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setShowScore(true);
        if (onQuizComplete) onQuizComplete(disabilityId, score + (selectedOption === currentQuestion.correct ? 1 : 0), questions.length);
      }
    }, 1500);
  };

  const handleRestart = () => {
    const pool = quizDataByDisability[disabilityId] || [];
    const randomQuestions = [...pool].sort(() => 0.5 - Math.random()).slice(0, 4);
    setQuestions(randomQuestions);
    setCurrentIndex(0);
    setSelectedOption("");
    setMessage("");
    setScore(0);
    setShowScore(false);
  };

  if (!disabilityId) {
    return <p className="text-center mt-10 text-gray-500">Please select a category to start the quiz.</p>;
  }

  if (questions.length === 0) {
    return <p className="text-center mt-10 text-gray-500">No questions available for this category.</p>;
  }

  if (showScore) {
    return (
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-xl text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary">Quiz Completed!</h2>
        <p className="mb-6 text-xl text-gray-700">
          Your score: <span className="font-semibold text-primary">{score}</span> / {questions.length}
        </p>
        <button
          className="px-6 py-3 bg-primary text-white font-lato rounded-lg flex items-center gap-2 group hover:bg-secondary transform duration-300 ease-in-out"
          onClick={handleRestart}
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-2xl space-y-6">
      <h3 className="text-2xl font-bold text-center text-primary">{`Question ${currentIndex + 1} of ${questions.length}`}</h3>
      <p className="mb-5 text-lg text-gray-800 text-center">{currentQuestion.question}</p>
      <form className="space-y-4">
        {currentQuestion.options.map((option, idx) => (
          <label
            key={idx}
            className={`block p-4 rounded-lg border cursor-pointer ${
              selectedOption === option ? "bg-primary text-white border-primary" : "bg-gray-100 hover:bg-secondary hover:text-white"
            }`}
          >
            <input
              type="radio"
              name="quiz-option"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
              className="mr-3 hidden"
            />
            {option}
          </label>
        ))}
      </form>

      {message && (
        <div className={`p-3 rounded text-center font-medium ${
          message.startsWith("Correct") ? "bg-green-100 text-green-700" :
          message.startsWith("Please") ? "bg-yellow-100 text-yellow-700" :
          "bg-red-100 text-red-700"
        }`}>
          {message}
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={!selectedOption && !message}
        className="w-full px-6 py-3 bg-primary text-white font-lato rounded-lg flex items-center justify-center gap-2 group hover:bg-secondary transition duration-300 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Submit
      </button>
    </div>
  );
};

export default QuizSection;
