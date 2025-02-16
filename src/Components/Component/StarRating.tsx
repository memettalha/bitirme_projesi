import React from 'react';

interface StarRatingProps {
  count: number;
  className?: string; // Optional className prop
}

const StarRating: React.FC<StarRatingProps> = ({ count, className }) => {
  return (
    <div className={`flex ${className}`}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < count ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={`w-6 h-6 text-yellow-300 ${index < count ? 'text-yellow-300' : 'text-gray-300'}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 17.27l5.18 3.73-1.64-5.81L21 9.24l-5.91-.51L12 3 9.91 8.73 4 9.24l4.46 5.95-1.64 5.81L12 17.27z"
          />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
