import { ServiceGroups } from "../aws-service-groups";
import { ServiceData } from "../aws-services";

export const aws_services_cloud_fin_manage: ServiceData[] = [
  {
    id: "ApplicationCostProfiler",
    name: "AWS Application Cost Profiler",
    description: [
      "AWS Application Cost Profiler provides you the ability to track the consumption of shared AWS resources used by software applications and report granular cost breakdown across tenant base. You can achieve economies of scale with the shared infrastructure model, while still maintaining a clear line of sight to detailed resource consumption information across multiple dimensions.",
      "With the proportionate cost insights of shared AWS resources, organizations running applications can establish the data foundation for accurate cost allocation model, and ISV selling applications can better understand your profitability and customize pricing strategies for your end customers.",
    ],
    icon: "/aws/svgs/ApplicationCostProfiler.svg",
    service_tag: [ServiceGroups.Cloud_Financial_Management],
  },
  {
    id: "BillingConductor",
    name: "AWS Billing Conductor",
    description: [
      "AWS Billing Conductor is a fully managed service that can support the showback and chargeback workflows of AWS Solution Providers and Enterprise customers. Using AWS Billing Conductor, you can customize your monthly billing data. The console models the billing relationship between you and your customers or business units. You can also customize a pro forma version of your billing data each month to accurately show or charge back your customers.",
      "AWS Billing Conductor doesn't change the way that you're billed by Amazon Web Services each month. Instead, it provides you with a mechanism to configure, generate, and display rates to certain customers over a given billing period. You can also use it to analyze the difference between the rates you apply to your accounting groupings relative to your actual rates from AWS. As a result of your AWS Billing Conductor configuration, the payer account can also see the custom rate that's applied on the billing details page of the AWS Billing console, or configure a cost and usage report per billing group.",
      "You can configure the billing groups and pricing plans using the AWS Billing Conductor or the AWS Billing Conductor API. For more information about AWS Billing Conductor service quotas, refer to Quotas and restrictions.",
    ],
    icon: "/aws/svgs/BillingConductor.svg",
    service_tag: [ServiceGroups.Cloud_Financial_Management],
  },
  {
    id: "CostExplorer",
    name: "AWS Cost Explorer",
    description: [
      "AWS Cost Explorer has an easy-to-use interface that lets you visualize, understand, and manage your AWS costs and usage over time. Get started quickly by creating custom reports (including charts and tabular data) that analyze cost and usage data, both at a high level (such as total costs and usage across all accounts) and for highly-specific requests (such as m2.2xlarge costs within account Y that are tagged “project: secretProject”).",
    ],
    icon: "/aws/svgs/CostExplorer.svg",
    service_tag: [ServiceGroups.Cloud_Financial_Management],
  },
  {
    id: "Budgets",
    name: "AWS Budgets",
    description: [
      "AWS Budgets gives you the ability to set custom budgets that alert you when your costs or usage exceed (or are forecasted to exceed) your budgeted amount. You can also use AWS Budgets to set RI utilization or coverage targets and receive alerts when your utilization drops below the threshold you define. RI alerts support Amazon EC2, Amazon RDS, Amazon Redshift, and Amazon ElastiCache reservations.",
      "Budgets can be tracked at the monthly, quarterly, or yearly level, and you can customize the start and end dates. You can further refine your budget to track costs associated with multiple dimensions, such as AWS service, linked account, tag, and others. Budget alerts can be sent via email and/or Amazon Simple Notification Service (Amazon SNS) topic.",
      "Budgets can be created and tracked from the AWS Budgets dashboard or via the AWS Budgets API.",
    ],
    icon: "/aws/svgs/Budgets.svg",
    service_tag: [ServiceGroups.Cloud_Financial_Management],
  },
  {
    id: "CostAndUsageReport",
    name: "AWS Cost and Usage Report",
    description: [
      "The AWS Cost and Usage Report is a single location for accessing comprehensive information about your AWS costs and usage.",
      "The AWS Cost and Usage Report lists AWS usage for each service category used by an account and its IAM users in hourly or daily line items, as well as any tags that you have activated for cost allocation purposes. You can also customize the AWS Cost and Usage Report to aggregate your usage data to the daily or monthly level.",
    ],
    icon: "/aws/svgs/CostAndUsageReport.svg",
    service_tag: [ServiceGroups.Cloud_Financial_Management],
  },
  {
    id: "ReservedInstanceReporting",
    name: "Reserved Instance (RI) reporting",
    description: [
      "AWS provides a number of RI-specific cost management solutions out-of-the-box to help you better understand and manage your RIs. Using the RI Utilization and Coverage reports available in AWS Cost Explorer, you can visualize your RI data at an aggregate level or inspect a particular RI subscription. To access the most detailed RI information available, you can leverage the AWS Cost and Usage Report. You can also set a custom RI utilization target via AWS Budgets and receive alerts when your utilization drops below the threshold you define.",
    ],
    icon: "/aws/svgs/ReservedInstanceReporting.svg",
    service_tag: [ServiceGroups.Cloud_Financial_Management],
  },
  {
    id: "SavingsPlans",
    name: "Savings Plans",
    description: [
      "Savings Plans is a flexible pricing model offering lower prices compared to On-Demand pricing, in exchange for a specific usage commitment (measured in $/hour) for a one or three-year period. AWS offers three types of Savings Plans – Compute Savings Plans, Amazon EC2 Instance Savings Plans, and Amazon SageMaker AI Savings Plans. Compute Savings Plans apply to usage across Amazon EC2, AWS Lambda, and AWS Fargate. The Amazon EC2 Instance Savings Plans apply to EC2 usage, and Amazon SageMaker AI Savings Plans apply to Amazon SageMaker AI usage. You can easily sign up a one- or three-year term Savings Plans in AWS Cost Explorer and manage your plans by taking advantage of recommendations, performance reporting, and budget alerts.",
    ],
    icon: "/aws/svgs/SavingsPlans.svg",
    service_tag: [ServiceGroups.Cloud_Financial_Management],
  },
];
