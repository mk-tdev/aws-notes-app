import { ServiceGroups } from "./aws-service-groups";
import { aws_services_containers } from "./services/aws_services_containers";
import { aws_services_customer_enable } from "./services/aws_services_customer_enable";
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
  description: "desc",
  icon: "/aws/svgs/ManagementConsole.svg",
  service_tag: [ServiceGroups.ACCESSING_AWS_SERVICES],
};

export const aws_services_management: ServiceData[] = [
  {
    id: "ManagementConsole",
    name: "AWS Management Console",
    description: [
      "Access and manage Amazon Web Services through the AWS Management Console, a simple and intuitive user interface. You can also use the AWS Management Console Application to quickly view resources on the go.",
    ],
    icon: "/aws/svgs/ManagementConsole.svg",
    service_tag: [ServiceGroups.ACCESSING_AWS_SERVICES],
  },
  {
    id: "CommandLineInterface",
    name: "AWS Command Line Interface (AWS CLI)",
    description: [
      "The AWS Command Line Interface (AWS CLI) is a unified tool to manage your AWS services. With just one tool to download and configure, you can control multiple AWS services from the command line and automate them through scripts.",
      "AWS CloudShell, which can be found next to the search bar in the AWS Management Console, provides a browser-based shell that is pre-authenticated with your console credentials. Using CloudShell, you can quickly run AWS commands and scripts without leaving your web browser.",
    ],
    icon: "/aws/svgs/CommandLineInterface.svg",
    service_tag: [ServiceGroups.ACCESSING_AWS_SERVICES],
  },
  {
    id: "ToolsandSDKs",
    name: "Software Development Kits (SDKs)",
    description: [
      "Our Software Development Kits (SDKs) simplify using AWS services in your applications with an Application Program Interface (API) tailored to your programming language or platform.",
    ],
    icon: "/aws/svgs/ToolsandSDKs.svg",
    service_tag: [ServiceGroups.ACCESSING_AWS_SERVICES],
  },
];

