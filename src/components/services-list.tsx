"use client";

import { aws_services, ServiceData } from "@/data/aws-services";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ServiceGroups } from "@/data/aws-service-groups";
import AWSServicesGroup from "./service-group-lists/aws-services-group";
import { aws_services_management } from "@/data/services/aws_services_management";
import { aws_services_analytics } from "@/data/services/aws_services_analytics";
import { aws_services_application_integration } from "@/data/services/aws_services_application_integration";
import { aws_services_block_chain } from "@/data/services/aws_services_block_chain";
import { aws_services_dev_tools } from "@/data/services/aws_services_dev_tools";
import { aws_services_databases } from "@/data/services/aws_services_databases";
import { aws_services_cloud_fin_manage } from "@/data/services/aws_services_cloud_fin_manage";
import { aws_services_business_app } from "@/data/services/aws_services_business_app";
import { aws_services_customer_enable } from "@/data/services/aws_services_customer_enable";
import { aws_services_compute } from "@/data/services/aws_services_compute";
import { aws_services_containers } from "@/data/services/aws_services_containers";
import { aws_services_end_user_compute } from "@/data/services/aws_services_end_user_compute";
import { aws_services_front_end } from "@/data/services/aws_services_front_end";
import { aws_services_game_tech } from "@/data/services/aws_services_game_tech";
import { aws_services_iot } from "@/data/services/aws_services_iot";
import { aws_services_ml_ai } from "@/data/services/aws_services_ml_ai";
import { aws_services_media } from "@/data/services/aws_services_media";
import { aws_services_manage_gov } from "@/data/services/aws_services_manage_gov";
import { aws_services_quantum } from "@/data/services/aws_services_quantum";
import { aws_services_networking_cdn } from "@/data/services/aws_services_networking_cdn";
import { aws_services_migration_transfer } from "@/data/services/aws_services_migration_transfer";
import { aws_services_robotics } from "@/data/services/aws_services_robotics";
import { aws_services_satellite } from "@/data/services/aws_services_satellite";
import { aws_services_sec_iam_compliance } from "@/data/services/aws_services_sec_iam_compliance";
import { aws_services_storage } from "@/data/services/aws_services_storage";

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

      <AWSServicesGroup
        serviceGroupName={ServiceGroups.ACCESSING_AWS_SERVICES.name}
        searchTerm={searchTerm}
        aws_services_for_group={aws_services_management}
      />
      <AWSServicesGroup
        serviceGroupName={ServiceGroups.Analytics.name}
        searchTerm={searchTerm}
        aws_services_for_group={aws_services_analytics}
      />
      <AWSServicesGroup
        serviceGroupName={ServiceGroups.Application_integration.name}
        searchTerm={searchTerm}
        aws_services_for_group={aws_services_application_integration}
      />
      <AWSServicesGroup
        serviceGroupName={ServiceGroups.Blockchain.name}
        searchTerm={searchTerm}
        aws_services_for_group={aws_services_block_chain}
      />
      <AWSServicesGroup
        serviceGroupName={ServiceGroups.Business_applications.name}
        searchTerm={searchTerm}
        aws_services_for_group={aws_services_business_app}
      />
      <AWSServicesGroup
        serviceGroupName={ServiceGroups.Cloud_Financial_Management.name}
        searchTerm={searchTerm}
        aws_services_for_group={aws_services_cloud_fin_manage}
      />
      <AWSServicesGroup
        serviceGroupName={ServiceGroups.Compute.name}
        searchTerm={searchTerm}
        aws_services_for_group={aws_services_compute}
      />
      <AWSServicesGroup
        serviceGroupName={ServiceGroups.Customer_enablement.name}
        searchTerm={searchTerm}
        aws_services_for_group={aws_services_customer_enable}
      />
      <AWSServicesGroup
        serviceGroupName={ServiceGroups.Containers.name}
        searchTerm={searchTerm}
        aws_services_for_group={aws_services_containers}
      />
      <AWSServicesGroup
        serviceGroupName={ServiceGroups.Databases.name}
        searchTerm={searchTerm}
        aws_services_for_group={aws_services_databases}
      />
      <AWSServicesGroup
        serviceGroupName={ServiceGroups.Developer_tools.name}
        searchTerm={searchTerm}
        aws_services_for_group={aws_services_dev_tools}
      />
      <AWSServicesGroup
        serviceGroupName={ServiceGroups.End_user_computing.name}
        searchTerm={searchTerm}
        aws_services_for_group={aws_services_end_user_compute}
      />
      <AWSServicesGroup
        serviceGroupName={ServiceGroups.Frontend_web_and_mobile_services.name}
        searchTerm={searchTerm}
        aws_services_for_group={aws_services_front_end}
      />
      <AWSServicesGroup
        serviceGroupName={ServiceGroups.Game_tech.name}
        searchTerm={searchTerm}
        aws_services_for_group={aws_services_game_tech}
      />
      <AWSServicesGroup
        serviceGroupName={ServiceGroups.Internet_of_Things.name}
        searchTerm={searchTerm}
        aws_services_for_group={aws_services_iot}
      />
      <AWSServicesGroup
        serviceGroupName={
          ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name
        }
        searchTerm={searchTerm}
        aws_services_for_group={aws_services_ml_ai}
      />
      <AWSServicesGroup
        serviceGroupName={ServiceGroups.Management_and_governance.name}
        searchTerm={searchTerm}
        aws_services_for_group={aws_services_manage_gov}
      />
      <AWSServicesGroup
        serviceGroupName={ServiceGroups.Media.name}
        searchTerm={searchTerm}
        aws_services_for_group={aws_services_media}
      />
      <AWSServicesGroup
        serviceGroupName={ServiceGroups.Migration_and_transfer.name}
        searchTerm={searchTerm}
        aws_services_for_group={aws_services_migration_transfer}
      />
      <AWSServicesGroup
        serviceGroupName={ServiceGroups.Networking_and_content_delivery.name}
        searchTerm={searchTerm}
        aws_services_for_group={aws_services_networking_cdn}
      />
      <AWSServicesGroup
        serviceGroupName={ServiceGroups.Quantum_technologies.name}
        searchTerm={searchTerm}
        aws_services_for_group={aws_services_quantum}
      />
      <AWSServicesGroup
        serviceGroupName={ServiceGroups.Robotics.name}
        searchTerm={searchTerm}
        aws_services_for_group={aws_services_robotics}
      />
      <AWSServicesGroup
        serviceGroupName={ServiceGroups.Satellite.name}
        searchTerm={searchTerm}
        aws_services_for_group={aws_services_satellite}
      />
      <AWSServicesGroup
        serviceGroupName={ServiceGroups.Security_identity_and_compliance.name}
        searchTerm={searchTerm}
        aws_services_for_group={aws_services_sec_iam_compliance}
      />
      <AWSServicesGroup
        serviceGroupName={ServiceGroups.Storage.name}
        searchTerm={searchTerm}
        aws_services_for_group={aws_services_storage}
      />

      {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
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
          <>
            <p className="text-center col-span-full text-lg text-gray-500">
              No services found. Please refine your search!
            </p>
          </>
        )}
      </div> */}
    </Suspense>
  );
};

export default ServicesList;
