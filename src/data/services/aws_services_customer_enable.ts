import { ServiceGroups } from "../aws-service-groups";
import { ServiceData } from "../aws-services";

export const aws_services_customer_enable: ServiceData[] = [
  {
    id: "CusManagedServices",
    name: "AWS Managed Services",
    description: [
      "AWS Managed Services provides ongoing management of your AWS infrastructure so you can focus on your applications. By implementing best practices to maintain your infrastructure, AWS Managed Services helps to reduce your operational overhead and risk. AWS Managed Services automates common activities such as change requests, monitoring, patch management, security, and backup services, and provides full lifecycle services to provision, run, and support your infrastructure. Our rigor and controls help to enforce your corporate and security infrastructure policies, and enables you to develop solutions and applications using your preferred development approach. AWS Managed Services improves agility, reduces cost, and unburdens you from infrastructure operations so that you can direct resources toward differentiating your business.",
    ],
    icon: "/aws/svgs/CusManagedServices.svg",
    service_tag: [ServiceGroups.Blockchain.name],
  },
  {
    id: "rePost",
    name: "AWS re:Post",
    description: [
      "AWS re:Post Private is a private version of AWS re:Post for enterprises with Enterprise Support or Enterprise On-Ramp Support plans. It provides access to knowledge and experts to accelerate cloud adoption and increase developer productivity. With your organization-specific re:Post Private, you can build an organization-specific developer community that drives efficiencies at scale and provides access to valuable knowledge resources. re:Post Private centralizes trusted AWS technical content and offers private discussion forums to improve how your teams collaborate internally and with AWS to remove technical obstacles, accelerate innovation, and scale more efficiently in the cloud.",
    ],
    icon: "/aws/svgs/rePost.svg",
    service_tag: [ServiceGroups.Blockchain.name],
  },
];
