import { ServiceGroups } from "../aws-service-groups";
import { ServiceData } from "../aws-services";

export const aws_services_sec_iam_compliance: ServiceData[] = [
  {
    id: "Cognito",
    name: "Amazon Cognito",
    description: [
      "Amazon Cognito lets you add user sign-up, sign-in, and access control to your web and mobile apps quickly and easily. With Amazon Cognito, you can scale to millions of users and supports sign-in with social identity providers such as Apple, Facebook, Twitter, or Amazon, with SAML 2.0 identity solutions, or by using your own identity system.",
      "In addition, Amazon Cognito enables you to save data locally on users’ devices, allowing your applications to work even when the devices are offline. You can then synchronize data across users’ devices so that their app experience remains consistent regardless of the device they use.",
      "With Amazon Cognito, you can focus on creating great app experiences instead of worrying about building, securing, and scaling a solution to handle user management, authentication, and sync across devices.",
    ],
    icon: "/aws/svgs/Cognito.svg",
    service_tag: [ServiceGroups.Security_identity_and_compliance.name],
  },
  {
    id: "Detective",
    name: "Amazon Detective",
    description: [
      "Amazon Detective makes it easy to analyze, investigate, and quickly identify the root cause of potential security issues or suspicious activities. Amazon Detective automatically collects log data from your AWS resources and uses machine learning, statistical analysis, and graph theory to build a linked set of data that enables you to easily conduct faster and more efficient security investigations. Amazon Detective further simplifies account management for security operations and investigations across all existing and future accounts in an organization using AWS Organizations for up to 1,200 AWS accounts.",
      "AWS security services such as Amazon GuardDuty, Amazon Macie, and AWS Security Hub, as well as partner security products, can be used to identify potential security issues, or findings. These services are really helpful in alerting you when and where there is possible unauthorized access or suspicious behavior in your AWS deployment. However, sometimes there are security findings that you would like to perform deeper investigations of the events that led to the findings to remediate the root cause. Determining the root cause of security findings can be a complex process for security analysts that often involves collecting and combining logs from many data sources, using extract, transform, and load (ETL) tools, and custom scripting to organize the data.",
      "Amazon Detective simplifies this process by enabling your security teams to easily investigate and quickly get to the root cause of a finding. Detective can analyze trillions of events from multiple data sources such as Amazon Virtual Private Cloud (VPC) Flow Logs, AWS CloudTrail, and Amazon GuardDuty. Detective uses these events to automatically create a unified, interactive view of your resources, users, and the interactions between them over time. With this unified view, you can visualize all the details and context in one place to identify the underlying reasons for the findings, drill down into relevant historical activities, and quickly determine the root cause.",
      "You can get started with Amazon Detective in just a few clicks in the AWS Management Console. There is no software to deploy, or data sources to enable and maintain. You can try Detective at no additional charge with a 30-day free trial that is available to new accounts.",
    ],
    icon: "/aws/svgs/Detective.svg",
    service_tag: [ServiceGroups.Security_identity_and_compliance.name],
  },
  {
    id: "GuardDuty",
    name: "Amazon GuardDuty",
    description: [
      "Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and anomalous behavior to protect your AWS accounts, workloads, Kubernetes clusters, and data stored in Amazon Simple Storage Service (Amazon S3). The GuardDuty service monitors for activity such as unusual API calls, unauthorized deployments, and exfiltrated credentials that indicate a possible account reconnaissance or compromise.",
      "Enabled with a few clicks in the AWS Management Console and easily administrated organization-wide with its support of AWS Organizations, Amazon GuardDuty can immediately begin analyzing billions of events across your AWS accounts for signs of unauthorized use. GuardDuty identifies suspected attackers through integrated threat intelligence feeds and machine learning anomaly detection to detect anomalies in account and workload activity. When potential unauthorized use is detected, the service delivers a detailed finding to the GuardDuty console, Amazon CloudWatch Events, and AWS Security Hub. This makes findings actionable and easy to integrate into existing event management and workflow systems. Further investigation to determine the root cause of a finding is easily accomplished by using Amazon Detective directly from the GuardDuty console.",
      "Amazon GuardDuty is cost effective and easy to operate. It does not require you to deploy and maintain software or security infrastructure, meaning it can be enabled quickly with no risk of negatively impacting existing application and container workloads. There are no upfront costs with GuardDuty, no software to deploy, and no threat intelligence feeds to enable. Furthermore, GuardDuty optimizes costs by applying smart filters and analyzing only a subset of logs relevant to threat detection, and new Amazon GuardDuty accounts are free for 30 days.",
    ],
    icon: "/aws/svgs/GuardDuty.svg",
    service_tag: [ServiceGroups.Security_identity_and_compliance.name],
  },
  {
    id: "Inspector",
    name: "Amazon Inspector",
    description: [
      "Amazon Inspector is a new automated vulnerability management service that continually scans AWS workloads for software vulnerabilities and unintended network exposure. With a few clicks in the AWS Management Console and AWS Organizations, Amazon Inspector can be used across all accounts in your organization. Once started, Amazon Inspector automatically discovers running Amazon Elastic Compute Cloud (Amazon EC2) instances and container images residing in Amazon Elastic Container Registry (Amazon ECR), at any scale, and immediately starts assessing them for known vulnerabilities.",
      "Amazon Inspector has many improvements over Amazon Inspector Classic. For example, the new Amazon Inspector calculates a highly contextualized risk score for each finding by correlating common vulnerabilities and exposures (CVE) information with factors such as network access and exploitability. This score is used to prioritize the most critical vulnerabilities to improve remediation response efficiency. Additionally, Amazon Inspector now uses the widely deployed AWS Systems Manager Agent (SSM Agent) to eliminate the need for you to deploy and maintain a standalone agent to run Amazon EC2 instance assessments. For container workloads, Amazon Inspector is now integrated with Amazon Elastic Container Registry (Amazon ECR) to support intelligent, cost-efficient, and continual vulnerability assessments of container images. All findings are aggregated in the Amazon Inspector console, routed to AWS Security Hub, and pushed through Amazon EventBridge to automate workflows such as ticketing.",
      "All accounts new to Amazon Inspector are eligible for a 15-day free trial to evaluate the service and estimate its cost. During the trial, all eligible Amazon EC2 instances and container images pushed to Amazon ECR are continually scanned at no cost.",
    ],
    icon: "/aws/svgs/Inspector.svg",
    service_tag: [ServiceGroups.Security_identity_and_compliance.name],
  },
  {
    id: "Macie",
    name: "Amazon Macie",
    description: [
      "Amazon Macie is a fully managed data security and data privacy service that uses inventory evaluations, machine learning, and pattern matching to discover sensitive data and accessibility in your Amazon S3 environment. Macie supports scalable on-demand and automated sensitive data discovery jobs that automatically tracks changes to the bucket and only evaluates new or modified objects over time. Using Macie, you can detect a large and growing list of sensitive data types for many countries and Regions, including multiple types of financial data, personal health information (PHI), and personally identifiable information (PII), as well as custom types. Macie also continually evaluates your Amazon S3 environment to provide an S3 resource summary and security evaluation across all of your accounts. You can search, filter, and sort S3 buckets by metadata variables, such as bucket names, tags, and security controls like encryption status or public accessibility. For any unencrypted buckets, publicly accessible buckets, or buckets shared with AWS accounts outside those you have defined in AWS Organizations, you can be alerted to act.",
      "In the multi-account configuration, a single Macie administrator account can manage all member accounts, including the creation and administration of sensitive data discovery jobs across accounts with AWS Organizations. Security and sensitive data discovery findings are aggregated in the Macie administrator account and sent to Amazon CloudWatch Events and AWS Security Hub. Now using one account, you can integrate with event management, workflow, and ticketing systems or use Macie findings with AWS Step Functions to automate remediation actions. You can quickly get started with Macie using the 30-day trial available to new accounts for S3 bucket inventory and bucket-level evaluation at no charge. Sensitive data discovery is not included in the 30-day trial for bucket evaluation.",
    ],
    icon: "/aws/svgs/Macie.svg",
    service_tag: [ServiceGroups.Security_identity_and_compliance.name],
  },
  {
    id: "SecurityLake",
    name: "Amazon Security Lake",
    description: [
      "Amazon Security Lake centralizes security data from AWS environments, SaaS providers, on premises, and cloud sources, into a purpose-built data lake that's stored in your AWS account. Security Lake automates the collection and management of security data across accounts and AWS Regions so that you can use your preferred analytics tools while retaining control and ownership over your security data. With Security Lake, you can also improve the protection of your workloads, applications, and data.",
      "Security Lake automates the collection of security-related log and event data from integrated AWS services and third-party services. It also helps you manage the lifecycle of data with customizable retention settings. The data lake is backed by Amazon S3 buckets, and you retain ownership over your data. Security Lake converts ingested data into Apache Parquet format and a standard open-source schema called the Open Cybersecurity Schema Framework (OCSF). With OCSF support, Security Lake normalizes and combines security data from AWS and a broad range of enterprise security data sources.",
      "Other AWS services and third-party services can subscribe to the data that's stored in Security Lake for incident response and security data analytics.",
    ],
    icon: "/aws/svgs/SecurityLake.svg",
    service_tag: [ServiceGroups.Security_identity_and_compliance.name],
  },
  {
    id: "IdentityAccessManagementPermissions",
    name: "Amazon Verified Permissions",
    description: [
      "Amazon Verified Permissions is a scalable, fine-grained permissions management and authorization service for custom applications you've built. Verified Permissions enables your developers to build secure applications faster by externalizing authorization and centralizing policy management and administration.",
      "Verified Permissions uses Cedar, an open-source policy language and SDK, to define fine-grained permissions for application users. Your authorization model is defined using principal types, resource types, and valid actions, to control who can take what actions on which resources in a given application context. Policy changes are audited so that you can see who made the changes and when.",
    ],
    icon: "/aws/svgs/IdentityAccessManagementPermissions.svg",
    service_tag: [ServiceGroups.Security_identity_and_compliance.name],
  },
  {
    id: "Artifact",
    name: "AWS Artifact",
    description: [
      "AWS Artifact is your go-to, central resource for compliance-related information that matters to you. It provides on-demand access to AWS security and compliance reports and select online agreements. Reports available in AWS Artifact include our Service Organization Control (SOC) reports, Payment Card Industry (PCI) reports, and certifications from accreditation bodies across geographies and compliance verticals that validate the implementation and operating effectiveness of AWS security controls. Agreements available in AWS Artifact include the Business Associate Addendum (BAA) and the Nondisclosure Agreement (NDA).",
    ],
    icon: "/aws/svgs/Artifact.svg",
    service_tag: [ServiceGroups.Security_identity_and_compliance.name],
  },
  {
    id: "AuditManager",
    name: "AWS Audit Manager",
    description: [
      "AWS Audit Manager helps you continuously audit your AWS usage to simplify how you assess risk and compliance with regulations and industry standards. Audit Manager automates evidence collection to reduce the “all hands on deck” manual effort that often happens for audits and enable you to scale your audit capability in the cloud as your business grows. With Audit Manager, it is easy to assess if your policies, procedures, and activities – also known as controls – are operating effectively. When it is time for an audit, AWS Audit Manager helps you manage stakeholder reviews of your controls and enables you to build audit-ready reports with much less manual effort.",
      "The AWS Audit Manager prebuilt frameworks help translate evidence from cloud services into auditor-friendly reports by mapping your AWS resources to the requirements in industry standards or regulations, such as CIS AWS Foundations Benchmark, the General Data Protection Regulation (GDPR), and the Payment Card Industry Data Security Standard (PCI DSS). You can also fully customize a framework and its controls for your unique business requirements. Based on the framework you select, Audit Manager launches an assessment that continuously collects and organizes relevant evidence from your AWS accounts and resources, such as resource configuration snapshots, user activity, and compliance check results.",
      "You can get started quickly in the AWS Management Console. Just select a prebuilt framework to launch an assessment and begin automatically collecting and organizing evidence.",
    ],
    icon: "/aws/svgs/AuditManager.svg",
    service_tag: [ServiceGroups.Security_identity_and_compliance.name],
  },
  {
    id: "CertificateManager",
    name: "AWS Certificate Manager",
    description: [
      "AWS Certificate Manager is a service that lets you easily provision, manage, and deploy Secure Sockets Layer/Transport Layer Security (SSL/TLS) certiﬁcates for use with AWS services and your internal connected resources. SSL/TLS certiﬁcates are used to secure network communications and establish the identity of websites over the Internet as well as resources on private networks. AWS Certificate Manager removes the time-consuming manual process of purchasing, uploading, and renewing SSL/TLS certiﬁcates.",
      "With AWS Certificate Manager, you can quickly request a certificate, deploy it on ACM-integrated AWS resources, such as Elastic Load Balancing, Amazon CloudFront distributions, and APIs on API Gateway, and let AWS Certificate Manager handle certificate renewals. It also enables you to create private certificates for your internal resources and manage the certificate lifecycle centrally. Public and private certificates provisioned through AWS Certificate Manager for use with ACM-integrated services are free. You pay only for the AWS resources you create to run your application.",
      "With AWS Private Certificate Authority, you pay monthly for the operation of the private certificate authority (CA) and for the private certificates you issue. you have a highly available private CA service without the upfront investment and ongoing maintenance costs of operating your own private CA.",
    ],
    icon: "/aws/svgs/CertificateManager.svg",
    service_tag: [ServiceGroups.Security_identity_and_compliance.name],
  },
  {
    id: "CloudHsm",
    name: "AWS CloudHSM",
    description: [
      "The AWS CloudHSM is a cloud-based hardware security module (HSM) that enables you to easily generate and use your own encryption keys on the AWS Cloud. With AWS CloudHSM, you can manage your own encryption keys using dedicated FIPS 140-2 Level 3 validated HSMs. AWS CloudHSM offers you the flexibility to integrate with your applications using industry-standard APIs, such as PKCS#11, Java Cryptography Extensions (JCE), and Microsoft CryptoNG (CNG) libraries.",
      "AWS CloudHSM is standards-compliant and enables you to export all of your keys to most other commercially-available HSMs, subject to your configurations. It is a fully managed service that automates time-consuming administrative tasks for you, such as hardware provisioning, software patching, high-availability, and backups. AWS CloudHSM also enables you to scale quickly by adding and removing HSM capacity on-demand, with no up-front costs.",
    ],
    icon: "/aws/svgs/CloudHsm.svg",
    service_tag: [ServiceGroups.Security_identity_and_compliance.name],
  },
  {
    id: "CloudDirectory",
    name: "AWS Directory Service",
    description: [
      "AWS Directory Service for Microsoft Active Directory, also known as AWS Managed Microsoft AD, enables your directory-aware workloads and AWS resources to use managed Active Directory in the AWS Cloud. AWS Managed Microsoft AD is built on actual Microsoft Active Directory and does not require you to synchronize or replicate data from your existing Active Directory to the cloud. You can use standard Active Directory administration tools and take advantage of built-in Active Directory features such as Group Policy and single sign-on (SSO). With AWS Managed Microsoft AD, you can easily join Amazon EC2 and Amazon RDS for SQL Server instances to a domain, and use AWS Enterprise IT applications such as Amazon WorkSpaces with Active Directory users and groups.",
    ],
    icon: "/aws/svgs/CloudDirectory.svg",
    service_tag: [ServiceGroups.Security_identity_and_compliance.name],
  },
  {
    id: "NetworkFirewall_1",
    name: "AWS Firewall Manager",
    description: [
      "AWS Firewall Manager is a security management service which allows you to centrally configure and manage firewall rules across your accounts and applications in AWS Organizations. As new applications are created, Firewall Manager makes it easy to bring new applications and resources into compliance by enforcing a common set of security rules. Now you have a single service to build firewall rules, create security policies, and enforce them in a consistent, hierarchical manner across your entire infrastructure, from a central administrator account.",
    ],
    icon: "/aws/svgs/NetworkFirewall.svg",
    service_tag: [ServiceGroups.Security_identity_and_compliance.name],
  },
  {
    id: "FirewallManager",
    name: "AWS Identity and Access Management",
    description: [
      "AWS Identity and Access Management (IAM) enables you to securely control access to AWS services and resources for your AWS users, groups, and roles. Using IAM, you can create and manage fine-grained access controls with permissions, specify who can access which services and resources, and under which conditions. IAM allows you to do the following:",
      "You manage AWS permissions for your workforce users and workloads in AWS IAM Identity Center (IAM Identity Center). IAM Identity Center allows you to manage user access across multiple AWS accounts. With just a few clicks, you can enable a highly available service, easily manage multi-account access and the permissions to all of your accounts in AWS Organizations centrally. IAM Identity Center includes built-in SAML integrations to many business applications, such as Salesforce, Box, and Microsoft Office 365. Further, you can create Security Assertion Markup Language (SAML) 2.0 integrations and extend single sign-on access to any of your SAML-enabled applications. Your users simply sign in to a user portal with credentials they configure or using their existing corporate credentials to access all their assigned accounts and applications from one place.",
      "Manage single-account IAM permissions: You can specify access to AWS resources using permissions. Your IAM entities (users, groups, and roles) by default start with no permissions. These identities can be granted permissions by attaching an IAM policy that specifies the type of access, the actions that can be performed, and the resources on which actions can be performed. You can also specify conditions that must be set for access to be allowed or denied.",
      "Manage single-account IAM roles: IAM roles allows you to delegate access to users or services that normally don’t have access to your organization’s AWS resources. IAM users or AWS services can assume a role to obtain a temporary security credential that be used to make AWS API calls. You don’t have to share long-term credentials or define permissions for each identity.",
    ],
    icon: "/aws/svgs/FirewallManager.svg",
    service_tag: [ServiceGroups.Security_identity_and_compliance.name],
  },
  {
    id: "KeyManagementServices",
    name: "AWS Key Management Service",
    description: [
      "AWS Key Management Service (AWS KMS) makes it easy for you to create and manage cryptographic keys and control their use across a wide range of AWS services and in your applications. AWS KMS uses hardware security modules (HSM) to protect and validate your AWS KMS keys under the FIPS 140-2 Cryptographic Module Validation Program. AWS KMS is integrated with AWS CloudTrail to provide you with logs of all key usage to help meet your regulatory and compliance needs.",
    ],
    icon: "/aws/svgs/KeyManagementServices.svg",
    service_tag: [ServiceGroups.Security_identity_and_compliance.name],
  },
  {
    id: "NetworkFirewall",
    name: "AWS Network Firewall",
    description: [
      "AWS Network Firewall is a managed service that makes it easy to deploy essential network protections for all of your Amazon Virtual Private Clouds (VPCs). The service can be setup with just a few clicks and scales automatically with your network traffic, so you don't have to worry about deploying and managing any infrastructure. The AWS Network Firewall flexible rules engine lets you define firewall rules that give you fine-grained control over network traffic, such as blocking outbound Server Message Block (SMB) requests to prevent the spread of malicious activity. You can also import rules you’ve already written in common open source rule formats as well as enable integrations with managed intelligence feeds sourced by AWS Partners. AWS Network Firewall works together with AWS Firewall Manager so you can build policies based on AWS Network Firewall rules and then centrally apply those policies across your VPCs and accounts.",
      "AWS Network Firewall includes features that provide protections from common network threats. The AWS Network Firewall stateful firewall can incorporate context from traffic flows, such as tracking connections and protocol identification, to enforce policies such as preventing your VPCs from accessing domains using an unauthorized protocol. The AWS Network Firewall intrusion prevention system (IPS) provides active traffic flow inspection so you can identify and block vulnerability exploits using signature-based detection. AWS Network Firewall also offers web filtering that can stop traffic to known bad URLs and monitor fully qualified domain names.",
      "It’s easy to get started with AWS Network Firewall by visiting the Amazon VPC Console to create or import your firewall rules, group them into policies, and apply them to the VPCs you want to protect. AWS Network Firewall pricing is based on the number of firewalls deployed and the amount of traffic inspected. There are no upfront commitments and you pay only for what you use.",
    ],
    icon: "/aws/svgs/NetworkFirewall.svg",
    service_tag: [ServiceGroups.Security_identity_and_compliance.name],
  },
  {
    id: "ResourceAccessManager",
    name: "AWS Resource Access Manager",
    description: [
      "AWS Resource Access Manager (AWS RAM) helps you securely share your resources across AWS accounts, within your organization or organizational units (OUs) in AWS Organizations, and with IAM roles and IAM users for supported resource types. You can use AWS RAM to share transit gateways, subnets, AWS License Manager license configurations, Amazon Route 53 Resolver rules, and more resource types.",
      "Many organizations use multiple accounts to create administrative or billing isolation, and to limit the impact of errors. With AWS RAM, you don’t need to create duplicate resources in multiple AWS accounts. This reduces the operational overhead of managing resources in every account that you own. Instead, in your multi-account environment, you can create a resource once, and use AWS RAM to share that resource across accounts by creating a resource share. When you create a resource share, you select the resources to share, choose an AWS RAM managed permission per resource type, and specify whom you want to have access to the resources. AWS RAM is available to you at no additional charge.",
    ],
    icon: "/aws/svgs/ResourceAccessManager.svg",
    service_tag: [ServiceGroups.Security_identity_and_compliance.name],
  },
  {
    id: "SecretsManager",
    name: "AWS Secrets Manager",
    description: [
      "AWS Secrets Manager helps you protect secrets needed to access your applications, services, and IT resources. The service enables you to easily rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle. Users and applications retrieve secrets with a call toSecrets Manager APIs, eliminating the need to hardcode sensitive information in plain text. Secrets Manager offers secret rotation with built-in integration for Amazon RDS, Amazon Redshift, and Amazon DocumentDB. The service is also extensible to other types of secrets, including API keys and OAuth tokens. In addition, Secrets Manager enables you to control access to secrets using fine-grained permissions and audit secret rotation centrally for resources in the AWS Cloud, third-party services, and on-premises.",
    ],
    icon: "/aws/svgs/SecretsManager.svg",
    service_tag: [ServiceGroups.Security_identity_and_compliance.name],
  },
  {
    id: "SecurityHub",
    name: "AWS Security Hub",
    description: [
      "AWS Security Hub is a cloud security posture management service that performs automated, continuous security best practice checks against your AWS resources. Security Hub aggregates your security alerts (i.e. findings) from various AWS services and partner products in a standardized format so that you can more easily take action on them. To maintain a complete view of your security posture in AWS, you need to integrate multiple tools and services including threat detections from Amazon GuardDuty, vulnerabilities from Amazon Inspector, sensitive data classifications from Amazon Macie, resource configuration issues from AWS Config, and AWS Partner Network products. Security Hub simplifies how you understand and improve your security posture with automated security best practice checks powered by AWS Config rules and automated integrations with dozens of AWS services and partner products.",
      "Security Hub enables you to understand your overall security posture via a consolidated security score across all of your AWS accounts, automatically assesses the security of your AWS accounts resources via the AWS Foundational Security Best Practices (FSBP) standard and other compliance frameworks. It also aggregates all of your security findings from dozens of AWS security services and APN products in a single place and format via the AWS Security Finding Format (ASFF), and reduces your Mean Time To Remediation (MTTR) with automated response and remediation support. Security Hub has out-of-the-box integrations with ticketing, chat, Security Information and Event Management (SIEM), Security Orchestration Automation and Response (SOAR), threat investigation, Governance Risk and Compliance (GRC), and incident management tools to provide your users with a complete security operations workflow.",
      "Getting started with Security Hub requires just a few clicks from the AWS Management Console to begin aggregating findings and conducting security checks using our 30-day free trial. You can integrate Security Hub with AWS Organizations to automatically enable the service in all accounts in your organization.",
    ],
    icon: "/aws/svgs/SecurityHub.svg",
    service_tag: [ServiceGroups.Security_identity_and_compliance.name],
  },
  {
    id: "Shield",
    name: "AWS Shield",
    description: [
      "AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that safeguards web applications running on AWS. AWS Shield provides you with always-on detection and automatic inline mitigations that minimize application downtime and latency, so there is no need to engage Support to benefit from DDoS protection. There are two tiers of AWS Shield: Standard and Advanced.",
      "All AWS customers beneﬁt from the automatic protections of AWS Shield Standard, at no additional charge. AWS Shield Standard defends against most common, frequently occurring network and transport layer DDoS attacks that target your website or applications. When you use AWS Shield Standard with Amazon CloudFront and Amazon Route 53, you receive comprehensive availability protection against all known infrastructure (Layer 3 and 4) attacks.",
      "For higher levels of protection against attacks targeting your applications running on Amazon Elastic Compute Cloud (Amazon EC2), Elastic Load Balancing (ELB), Amazon CloudFront, and Amazon Route 53 resources, you can subscribe to AWS Shield Advanced. In addition to the network and transport layer protections that come with Standard, AWS Shield Advanced provides additional detection and mitigation against large and sophisticated DDoS attacks, near real-time visibility into attacks, and integration with AWS WAF, a web application firewall. AWS Shield Advanced also gives you 24x7 access to the AWS DDoS Response Team (DRT) and protection against DDoS related spikes in your Amazon Elastic Compute Cloud (Amazon EC2), Elastic Load Balancing (ELB), Amazon CloudFront, and Amazon Route 53 charges.",
      "AWS Shield Advanced is available globally on all Amazon CloudFront and Amazon Route 53 edge locations. You can protect your web applications hosted anywhere in the world by deploying Amazon CloudFront in front of your application. Your origin servers can be Amazon S3, Amazon Elastic Compute Cloud (Amazon EC2), Elastic Load Balancing (ELB), or a custom server outside of AWS. You can also enable AWS Shield Advanced directly on an Elastic IP or Elastic Load Balancing (ELB) in the following AWS Regions: Northern Virginia, Ohio, Oregon, Northern California, Montreal, São Paulo, Ireland, Frankfurt, London, Paris, Stockholm, Singapore, Tokyo, Sydney, Seoul, Mumbai, Milan, and Cape Town.",
    ],
    icon: "/aws/svgs/Shield.svg",
    service_tag: [ServiceGroups.Security_identity_and_compliance.name],
  },
  {
    id: "IdentityAndAccessManagement",
    name: "AWS IAM Identity Center",
    description: [
      "AWS IAM Identity Center (SSO) is a cloud SSO service that makes it easy to centrally manage SSO access to multiple AWS accounts and business applications. With just a few clicks, you can enable a highly available SSO service without the upfront investment and on-going maintenance costs of operating your own SSO infrastructure. With IAM Identity Center, you can easily manage SSO access and user permissions to all of your accounts in AWS Organizations centrally. IAM Identity Center also includes built-in SAML integrations to many business applications, such as Salesforce, Box, and Microsoft Office 365. Further, by using the IAM Identity Center application configuration wizard, you can create Security Assertion Markup Language (SAML) 2.0 integrations and extend SSO access to any of your SAML-enabled applications. Your users simply sign in to a user portal with credentials they configure in IAM Identity Center or using their existing corporate credentials to access all their assigned accounts and applications from one place.",
    ],
    icon: "/aws/svgs/IdentityAndAccessManagement.svg",
    service_tag: [ServiceGroups.Security_identity_and_compliance.name],
  },
  {
    id: "Waf_1",
    name: "AWS WAF",
    description: [
      "AWS WAF is a web application ﬁrewall that helps protect your web applications or APIs against common web exploits and bots that may affect availability, compromise security, or consume excessive resources. AWS WAF gives you control over how traffic reaches your applications by enabling you to create security rules that control bot traffic and block common attack patterns, such as SQL injection or cross-site scripting. You can also customize rules that filter out specific traffic patterns. You can get started quickly using Managed Rules for AWS WAF, a pre-configured set of rules managed by AWS or AWS Marketplace sellers to address issues like the OWASP Top 10 security risks and automated bots that consume excess resources, skew metrics, or can cause downtime. These rules are regularly updated as new issues emerge. AWS WAF includes a full-featured API that you can use to automate the creation, deployment, and maintenance of security rules.",
    ],
    icon: "/aws/svgs/Waf.svg",
    service_tag: [ServiceGroups.Security_identity_and_compliance.name],
  },
  {
    id: "Waf_2",
    name: "AWS WAF Captcha",
    description: [
      "AWS WAF Captcha helps block unwanted bot traffic by requiring users to successfully complete challenges before their web request are allowed to reach AWS WAF protected resources. You can configure AWS WAF rules to require WAF Captcha challenges to be solved for specific resources that are frequently targeted by bots such as login, search, and form submissions. You can also require WAF Captcha challenges for suspicious requests based on the rate, attributes, or labels generated from AWS Managed Rules, such as AWS WAF Bot Control or the Amazon IP Reputation list. WAF Captcha challenges are simple for humans while remaining effective against bots. WAF Captcha includes an audio version and is designed to meet Web Content Accessability Guidelines (WCAG) accessibility requirements.",
    ],
    icon: "/aws/svgs/Waf.svg",
    service_tag: [ServiceGroups.Security_identity_and_compliance.name],
  },
];
