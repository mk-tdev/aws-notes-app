"use client";

import { useRouter, useSearchParams } from "next/navigation";

const ServiceItemHeader = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  const handleClick = () => {
    router.push(`/aws-notes?searchTerm=${searchTerm}`);
  };

  const handleHomeClick = () => {
    router.push(`/`);
  };

  return (
    <header className="p-4 flex flex-row justify-between items-center">
      <h1>Details</h1>

      <div className=" flex flex-row justify-between items-center">
        <button
          className="bg-gray-800 text-white px-4 py-2 mt-4 rounded-lg"
          onClick={handleClick}
        >
          Back to services
        </button>
        <button
          className="bg-gray-800 text-white px-4 py-2 mt-4 rounded-lg ml-4"
          onClick={handleHomeClick}
        >
          Home
        </button>
      </div>
    </header>
  );
};

export default ServiceItemHeader;
