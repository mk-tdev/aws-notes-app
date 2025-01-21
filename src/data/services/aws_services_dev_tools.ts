import { ServiceGroups } from "../aws-service-groups";
import { ServiceData } from "../aws-services";

export const aws_services_dev_tools: ServiceData[] = [
  {
    id: "ApplicationComposer",
    name: "AWS Infrastructure Composer",
    description: [
      "AWS Infrastructure Composer helps you visually compose and configure serverless applications from AWS services backed by deployment-ready infrastructure as code (IaC). Infrastructure Composer helps you drag and drop serverless resources onto a visual, browser-based canvas. You can connect them to quickly create your serverless application architecture. The canvas also supports grouping of resources into larger architectural components to simplify editing and configuration. AWS Infrastructure Composer can generate deployment-ready configuration with default settings based on the services that make up your application architecture. Infrastructure Composer supports generating both AWS CloudFormation and AWS Serverless Application Model (SAM) artifacts.",
    ],
    icon: "/aws/svgs/ApplicationComposer.svg",
    service_tag: [ServiceGroups.Developer_tools.name],
  },
  {
    id: "Cloud9",
    name: "AWS Cloud9",
    description: [
      "AWS Cloud9 is a cloud-based integrated development environment (IDE) that lets you write, run, and debug your code with just a browser. It includes a code editor, debugger, and terminal. AWS Cloud9 comes prepackaged with essential tools for popular programming languages, including JavaScript, Python, PHP, and more, so you don’t need to install files or configure your development machine to start new projects. Since your AWS Cloud9 IDE is cloud-based, you can work on your projects from your office, home, or anywhere using an internet-connected machine. AWS Cloud9 also provides a seamless experience for developing serverless applications enabling you to easily define resources, debug, and switch between local and remote running of serverless applications. With AWS Cloud9, you can quickly share your development environment with your team, enabling you to pair program and track each other's inputs in real time.",
    ],
    icon: "/aws/svgs/Cloud9.svg",
    service_tag: [ServiceGroups.Developer_tools.name],
  },
  {
    id: "CloudShell",
    name: "AWS CloudShell",
    description: [
      "AWS CloudShell is a browser-based shell that makes it easy to securely manage, explore, and interact with your AWS resources. CloudShell is pre-authenticated with your console credentials. Common development and operations tools are pre-installed, so no local installation or configuration is required. With CloudShell, you can quickly run scripts with the AWS Command Line Interface (AWS CLI), experiment with AWS service APIs using the AWS SDKs, or use a range of other tools to be productive. You can use CloudShell right from your browser and at no additional cost.",
    ],
    icon: "/aws/svgs/CloudShell.svg",
    service_tag: [ServiceGroups.Developer_tools.name],
  },
  {
    id: "CodeArtifact",
    name: "AWS CodeArtifact",
    description: [
      "AWS CodeArtifact is a fully managed artifact repository service that makes it easy for organizations of any size to securely store, publish, and share software packages used in their software development process. CodeArtifact can be configured to automatically fetch software packages and dependencies from public artifact repositories so developers have access to the latest versions. CodeArtifact works with commonly used package managers and build tools such as Apache Maven, Gradle, npm, yarn, twine, pip, and NuGet making it easy to integrate into existing development workflows.",
    ],
    icon: "/aws/svgs/CodeArtifact.svg",
    service_tag: [ServiceGroups.Developer_tools.name],
  },
  {
    id: "CodeBuild",
    name: "AWS CodeBuild",
    description: [
      "AWS CodeBuild is a fully managed build service that compiles source code, runs tests, and produces software packages that are ready to deploy. With CodeBuild, you don’t need to provision, manage, and scale your own build servers. CodeBuild scales continuously and processes multiple builds concurrently, so your builds are not left waiting in a queue. You can get started quickly by using prepackaged build environments, or you can create custom build environments that use your own build tools.",
    ],
    icon: "/aws/svgs/CodeBuild.svg",
    service_tag: [ServiceGroups.Developer_tools.name],
  },
  {
    id: "CodeCatalyst",
    name: "Amazon CodeCatalyst",
    description: [
      "Amazon CodeCatalyst is an integrated service for software development teams adopting continuous integration/continuous deployment (CI/CD) practices into their software development process. CodeCatalyst is fully managed by AWS and puts the tools you need all in one place. You can plan work, collaborate on code, and build, test, and deploy applications. You can also integrate AWS resources with your projects by connecting your AWS accounts to your CodeCatalyst space. By managing all of the stages and aspects of your application lifecycle in one tool, you can deliver software quickly and confidently.",
    ],
    icon: "/aws/svgs/CodeCatalyst.svg",
    service_tag: [ServiceGroups.Developer_tools.name],
  },
  {
    id: "CodeCommit",
    name: "AWS CodeCommit",
    description: [
      "AWS CodeCommit is a fully managed source control service that makes it easy for companies to host secure and highly scalable private Git repositories. AWS CodeCommit eliminates the need to operate your own source control system or worry about scaling its infrastructure. You can use AWS CodeCommit to securely store anything from source code to binaries, and it works seamlessly with your existing Git tools.",
    ],
    icon: "/aws/svgs/CodeCommit.svg",
    service_tag: [ServiceGroups.Developer_tools.name],
  },
  {
    id: "CodeDeploy",
    name: "AWS CodeDeploy",
    description: [
      "AWS CodeDeploy is a service that automates code deployments to any instance, including EC2 instances and instances running on premises. CodeDeploy makes it easier for you to rapidly release new features, helps you avoid downtime during application deployment, and handles the complexity of updating your applications. You can use CodeDeploy to automate software deployments, eliminating the need for error-prone manual operations. The service scales with your infrastructure so you can easily deploy to one instance or thousands.",
    ],
    icon: "/aws/svgs/CodeDeploy.svg",
    service_tag: [ServiceGroups.Developer_tools.name],
  },
  {
    id: "CodePipeline",
    name: "AWS CodePipeline",
    description: [
      "AWS CodePipeline is a fully managed continuous delivery service that helps you automate your release pipelines for fast and reliable application and infrastructure updates. CodePipeline automates the build, test, and deploy phases of your release process every time there is a code change, based on the release model you define. This enables you to rapidly and reliably deliver features and updates. You can easily integrate CodePipeline with third-party services such as GitHub or with your own custom plugin. With AWS CodePipeline, you only pay for what you use. There are no upfront fees or long-term commitments.",
    ],
    icon: "/aws/svgs/CodePipeline.svg",
    service_tag: [ServiceGroups.Developer_tools.name],
  },
  {
    id: "Corretto",
    name: "Amazon Corretto",
    description: [
      "Amazon Corretto is a no-cost, multiplatform, production-ready distribution of the Open Java Development Kit (OpenJDK). Corretto comes with long-term support that will include performance enhancements and security fixes. Amazon runs Corretto internally on thousands of production services, and Corretto is certified as compatible with the Java SE standard. With Corretto, you can develop and run Java applications on popular operating systems, including Amazon Linux 2, Windows, and macOS.",
    ],
    icon: "/aws/svgs/Corretto.svg",
    service_tag: [ServiceGroups.Developer_tools.name],
  },
  {
    id: "FaultInjectionSimulator",
    name: "AWS Fault Injection Service",
    description: [
      "AWS Fault Injection Service is a fully managed service for running fault injection experiments on AWS that makes it easier to improve an application’s performance, observability, and resiliency. Fault injection experiments are used in chaos engineering, which is the practice of stressing an application in testing or production environments by creating disruptive events, such as sudden increase in CPU or memory consumption, observing how the system responds, and implementing improvements. Fault injection experiment helps teams create the real-world conditions needed to uncover the hidden bugs, monitoring blind spots, and performance bottlenecks that are difficult to find in distributed systems.",
      "AWS Fault Injection Service simplifies the process of setting up and running controlled fault injection experiments across a range of AWS services so teams can build confidence in their application behavior. With Fault Injection Simulator, teams can quickly set up experiments using pre-built templates that generate the desired disruptions. AWS Fault Injection Service provides the controls and guardrails that teams need to run experiments in production, such as automatically rolling back or stopping the experiment if specific conditions are met. With a few clicks in the console, teams can run complex scenarios with common distributed system failures happening in parallel or building sequentially over time, enabling them to create the real world conditions necessary to find hidden weaknesses.",
    ],
    icon: "/aws/svgs/FaultInjectionSimulator.svg",
    service_tag: [ServiceGroups.Developer_tools.name],
  },
  {
    id: "ManagedBlockchain_Q_Dev",
    name: "Amazon Q Developer",
    description: [
      "Amazon Q Developer (formerly Amazon CodeWhisperer) assists developers and IT professionals with their tasks—from coding, testing, and upgrading applications, to diagnosing errors, performing security scanning and fixes, and optimizing AWS resources. Amazon Q has advanced, multistep planning and reasoning capabilities that can transform existing code (for example, perform Java version upgrades) and implement new features generated from developer requests.",
    ],
    icon: "/aws/svgs/DefaultManagedServices.svg",
    service_tag: [ServiceGroups.Developer_tools.name],
  },
  {
    id: "XRay",
    name: "AWS X-Ray",
    description: [
      "AWS X-Ray helps developers analyze and debug distributed applications in production or under development, such as those built using a microservices architecture. X-Ray, you can understand how your application and its underlying services are performing so you can identify and troubleshoot the root cause of performance issues and errors. X-Ray provides an end-to-end view of requests as they travel through your application, and shows a map of your application’s underlying components. You can use X-Ray to analyze both applications in development and in production, from simple three-tier applications to complex microservices applications consisting of thousands of services.",
    ],
    icon: "/aws/svgs/XRay.svg",
    service_tag: [ServiceGroups.Developer_tools.name],
  },
];
