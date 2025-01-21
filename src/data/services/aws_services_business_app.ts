import { ServiceGroups } from "../aws-service-groups";
import { ServiceData } from "../aws-services";

export const aws_services_business_app: ServiceData[] = [
  {
    id: "ManagedBlockchain_BUSINESS",
    name: "Alexa for Business",
    description: [
      "Alexa for Business is a service that enables organizations and employees to use Alexa to get more work done. With Alexa for Business, employees can use Alexa as their intelligent assistant to be more productive in meeting rooms, at their desks, and even with the Alexa devices they already have at home.",
    ],
    icon: "/aws/svgs/ManagedBlockchain.svg",
    service_tag: [ServiceGroups.Business_applications.name],
  },
  {
    id: "AppFabric",
    name: "AWS AppFabric",
    description: [
      "AWS AppFabric is a fully managed service that aggregates and normalizes security data across software as a service (SaaS) applications. Previously, integrating SaaS applications with existing security tools required teams to build, manage, and maintain their own point-to-point (P2P) integrations so that security teams could monitor event logs and understand activity from each application. With AppFabric, you can quickly connect multiple SaaS applications to increase observability, productivity, and security—with no coding required.",
      "After the SaaS applications are authorized and connected, AppFabric ingests the data and normalizes it using the Open Cybersecurity Schema Framework (OCSF). OCSF allows you to set common policies, standardize security alerts, and quickly manage user access across multiple applications.",
    ],
    icon: "/aws/svgs/DefaultManagedServices.svg",
    service_tag: [ServiceGroups.Business_applications.name],
  },
  {
    id: "Chime_1",
    name: "Amazon Chime",
    description: [
      "Amazon Chime is a communications service that transforms online meetings with a secure, easy-to-use application that you can trust. Amazon Chime works seamlessly across your devices so that you can stay connected. You can use Amazon Chime for online meetings, video conferencing, calls, chat, and to share content, both inside and outside your organization.",
      "Amazon Chime works with Alexa for Business, which means you can use Alexa to start your meetings with your voice. Alexa can start your video meetings in large conference rooms, and automatically dial into online meetings in smaller huddle rooms and from your desk.",
    ],
    icon: "/aws/svgs/Chime.svg",
    service_tag: [ServiceGroups.Business_applications.name],
  },
  {
    id: "Chime_2",
    name: "Amazon Chime SDK",
    description: [
      "With the Amazon Chime SDK, builders can easily add real-time voice, video, and messaging powered by ML into their applications.",
    ],
    icon: "/aws/svgs/Chime.svg",
    service_tag: [ServiceGroups.Business_applications.name],
  },
  {
    id: "Connect",
    name: "Amazon Connect",
    description: [
      "Amazon Connect is a self-service, omnichannel cloud contact center service that makes it easy for any business to deliver better customer service at lower cost. Amazon Connect is based on the same contact center technology used by Amazon customer service associates around the world to power millions of customer conversations. The self-service graphical interface in Amazon Connect makes it easy for non-technical users to design contact flows, manage agents, and track performance metrics – no specialized skills required. There are no up-front payments or long-term commitments and no infrastructure to manage with Amazon Connect; customers pay by the minute for Amazon Connect usage plus any associated telephony services.",
    ],
    icon: "/aws/svgs/Connect.svg",
    service_tag: [ServiceGroups.Business_applications.name],
  },
  {
    id: "Pinpoint",
    name: "Amazon Pinpoint",
    description: [
      "Amazon Pinpoint makes it easy to send targeted messages to your customers through multiple engagement channels. Examples of targeted campaigns are promotional alerts and customer retention campaigns, and transactional messages are messages such as order confirmations and password reset messages.",
      "You can integrate Amazon Pinpoint into your mobile and web apps to capture usage data to provide you with insight into how customers interact with your apps. Amazon Pinpoint also tracks the ways that your customers respond to the messages you send—for example, by showing you the number of messages that were delivered, opened, or clicked.",
      "You can develop custom audience segments and send them pre-scheduled targeted campaigns via email, SMS, and push notifications. Targeted campaigns are useful for sending promotional or educational content to re-engage and retain your users.",
      "You can send transactional messages using the console or the Amazon Pinpoint REST API. Transactional campaigns can be sent via email, SMS, push notifications, and voice messages. You can also use the API to build custom applications that deliver campaign and transactional messages.",
    ],
    icon: "/aws/svgs/Pinpoint.svg",
    service_tag: [ServiceGroups.Business_applications.name],
  },
  {
    id: "SimpleEmailService",
    name: "Amazon SES",
    description: [
      "Amazon Simple Email Service (Amazon SES) is a cost-effective, flexible, and scalable email service that enables developers to send mail from within any application. You can configure Amazon SES quickly to support several email use cases, including transactional, marketing, or mass email communications. The Amazon SES flexible IP deployment and email authentication options help drive higher deliverability and protect sender reputation, while sending analytics measure the impact of each email. With Amazon SES, you can send email securely, globally, and at scale.",
    ],
    icon: "/aws/svgs/SimpleEmailService.svg",
    service_tag: [ServiceGroups.Business_applications.name],
  },
  {
    id: "WorkDocs",
    name: "Amazon WorkDocs",
    description: [
      "Amazon WorkDocs is a fully managed, secure enterprise storage and sharing service with strong administrative controls and feedback capabilities that improve user productivity.",
      "Users can comment on files, send them to others for feedback, and upload new versions without having to resort to emailing multiple versions of their files as attachments. Users can take advantage of these capabilities wherever they are, using the device of their choice, including PCs, Macs, tablets, and phones. Amazon WorkDocs offers IT administrators the option of integrating with existing corporate directories, flexible sharing policies and control of the location where data is stored.",
    ],
    icon: "/aws/svgs/WorkDocs.svg",
    service_tag: [ServiceGroups.Business_applications.name],
  },
  {
    id: "WorkMail",
    name: "Amazon WorkMail",
    description: [
      "Amazon WorkMail is a secure, managed business email and calendar service with support for existing desktop and mobile email client applications. Amazon WorkMail gives users the ability to seamlessly access their email, contacts, and calendars using the client application of their choice, including Microsoft Outlook, native iOS and Android email applications, any client application supporting the IMAP protocol, or directly through a web browser. You can integrate Amazon WorkMail with your existing corporate directory, use email journaling to meet compliance requirements, and control both the keys that encrypt your data and the location in which your data is stored. You can also set up interoperability with Microsoft Exchange Server, and programmatically manage users, groups, and resources using the Amazon WorkMail SDK.",
    ],
    icon: "/aws/svgs/WorkMail.svg",
    service_tag: [ServiceGroups.Business_applications.name],
  },
];
