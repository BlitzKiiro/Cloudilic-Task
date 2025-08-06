"use client";

import React, { useEffect, useRef } from "react";
import { useFreelancerStore } from "@/store/freelancerStore";
import FreelancerCard from "@/components/FreelancerCard";

const FreelancerGrid = () => {
  const { filteredFreelancers, displayedCount, showMore } =
    useFreelancerStore();
  const hasInitiallyLoaded = useRef(false);

  const displayedFreelancers = filteredFreelancers.slice(0, displayedCount);
  const hasMore = filteredFreelancers.length > displayedCount;

  // Mark as initially loaded after first render
  useEffect(() => {
    if (!hasInitiallyLoaded.current && filteredFreelancers.length > 0) {
      hasInitiallyLoaded.current = true;
    }
  }, [filteredFreelancers.length]);

  if (filteredFreelancers.length === 0) {
    return (
      <div className='text-center py-12'>
        <div className='text-gray-500 text-lg mb-2'>No freelancers found</div>
        <div className='text-gray-400 text-sm'>
          Try adjusting your search criteria
        </div>
      </div>
    );
  }

  return (
    <div className='space-y-6'>
      {/* Results count */}
      <div className='text-sm text-gray-600'>
        {filteredFreelancers.length} Result
        {filteredFreelancers.length !== 1 ? "s" : ""}
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {displayedFreelancers.map((freelancer, index) => (
          <div
            key={freelancer.id}
            className={hasInitiallyLoaded.current ? "" : "animate-fadeIn"}
            style={
              hasInitiallyLoaded.current
                ? {}
                : {
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "both",
                  }
            }
          >
            <FreelancerCard freelancer={freelancer} />
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {hasMore && (
        <div className='text-center pt-8'>
          <button
            onClick={showMore}
            className='bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors duration-200'
          >
            Show More Results ({filteredFreelancers.length - displayedCount}{" "}
            remaining)
          </button>
        </div>
      )}
    </div>
  );
};

export default FreelancerGrid;
