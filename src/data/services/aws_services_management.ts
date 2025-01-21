import { ServiceGroups } from "../aws-service-groups";
import { ServiceData } from "../aws-services";

export const aws_services_management: ServiceData[] = [
  {
    id: "ManagementConsole",
    name: "AWS Management Console",
    description: [
      "Access and manage Amazon Web Services through the AWS Management Console, a simple and intuitive user interface. You can also use the AWS Management Console Application to quickly view resources on the go.",
    ],
    icon: "/aws/svgs/ManagementConsole.svg",
    service_tag: [ServiceGroups.ACCESSING_AWS_SERVICES.name],
  },
  {
    id: "CommandLineInterface",
    name: "AWS Command Line Interface (AWS CLI)",
    description: [
      "The AWS Command Line Interface (AWS CLI) is a unified tool to manage your AWS services. With just one tool to download and configure, you can control multiple AWS services from the command line and automate them through scripts.",
      "AWS CloudShell, which can be found next to the search bar in the AWS Management Console, provides a browser-based shell that is pre-authenticated with your console credentials. Using CloudShell, you can quickly run AWS commands and scripts without leaving your web browser.",
    ],
    icon: "/aws/svgs/CommandLineInterface.svg",
    service_tag: [ServiceGroups.ACCESSING_AWS_SERVICES.name],
  },
  {
    id: "ToolsandSDKs",
    name: "Software Development Kits (SDKs)",
    description: [
      "Our Software Development Kits (SDKs) simplify using AWS services in your applications with an Application Program Interface (API) tailored to your programming language or platform.",
    ],
    icon: "/aws/svgs/ToolsandSDKs.svg",
    service_tag: [ServiceGroups.ACCESSING_AWS_SERVICES.name],
  },
];
