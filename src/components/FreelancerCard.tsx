import React from "react";
import { Star, Heart } from "lucide-react";
import { Freelancer } from "@/types/freelancer";
import Image from "next/image";

interface FreelancerCardProps {
  freelancer: Freelancer;
}

const FreelancerCard: React.FC<FreelancerCardProps> = ({ freelancer }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={14}
        className={
          index < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        }
      />
    ));
  };

  return (
    <div className='bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group'>
      {/* Card Image */}
      <div className='relative h-48'>
        <Image
          src={freelancer.coverImage}
          alt={`${freelancer.name} cover`}
          fill
          className='object-cover'
        />
        <button className='absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-all duration-200 hover:scale-110'>
          <Heart
            size={16}
            className='text-gray-600 hover:text-red-500 transition-colors duration-200'
          />
        </button>
      </div>

      {/* Card Content */}
      <div className='p-4'>
        {/* Profile Section */}
        <div className='flex items-center mb-3'>
          <div className='relative w-10 h-10 rounded-full overflow-hidden mr-3'>
            <Image
              src={freelancer.profileImage}
              alt={freelancer.name}
              fill
              className='object-cover'
            />
          </div>
          <div>
            <h3 className='font-semibold text-gray-900 text-sm'>
              {freelancer.name}
            </h3>
          </div>
        </div>

        {/* Level and Role */}
        <div className='mb-3'>
          <span className='text-sm text-gray-600'>{freelancer.level}</span>
          <p className='text-sm text-gray-800 font-medium'>{freelancer.role}</p>
        </div>

        {/* Location */}
        {freelancer.location && (
          <div className='mb-3'>
            <p className='text-sm text-gray-500 flex items-center'>
              <span className='mr-1'>📍</span>
              {freelancer.location}
            </p>
          </div>
        )}

        {/* Rating */}
        <div className='flex items-center mb-3'>
          <div className='flex items-center mr-2'>
            {renderStars(freelancer.rating)}
          </div>
          <span className='text-sm text-gray-600'>
            ({freelancer.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className='mb-4'>
          <span className='text-lg font-semibold text-gray-900'>
            From ${freelancer.price}
          </span>
        </div>

        {/* See More Button */}
        <button className='w-full bg-success-600 text-white py-2 px-4 rounded-md hover:bg-success-700 transition-all duration-200 font-medium hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0'>
          See More
        </button>
      </div>
    </div>
  );
};

export default FreelancerCard;
