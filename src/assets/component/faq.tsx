import React, { useState } from "react";
import "./faq.css"; // Ensure the styles are in a separate CSS file if preferred

const FAQ: React.FC = () => {
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const toggleQuestion = (index: number) => {
    setOpenQuestions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What are the hours of operation?",
      answer: "Our hours of operation are Monday to Friday, 9 AM to 5 PM.",
    },
    {
      question: "Do I need to have prior experience?",
      answer:
        "Prior experience is not always necessary. It depends on the specific position you're applying for.",
    },
    {
      question: "What are the documents required to apply?",
      answer:
        "Typically, you'll need a resume, cover letter, and any relevant certifications or portfolios.",
    },
    {
      question: "Is there a minimum age to apply in Duzo?",
      answer: "The minimum age to apply at Duzo is 18 years old.",
    },
    {
      question: "I'm facing issues with the site.",
      answer:
        "If you're experiencing issues with our site, please try clearing your browser cache or using a different browser. If problems persist, contact our support team.",
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions (FAQ'S)</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className="faq-question"
            onClick={() => toggleQuestion(index)}
            style={{ cursor: "pointer" }}
          >
            <div
              className="chevron"
              style={{
                transform: openQuestions.includes(index)
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
              }}
            ></div>
            {faq.question}
          </div>
          <div
            className="faq-answer"
            style={{
              maxHeight: openQuestions.includes(index) ? "1000px" : "0",
              overflow: "hidden",
              transition: "max-height 0.3s ease, padding 0.3s ease",
              paddingLeft: openQuestions.includes(index) ? "35px" : "0",
              paddingTop: openQuestions.includes(index) ? "10px" : "0",
            }}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
