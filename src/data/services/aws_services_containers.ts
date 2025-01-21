import { ServiceGroups } from "../aws-service-groups";
import { ServiceData } from "../aws-services";

export const aws_services_containers: ServiceData[] = [
  {
    id: "ElasticContainerRegistry",
    name: "Amazon Elastic Container Registry",
    description: [
      "Amazon Elastic Container Registry (Amazon ECR) is a fully managed Docker container registry that makes it easy for developers to store, manage, and deploy Docker container images. Amazon ECR is integrated with Amazon Elastic Container Service (Amazon ECS), simplifying your development to production workﬂow. Amazon ECR eliminates the need to operate your own container repositories or worry about scaling the underlying infrastructure. Amazon ECR hosts your images in a highly available and scalable architecture, allowing you to reliably deploy containers for your applications. Integration with AWS Identity and Access Management (IAM) provides resource-level control of each repository. With Amazon ECR, there are no upfront fees or commitments. You pay only for the amount of data you store in your repositories and data transferred to the internet.",
    ],
    icon: "/aws/svgs/ElasticContainerRegistry.svg",
    service_tag: [ServiceGroups.Containers.name],
  },
  {
    id: "ElasticContainerService",
    name: "Amazon Elastic Container Service",
    description: [
      "Amazon Elastic Container Service (Amazon ECS) is a highly scalable, high-performance container orchestration service that supports Docker containers and allows you to easily run and scale containerized applications on AWS. Amazon ECS eliminates the need for you to install and operate your own container orchestration software, manage and scale a cluster of virtual machines (VMs), or schedule containers on those VMs.",
      "With simple API calls, you can launch and stop Docker-enabled applications, query the complete state of your application, and access many familiar features such as IAM roles, security groups, load balancers, Amazon CloudWatch Events, AWS CloudFormation templates, and AWS CloudTrail logs.",
    ],
    icon: "/aws/svgs/ElasticContainerService.svg",
    service_tag: [ServiceGroups.Containers.name],
  },
  {
    id: "ElasticContainerKubernetes",
    name: "Amazon Elastic Kubernetes Service",
    description: [
      "Amazon Elastic Kubernetes Service (Amazon EKS) makes it easy to deploy, manage, and scale containerized applications using Kubernetes on AWS.",
      "Amazon EKS runs the Kubernetes management infrastructure for you across multiple AWS Availability Zones to eliminate a single point of failure. Amazon EKS is certified Kubernetes conformant so you can use existing tooling and plugins from partners and the Kubernetes community. Applications running on any standard Kubernetes environment are fully compatible and can be easily migrated to Amazon EKS.",
    ],
    icon: "/aws/svgs/ElasticContainerKubernetes.svg",
    service_tag: [ServiceGroups.Containers.name],
  },
  {
    id: "ToolsandSDKs_2",
    name: "AWS App2Container",
    description: [
      "AWS App2Container (A2C) is a command-line tool for modernizing .NET and Java applications into containerized applications. A2C analyzes and builds an inventory of all applications running in VMs, on-premises or in the cloud. You simply select the application you want to containerize, and A2C packages the application artifact and identified dependencies into container images, configures the network ports, and generates the ECS task and Kubernetes pod definitions. A2C provisions, through AWS CloudFormation, the cloud infrastructure and CI/CD pipelines required to deploy the containerized .NET or Java application into production. With A2C, you can easily modernize your existing applications and standardize the deployment and operations through containers.",
    ],
    icon: "/aws/svgs/ToolsandSDKs.svg",
    service_tag: [ServiceGroups.Containers.name],
  },
  {
    id: "RedHatOpenShiftServiceonAWS",
    name: "Red Hat OpenShift Service on AWS",
    description: [
      "Red Hat OpenShift Service on AWS (ROSA) provides an integrated experience to use OpenShift. If you are already familiar with OpenShift, you can accelerate your application development process by leveraging familiar OpenShift APIs and tools for deployments on AWS. With ROSA, you can use the wide range of AWS compute, database, analytics, machine learning (ML), networking, mobile, and other services to build secure and scalable applications faster. ROSA comes with pay-as-you-go hourly and annual billing, a 99.95% SLA, and joint support from AWS and Red Hat.",
      "ROSA makes it easier for you to focus on deploying applications and accelerating innovation by moving the cluster lifecycle management to Red Hat and AWS. With ROSA, you can run containerized applications with your existing OpenShift workflows and reduce the complexity of management.",
    ],
    icon: "/aws/svgs/RedHatOpenShiftServiceonAWS.svg",
    service_tag: [ServiceGroups.Containers.name],
  },
];
