import React, { useState } from "react";

const StyleQuiz = () => {
  const questions = [
    {
      question: "What type of colors do you prefer?",
      options: ["Neutral tones", "Bright colors", "Dark shades", "Pastels"],
    },
    {
      question: "What kind of patterns do you like?",
      options: ["Stripes", "Floral", "Abstract", "Solid"],
    },
    {
      question: "What is your go-to outfit for casual wear?",
      options: [
        "Jeans and a T-shirt",
        "Dress or Skirt",
        "Joggers and Hoodie",
        "Blazer and Pants",
      ],
    },
    {
      question: "What’s your favorite occasion to dress for?",
      options: ["Work", "Parties", "Outdoor activities", "Casual hangouts"],
    },
  ];

  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState("");

  // Mapping answers to styles
  const styles = {
    "Neutral tones": "Classic",
    "Bright colors": "Boho",
    "Dark shades": "Streetwear",
    "Pastels": "Chic",
    Stripes: "Preppy",
    Floral: "Feminine",
    Abstract: "Edgy",
    Solid: "Minimalist",
    "Jeans and a T-shirt": "Casual",
    "Dress or Skirt": "Elegant",
    "Joggers and Hoodie": "Athleisure",
    "Blazer and Pants": "Formal",
    Work: "Professional",
    Parties: "Trendy",
    "Outdoor activities": "Activewear",
    "Casual hangouts": "Relaxed",
  };

  const handleAnswer = (questionIndex, option) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: option,
    }));
  };

  const calculateStyle = () => {
    const styleScores = {};

    // Debugging: Log selected answers
    console.log("Selected Answers:", answers);

    // Aggregate style scores based on selected answers
    Object.values(answers).forEach((answer) => {
      const style = styles[answer];
      console.log(`Answer: ${answer}, Style: ${style}`); // Debugging

      if (style) {
        styleScores[style] = (styleScores[style] || 0) + 1;
      }
    });

    // Debugging: Log aggregated scores
    console.log("Style Scores:", styleScores);

    // Determine the style with the highest score
    const recommendedStyle = Object.keys(styleScores).reduce((a, b) =>
      styleScores[a] > styleScores[b] ? a : b
    );

    setResult(recommendedStyle || "Unique"); // Default to "Unique" if no clear winner
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure all questions are answered
    if (Object.keys(answers).length !== questions.length) {
      alert("Please answer all the questions.");
      return;
    }

    calculateStyle();
  };

  return (
    <div style={{ maxWidth: "800px", margin: "20px auto", textAlign: "center" }}>
      <h2>Find Your Style</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((q, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <h4>{q.question}</h4>
            {q.options.map((option, i) => (
              <label key={i} style={{ display: "block", margin: "5px" }}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  onChange={() => handleAnswer(index, option)}
                  required
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#FFD700",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>Your Style Recommendation: {result}</h3>
          <p>
            Based on your answers, we recommend exploring outfits that fit the{" "}
            <strong>{result}</strong> style. Check out our collections to find
            something perfect for you!
          </p>
        </div>
      )}
    </div>
  );
};

export default StyleQuiz;
