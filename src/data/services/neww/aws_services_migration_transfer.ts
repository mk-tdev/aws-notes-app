import { ServiceGroups } from "../../aws-service-groups";
import { ServiceData } from "../../aws-services";

export const aws_services_migration_transfer: ServiceData[] = [
  {
    id: "ApplicationDiscoveryService",
    name: "AWS Application Discovery Service",
    description: ["data", "data", "data"],
    icon: "/aws/svgs/ApplicationDiscoveryService.svg",
    service_tag: [ServiceGroups.Migration_and_transfer],
  },
  {
    id: "ApplicationMigrationService",
    name: "AWS Application Migration Service",
    description: ["data", "data", "data"],
    icon: "/aws/svgs/ApplicationMigrationService.svg",
    service_tag: [ServiceGroups.Migration_and_transfer],
  },
  {
    id: "MIG_DatabaseMigration",
    name: "AWS Database Migration Service",
    description: ["data", "data", "data"],
    icon: "/aws/svgs/DatabaseMigration.svg",
    service_tag: [ServiceGroups.Migration_and_transfer],
  },
  {
    id: "MainframeModernization",
    name: "AWS Mainframe Modernization Service",
    description: ["data", "data", "data"],
    icon: "/aws/svgs/MainframeModernization.svg",
    service_tag: [ServiceGroups.Migration_and_transfer],
  },
  {
    id: "MigrationHub",
    name: "AWS Migration Hub",
    description: ["data", "data", "data"],
    icon: "/aws/svgs/MigrationHub.svg",
    service_tag: [ServiceGroups.Migration_and_transfer],
  },
  {
    id: "MIG_Snowball",
    name: "AWS Snow Family",
    description: ["data", "data", "data"],
    icon: "/aws/svgs/Snowball.svg",
    service_tag: [ServiceGroups.Migration_and_transfer],
  },
  {
    id: "DataSync",
    name: "AWS DataSync",
    description: ["data", "data", "data"],
    icon: "/aws/svgs/DataSync.svg",
    service_tag: [ServiceGroups.Migration_and_transfer],
  },
  {
    id: "TransferFamily",
    name: "AWS Transfer Family",
    description: ["data", "data", "data"],
    icon: "/aws/svgs/TransferFamily.svg",
    service_tag: [ServiceGroups.Migration_and_transfer],
  },
];
