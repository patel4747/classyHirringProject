import React, { useState } from "react";

const faqs = [
  {
    question: "Are DocuTech signatures legally binding?",
    answer:
      "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they're encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",
  },
  {
    question: "How secure are DocuTech signatures?",
    answer:
      "DocuTech signatures use advanced encryption and multi-layer authentication to ensure security. Your data remains protected and fully compliant with industry standards.",
  },
  {
    question: "Can I use DocuTech for business contracts?",
    answer:
      "Absolutely! DocuTech supports business contracts, NDAs, and other legal documents. Many companies trust DocuTech for secure digital agreements.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-5">
      <h2 className="text-center text-2xl font-bold mb-5">FAQs</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg">
            <button
              className="w-full flex justify-between items-center p-4 bg-[#1e2a4a] text-white font-semibold rounded-lg"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700 bg-white rounded-lg shadow-lg border border-pink-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