export const aws_services_analytics: ServiceData[] = [
  {
    id: "Athena",
    name: "Amazon Athena",
    description: [
      "Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL. Athena is serverless, so there is no infrastructure to manage, and you pay only for the queries that you run.",
      "Athena is easy to use. Simply point to your data in Amazon S3, deﬁne the schema, and start querying using standard SQL. Most results are delivered within seconds. With Athena, there’s no need for complex extract, transform, and load (ETL) jobs to prepare your data for analysis. This makes it easy for anyone with SQL skills to quickly analyze large-scale datasets.",
      "Athena is out-of-the-box integrated with AWS Glue Data Catalog, allowing you to create a unified metadata repository across various services, crawl data sources to discover schemas and populate your Catalog with new and modified table and partition definitions, and maintain schema versioning.",
    ],
    icon: "/aws/svgs/Athena.svg",
    service_tag: [ServiceGroups.Analytics],
  },
  {
    id: "CloudSearch",
    name: "CloudSearch",
    description: [
      "Amazon CloudSearch is a managed service in the AWS Cloud that makes it simple and cost-effective to set up, manage, and scale a search solution for your website or application. Amazon CloudSearch supports 34 languages and popular search features such as highlighting, autocomplete, and geospatial search.",
    ],
    icon: "/aws/svgs/CloudSearch.svg",
    service_tag: [ServiceGroups.Analytics],
  },
  {
    id: "Sdk",
    name: "Amazon DataZone",
    description: [
      "Amazon DataZone is a data management service that you can use to publish data and make it available to the business data catalog through your personalized web application. You can access your data more securely regardless of where it is stored—on AWS, on premises, or in SaaS applications such as Salesforce. Amazon DataZone simplifies your experience across AWS services such as Amazon Redshift, Amazon Athena, AWS Glue, AWS Lake Formation, and Amazon QuickSight.",
    ],
    icon: "/aws/svgs/DataZone.svg",
    service_tag: [ServiceGroups.Analytics],
  },
  {
    id: "Emr",
    name: "Amazon EMR",
    description: [
      "Amazon EMR is the industry-leading cloud big data platform for processing vast amounts of data using open source tools such as Apache Spark, Apache Hive, Apache HBase, Apache Flink, Apache Hudi, and Presto. Amazon EMR makes it easy to set up, operate, and scale your big data environments by automating time-consuming tasks such as provisioning capacity and tuning clusters. With Amazon EMR, you can run petabyte-scale analysis at less than half of the cost of traditional on-premises solutions and over 3x faster than standard Apache Spark. You can run workloads on Amazon EC2 instances, on Amazon Elastic Kubernetes Service (Amazon EKS) clusters, or on-premises using Amazon EMR on AWS Outposts.",
    ],
    icon: "/aws/svgs/Emr.svg",
    service_tag: [ServiceGroups.Analytics],
  },
  {
    id: "FinSpace",
    name: "Amazon FinSpace",
    description: [
      "Amazon FinSpace is a data management and analytics service purpose-built for the financial services industry (FSI). FinSpace reduces the time you spend finding and preparing petabytes of financial data to be ready for analysis from months to minutes.",
      "Financial services organizations analyze data from internal data stores such as portfolio, actuarial, and risk management systems as well as petabytes of data from third-party data feeds, such as historical securities prices from stock exchanges. It can take months to find the right data, get permissions to access the data in a compliant way, and prepare it for analysis.",
      "FinSpace removes the heavy lifting of building and maintaining a data management system for financial analytics. With FinSpace, you collect data and catalog it by relevant business concepts such as asset class, risk classification, or geographic region. FinSpace makes it easy to discover and share data across your organization in accordance with your compliance requirements. You define your data access policies in one place and FinSpace enforces them while keeping audit logs to allow for compliance and activity reporting. FinSpace also includes a library of 100+ functions, such as time bars and Bollinger bands, for you to prepare data for analysis.",
    ],
    icon: "/aws/svgs/FinSpace.svg",
    service_tag: [ServiceGroups.Analytics],
  },
  {
    id: "Kinesis",
    name: "Amazon Kinesis",
    description: [
      "Amazon Kinesis makes it easy to collect, process, and analyze real-time, streaming data so you can get timely insights and react quickly to new information. Amazon Kinesis offers key capabilities to cost-effectively process streaming data at any scale, along with the flexibility to choose the tools that best suit the requirements of your application. With Amazon Kinesis, you can ingest real-time data such as video, audio, application logs, website clickstreams, and IoT telemetry data for machine learning (ML), analytics, and other applications. Amazon Kinesis enables you to process and analyze data as it arrives and respond instantly instead of having to wait until all your data is collected before the processing can begin.",
      "Amazon Kinesis currently offers four services: Firehose, Managed Service for Apache Flink, Kinesis Data Streams, and Kinesis Video Streams.",
    ],
    icon: "/aws/svgs/Kinesis.svg",
    service_tag: [ServiceGroups.Analytics],
  },
  {
    id: "KinesisFirehose",
    name: "KinesisFirehose",
    description: [
      "Amazon Data Firehose is the easiest way to reliably load streaming data into data stores and analytics tools. It can capture, transform, and load streaming data into Amazon S3, Amazon Redshift, Amazon OpenSearch Service, and Splunk, enabling near real-time analytics with existing business intelligence tools and dashboards you’re already using today. It is a fully managed service that automatically scales to match the throughput of your data and requires no ongoing administration. It can also batch, compress, transform, and encrypt the data before loading it, minimizing the amount of storage used at the destination and increasing security.",
      "You can easily create a Firehose delivery stream from the AWS Management Console, conﬁgure it with a few clicks, and start sending data to the stream from hundreds of thousands of data sources to be loaded continuously to AWS—all in just a few minutes. You can also configure your delivery stream to automatically convert the incoming data to columnar formats such as Apache Parquet and Apache ORC, before the data is delivered to Amazon S3, for cost-effective storage and analytics.",
    ],
    icon: "/aws/svgs/KinesisFirehose.svg",
    service_tag: [ServiceGroups.Analytics],
  },
  {
    id: "DefaultManagedServices_1",
    name: "Amazon Managed Service for Apache Flink",
    description: [
      "Amazon Managed Service for Apache Flink is the easiest way to analyze streaming data, gain actionable insights, and respond to your business and customer needs in real time. Amazon Managed Service for Apache Flink reduces the complexity of building, managing, and integrating streaming applications with other AWS services. SQL users can easily query streaming data or build entire streaming applications using templates and an interactive SQL editor. Java developers can quickly build sophisticated streaming applications using open source Java libraries and AWS integrations to transform and analyze data in real-time.",
      "Amazon Managed Service for Apache Flink takes care of everything required to run your queries continuously and scales automatically to match the volume and throughput rate of your incoming data.",
    ],
    icon: "/aws/svgs/DefaultManagedServices.svg",
    service_tag: [ServiceGroups.Analytics],
  },
  {
    id: "KinesisDataStreams",
    name: "Amazon Kinesis Data Streams",
    description: [
      "Amazon Kinesis Data Streams is a massively scalable and durable real-time data streaming service. Kinesis Data Streams can continuously capture gigabytes of data per second from hundreds of thousands of sources such as website clickstreams, database event streams, financial transactions, social media feeds, IT logs, and location-tracking events. The data collected is available in milliseconds to enable real-time analytics use cases such as real-time dashboards, real-time anomaly detection, dynamic pricing, and more.",
    ],
    icon: "/aws/svgs/KinesisDataStreams.svg",
    service_tag: [ServiceGroups.Analytics],
  },
  {
    id: "KinesisVideoStreams",
    name: "Amazon Kinesis Video Streams",
    description: [
      "Amazon Kinesis Video Streams makes it easy to securely stream video from connected devices to AWS for analytics, ML, playback, and other processing. Kinesis Video Streams automatically provisions and elastically scales all the infrastructure needed to ingest streaming video data from millions of devices. It also durably stores, encrypts, and indexes video data in your streams, and allows you to access your data through easy-to-use APIs. Kinesis Video Streams enables you to playback video for live and on-demand viewing, and quickly build applications that take advantage of computer vision and video analytics through integration with Amazon Rekognition Video, and libraries for ML frameworks such as Apache MxNet, TensorFlow, and OpenCV.",
    ],
    icon: "/aws/svgs/KinesisVideoStreams.svg",
    service_tag: [ServiceGroups.Analytics],
  },
  {
    id: "OpenSearchService_1",
    name: "Amazon OpenSearch Service",
    description: [
      "Amazon OpenSearch Service (OpenSearch Service) makes it easy to deploy, secure, operate, and scale OpenSearch to search, analyze, and visualize data in real-time. With Amazon OpenSearch Service, you get easy-to-use APIs and real-time analytics capabilities to power use-cases such as log analytics, full-text search, application monitoring, and clickstream analytics, with enterprise-grade availability, scalability, and security. The service offers integrations with open-source tools such as OpenSearch Dashboards and Logstash for data ingestion and visualization. It also integrates seamlessly with other AWS services such as Amazon Virtual Private Cloud (Amazon VPC), AWS Key Management Service (AWS KMS), Amazon Data Firehose, AWS Lambda, AWS Identity and Access Management (IAM), Amazon Cognito, and Amazon CloudWatch, so that you can go from raw data to actionable insights quickly.",
    ],
    icon: "/aws/svgs/OpenSearchService.svg",
    service_tag: [ServiceGroups.Analytics],
  },
  {
    id: "OpenSearchService_2",
    name: "Amazon OpenSearch Serverless",
    description: [
      "Amazon OpenSearch Serverless is a serverless option in Amazon OpenSearch Service. As a developer, you can use OpenSearch Serverless to run petabyte-scale workloads without configuring, managing, and scaling OpenSearch clusters. You get the same interactive millisecond response times as OpenSearch Service with the simplicity of a serverless environment.",
      "The vector engine for Amazon OpenSearch Serverless, adds a simple, scalable, and high-performing vector storage and search capability to help developers build ML-augmented search experiences and generative AI applications without having to manage vector database infrastructure. Use cases for vector search collections include image search, document search, music retrieval, product recommendation, video search, location-based search, fraud detection, and anomaly detection.",
    ],
    icon: "/aws/svgs/OpenSearchService.svg",
    service_tag: [ServiceGroups.Analytics],
  },
  {
    id: "Redshift_1",
    name: "Amazon Redshift",
    description: [
      "Amazon Redshift is the most widely used cloud data warehouse. It makes it fast, simple and cost-effective to analyze all your data using standard SQL and your existing Business Intelligence (BI) tools. It allows you to run complex analytic queries against terabytes to petabytes of structured and semi-structured data, using sophisticated query optimization, columnar storage on high-performance storage, and massively parallel query completion. Most results come back in seconds. You can start small for just $0.25 per hour with no commitments and scale out to petabytes of data for $1,000 per terabyte per year, less than a tenth the cost of traditional on-premises solutions.",
    ],
    icon: "/aws/svgs/Redshift.svg",
    service_tag: [ServiceGroups.Analytics],
  },
  {
    id: "Redshift_2",
    name: "Amazon Redshift Serverless",
    description: [
      "Amazon Redshift Serverless makes it easier to run and scale analytics without having to manage your data warehouse infrastructure. Developers, data scientists, and analysts can work across databases, data warehouses, and data lakes to build reporting and dashboarding applications, perform near real-time analytics, share and collaborate on data, and build and train machine learning (ML) models. Go from large amounts of data to insights in seconds. Amazon Redshift Serverless automatically provisions and intelligently scales data warehouse capacity to deliver fast performance for even the most demanding and unpredictable workloads, and you pay only for what you use. Just load data and start querying right away in Amazon Redshift Query Editor or in your favorite business intelligence (BI) tool and continue to enjoy the best price performance and familiar SQL features in an easy-to-use, zero administration environment.",
    ],
    icon: "/aws/svgs/Redshift.svg",
    service_tag: [ServiceGroups.Analytics],
  },
  {
    id: "QuickSight",
    name: "Amazon QuickSight",
    description: [
      "Amazon QuickSight is a fast, cloud-powered business intelligence (BI) service that makes it easy for you to deliver insights to everyone in your organization. QuickSight lets you create and publish interactive dashboards that can be accessed from browsers or mobile devices. You can embed dashboards into your applications, providing your customers with powerful self-service analytics. Amazon QuickSight easily scales to tens of thousands of users without any software to install, servers to deploy, or infrastructure to manage.",
    ],
    icon: "/aws/svgs/QuickSight.svg",
    service_tag: [ServiceGroups.Analytics],
  },
  {
    id: "CleanRooms",
    name: "AWS Clean Rooms",
    description: [
      "AWS Clean Rooms helps companies and their partners more easily and securely analyze and collaborate on their collective datasets–without sharing or copying one another's underlying data. With AWS Clean Rooms, customers can create a secure data clean room in minutes, and collaborate with any other company on the AWS Cloud to generate unique insights about advertising campaigns, investment decisions, and research and development.",
    ],
    icon: "/aws/svgs/CleanRooms.svg",
    service_tag: [ServiceGroups.Analytics],
  },
  {
    id: "DataExchange",
    name: "AWS Data Exchange",
    description: [
      "AWS Data Exchange makes it easy to find, subscribe to, and use third-party data in the cloud. Qualified data providers include category-leading brands such as Reuters, who curate data from over 2.2 million unique news stories per year in multiple languages; Change Healthcare, who process and anonymize more than 14 billion healthcare transactions and $1 trillion in claims annually; Dun & Bradstreet, who maintain a database of more than 330 million global business records; and Foursquare, whose location data is derived from 220 million unique consumers and includes more than 60 million global commercial venues.",
      "Once subscribed to a data product, you can use the AWS Data Exchange API to load data directly into Amazon S3 and then analyze it with a wide variety of AWS analytics and ML services. For example, property insurers can subscribe to data to analyze historical weather patterns to calibrate insurance coverage requirements in different geographies; restaurants can subscribe to population and location data to identify optimal regions for expansion; academic researchers can conduct studies on climate change by subscribing to data on carbon dioxide emissions; and healthcare professionals can subscribe to aggregated data from historical clinical trials to accelerate their research activities.",
      "For data providers, AWS Data Exchange makes it easy to reach the millions of AWS customers migrating to the cloud by removing the need to build and maintain infrastructure for data storage, delivery, billing, and entitling.",
    ],
    icon: "/aws/svgs/DataExchange.svg",
    service_tag: [ServiceGroups.Analytics],
  },
  {
    id: "DataPipeline",
    name: "AWS Data Pipeline",
    description: [
      "AWS Data Pipeline is a web service that helps you reliably process and move data between different AWS compute and storage services, as well as on-premises data sources, at speciﬁed intervals. With AWS Data Pipeline, you can regularly access your data where it’s stored, transform and process it at scale, and eﬃciently transfer the results to AWS services such as Amazon S3, Amazon RDS, Amazon DynamoDB, and Amazon EMR.",
      "AWS Data Pipeline helps you easily create complex data processing workloads that are fault tolerant, repeatable, and highly available. You don’t have to worry about ensuring resource availability, managing inter-task dependencies, retrying transient failures or timeouts in individual tasks, or creating a failure notification system. AWS Data Pipeline also allows you to move and process data that was previously locked up in on-premises data silos.",
    ],
    icon: "/aws/svgs/DataPipeline.svg",
    service_tag: [ServiceGroups.Analytics],
  },
  {
    id: "DefaultManagedServices_2",
    name: "AWS Entity Resolution",
    description: [
      "AWS Entity Resolution is a service that helps you match and link related records stored across multiple applications, channels, and data stores without building a custom solution. Using flexible, configurable ML and rule-based techniques, AWS Entity Resolution can remove duplicate records, create customer profiles by connecting different customer interactions, and personalize experiences across advertising and marketing campaigns, loyalty programs, and e-commerce. For example, you can create a unified view of customer interactions by linking recent events, such as ad clicks, cart abandonment, and purchases, into a unique match ID.",
    ],
    icon: "/aws/svgs/DefaultManagedServices.svg",
    service_tag: [ServiceGroups.Analytics],
  },
  {
    id: "Glue",
    name: "AWS Glue",
    description: [
      "AWS Glue is a fully managed extract, transform, and load (ETL) service that makes it easy for customers to prepare and load their data for analytics. You can create and run an ETL job with a few clicks in the AWS Management Console. You simply point AWS Glue to your data stored in AWS, and AWS Glue discovers your data and stores the associated metadata (such as table definition and schema) in the AWS Glue Data Catalog. Once cataloged, your data is immediately searchable, queryable, and available for ETL.",
      "AWS Glue Data Integration Engines provide access to data using Apache Spark, PySpark, and Python. With the addition of AWS Glue for Ray, you can further scale your workloads using Ray, an open-source unified compute framework.",
      "AWS Glue Data Quality can measure and monitor the data quality of Amazon S3 based data lakes, data warehouses, and other data repositories. It automatically computes statistics, recommends quality rules, and can monitor and alert you when it detects missing, stale, or bad data. You can access it in the AWS Glue Data Catalog and in AWS Glue Data Catalog ETL jobs.",
    ],
    icon: "/aws/svgs/Glue.svg",
    service_tag: [ServiceGroups.Analytics],
  },
  {
    id: "LakeFormation",
    name: "AWS Lake Formation",
    description: [
      "AWS Lake Formation is a service that makes it easy to set up a secure data lake in days. A data lake is a centralized, curated, and secured repository that stores all your data, both in its original form and prepared for analysis. A data lake enables you to break down data silos and combine different types of analytics to gain insights and guide better business decisions.",
      "However, setting up and managing data lakes today involves a lot of manual, complicated, and time-consuming tasks. This work includes loading data from diverse sources, monitoring those data flows, setting up partitions, turning on encryption and managing keys, defining transformation jobs and monitoring their operation, re-organizing data into a columnar format, configuring access control settings, deduplicating redundant data, matching linked records, granting access to data sets, and auditing access over time.",
      "Creating a data lake with Lake Formation is as simple as defining where your data resides and what data access and security policies you want to apply. Lake Formation then collects and catalogs data from databases and object storage, moves the data into your new Amazon S3 data lake, cleans and classifies data using ML algorithms, and secures access to your sensitive data. Your users can then access a centralized catalog of data which describes available data sets and their appropriate usage. Your users then leverage these data sets with their choice of analytics and ML services, such as Amazon EMR for Apache Spark, Amazon Redshift, Amazon Athena, SageMaker AI, and Amazon QuickSight.",
    ],
    icon: "/aws/svgs/LakeFormation.svg",
    service_tag: [ServiceGroups.Analytics],
  },
  {
    id: "ManagedStreamingForKafka",
    name: "Amazon Managed Streaming for Apache Kafka (Amazon MSK)",
    description: [
      "Amazon Managed Streaming for Apache Kafka (Amazon MSK) is a fully managed service that makes it easy for you to build and run applications that use Apache Kafka to process streaming data. Apache Kafka is an open-source platform for building real-time streaming data pipelines and applications. With Amazon MSK, you can use Apache Kafka APIs to populate data lakes, stream changes to and from databases, and power ML and analytics applications.",
      "Apache Kafka clusters are challenging to setup, scale, and manage in production. When you run Apache Kafka on your own, you need to provision servers, configure Apache Kafka manually, replace servers when they fail, orchestrate server patches and upgrades, architect the cluster for high availability, ensure data is durably stored and secured, setup monitoring and alarms, and carefully plan scaling events to support load changes. Amazon MSK makes it easy for you to build and run production applications on Apache Kafka without needing Apache Kafka infrastructure management expertise. That means you spend less time managing infrastructure and more time building applications.",
      "With a few clicks in the Amazon MSK console you can create highly available Apache Kafka clusters with settings and configuration based on Apache Kafka’s deployment best practices. Amazon MSK automatically provisions and runs your Apache Kafka clusters. Amazon MSK continuously monitors cluster health and automatically replaces unhealthy nodes with no downtime to your application. In addition, Amazon MSK secures your Apache Kafka cluster by encrypting data at rest.",
    ],
    icon: "/aws/svgs/ManagedStreamingForKafka.svg",
    service_tag: [ServiceGroups.Analytics],
  },
];

