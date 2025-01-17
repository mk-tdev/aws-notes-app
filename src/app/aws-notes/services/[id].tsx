import { useRouter } from "next/router";
import Image from "next/image";

import { aws_services } from "@/data/aws-services";

export default function ServiceDetails() {
  const router = useRouter();
  const { id } = router.query;

  // Find the service details based on the ID
  const service = aws_services.find((service) => service.id === id);

  if (!service) {
    return <p className="text-center text-lg mt-6">Service not found.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
      <Image
        src={service.icon}
        alt={service.name}
        width={128}
        height={128}
        className="h-32 w-32 mb-6 mx-auto"
      />
      <p className="text-lg">{service.description}</p>
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        onClick={() => router.push("/")}
      >
        Back to All Services
      </button>
    </div>
  );
}
