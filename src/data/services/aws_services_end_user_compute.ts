import { ServiceGroups } from "../aws-service-groups";
import { ServiceData } from "../aws-services";

export const aws_services_end_user_compute: ServiceData[] = [
  {
    id: "AppStream",
    name: "Amazon AppStream 2.0",
    description: [
      "Amazon AppStream 2.0 is a fully managed application streaming service. You centrally manage your desktop applications on AppStream 2.0 and securely deliver them to any computer. You can easily scale to any number of users across the globe without acquiring, provisioning, and operating hardware or infrastructure. AppStream 2.0 is built on AWS, so you benefit from a data center and network architecture designed for the most security-sensitive organizations. Each user has a fluid and responsive experience with your applications, including GPU-intensive 3D design and engineering ones, because your applications run on virtual machines (VMs) optimized for specific use cases and each streaming session automatically adjusts to network conditions.",
      "Enterprises can use AppStream 2.0 to simplify application delivery and complete their migration to the cloud. Educational institutions can provide every student access to the applications they need for class on any computer. Software vendors can use AppStream 2.0 to deliver trials, demos, and training for their applications with no downloads or installations. They can also develop a full software-as-a-service (SaaS) solution without rewriting their application.",
    ],
    icon: "/aws/svgs/AppStream.svg",
    service_tag: [ServiceGroups.End_user_computing],
  },
  {
    id: "WorkSpaces_1",
    name: "Amazon WorkSpaces",
    description: [
      "Amazon WorkSpaces is a fully managed, secure cloud desktop service. You can use WorkSpaces to provision either Windows or Linux desktops in just a few minutes and quickly scale to provide thousands of desktops to workers across the globe. You can pay either monthly or hourly, just for the WorkSpaces you launch, which helps you save money when compared to traditional desktops and on-premises VDI solutions. WorkSpaces helps you eliminate the complexity in managing hardware inventory, OS versions and patches, and Virtual Desktop Infrastructure (VDI), which helps simplify your desktop delivery strategy. With WorkSpaces, your users get a fast, responsive desktop of their choice that they can access anywhere, anytime, from any supported device.",
    ],
    icon: "/aws/svgs/WorkSpaces.svg",
    service_tag: [ServiceGroups.End_user_computing],
  },
  {
    id: "WorkSpaces_2",
    name: "Amazon WorkSpaces Core",
    description: [
      "Amazon WorkSpaces Core provides cloud-based, fully managed virtual desktop infrastructure (VDI) accessible to third-party VDI management solutions.",
    ],
    icon: "/aws/svgs/WorkSpaces.svg",
    service_tag: [ServiceGroups.End_user_computing],
  },
  {
    id: "WorkSpaces_3",
    name: "Amazon WorkSpaces Thin Client",
    description: [
      "Amazon WorkSpaces Thin Client is a cost-effective thin client device that is built to work with AWS End User Computing (EUC) virtual desktops to provide users with a complete cloud desktop solution. WorkSpaces Thin Client is a compact device designed to connect two monitors and multiple USB devices such as a keyboard, mouse, headset, and webcam. To maximize endpoint security, WorkSpaces Thin Client devices do not allow local data storage or installation of unapproved applications. The WorkSpaces Thin Client device ships directly to end users or to your company's locations preloaded with device management software.",
    ],
    icon: "/aws/svgs/WorkSpaces.svg",
    service_tag: [ServiceGroups.End_user_computing],
  },
  {
    id: "WorkSpace4",
    name: "Amazon WorkSpaces Web",
    description: [
      "Amazon WorkSpaces Web is a low-cost, fully managed workspace built specifically to facilitate secure access to internal websites and software-as-a-service (SaaS) applications from existing web browsers, without the administrative burden of appliances or specialized client software. Protect internal content with enterprise controls, while providing access to all the web-based productivity tools users need from any browser.",
      "WorkSpaces Web makes it easy for customers to safely provide their employees with access to internal websites and SaaS web applications without the administrative burden of appliances or specialized client software. WorkSpaces Web provides simple policy tools tailored for user interactions, while offloading common tasks like capacity management, scaling, and maintaining browser images.",
    ],
    icon: "/aws/svgs/WorkSpaces.svg",
    service_tag: [ServiceGroups.End_user_computing],
  },
];