export const aws_services_application_integration: ServiceData[] = [
  {
    id: "StepFunctions",
    name: "AWS Step Functions",
    description: [
      "AWS Step Functions is a fully managed service that makes it easy to coordinate the components of distributed applications and microservices using visual workflows. Building applications from individual components that each perform a discrete function lets you scale easily and change applications quickly. Step Functions is a reliable way to coordinate components and step through the functions of your application. Step Functions provides a graphical console to arrange and visualize the components of your application as a series of steps. This makes it simple to build and run multi-step applications. Step Functions automatically initiates and tracks each step, and retries when there are errors, so your application runs in order and as expected. Step Functions logs the state of each step, so when things do go wrong, you can diagnose and debug problems quickly. You can change and add steps without even writing code, so you can easily evolve your application and innovate faster.",
    ],
    icon: "/aws/svgs/StepFunctions.svg",
    service_tag: [ServiceGroups.Application_integration],
  },
  {
    id: "AppFlow",
    name: "Amazon AppFlow",
    description: [
      "Amazon AppFlow is a fully managed integration service that enables you to securely transfer data between Software-as-a-Service (SaaS) applications such as Salesforce, Zendesk, Slack, and ServiceNow, and AWS services such as Amazon S3 and Amazon Redshift, in just a few clicks. With Amazon AppFlow, you can run data flows at enterprise scale at the frequency you choose - on a schedule, in response to a business event, or on demand. You can configure data transformation capabilities such as filtering and validation to generate rich, ready-to-use data as part of the flow itself, without additional steps. Amazon AppFlow; automatically encrypts data in motion, and allows users to restrict data from flowing over the public internet for SaaS applications that are integrated with AWS PrivateLink, reducing exposure to security threats.",
    ],
    icon: "/aws/svgs/AppFlow.svg",
    service_tag: [ServiceGroups.Application_integration],
  },
  {
    id: "DataExchange_interchange",
    name: "AWS B2B Data Interchange",
    description: [
      "AWS B2B Data Interchange (B2Bi) automates the transformation of Electronic Data Interchange (EDI) documents into JSON and XML formats to simplify your downstream data integrations. Businesses use EDI documents to exchange transactional data with trading partners, such as suppliers and end customers, using standardized formats such as X12.",
    ],
    icon: "/aws/svgs/DataExchange.svg",
    service_tag: [ServiceGroups.Application_integration],
  },
  {
    id: "EventBridge",
    name: "Amazon EventBridge",
    description: [
      "Amazon EventBridge is a serverless event bus that makes it easier to build event-driven applications at scale using events generated from your applications, integrated Software-as-a-Service (SaaS) applications, and AWS services. EventBridge delivers a stream of real-time data from event sources such as Zendesk or Shopify to targets such as AWS Lambda and other SaaS applications. You can set up routing rules to determine where to send your data to build application architectures that react in real-time to your data sources with event publisher and consumer completely decoupled.",
    ],
    icon: "/aws/svgs/EventBridge.svg",
    service_tag: [ServiceGroups.Application_integration],
  },
  {
    id: "ManagedWorkflowsforApacheAirflow",
    name: "Amazon Managed Workflows for Apache Airflow (MWAA)",
    description: [
      "Amazon Managed Workflows for Apache Airflow (MWAA) is a managed orchestration service for Apache Airflow that makes it easier to set up and operate end-to-end data pipelines in the cloud at scale. Apache Airflow is an open-source tool used to programmatically author, schedule, and monitor sequences of processes and tasks referred to as “workflows.” With Managed Workflows, you can use Airflow and Python to create workflows without having to manage the underlying infrastructure for scalability, availability, and security. Managed Workflows automatically scales its workflow capacity to meet your needs, and is integrated with AWS security services to help provide you with fast and secure access to data.",
    ],
    icon: "/aws/svgs/ManagedWorkflowsforApacheAirflow.svg",
    service_tag: [ServiceGroups.Application_integration],
  },
  {
    id: "Mq",
    name: "Amazon MQ",
    description: [
      "Amazon MQ is a managed message broker service for Apache ActiveMQ Classic and RabbitMQ that makes it easy to set up and operate message brokers in the cloud. Message brokers allow different software systems–often using different programming languages, and on different platforms–to communicate and exchange information. Amazon MQ reduces your operational load by managing the provisioning, setup, and maintenance of ActiveMQ and RabbitMQ, popular open-source message brokers. Connecting your current applications to Amazon MQ is easy because it uses industry-standard APIs and protocols for messaging, including JMS, NMS, AMQP, STOMP, MQTT, and WebSocket. Using standards means that in most cases, there’s no need to rewrite any messaging code when you migrate to AWS.",
    ],
    icon: "/aws/svgs/Mq.svg",
    service_tag: [ServiceGroups.Application_integration],
  },
  {
    id: "SimpleNotificationService",
    name: "Amazon Simple Notification Service",
    description: [
      "Amazon Simple Notification Service (Amazon SNS) is a highly available, durable, secure, fully managed pub/sub messaging service that enables you to decouple microservices, distributed systems, and serverless applications. Amazon SNS provides topics for high-throughput, push-based, many-to-many messaging. Using Amazon SNS topics, your publisher systems can fan out messages to a large number of subscriber endpoints for parallel processing, including Amazon SQS queues, AWS Lambda functions, and HTTP/S webhooks. Additionally, SNS can be used to fan out notifications to end users using mobile push, SMS, and email.",
    ],
    icon: "/aws/svgs/SimpleNotificationService.svg",
    service_tag: [ServiceGroups.Application_integration],
  },
  {
    id: "SimpleQueueService",
    name: "Amazon Simple Queue Service",
    description: [
      "Amazon Simple Queue Service (Amazon SQS) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. SQS eliminates the complexity and overhead associated with managing and operating message oriented middleware, and empowers developers to focus on differentiating work. Using Amazon SQS, you can send, store, and receive messages between software components at any volume, without losing messages or requiring other services to be available. Get started with Amazon SQS in minutes using the AWS Management Console, AWS CLI, or SDK of your choice, and three simple commands.",
      "Amazon SQS offers two types of message queues. Standard queues offer maximum throughput, best-effort ordering, and at-least-once delivery. Amazon SQS FIFO queues are designed to guarantee that messages are processed exactly once, in the exact order that they are sent.",
    ],
    icon: "/aws/svgs/SimpleQueueService.svg",
    service_tag: [ServiceGroups.Application_integration],
  },
  {
    id: "ExpressWorkflow_simple",
    name: "Amazon Simple Workflow Service",
    description: [
      "Amazon Simple Workflow Service (Amazon SWF) helps developers build, run, and scale background jobs that have parallel or sequential steps. You can think of Amazon SWF as a fully managed state tracker and task coordinator in the cloud. If your application’s steps take more than 500 milliseconds to complete, you need to track the state of processing. If you need to recover or retry if a task fails, Amazon SWF can help you.",
    ],
    icon: "/aws/svgs/ExpressWorkflow.svg",
    service_tag: [ServiceGroups.Application_integration],
  },
];

