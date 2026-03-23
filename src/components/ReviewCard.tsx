import React from 'react';

interface ReviewCardProps {
  quote: string;
  author: string;
}

export default function ReviewCard({ quote, author }: ReviewCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border">
        <div className="flex text-yellow-400 mb-2">★★★★★</div>
        <p className="text-gray-700 italic">"{quote}" - <span className='font-bold text-gray-900'>{author}</span></p>
    </div>
  );
}
