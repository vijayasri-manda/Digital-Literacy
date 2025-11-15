import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./QuizEnglish.css";

const QuizEnglish = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [name, setName] = useState("");

  const questions = [
    // Computer Questions
    {
      id: 1,
      question: "What is a computer?",
      options: [
        "A type of fruit",
        "An electronic device that processes data",
        "A vehicle",
        "A kitchen appliance",
      ],
      answer: 1,
      category: "Computer",
    },
    {
      id: 2,
      question: "Which of the following is an input device?",
      options: ["Monitor", "Keyboard", "Speaker", "Printer"],
      answer: 1,
      category: "Computer",
    },
    {
      id: 3,
      question: "What does CPU stand for?",
      options: [
        "Central Processing Unit",
        "Computer Personal Unit",
        "Central Performance Utility",
        "Control Program Utility",
      ],
      answer: 0,
      category: "Computer",
    },
    {
      id: 4,
      question: "Which is NOT an operating system?",
      options: ["Windows", "Linux", "Android", "Intel"],
      answer: 3,
      category: "Computer",
    },
    {
      id: 5,
      question: "What is the full form of WWW?",
      options: [
        "World Web Window",
        "World Wide Web",
        "Web World Wide",
        "Wide World Web",
      ],
      answer: 1,
      category: "Computer",
    },
    {
      id: 6,
      question: "Which one is used to store data permanently?",
      options: ["RAM", "ROM", "Hard Drive", "Cache"],
      answer: 2,
      category: "Computer",
    },
    {
      id: 7,
      question: "What does URL stand for?",
      options: [
        "Uniform Resource Locator",
        "User Resource Login",
        "Universal Resource List",
        "Uniform Registered Link",
      ],
      answer: 0,
      category: "Computer",
    },
    {
      id: 8,
      question: "Which key is used to delete?",
      options: ["Shift", "Ctrl", "Del", "Tab"],
      answer: 2,
      category: "Computer",
    },
    {
      id: 9,
      question: "What is the function of a browser?",
      options: [
        "To edit documents",
        "To access websites",
        "To play music",
        "To draw diagrams",
      ],
      answer: 1,
      category: "Computer",
    },
    {
      id: 10,
      question: "Which of the following is NOT a web browser?",
      options: ["Chrome", "Firefox", "Google", "Safari"],
      answer: 2,
      category: "Computer",
    },
    // Mobile Questions
    {
      id: 11,
      question: "How do you turn on a mobile phone?",
      options: [
        "Press the volume button",
        "Press and hold the power button",
        "Shake the phone",
        "Touch the screen",
      ],
      answer: 1,
      category: "Mobile",
    },
    {
      id: 12,
      question: "To make a phone call, you need to:",
      options: [
        "Open the camera app",
        "Open the phone app and dial a number",
        "Send a text message",
        "Connect to Wi-Fi",
      ],
      answer: 1,
      category: "Mobile",
    },
    {
      id: 13,
      question: "What app is used to send text messages?",
      options: ["Camera", "Calculator", "Messages", "Gallery"],
      answer: 2,
      category: "Mobile",
    },
    {
      id: 14,
      question: "Which app is used to take photos?",
      options: ["Messages", "Camera", "Calculator", "Phone"],
      answer: 1,
      category: "Mobile",
    },
    {
      id: 15,
      question: "To connect to Wi-Fi, you go to:",
      options: ["Camera", "Gallery", "Settings", "Messages"],
      answer: 2,
      category: "Mobile",
    },
    {
      id: 16,
      question: "WhatsApp is used for:",
      options: [
        "Taking photos",
        "Making calculations",
        "Messaging and calling",
        "Playing music",
      ],
      answer: 2,
      category: "Mobile",
    },
    {
      id: 17,
      question: "Where can you view your saved photos?",
      options: ["Calculator", "Gallery", "Messages", "Phone"],
      answer: 1,
      category: "Mobile",
    },
    {
      id: 18,
      question: "To answer an incoming call, you should:",
      options: [
        "Press the power button",
        "Swipe or tap the answer button",
        "Open the camera",
        "Turn off the phone",
      ],
      answer: 1,
      category: "Mobile",
    },
    {
      id: 19,
      question: "What does the calculator app do?",
      options: [
        "Takes photos",
        "Sends messages",
        "Performs mathematical calculations",
        "Makes phone calls",
      ],
      answer: 2,
      category: "Mobile",
    },
    {
      id: 20,
      question: "To send a message on WhatsApp, you need:",
      options: [
        "Only the app installed",
        "Internet connection and the recipient's number",
        "A computer",
        "A landline phone",
      ],
      answer: 1,
      category: "Mobile",
    },
  ];

  const handleChange = (questionId, optionIndex) => {
    setAnswers({ ...answers, [questionId]: optionIndex });
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.answer) {
        correct++;
      }
    });
    return correct;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allAnswered = questions.every((q) => answers[q.id] !== undefined);
    if (!allAnswered) {
      alert("Please answer all questions before submitting.");
      return;
    }

    setShowResults(true);
  };

  const handleFinalSubmit = () => {
    if (!name.trim()) {
      alert("Please enter your name to get the certificate.");
      return;
    }

    setSubmitted(true);
    setTimeout(() => {
      navigate("/courses/certificate-english", {
        state: { name },
      });
    }, 2000);
  };

  return (
    <div className="quiz-container">
      <h2>Computer & Mobile Basics Quiz</h2>

      {!showResults ? (
        <>
          <form onSubmit={handleSubmit}>
            <div className="section-header">
              <h3>Computer Questions (1-10)</h3>
            </div>
            {questions.filter(q => q.category === "Computer").map((q) => (
              <div key={q.id} className="question-block">
                <p>
                  {q.id}. {q.question}
                </p>
                {q.options.map((option, index) => (
                  <label key={index}>
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      value={index}
                      onChange={() => handleChange(q.id, index)}
                      checked={answers[q.id] === index}
                    />
                    {option}
                  </label>
                ))}
              </div>
            ))}

            <div className="section-header">
              <h3>Mobile Questions (11-20)</h3>
            </div>
            {questions.filter(q => q.category === "Mobile").map((q) => (
              <div key={q.id} className="question-block">
                <p>
                  {q.id}. {q.question}
                </p>
                {q.options.map((option, index) => (
                  <label key={index}>
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      value={index}
                      onChange={() => handleChange(q.id, index)}
                      checked={answers[q.id] === index}
                    />
                    {option}
                  </label>
                ))}
              </div>
            ))}

            <button type="submit" className="submit-btn">
              View Results
            </button>
          </form>
        </>
      ) : (
        <div className="results-section">
          <h3>Quiz Results</h3>
          <div className="score-display">
            <p className="score">Your Score: {calculateScore()} out of {questions.length}</p>
            <p className="percentage">Percentage: {Math.round((calculateScore() / questions.length) * 100)}%</p>
          </div>
          
          <div className="detailed-results">
            <h4>Detailed Results:</h4>
            {questions.map((q) => (
              <div key={q.id} className={`result-item ${answers[q.id] === q.answer ? 'correct' : 'incorrect'}`}>
                <p><strong>Q{q.id}:</strong> {q.question}</p>
                <p><strong>Your Answer:</strong> {q.options[answers[q.id]]}</p>
                <p><strong>Correct Answer:</strong> {q.options[q.answer]}</p>
                <p className="result-status">
                  {answers[q.id] === q.answer ? '✓ Correct' : '✗ Incorrect'}
                </p>
              </div>
            ))}
          </div>

          <div className="name-entry-final">
            <div className="certificate-prompt">
              <h2>🎉 Congratulations! 🎉</h2>
              <h3>Enter your name to get your certificate:</h3>
            </div>
            <input
              type="text"
              className="name-input-highlight"
              placeholder="Enter your full name here"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="final-actions">
            <button onClick={() => setShowResults(false)} className="review-btn">
              Review Answers
            </button>
            <button onClick={handleFinalSubmit} className="submit-btn">
              Get Certificate
            </button>
          </div>
        </div>

      )}

      {submitted && <p className="score">Generating your certificate...</p>}
    </div>
  );
};

export default QuizEnglish;
