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
import { aws_services_manage_gov } from "./services/neww/aws_services_manage_gov";
import { aws_services_media } from "./services/neww/aws_services_media";
import { aws_services_migration_transfer } from "./services/neww/aws_services_migration_transfer";
import { aws_services_ml_ai } from "./services/neww/aws_services_ml_ai";
import { aws_services_networking_cdn } from "./services/neww/aws_services_networking_cdn";
import { aws_services_quantum } from "./services/aws_services_quantum";
import { aws_services_robotics } from "./services/aws_services_robotics";
import { aws_services_satellite } from "./services/aws_services_satellite";

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
  ...aws_services_ml_ai,
  ...aws_services_manage_gov,
  ...aws_services_media,
  ...aws_services_migration_transfer,
  ...aws_services_networking_cdn,
  ...aws_services_quantum,
  ...aws_services_robotics,
  ...aws_services_satellite,
  ...aws_services_iot,
  ...aws_services_compute,
  ...aws_services_customer_enable,
  ...aws_services_containers,
  ...aws_services_sec_iam_compliance,
  ...aws_services_storage,
];
