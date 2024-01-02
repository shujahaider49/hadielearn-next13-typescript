"use client"

import React, { useRef, useState } from 'react';
import { faqlists } from '../../../../data/faqs';

interface FaqsCardProps {
  faqsList: typeof faqlists[number];
  idx: number;
}

const FaqsCard: React.FC<FaqsCardProps> = (props) => {
  const { faqsList, idx } = props;
  const answerElRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState('0px');

  const handleOpenAnswer = () => {
    const answerElH = (answerElRef.current?.childNodes[0] as HTMLElement)?.offsetHeight || 0;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space- shadow-lg px-10 mt-5 overflow-hidden rounded-2xl border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className={`cursor-pointer pt-5 pb-5 flex items-center justify-between text-lg  font-bold ${state ? "text-[#0F3F5D]" : "text-[#1F1841]"} `}>
        {faqsList.question}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-[#1F1841] ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-[#1F1841] ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
      ref={answerElRef}
      className={`duration-300 transition-all font-sans overflow-hidden`}
      style={{
        height: state ? answerH : '0px',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', // Easing function
      }}
    >
        <div>
          <p className="text-black">{faqsList.answer}</p>
          <p className="text-black">{faqsList.answer2}</p>
          <p className="text-black">{faqsList.answer3}</p>
          <p className="text-black">{faqsList.answer4}</p>
          <p className="text-black">{faqsList.answer5}</p>
          <p className="text-black">{faqsList.answer6}</p>
        </div>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  return (
    <section className="leading-relaxed max-w-screen-2xl mt-12 mx-auto px-4 md:px-8">
      <div className="mt-20 max-w-4xl mx-auto">
      <div className="space-y-3 md:text-start text-center">
        <h1 className="md:text-4xl text-2xl text-[#1F1841] font-semibold">
          Frequently Asked Questions
        </h1>
      </div>
        {faqlists.map((item, idx) => (
          <FaqsCard key={idx} idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
