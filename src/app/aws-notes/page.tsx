import Link from "next/link";
import Image from "next/image";
import { aws_services } from "@/data/aws-services";

const AWSNotes = () => {
  return (
    <div>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">AWS Services</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {aws_services.map((service) => (
            <Link key={service.id} href={`/aws-notes/services/${service.id}`}>
              <Image
                src={service.icon}
                alt={service.name}
                width={45}
                height={45}
                className="h-16 w-16"
              />
              {/* <img src={service.icon} alt={service.name} className="h-16 w-16 mb-4 group-hover:scale-110 transition-transform" /> */}
              <h2 className="text-lg font-medium">{service.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AWSNotes;
