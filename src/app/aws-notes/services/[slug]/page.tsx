import { aws_services } from "@/data/aws-services";
import ServiceItem from "@/components/service-item";
// import { KeyValue } from "@/data/common.types";

interface ServicesPageProps {
  params: never;
}

export default async function ServiceDetails({ params }: ServicesPageProps) {
  const { slug } = params;

  const service = aws_services.find((service) => service.id === slug);

  if (!service) {
    return <p className="text-center text-lg mt-6">Service not found.</p>;
  }

  return <ServiceItem service={service} />;
}
