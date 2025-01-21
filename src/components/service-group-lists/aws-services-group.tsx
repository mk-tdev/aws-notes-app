import Link from "next/link";
import Image from "next/image";
import { ServiceData } from "@/data/aws-services";

interface ServiceGroup {
  searchTerm: string;
  serviceGroupName: string;
  aws_services_for_group: ServiceData[];
}

const AWSServicesGroup = ({
  searchTerm,
  serviceGroupName,
  aws_services_for_group,
}: ServiceGroup) => {
  const filteredServices: ServiceData[] = aws_services_for_group.filter(
    (service) => {
      const term = searchTerm.toLowerCase();
      return (
        service.name.toLowerCase().includes(term) || // Match name
        service.service_tag.some((tag) => tag.toLowerCase().includes(term)) // Match tags
      );
    }
  );

  if (filteredServices.length === 0) {
    return <></>;
  }

  return (
    <div>
      <div className="py-3">
        <p className="underline text-lg font-semibold text-gray-500">
          {serviceGroupName}({filteredServices.length})
        </p>
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
                    query: searchTerm ? { searchTerm: searchTerm } : {},
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
          <></>
        )}
      </div>
    </div>
  );
};

export default AWSServicesGroup;
