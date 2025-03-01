import React from "react";
import { FaCheck } from "react-icons/fa6";

interface PricingCardProps {
  price: string;
  duration: string;
  title: string;
  description: string;
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({
  price,
  duration,
  title,
  description,
  features,
}) => {
  return (
    <div className="bg-white shadow-md rounded-3xl p-8 w-full max-w-sm">
      {/* Price */}
      <h2 className="text-[1.5rem] font-bold text-[#231D4F]">
        {price}{" "}
        <span className="text-[1.1rem] font-medium text-[#848199]">
          / {duration}
        </span>
      </h2>

      {/* Title */}
      <h3 className="mt-4 text-lg font-semibold text-[#231D4F]">{title}</h3>

      {/* Description */}
      <p className="text-[#848199] text-[0.9rem]">{description}</p>

      {/* Features */}
      <ul className="mt-6 space-y-2 text-gray-700">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2 mt-2">
            <span className="text-[#5243C2] bg-[#5243C21A] rounded-full p-1  flex items-center justify-center">
              <FaCheck size={12} />
            </span>
            <span className="text-[0.9rem] text-[#848199]">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button className="mt-6 w-full bg-[#f9e7d8] text-[#F57F20] font-semibold py-2 rounded-xl hover:bg-orange-300">
        Choose plan
      </button>
    </div>
  );
};

export default PricingCard;
