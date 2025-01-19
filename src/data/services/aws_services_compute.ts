import { ServiceGroups } from "../aws-service-groups";
import { ServiceData } from "../aws-services";

export const aws_services_compute: ServiceData[] = [
  {
    id: "Ec2",
    name: "Amazon EC2",
    description: [
      "Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale computing easier for developers.",
      "The simple web interface of Amazon EC2 allows you to obtain and configure capacity with minimal friction. It provides you with complete control of your computing resources and lets you run on Amazon’s proven computing environment. Amazon EC2 reduces the time required to obtain and boot new server instances (called Amazon EC2 instances) to minutes, allowing you to quickly scale capacity, both up and down, as your computing requirements change. Amazon EC2 changes the economics of computing by allowing you to pay only for capacity that you actually use. Amazon EC2 provides developers and system administrators the tools to build failure resilient applications and isolate themselves from common failure scenarios.",
      "Instance types",
      "Amazon EC2 passes on to you the financial benefits of Amazon scale. You pay a very low rate for the compute capacity you actually consume. For a more detailed description, refer to Amazon EC2 pricing.",
      "Amazon EC2 instance types are named based on their family, generation, processor family, additional capabilities, and size.",
      "On-Demand Instances — With On-Demand Instances, you pay for compute capacity by the hour or the second depending on which instances you run. No longer-term commitments or upfront payments are needed. You can increase or decrease your compute capacity depending on the demands of your application and only pay the specified per hourly rates for the instance you use.",
      "Spot Instances —Spot Instances are available at up to a 90% discount compared to On-Demand prices and let you take advantage of unused Amazon EC2 capacity in the AWS Cloud. You can significantly reduce the cost of running your applications, grow your application’s compute capacity and throughput for the same budget, and enable new types of cloud computing applications.",
      "Reserved Instances — Reserved Instances provide you with a significant discount (up to 72%) compared to On-Demand Instance pricing. You have the flexibility to change families, operating system types, and tenancies while benefiting from Reserved Instance pricing when you use Convertible Reserved Instances.",
      "Dedicated Hosts — A Dedicated Host is a physical EC2 server dedicated for your use. Dedicated Hosts can help you reduce costs by allowing you to use your existing server-bound software licenses, including Windows Server, Microsoft SQL Server, and SUSE Linux Enterprise Server (subject to your license terms), and can also help you meet compliance requirements.",
    ],
    icon: "/aws/svgs/Ec2.svg",
    service_tag: [ServiceGroups.Compute],
  },
  {
    id: "AutoScaling",
    name: "Amazon EC2 Auto Scaling",
    description: [
      "Amazon EC2 Auto Scaling helps you maintain application availability and allows you to automatically add or remove EC2 instances according to conditions you define. You can use the fleet management features of Amazon EC2 Auto Scaling to maintain the health and availability of your fleet. You can also use the dynamic and predictive scaling features of Amazon EC2 Auto Scaling to add or remove EC2 instances. Dynamic scaling responds to changing demand and predictive scaling automatically schedules the right number of EC2 instances based on predicted demand. Dynamic scaling and predictive scaling can be used together to scale faster.",
    ],
    icon: "/aws/svgs/AutoScaling.svg",
    service_tag: [ServiceGroups.Compute],
  },
  {
    id: "Ec2ImageBuilder",
    name: "Amazon EC2 Image Builder",
    description: [
      "EC2 Image Builder simplifies the building, testing, and deployment of VMs and container images for use on AWS or on-premises.",
      "Keeping virtual machine (VM) and container images up-to-date can be time consuming, resource intensive, and error-prone. Currently, customers either manually update and snapshot VMs or have teams that build automation scripts to maintain images.",
      "EC2 Image Builder significantly reduces the effort of keeping images up-to-date and secure by providing a simple graphical interface, built-in automation, and AWS-provided security settings. With Image Builder, there are no manual steps for updating an image nor do you have to build your own automation pipeline.",
      "Image Builder is offered at no cost, other than the cost of the underlying AWS resources used to create, store, and share the images.",
    ],
    icon: "/aws/svgs/Ec2ImageBuilder.svg",
    service_tag: [ServiceGroups.Compute],
  },
  {
    id: "Lightsail",
    name: "Amazon Lightsail",
    description: [
      "Amazon Lightsail is designed to be the easiest way to launch and manage a virtual private server with AWS. Lightsail plans include everything you need to jumpstart your project – a VM, SSD-based storage, data transfer, DNS management, and a static IP address – for a low, predictable price.",
    ],
    icon: "/aws/svgs/Lightsail.svg",
    service_tag: [ServiceGroups.Compute],
  },
  {
    id: "Ec2_linux",
    name: "Amazon Linux 2023",
    description: [
      "Amazon Linux 2023 (AL2023) is our new Linux-based operating system for AWS that is designed to provide a secure, stable, high-performance environment to develop and run your cloud applications. AL2023 provides seamless integration with various AWS services and development tools, and offers optimized performance for Amazon EC2 Graviton-based instances and Support at no additional licensing cost. Starting with AL2023, a new Amazon Linux major release will be available every two years. This cadence provides you with a more predictable release cycle and up to 5 years of support, making it easier for you to plan your upgrades.",
      "AL2023 offers several improvements over Amazon Linux 2 (AL2). For example, AL2023 takes a security-by-default approach to help improve your security posture with preconfigured security policies, SELinux in permissive mode and IMDSv2 enabled by default, and the availability of kernel live patching. With deterministic upgrades through versioned repositories, you can lock to a specific version of the Amazon Linux package repository, giving you control over how and when you absorb updates. With this capability, you can adhere to operational best practices more efficiently by ensuring consistency between package versions and updates across your environment. For a full comparison, refer to Comparing Amazon Linux 2 and Amazon Linux 2023.",
      "Amazon Linux 2023 is generally available in all AWS Regions, including the AWS GovCloud (US) and the China Regions.",
    ],
    icon: "/aws/svgs/Ec2.svg",
    service_tag: [ServiceGroups.Compute],
  },
  {
    id: "AppRunner",
    name: "AWS App Runner",
    description: [
      "AWS App Runner is a fully managed service that makes it easy for developers to quickly deploy containerized web applications and APIs, at scale and with no prior infrastructure experience required. Start with your source code or a container image. AWS App Runner automatically builds and deploys the web application and load balances traffic with encryption. App Runner also scales up or down automatically to meet your traffic needs. With App Runner, rather than thinking about servers or scaling, you have more time to focus on your applications.",
    ],
    icon: "/aws/svgs/AppRunner.svg",
    service_tag: [ServiceGroups.Compute],
  },
  {
    id: "Batch",
    name: "AWS Batch",
    description: [
      "AWS Batch enables developers, scientists, and engineers to easily and efficiently run hundreds of thousands of batch computing jobs on AWS. AWS Batch dynamically provisions the optimal quantity and type of compute resources (such as CPU or memory-optimized instances) based on the volume and specific resource requirements of the batch jobs submitted. With AWS Batch, there is no need to install and manage batch computing software or server clusters that you use to run your jobs, allowing you to focus on analyzing results and solving problems. AWS Batch plans, schedules, and runs your batch computing workloads across the full range of AWS compute services and features, such as Amazon EC2 and Spot Instances.",
    ],
    icon: "/aws/svgs/Batch.svg",
    service_tag: [ServiceGroups.Compute],
  },
  {
    id: "ElasticBeanstalk",
    name: "AWS Elastic Beanstalk",
    description: [
      "AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker on familiar servers such as Apache, Nginx, Passenger, and Internet Information Services (IIS).",
      "You can simply upload your code, and AWS Elastic Beanstalk automatically handles the deployment, from capacity provisioning, load balancing, and auto scaling to application health monitoring. At the same time, you retain full control over the AWS resources powering your application and can access the underlying resources at any time.",
    ],
    icon: "/aws/svgs/ElasticBeanstalk.svg",
    service_tag: [ServiceGroups.Compute],
  },
  {
    id: "Fargate",
    name: "AWS Fargate",
    description: [
      "AWS Fargate is a compute engine for Amazon ECS that allows you to run containers without having to manage servers or clusters. With AWS Fargate, you no longer have to provision, configure, and scale clusters of VMs to run containers. This removes the need to choose server types, decide when to scale your clusters, or optimize cluster packing. Fargate removes the need for you to interact with or think about servers or clusters. Fargate lets you focus on designing and building your applications instead of managing the infrastructure that runs them.",
      "Amazon ECS has two modes: Fargate launch type and EC2 launch type. With Fargate launch type, all you have to do is package your application in containers, specify the CPU and memory requirements, define networking and IAM policies, and launch the application. EC2 launch type allows you to have server-level, more granular control over the infrastructure that runs your container applications. With EC2 launch type, you can use Amazon ECS to manage a cluster of servers and schedule placement of containers on the servers. Amazon ECS keeps track of all the CPU, memory and other resources in your cluster, and also finds the best server for a container to run on based on your specified resource requirements.",
      "You are responsible for provisioning, patching, and scaling clusters of servers. You can decide which type of server to use, which applications and how many containers to run in a cluster to optimize utilization, and when you should add or remove servers from a cluster. EC2 launch type gives you more control of your server clusters and provides a broader range of customization options, which might be required to support some specific applications or possible compliance and government requirements.",
    ],
    icon: "/aws/svgs/Fargate.svg",
    service_tag: [ServiceGroups.Compute],
  },
  {
    id: "Lambda",
    name: "AWS Lambda",
    description: [
      "AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume—there is no charge when your code is not running. With Lambda, you can run code for virtually any type of application or backend service—all with zero administration. Just upload your code, and Lambda takes care of everything required to run and scale your code with high availability. You can set up your code to automatically run from other AWS services, or you can call it directly from any web or mobile app.",
    ],
    icon: "/aws/svgs/Cognito.svg",
    service_tag: [ServiceGroups.Compute],
  },
  {
    id: "ServerlessApplicationRepository",
    name: "AWS Serverless Application Repository",
    description: [
      "The AWS Serverless Application Repository enables you to quickly deploy code samples, components, and complete applications for common use cases such as web and mobile backends, event and data processing, logging, monitoring, Internet of Things (IoT), and more. Each application is packaged with an AWS Serverless Application Model (AWS SAM) template that defines the AWS resources used. Publicly shared applications also include a link to the application’s source code. There is no additional charge to use the AWS Serverless Application Repository - you only pay for the AWS resources used in the applications you deploy.",
      "You can also use the AWS Serverless Application Repository to publish your own applications and share them within your team, across your organization, or with the community at large. To share an application you've built, publish it to the AWS Serverless Application Repository.",
    ],
    icon: "/aws/svgs/ServerlessApplicationRepository.svg",
    service_tag: [ServiceGroups.Compute],
  },
  {
    id: "Outposts",
    name: "AWS Outposts",
    description: [
      "AWS Outposts bring native AWS services, infrastructure, and operating models to virtually any data center, co-location space, or on-premises facility. You can use the same APIs, the same tools, the same hardware, and the same functionality across on-premises and the cloud to deliver a truly consistent hybrid experience. Outposts can be used to support workloads that need to remain on-premises due to low latency or local data processing needs.",
      "AWS Outposts come in two variants:",
      "VMware Cloud on AWS Outposts allows you to use the same VMware control plane and APIs you use to run your infrastructure.",
      "AWS-native variant of AWS Outposts allows you to use the same exact APIs and control plane you use to run in the AWS Cloud, but on-premises.",
      "AWS Outposts infrastructure is fully managed, maintained, and supported by AWS to deliver access to the latest AWS services. Getting started is easy, you simply log into the AWS Management Console to order your Outposts servers, choosing from a wide range of compute and storage options. You can order one or more servers, or quarter, half, and full rack units.",
    ],
    icon: "/aws/svgs/Outposts.svg",
    service_tag: [ServiceGroups.Compute],
  },
  {
    id: "Wavelength",
    name: "AWS Wavelength",
    description: [
      "AWS Wavelength is an AWS Infrastructure offering optimized for mobile edge computing applications. Wavelength Zones are AWS infrastructure deployments that embed AWS compute and storage services within communications service providers’ (CSP) datacenters at the edge of the 5G network, so application traffic from 5G devices can reach application servers running in Wavelength Zones without leaving the telecommunications network. This avoids the latency that would result from application traffic having to traverse multiple hops across the Internet to reach their destination, enabling customers to take full advantage of the latency and bandwidth benefits offered by modern 5G networks.",
    ],
    icon: "/aws/svgs/Wavelength.svg",
    service_tag: [ServiceGroups.Compute],
  },
  {
    id: "VMwareCloudOn",
    name: "name",
    description: [
      "VMware Cloud on AWS is an integrated cloud offering jointly developed by AWS and VMware delivering a highly scalable, secure and innovative service that allows organizations to seamlessly migrate and extend their on-premises VMware vSphere-based environments to the AWS Cloud running on next-generation Amazon Elastic Compute Cloud (Amazon EC2) bare metal infrastructure. VMware Cloud on AWS is ideal for enterprise IT infrastructure and operations organizations looking to migrate their on-premises vSphere-based workloads to the public cloud, consolidate and extend their data center capacities, and optimize, simplify and modernize their disaster recovery solutions.",
      "VMware Cloud on AWS is delivered, sold, and supported globally by VMware and its partners with availability in the following AWS Regions: AWS Europe (Stockholm), AWS US East (Northern Virginia), AWS US East (Ohio), AWS US West (Northern California), AWS US West (Oregon), AWS Canada (Central), AWS Europe (Frankfurt), AWS Europe (Ireland), AWS Europe (London), AWS Europe (Paris), AWS Europe (Milan), AWS Asia Pacific (Singapore), AWS Asia Pacific (Sydney), AWS Asia Pacific (Tokyo), AWS Asia Pacific (Mumbai) Region, AWS South America (Sao Paulo), AWS Asia Pacific (Seoul), and AWS GovCloud (US West). With each release, VMware Cloud on AWS availability will expand into additional global regions.",
      "VMware Cloud on AWS brings the broad, diverse and rich innovations of AWS services natively to the enterprise applications running on VMware's compute, storage and network virtualization platforms. This allows organizations to easily and rapidly add new innovations to their enterprise applications by natively integrating AWS infrastructure and platform capabilities such as AWS Lambda, Amazon Simple Queue Service (Amazon SQS), Amazon S3, Elastic Load Balancing, Amazon RDS, Amazon DynamoDB, Amazon Kinesis, and Amazon Redshift, among many others.",
      "With VMware Cloud on AWS, organizations can simplify their Hybrid IT operations by using the same VMware Cloud Foundation technologies including vSphere, vSAN, NSX, and vCenter Server across their on-premises data centers and on the AWS Cloud without having to purchase any new or custom hardware, rewrite applications, or modify their operating models. The service automatically provisions infrastructure and provides full VM compatibility and workload portability between your on-premises environments and the AWS Cloud. With VMware Cloud on AWS, you can use a broad range of AWS services, including compute, databases, analytics, IoT, security, mobile, deployment, application services, and more.",
    ],
    icon: "/aws/svgs/VMwareCloudOn.svg",
    service_tag: [ServiceGroups.Compute],
  },
];
