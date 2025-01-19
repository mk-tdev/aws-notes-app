"use client";

import Link from "next/link";
import Image from "next/image";
import { aws_services, ServiceData } from "@/data/aws-services";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

const ServicesList = () => {
  const searchParams = useSearchParams();
  const searchTermValue = searchParams.get("searchTerm");
  const [searchTerm, setSearchTerm] = useState<string>(searchTermValue || "");
  // Filter services based on search term
  const filteredServices: ServiceData[] = aws_services.filter((service) => {
    const term = searchTerm.toLowerCase();
    return (
      service.name.toLowerCase().includes(term) || // Match name
      service.service_tag.some((tag) => tag.toLowerCase().includes(term)) // Match tags
    );
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search AWS services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:outline-none text-white bg-gray-800"
        />

        <div>
          <p className="text-gray-500 text-sm mt-2">
            {filteredServices.length} services found
          </p>
          {/* to clear the search */}
          {searchTerm && (
            <button
              className="text-gray-500 text-sm underline mt-2"
              onClick={() => setSearchTerm("")}
            >
              Clear Search
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
        {filteredServices.length > 0 ? (
          <>
            {filteredServices.map((service) => (
              <article
                key={service.id}
                className="p-3 flex justify-center flex-col items-center shadow-md shadow-gray-700"
              >
                <Link
                  href={{
                    pathname: `/aws-notes/services/${service.id}`,
                    query: { searchTerm: searchTerm },
                  }}
                >
                  <Image
                    src={service.icon}
                    alt={service.name}
                    width={45}
                    height={45}
                    className="h-16 w-16"
                  />
                </Link>
                <div className="flex justify-center flex-col items-center flex-1">
                  <h2 className="text-lg font-medium text-center">
                    {service.name}
                  </h2>
                </div>
              </article>
            ))}
          </>
        ) : (
          <>
            <p className="text-center col-span-full text-lg text-gray-500">
              No services found. Please refine your search!
            </p>
          </>
        )}
      </div>
    </Suspense>
  );
};

export default ServicesList;