export const aws_services_block_chain: ServiceData[] = [
  {
    id: "ManagedBlockchain",
    name: "Managed Blockchain",
    description: [
      "Amazon Managed Blockchain is a fully managed service that makes it easy to create and manage scalable blockchain networks using the popular open source frameworks Hyperledger Fabric and Ethereum.",
      "Blockchain makes it possible to build applications where multiple parties can run transactions without the need for a trusted, central authority. Today, building a scalable blockchain network with existing technologies is complex to set up and hard to manage. To create a blockchain network, each network member needs to manually provision hardware, install software, create and manage certificates for access control, and configure networking components. Once the blockchain network is running, you need to continuously monitor the infrastructure and adapt to changes, such as an increase in transaction requests, or new members joining or leaving the network.",
      "Amazon Managed Blockchain is a fully managed service that allows you to set up and manage a scalable blockchain network with just a few clicks. Amazon Managed Blockchain eliminates the overhead required to create the network, and automatically scales to meet the demands of thousands of applications running millions of transactions. Once your network is up and running, Managed Blockchain makes it easy to manage and maintain your blockchain network. It manages your certificates, lets you easily invite new members to join the network, and tracks operational metrics such as usage of compute, memory, and storage resources. In addition, Managed Blockchain can replicate an immutable copy of your blockchain network activity into Amazon Quantum Ledger Database (Amazon QLDB), a fully managed ledger database. This allows you to easily analyze the network activity outside the network and gain insights into trends.",
    ],
    icon: "/aws/svgs/ManagedBlockchain.svg",
    service_tag: [ServiceGroups.Blockchain],
  },
];
export const aws_services_business_app: ServiceData[] = [];
export const aws_services_cloud_fin_manage: ServiceData[] = [];

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

export const aws_services_databases: ServiceData[] = [];
export const aws_services_dev_tools: ServiceData[] = [];
export const aws_services_end_user_compute: ServiceData[] = [];
export const aws_services_front_end: ServiceData[] = [];
export const aws_services_game_tech: ServiceData[] = [];
export const aws_services_iot: ServiceData[] = [];
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
  ...aws_services_compute,
  ...aws_services_customer_enable,
  ...aws_services_containers,
  ...aws_services_sec_iam_compliance,
  ...aws_services_storage,
];
