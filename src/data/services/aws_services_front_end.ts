import { ServiceGroups } from "../aws-service-groups";
import { ServiceData } from "../aws-services";

export const aws_services_front_end: ServiceData[] = [
  {
    id: "Amplify",
    name: "AWS Amplify",
    description: [
      "AWS Amplify makes it easy to create, configure, and implement scalable mobile applications powered by AWS. Amplify seamlessly provisions and manages your mobile backend and provides a simple framework to easily integrate your backend with your iOS, Android, Web, and React Native frontends. Amplify also automates the application release process of both your front-end and back-end allowing you to deliver features faster.",
      "Mobile applications require cloud services for actions that can’t be done directly on the device, such as offline data synchronization, storage, or data sharing across multiple users. You often have to configure, set up, and manage multiple services to power the backend. You also have to integrate each of those services into your application by writing multiple lines of code. However, as the number of application features grow, your code and release process becomes more complex and managing the backend requires more time.",
      "Amplify provisions and manages backends for your mobile applications. You just select the capabilities you need such as authentication, analytics, or offline data sync, and Amplify will automatically provision and manage the AWS service that powers each of the capabilities. You can then integrate those capabilities into your application through the Amplify libraries and UI components.",
    ],
    icon: "/aws/svgs/Amplify.svg",
    service_tag: [ServiceGroups.Frontend_web_and_mobile_services],
  },
  {
    id: "AppSync",
    name: "AWS AppSync",
    description: [
      "AWS AppSync is a serverless back-end for mobile, web, and enterprise applications.",
      "AWS AppSync makes it easy to build data driven mobile and web applications by handling securely all the application data management tasks such as online and offline data access, data synchronization, and data manipulation across multiple data sources. AWS AppSync uses GraphQL, an API query language designed to build client applications by providing an intuitive and flexible syntax for describing their data requirement.",
    ],
    icon: "/aws/svgs/AppSync.svg",
    service_tag: [ServiceGroups.Frontend_web_and_mobile_services],
  },
  {
    id: "DeviceFarm",
    name: "AWS Device Farm",
    description: [
      "AWS Device Farm is an app testing service that lets you test and interact with your Android, iOS, and web apps on many devices at once, or reproduce issues on a device in real time. View video, screenshots, logs, and performance data to pinpoint and fix issues before shipping your app.",
    ],
    icon: "/aws/svgs/DeviceFarm.svg",
    service_tag: [ServiceGroups.Frontend_web_and_mobile_services],
  },
  {
    id: "LocationService",
    name: "Amazon Location Service",
    description: [
      "Amazon Location Service makes it easy for developers to add location functionality to applications without compromising data security and user privacy.",
      "Location data is a vital ingredient in today’s applications, enabling capabilities ranging from asset tracking to location-based marketing. However, developers face significant barriers when integrating location functionality into their applications. This includes cost, privacy and security compromises, and tedious and slow integration work.",
      "Amazon Location Service provides affordable data, tracking and geofencing capabilities, and native integrations with AWS services, so you can create sophisticated location-enabled applications quickly, without the high cost of custom development. You retain control of your location data with Amazon Location, and you can combine proprietary data with data from the service. Amazon Location provides cost-effective location-based services (LBS) using high-quality data from global, trusted providers Esri and HERE.",
    ],
    icon: "/aws/svgs/LocationService.svg",
    service_tag: [ServiceGroups.Frontend_web_and_mobile_services],
  },
];
