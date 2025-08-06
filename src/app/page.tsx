import { Suspense } from "react";
import HomePageClient from "@/components/HomePageClient";

function LoadingFallback() {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex-1 container mx-auto px-4 py-8'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>
            Browse Freelancers
          </h1>
          <div className='animate-pulse'>
            <div className='h-12 bg-gray-200 rounded-lg mb-4'></div>
            <div className='flex gap-4 mb-4'>
              <div className='h-10 bg-gray-200 rounded w-32'></div>
              <div className='h-10 bg-gray-200 rounded w-32'></div>
              <div className='h-10 bg-gray-200 rounded w-32'></div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className='h-64 bg-gray-200 rounded-lg animate-pulse'
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <HomePageClient />
    </Suspense>
  );
}
