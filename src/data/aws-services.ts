import { ServiceGroups } from "./aws-service-groups";
import { aws_services_analytics } from "./services/aws_services_analytics";
import { aws_services_application_integration } from "./services/aws_services_application_integration";
import { aws_services_block_chain } from "./services/aws_services_block_chain";
import { aws_services_business_app } from "./services/aws_services_business_app";
import { aws_services_cloud_fin_manage } from "./services/aws_services_cloud_fin_manage";
import { aws_services_compute } from "./services/aws_services_compute";
import { aws_services_containers } from "./services/aws_services_containers";
import { aws_services_customer_enable } from "./services/aws_services_customer_enable";
import { aws_services_databases } from "./services/aws_services_databases";
import { aws_services_dev_tools } from "./services/aws_services_dev_tools";
import { aws_services_end_user_compute } from "./services/aws_services_end_user_compute";
import { aws_services_front_end } from "./services/aws_services_front_end";
import { aws_services_game_tech } from "./services/aws_services_game_tech";
import { aws_services_iot } from "./services/aws_services_iot";
import { aws_services_management } from "./services/aws_services_management";
import { aws_services_sec_iam_compliance } from "./services/aws_services_sec_iam_compliance";
import { aws_services_storage } from "./services/aws_services_storage";

export interface ServiceData {
  id: string;
  name: string;
  description: string[];
  icon: string;
  service_tag: string[];
}

export const testData = {
  id: "ManagementConsole",
  name: "name",
  description: ["desc", "desc"],
  icon: "/aws/svgs/ManagementConsole.svg",
  service_tag: [ServiceGroups.ACCESSING_AWS_SERVICES],
};

export const aws_services_ml_ai: ServiceData[] = [];
export const aws_services_manage_gov: ServiceData[] = [];
export const aws_services_media: ServiceData[] = [];
export const aws_services_migration_transfer: ServiceData[] = [];
export const aws_services_networking_cdn: ServiceData[] = [];
export const aws_services_quantum: ServiceData[] = [];
export const aws_services_robotics: ServiceData[] = [];
export const aws_services_satellite: ServiceData[] = [];

export const aws_services: ServiceData[] = [
  ...aws_services_management,
  ...aws_services_analytics,
  ...aws_services_application_integration,
  ...aws_services_block_chain,
  ...aws_services_business_app,
  ...aws_services_cloud_fin_manage,
  ...aws_services_databases,
  ...aws_services_dev_tools,
  ...aws_services_end_user_compute,
  ...aws_services_front_end,
  ...aws_services_game_tech,
  ...aws_services_iot,
  ...aws_services_compute,
  ...aws_services_customer_enable,
  ...aws_services_containers,
  ...aws_services_sec_iam_compliance,
  ...aws_services_storage,
];
