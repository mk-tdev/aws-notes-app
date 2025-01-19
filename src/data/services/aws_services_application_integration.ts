import { ServiceGroups } from "../aws-service-groups";
import { ServiceData } from "../aws-services";

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