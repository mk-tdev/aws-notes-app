import { ServiceGroups } from "../aws-service-groups";
import { ServiceData } from "../aws-services";

export const aws_services_manage_gov: ServiceData[] = [
  {
    id: "ApplicationAutoScaling",
    name: "AWS Auto Scaling",
    description: [
      "AWS Auto Scaling monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost. Using AWS Auto Scaling, it’s easy to setup application scaling for multiple resources across multiple services in minutes. The service provides a simple, powerful user interface that lets you build scaling plans for resources including Amazon EC2 instances and Spot Fleets, Amazon ECS tasks, Amazon DynamoDB tables and indexes, and Amazon Aurora Replicas. AWS Auto Scaling makes scaling simple with recommendations that allow you to optimize performance, costs, or balance between them. If you’re already using Amazon EC2 Auto Scaling to dynamically scale your Amazon EC2 instances, you can now combine it with AWS Auto Scaling to scale additional resources for other AWS services. With AWS Auto Scaling, your applications always have the right resources at the right time.",
    ],
    icon: "/aws/svgs/ApplicationAutoScaling.svg",
    service_tag: [ServiceGroups.Management_and_governance.name],
  },
  {
    id: "MAN_GOV_Chatbot",
    name: "AWS Chatbot",
    description: [
      "AWS Chatbot is an interactive agent that makes it easy to monitor and interact with your AWS resources in your Slack channels and Amazon Chime chat rooms. With AWS Chatbot you can receive alerts, run commands to return diagnostic information, invoke AWS Lambda functions, and create AWS support cases.",
      "AWS Chatbot manages the integration between AWS services and your Slack channels or Amazon Chime chat rooms helping you to get started with ChatOps fast. With just a few clicks you can start receiving notifications and issuing commands in your chosen channels or chat rooms, so your team doesn’t have to switch contexts to collaborate. AWS Chatbot makes it easier for your team to stay updated, collaborate, and respond faster to operational events, security findings, CI/CD workflows, budget, and other alerts for applications running in your AWS accounts.",
    ],
    icon: "/aws/svgs/Chatbot.svg",
    service_tag: [ServiceGroups.Management_and_governance.name],
  },
  {
    id: "CloudFormation",
    name: "AWS CloudFormation",
    description: [
      "AWS CloudFormation gives developers and systems administrators an easy way to create and manage a collection of related AWS resources, provisioning and updating them in an orderly and predictable fashion.",
      "You can use the AWS CloudFormation sample templates or create your own templates to describe your AWS resources, and any associated dependencies or runtime parameters, required to run your application. You don’t need to figure out the order for provisioning AWS services or the subtleties of making those dependencies work. CloudFormation takes care of this for you. After the AWS resources are deployed, you can modify and update them in a controlled and predictable way, in effect applying version control to your AWS infrastructure the same way you do with your software. You can also visualize your templates as diagrams and edit them using a drag-and-drop interface with AWS Infrastructure Composer.",
    ],
    icon: "/aws/svgs/CloudFormation.svg",
    service_tag: [ServiceGroups.Management_and_governance.name],
  },
  {
    id: "CloudTrail",
    name: "AWS CloudTrail",
    description: [
      "AWS CloudTrail is a web service that records AWS API calls for your account and delivers log files to you. The recorded information includes the identity of the API caller, the time of the API call, the source IP address of the API caller, the request parameters, and the response elements returned by the AWS service.",
      "With CloudTrail, you can get a history of AWS API calls for your account, including API calls made using the AWS Management Console, AWS SDKs, command line tools, and higher-level AWS services (such as AWS CloudFormation). The AWS API call history produced by CloudTrail enables security analysis, resource change tracking, and compliance auditing.",
    ],
    icon: "/aws/svgs/CloudTrail.svg",
    service_tag: [ServiceGroups.Management_and_governance.name],
  },
  {
    id: "CloudWatch",
    name: "Amazon CloudWatch",
    description: [
      "Amazon CloudWatch is a monitoring and management service built for developers, system operators, site reliability engineers (SRE), and IT managers. CloudWatch provides you with data and actionable insights to monitor your applications, understand and respond to system-wide performance changes, optimize resource utilization, and get a unified view of operational health. CloudWatch collects monitoring and operational data in the form of logs, metrics, and events, providing you with a unified view of AWS resources, applications and services that run on AWS, and on-premises servers. You can use CloudWatch to set high resolution alarms, visualize logs and metrics side by side, take automated actions, troubleshoot issues, and discover insights to optimize your applications, and ensure they are running smoothly.",
    ],
    icon: "/aws/svgs/CloudWatch.svg",
    service_tag: [ServiceGroups.Management_and_governance.name],
  },
  {
    id: "ComputeOptimizer",
    name: "AWS Compute Optimizer",
    description: [
      "AWS Compute Optimizer recommends optimal AWS resources for your workloads to reduce costs and improve performance by using machine learning to analyze historical utilization metrics. Over-provisioning resources can lead to unnecessary infrastructure cost, and under-provisioning resources can lead to poor application performance. Compute Optimizer helps you choose optimal configurations for three types of AWS resources: Amazon EC2 instances, Amazon EBS volumes, and AWS Lambda functions, based on your utilization data.",
      "By applying the knowledge drawn from Amazon’s own experience running diverse workloads in the cloud, Compute Optimizer identifies workload patterns and recommends optimal AWS resources. Compute Optimizer analyzes the configuration and resource utilization of your workload to identify dozens of defining characteristics, for example, if a workload is CPU-intensive, if it exhibits a daily pattern, or if a workload accesses local storage frequently. The service processes these characteristics and identifies the hardware resource required by the workload. Compute Optimizer infers how the workload would have performed on various hardware platforms (such as Amazon EC2 instances types) or using different configurations (such as Amazon EBS volume IOPS settings, and AWS Lambda function memory sizes) to offer recommendations.",
      "Compute Optimizer is available to you at no additional charge. To get started, you can opt in to the service in the AWS Compute Optimizer Console.",
    ],
    icon: "/aws/svgs/ComputeOptimizer.svg",
    service_tag: [ServiceGroups.Management_and_governance.name],
  },
  {
    id: "ConsoleMobileApplication",
    name: "AWS Console Mobile Application",
    description: [
      "The AWS Console Mobile Application lets customers view and manage a select set of resources to support incident response while on-the-go.",
      "The AWS Console Mobile Application allows AWS customers to monitor resources through a dedicated dashboard and view configuration details, metrics, and alarms for select AWS services. The Dashboard provides permitted users with a single view a resource's status, with real-time data on Amazon CloudWatch, AWS Health Dashboard, and AWS Billing and Cost Management. Customers can view ongoing issues and follow through to the relevant CloudWatch alarm screen for a detailed view with graphs and configuration options. In addition, customers can check on the status of specific AWS services, view detailed resource screens, and perform select actions.",
    ],
    icon: "/aws/svgs/ConsoleMobileApplication.svg",
    service_tag: [ServiceGroups.Management_and_governance.name],
  },
  {
    id: "ControlTower",
    name: "AWS Control Tower",
    description: [
      "AWS Control Tower automates the set-up of a baseline environment, or landing zone, that is a secure, well-architected multi-account AWS environment. The configuration of the landing zone is based on best practices that have been established by working with thousands of enterprise customers to create a secure environment that makes it easier to govern AWS workloads with rules for security, operations, and compliance.",
      "As enterprises migrate to AWS, they typically have a large number of applications and distributed teams. They often want to create multiple accounts to allow their teams to work independently, while still maintaining a consistent level of security and compliance. In addition, they use AWS management and security services, such as AWS Organizations, Service Catalog and AWS Config, that provide very granular controls over their workloads. They want to maintain this control, but they also want a way to centrally govern and enforce the best use of AWS services across all the accounts in their environment.",
      "AWS Control Tower automates the set-up of their landing zone and configures AWS management and security services based on established best practices in a secure, compliant, multi-account environment. Distributed teams are able to provision new AWS accounts quickly, while central teams have the peace of mind knowing that new accounts are aligned with centrally established, company-wide compliance policies. This gives you control over your environment, without sacrificing the speed and agility AWS provides your development teams.",
    ],
    icon: "/aws/svgs/ControlTower.svg",
    service_tag: [ServiceGroups.Management_and_governance.name],
  },
  {
    id: "MAN_GOV_Config",
    name: "AWS Config",
    description: [
      "AWS Config is a fully managed service that provides you with an AWS resource inventory, configuration history, and configuration change notifications to enable security and governance. The AWS Config Rules feature enables you to create rules that automatically check the configuration of AWS resources recorded by AWS Config.",
      "With AWS Config, you can discover existing and deleted AWS resources, determine your overall compliance against rules, and dive into configuration details of a resource at any point in time. These capabilities enable compliance auditing, security analysis, resource change tracking, and troubleshooting.",
    ],
    icon: "/aws/svgs/Config.svg",
    service_tag: [ServiceGroups.Management_and_governance.name],
  },
  {
    id: "PersonalHealthDashboard",
    name: "AWS Health Dashboard",
    description: [
      "AWS Health Dashboard provides alerts and remediation guidance when AWS is experiencing events that might affect you. While the Service Health Dashboard displays the general status of AWS services, AWS Health Dashboard gives you a personalized view into the performance and availability of the AWS services underlying your AWS resources. The dashboard displays relevant and timely information to help you manage events in progress, and provides proactive notification to help you plan for scheduled activities. With AWS Health Dashboard, alerts are automatically initiated by changes in the health of AWS resources, giving you event visibility and guidance to help quickly diagnose and resolve issues.",
    ],
    icon: "/aws/svgs/PersonalHealthDashboard.svg",
    service_tag: [ServiceGroups.Management_and_governance.name],
  },
  {
    id: "AppWizard",
    name: "AWS Launch Wizard",
    description: [
      "AWS Launch Wizard offers a guided way of sizing, configuring, and deploying AWS resources for third party applications, such as Microsoft SQL Server Always On and HANA based SAP systems, without the need to manually identify and provision individual AWS resources. To start, you input your application requirements, including performance, number of nodes, and connectivity on the service console. Launch Wizard then identifies the right AWS resources, such as EC2 instances and EBS volumes, to deploy and run your application. Launch Wizard provides an estimated cost of deployment, and lets you modify your resources to instantly view an updated cost assessment. Once you approve the AWS resources, Launch Wizard automatically provisions and configures the selected resources to create a fully functioning, production-ready application.",
      "AWS Launch Wizard also creates CloudFormation templates that can serve as a baseline to accelerate subsequent deployments. Launch Wizard is available to you at no additional charge. You only pay for the AWS resources that are provisioned for running your solution.",
    ],
    icon: "/aws/svgs/AppWizard.svg",
    service_tag: [ServiceGroups.Management_and_governance.name],
  },
  {
    id: "LicenseManager",
    name: "AWS License Manager",
    description: [
      "AWS License Manager makes it easier to manage licenses in AWS and on-premises servers from software vendors such as Microsoft, SAP, Oracle, and IBM. AWS License Manager lets administrators create customized licensing rules that emulate the terms of their licensing agreements, and then enforces these rules when an instance of Amazon EC2 gets launched. Administrators can use these rules to limit licensing violations, such as using more licenses than an agreement stipulates or reassigning licenses to different servers on a short-term basis. The rules in AWS License Manager enable you to limit a licensing breach by physically stopping the instance from launching or by notifying administrators about the infringement. Administrators gain control and visibility of all their licenses with the AWS License Manager dashboard and reduce the risk of non-compliance, misreporting, and additional costs due to licensing overages.",
      "AWS License Manager integrates with AWS services to simplify the management of licenses across multiple AWS accounts, IT catalogs, and on-premises, through a single AWS account. License administrators can add rules in Service Catalog, which allows them to create and manage catalogs of IT services that are approved for use on all their AWS accounts. Through seamless integration with AWS Systems Manager and AWS Organizations, administrators can manage licenses across all the AWS accounts in an organization and on-premises environments. AWS Marketplace buyers can also use AWS License Manager to track bring your own license (BYOL) software obtained from the Marketplace and keep a consolidated view of all their licenses.",
    ],
    icon: "/aws/svgs/LicenseManager.svg",
    service_tag: [ServiceGroups.Management_and_governance.name],
  },
  {
    id: "ManagedGrafana",
    name: "Amazon Managed Grafana",
    description: [
      "Amazon Managed Grafana is a fully managed and secure data visualization service that you can use to instantly query, correlate, and visualize operational metrics, logs, and traces from multiple sources. Amazon Managed Grafana makes it easy to deploy, operate, and scale Grafana, a widely deployed open-source data visualization tool that is popular for its extensible data support.",
      "Amazon Managed Grafana provides built-in security features for compliance with corporate governance requirements, including single sign-on, data access control, and audit reporting. Amazon Managed Grafana integrates with AWS data sources, such as Amazon CloudWatch, Amazon OpenSearch Service, AWS X-Ray, AWS IoT SiteWise, Amazon Timestream, and Amazon Managed Service for Prometheus. Amazon Managed Grafana also supports many popular open-source, third party, and other cloud data sources.",
    ],
    icon: "/aws/svgs/ManagedGrafana.svg",
    service_tag: [ServiceGroups.Management_and_governance.name],
  },
  {
    id: "ManagedServiceforPrometheus",
    name: "Amazon Managed Service for Prometheus",
    description: [
      "Amazon Managed Service for Prometheus is a serverless, Prometheus-compatible monitoring service for container metrics that makes it easier to securely monitor container environments at scale. With Amazon Managed Service for Prometheus, you can use the same open-source Prometheus data model and query language that you use today to monitor the performance of your containerized workloads, and also enjoy improved scalability, availability, and security without having to manage the underlying infrastructure.",
      "Amazon Managed Service for Prometheus automatically scales the ingestion, storage, and querying of operational metrics as workloads scale up and down. It integrates with AWS security services to enable fast and secure access to data. Designed to be highly available, data ingested into a workspace is replicated across three Availability Zones in the same AWS Region.",
    ],
    icon: "/aws/svgs/ManagedServiceforPrometheus.svg",
    service_tag: [ServiceGroups.Management_and_governance.name],
  },
  {
    id: "Organizations",
    name: "AWS Organizations",
    description: [
      "AWS Organizations helps you centrally manage and govern your environment as you grow and scale your AWS resources. Using AWS Organizations, you can programmatically create new AWS accounts and allocate resources, group accounts to organize your workflows, apply policies to accounts or groups for governance, and simplify billing by using a single payment method for all of your accounts.",
      "In addition, AWS Organizations is integrated with other AWS services so you can define central configurations, security mechanisms, audit requirements, and resource sharing across accounts in your organization. AWS Organizations is available to all AWS customers at no additional charge.",
    ],
    icon: "/aws/svgs/Organizations.svg",
    service_tag: [ServiceGroups.Management_and_governance.name],
  },
  {
    id: "OpsWorks",
    name: "AWS OpsWorks",
    description: [
      "AWS OpsWorks is a configuration management service that provides managed instances of Chef and Puppet. Chef and Puppet are automation platforms that allow you to use code to automate the configurations of your servers. AWS OpsWorks lets you use Chef and Puppet to automate how servers are configured, deployed, and managed across your Amazon EC2 instances or on-premises compute environments. AWS OpsWorks has three offerings, AWS OpsWorks for Chef Automate, AWS OpsWorks for Puppet Enterprise, and AWS OpsWorks Stacks.",
    ],
    icon: "/aws/svgs/OpsWorks.svg",
    service_tag: [ServiceGroups.Management_and_governance.name],
  },
  {
    id: "Proton",
    name: "AWS Proton",
    description: [
      "AWS Proton is the first fully managed delivery service for container and serverless applications. Platform engineering teams can use AWS Proton to connect and coordinate all the different tools needed for infrastructure provisioning, code deployments, monitoring, and updates.",
      "Maintaining hundreds – or sometimes thousands – of microservices with constantly changing infrastructure resources and continuous integration/continuous delivery (CI/CD) configurations is a nearly impossible task for even the most capable platform teams.",
      "AWS Proton solves this by giving platform teams the tools they need to manage this complexity and enforce consistent standards, while making it easy for developers to deploy their code using containers and serverless technologies.",
    ],
    icon: "/aws/svgs/Proton.svg",
    service_tag: [ServiceGroups.Management_and_governance.name],
  },
  {
    id: "ServiceCatalog",
    name: "Service Catalog",
    description: [
      "Service Catalog allows organizations to create and manage catalogs of IT services that are approved for use on AWS. These IT services can include everything from virtual machine images, servers, software, and databases to complete multi-tier application architectures. Service Catalog allows you to centrally manage commonly deployed IT services and helps you achieve consistent governance and meet your compliance requirements, while enabling users to quickly deploy only the approved IT services they need.",
    ],
    icon: "/aws/svgs/ServiceCatalog.svg",
    service_tag: [ServiceGroups.Management_and_governance.name],
  },
  {
    id: "SystemsManager",
    name: "AWS Systems Manager",
    description: [
      "AWS Systems Manager gives you visibility and control of your infrastructure on AWS. Systems Manager provides a unified user interface so you can view operational data from multiple AWS services and allows you to automate operational tasks across your AWS resources. With Systems Manager, you can group resources, such as Amazon EC2 instances, Amazon S3 buckets, or Amazon RDS instances, by application, view operational data for monitoring and troubleshooting, and take action on your groups of resources. Systems Manager simplifies resource and application management, shortens the time to detect and resolve operational problems, and makes it easy to operate and manage your infrastructure securely at scale.",
    ],
    icon: "/aws/svgs/SystemsManager.svg",
    service_tag: [ServiceGroups.Management_and_governance.name],
  },
  {
    id: "TrustedAdvisor",
    name: "AWS Trusted Advisor",
    description: [
      "AWS Trusted Advisor is an online resource to help you reduce cost, increase performance, and improve security by optimizing your AWS environment. Trusted Advisor provides real-time guidance to help you provision your resources following AWS best practices.",
    ],
    icon: "/aws/svgs/TrustedAdvisor.svg",
    service_tag: [ServiceGroups.Management_and_governance.name],
  },
  {
    id: "WellArchitectTool",
    name: "AWS Well-Architected Tool",
    description: [
      "The AWS Well-Architected Tool (AWS WA Tool) helps you review the state of your workloads and compares them to the latest AWS architectural best practices. A workload is defined as any set of components that deliver business value, which could be an application or website. The tool is based on the AWS Well-Architected Framework, developed to help cloud architects build secure, high-performing, resilient, efficient, and sustainable application infrastructure.",
      "The Framework provides a consistent approach for customers and partners to evaluate architectures. It has been used in tens of thousands of workload reviews conducted by the AWS Solutions Architecture team and by customers, and provides guidance to help implement designs that scale with application needs over time.",
      "To use the AWS WA Tool, available in the AWS Management Console at no charge, just define your workload and answer a set of questions regarding operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability. The AWS WA Tool then provides a plan on how to architect for the cloud using established best practices.",
    ],
    icon: "/aws/svgs/WellArchitectTool.svg",
    service_tag: [ServiceGroups.Management_and_governance.name],
  },
];
