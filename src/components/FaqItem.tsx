import React from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <div className="bg-white p-6 rounded-xl border">
        <p className="font-semibold text-gray-800 mb-1">{question}</p>
        <p className="text-gray-600 text-sm">{answer}</p>
    </div>
  );
}
