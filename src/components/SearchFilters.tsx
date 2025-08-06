"use client";

import React from "react";
import { Search, ChevronDown } from "lucide-react";
import { useFreelancerStore } from "@/store/freelancerStore";

const SearchFilters = () => {
  const {
    searchTerm,
    filters,
    sortBy,
    setSearchTerm,
    setFilters,
    setSortBy,
    filteredFreelancers,
  } = useFreelancerStore();

  return (
    <div className='space-y-4'>
      {/* Search Bar */}
      <div className='relative'>
        <Search
          className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
          size={20}
        />
        <input
          type='text'
          placeholder='Find Freelancers'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-success-500 focus:border-transparent'
        />
        <button className='absolute right-3 top-1/2 transform -translate-y-1/2 bg-success-600 text-white px-4 py-1.5 rounded-md hover:bg-success-700 transition-all duration-200 hover:shadow-md active:scale-95'>
          Search
        </button>
      </div>

      {/* Filters and Sort Row */}
      <div className='flex flex-wrap gap-4 items-center justify-between'>
        {/* Filter Dropdowns */}
        <div className='flex flex-wrap gap-4'>
          {/* Service Category */}
          <div className='relative'>
            <select
              value={filters.serviceCategory}
              onChange={(e) => setFilters({ serviceCategory: e.target.value })}
              className='select-field appearance-none pr-8 min-w-[140px]'
            >
              <option value=''>Service Options</option>
              <option value='photographer'>Photographer</option>
              <option value='ui/ux designer'>UI/UX Designer</option>
              <option value='web developer'>Web Developer</option>
              <option value='graphic designer'>Graphic Designer</option>
              <option value='content writer'>Content Writer</option>
              <option value='video editor'>Video Editor</option>
            </select>
            <ChevronDown
              className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400'
              size={16}
            />
          </div>

          {/* Levels */}
          <div className='relative'>
            <select
              value={filters.sellerDetails}
              onChange={(e) => setFilters({ sellerDetails: e.target.value })}
              className='select-field appearance-none pr-8 min-w-[120px]'
            >
              <option value=''>All Levels</option>
              <option value='level1'>Level 1</option>
              <option value='level2'>Level 2</option>
              <option value='level3'>Level 3</option>
            </select>
            <ChevronDown
              className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400'
              size={16}
            />
          </div>

          {/* Budget */}
          <div className='relative'>
            <select
              value={filters.budget}
              onChange={(e) => setFilters({ budget: e.target.value })}
              className='select-field appearance-none pr-8 min-w-[100px]'
            >
              <option value=''>All Budgets</option>
              <option value='0-20'>$0 - $20</option>
              <option value='20-50'>$20 - $50</option>
              <option value='50-100'>$50 - $100</option>
              <option value='100+'>$100+</option>
            </select>
            <ChevronDown
              className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400'
              size={16}
            />
          </div>

          {/* Delivery Time */}
          <div className='relative'>
            <select
              value={filters.deliveryTime}
              onChange={(e) => setFilters({ deliveryTime: e.target.value })}
              className='select-field appearance-none pr-8 min-w-[120px]'
            >
              <option value=''>All Delivery Times</option>
              <option value='24h'>24 hours</option>
              <option value='3d'>3 days</option>
              <option value='1w'>1 week</option>
              <option value='1m'>1 month</option>
            </select>
            <ChevronDown
              className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400'
              size={16}
            />
          </div>

          {/* Location Input */}
          <input
            type='text'
            placeholder='Location'
            value={filters.location}
            onChange={(e) => setFilters({ location: e.target.value })}
            className='input-field min-w-[120px]'
          />
        </div>

        {/* Sort Dropdown */}
        <div className='flex items-center gap-4'>
          <span className='text-sm text-gray-600'>
            {filteredFreelancers.length} Results
          </span>
          <div className='relative'>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className='select-field appearance-none pr-8 min-w-[120px]'
            >
              <option value='all'>Sort by: All</option>
              <option value='most-rated'>Most Rated</option>
              <option value='lowest-rated'>Lowest Rated</option>
              <option value='highest-price'>Highest Price</option>
              <option value='lowest-price'>Lowest Price</option>
            </select>
            <ChevronDown
              className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400'
              size={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
