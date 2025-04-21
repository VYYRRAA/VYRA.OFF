
import { useState } from "react";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How long is the application process?",
    answer: "After submission, our team typically reviews applications within 3-5 business days. If approved, you'll receive an onboarding email with next steps."
  },
  {
    question: "What are the minimum requirements?",
    answer: "While we consider creators at various stages, we typically look for consistent content production, engagement with your audience, and a clear niche or direction."
  },
  {
    question: "Is there a fee to apply or join?",
    answer: "There's no fee to apply. If accepted, we'll discuss our partnership structure during onboarding, which is designed to align with your success."
  },
  {
    question: "What happens after I'm accepted?",
    answer: "Our team will schedule an onboarding call to discuss your goals, create a customized strategy, and introduce you to our community and resources."
  }
];

export default function ApplicationFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center text-gradient">Application FAQs</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-pink-300 mx-auto mb-12 rounded-full"></div>
        
        <div className="max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="mb-6"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full bg-card p-6 rounded-xl border text-left transition-colors duration-300 flex justify-between items-center group hover:border-pink-500/50 ${
                  activeIndex === index ? "border-pink-500/50" : "border-border"
                }`}
              >
                <h3 className="text-lg font-semibold group-hover:text-pink-400 transition-colors">
                  {item.question}
                </h3>
                <div className={`relative w-6 h-6 transition-transform duration-300 ${activeIndex === index ? "rotate-45" : ""}`}>
                  <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-pink-500 transform -translate-y-1/2"></span>
                  <span className={`absolute top-0 left-1/2 w-0.5 h-6 bg-pink-500 transform -translate-x-1/2 transition-opacity duration-300 ${activeIndex === index ? "" : ""}`}></span>
                </div>
              </button>
              
              {activeIndex === index && (
                <div className="bg-card/50 p-6 rounded-b-xl border-x border-b border-border animate-accordion-down">
                  <p className="text-muted-foreground">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
