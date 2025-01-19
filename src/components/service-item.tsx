"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { ServiceData } from "@/data/aws-services";
import { Suspense } from "react";

interface ServiceItemProps {
  service: ServiceData;
}

export default function ServiceItem({ service }: ServiceItemProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  const handleClick = () => {
    router.push(`/aws-notes?searchTerm=${searchTerm}`);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
        <Image
          src={service.icon}
          alt={service.name}
          width={128}
          height={128}
          className="h-32 w-32 mb-6"
        />
        {service.description.map((desc, index) => (
          <p className="text-lg mb-5" key={service.id + index}>
            {desc}
          </p>
        ))}

        <button
          className="mt-4 bg-yellow-700 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          onClick={handleClick}
        >
          Back to All Services
        </button>
      </div>
    </Suspense>
  );
}
