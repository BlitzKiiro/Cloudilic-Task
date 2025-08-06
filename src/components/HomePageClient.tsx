"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import SearchFilters from "@/components/SearchFilters";
import FreelancerGrid from "@/components/FreelancerGrid";
import Footer from "@/components/Footer";
import { useFreelancerStore } from "@/store/freelancerStore";

export default function HomePageClient() {
  const searchParams = useSearchParams();
  const { initializeFromUrl, searchTerm } = useFreelancerStore();

  useEffect(() => {
    // Initialize store from URL parameters on page load
    initializeFromUrl(searchParams);
  }, [searchParams, initializeFromUrl]);

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      <main className='flex-1 container mx-auto px-4 py-8'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>
            {searchTerm ? `Results For "${searchTerm}"` : "Browse Freelancers"}
          </h1>
          <SearchFilters />
        </div>

        <FreelancerGrid />
      </main>

      <Footer />
    </div>
  );
}
