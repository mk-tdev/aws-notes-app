import { ServiceGroups } from "../aws-service-groups";
import { ServiceData } from "../aws-services";

export const aws_services_migration_transfer: ServiceData[] = [
  {
    id: "ApplicationDiscoveryService",
    name: "AWS Application Discovery Service",
    description: [
      "AWS Application Discovery Service helps enterprise customers plan migration projects by gathering information about their on-premises data centers.",
      "Planning data center migrations can involve thousands of workloads that are often deeply interdependent. Server utilization data and dependency mapping are important early first steps in the migration process. AWS Application Discovery Service collects and presents configuration, usage, and behavior data from your servers to help you better understand your workloads.",
      "The collected data is retained in encrypted format in an AWS Application Discovery Service data store. You can export this data as a CSV file and use it to estimate the Total Cost of Ownership (TCO) of running on AWS and to plan your migration to AWS. In addition, this data is also available in AWS Migration Hub, where you can migrate the discovered servers and track their progress as they get migrated to AWS.",
    ],
    icon: "/aws/svgs/ApplicationDiscoveryService.svg",
    service_tag: [ServiceGroups.Migration_and_transfer.name],
  },
  {
    id: "ApplicationMigrationService",
    name: "AWS Application Migration Service",
    description: [
      "AWS Application Migration Service (AWS MGN) allows you to quickly realize the benefits of migrating applications to the cloud without changes and with minimal downtime.",
      "AWS Application Migration Service minimizes time-intensive, error-prone manual processes by automatically converting your source servers from physical, virtual, or cloud infrastructure to run natively on AWS. It further simplifies your migration by enabling you to use the same automated process for a wide range of applications.",
      "And by launching non-disruptive tests before migrating, you can be confident that your most critical applications such as SAP, Oracle, and SQL Server will work seamlessly on AWS.",
    ],
    icon: "/aws/svgs/ApplicationMigrationService.svg",
    service_tag: [ServiceGroups.Migration_and_transfer.name],
  },
  {
    id: "MIG_DatabaseMigration",
    name: "AWS Database Migration Service",
    description: [
      "AWS Database Migration Service (AWS DMS) helps you migrate databases to AWS easily and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. The AWS Database Migration Service can migrate your data to and from most widely used commercial and open-source databases. The service supports homogeneous migrations such as Oracle to Oracle, as well as heterogeneous migrations between different database platforms, such as Oracle to Amazon Aurora or Microsoft SQL Server to MySQL. It also allows you to stream data to Amazon Redshift from any of the supported sources including Amazon Aurora, PostgreSQL, MySQL, MariaDB, Oracle, SAP ASE, and SQL Server, enabling consolidation and easy analysis of data in the petabyte-scale data warehouse. AWS Database Migration Service can also be used for continuous data replication with high availability.",
      "AWS DMS Serverless offers the flexibility to migrate data without needing to provision replication instances, manually monitoring use, and adjusting capacity. AWS DMS Serverless supports popular use cases including continuous data replication, database consolidation, and migrations, even if the source and target database engines differ. For like-to-like or compatible database engines, you can use built-in tools with automatic scaling for a seamless database migration.",
    ],
    icon: "/aws/svgs/DatabaseMigration.svg",
    service_tag: [ServiceGroups.Migration_and_transfer.name],
  },
  {
    id: "MainframeModernization",
    name: "AWS Mainframe Modernization Service",
    description: [
      "AWS Mainframe Modernization Service is a unique service that allows you to migrate your on-premises mainframe workloads to a managed runtime environment on AWS. AWS Mainframe Modernization Service is a set of managed tools providing infrastructure and software for migrating, modernizing, and running mainframe applications.",
    ],
    icon: "/aws/svgs/MainframeModernization.svg",
    service_tag: [ServiceGroups.Migration_and_transfer.name],
  },
  {
    id: "MigrationHub",
    name: "AWS Migration Hub",
    description: [
      "AWS Migration Hub provides a single location to track the progress of application migrations across multiple AWS and partner solutions. Using Migration Hub allows you to choose the AWS and partner migration tools that best fit your needs, while providing visibility into the status of migrations across your portfolio of applications. Migration Hub also provides key metrics and progress for individual applications, regardless of which tools are being used to migrate them. For example, you might use AWS Database Migration Service, AWS Application Migration Service, and partner migration tools such as ATADATA ATAmotion, CloudEndure Live Migration, or RiverMeadow Server Migration Saas to migrate an application comprised of a database, virtualized web servers, and a bare metal server. Using Migration Hub, you can view the migration progress of all the resources in the application. This allows you to quickly get progress updates across all of your migrations, easily identify and troubleshoot any issues, and reduce the overall time and effort spent on your migration projects.",
    ],
    icon: "/aws/svgs/MigrationHub.svg",
    service_tag: [ServiceGroups.Migration_and_transfer.name],
  },
  {
    id: "MIG_Snowball",
    name: "AWS Snow Family",
    description: [
      "The AWS Snow Family helps customers that need to run operations in austere, non-data center environments, and in locations where there's lack of consistent network connectivity. The Snow Family comprises AWS Snowcone and AWS Snowball, and offers a number of physical devices and capacity points, most with built-in computing capabilities. These services help physically transport up to exabytes of data into and out of AWS. Snow Family devices are owned and managed by AWS and integrate with AWS security, monitoring, storage management, and computing capabilities.",
      "AWS Snowcone is the smallest member of the AWS Snow Family of edge computing, edge storage, and data transfer devices, weighing in at 4.5 pounds (2.1 kg) with 8 terabytes of usable storage. Snowcone is ruggedized, secure, and purpose-built for use outside of a traditional data center. Its small form factor makes it a perfect fit for tight spaces or where portability is a necessity and network connectivity is unreliable. You can use Snowcone in backpacks on first responders, or for Internet of Things (IoT), vehicular, and drone use cases. You can run compute applications at the edge, and you can ship the device with data to AWS for offline data transfer, or you can transfer data online with AWS DataSync from edge locations.",
      "Like AWS Snowball, Snowcone has multiple layers of security and encryption. You can use either of these services to run edge computing workloads, or to collect, process, and transfer data to AWS. Snowcone is designed for data migration needs up to 8 terabytes per device and from space-constrained environments where AWS Snowball devices will not fit.",
      "AWS Snowball Edge is an edge computing, data migration, and edge storage device. Snowball Edge can do local processing and run edge-computing workloads in addition to transferring data between your local environment and the AWS Cloud. Each Snowball Edge device can transport data at speeds faster than the internet. This transport is done by shipping the data in the devices through a regional carrier.",
      "much more in aws official documentation",
    ],
    icon: "/aws/svgs/Snowball.svg",
    service_tag: [ServiceGroups.Migration_and_transfer.name],
  },
  {
    id: "DataSync",
    name: "AWS DataSync",
    description: [
      "AWS DataSync is a data transfer service that makes it easy for you to automate moving data between on-premises storage and Amazon S3 or Amazon Elastic File System (Amazon EFS). DataSync automatically handles many of the tasks related to data transfers that can slow down migrations or burden your IT operations, including running your own instances, handling encryption, managing scripts, network optimization, and data integrity validation. You can use DataSync to transfer data at speeds up to 10 times faster than open-source tools. DataSync uses an on-premises software agent to connect to your existing storage or file systems using the Network File System (NFS) protocol, so you don’t have write scripts or modify your applications to work with AWS APIs. You can use DataSync to copy data over AWS Direct Connect or internet links to AWS. The service enables one-time data migrations, recurring data processing workflows, and automated replication for data protection and recovery. Getting started with DataSync is easy: Deploy the DataSync agent on premises, connect it to a file system or storage array, select Amazon EFS or Amazon S3 as your AWS storage, and start moving data. You pay only for the data you copy.",
    ],
    icon: "/aws/svgs/DataSync.svg",
    service_tag: [ServiceGroups.Migration_and_transfer.name],
  },
  {
    id: "TransferFamily",
    name: "AWS Transfer Family",
    description: [
      "AWS Transfer Family provides fully managed support for file transfers directly into and out of Amazon S3 or Amazon EFS. With support for Secure File Transfer Protocol (SFTP), File Transfer Protocol over SSL (FTPS), and File Transfer Protocol (FTP), the AWS Transfer Family helps you seamlessly migrate your file transfer workflows to AWS by integrating with existing authentication systems, and providing DNS routing with Amazon Route 53 so nothing changes for your customers and partners, or their applications. With your data in Amazon S3 or Amazon EFS, you can use it with AWS services for processing, analytics, ML, archiving, as well as home directories and developer tools. Getting started with the AWS Transfer Family is easy; there is no infrastructure to buy and set up.",
    ],
    icon: "/aws/svgs/TransferFamily.svg",
    service_tag: [ServiceGroups.Migration_and_transfer.name],
  },
];
