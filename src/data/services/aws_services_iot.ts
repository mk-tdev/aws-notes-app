import { ServiceGroups } from "../aws-service-groups";
import { ServiceData } from "../aws-services";

export const aws_services_iot: ServiceData[] = [
  {
    id: "IoTAnalytics",
    name: "AWS IoT Analytics",
    description: [
      "AWS IoT Analytics is a fully managed service that makes it easy to run and operationalize sophisticated analytics on massive volumes of IoT data without having to worry about the cost and complexity typically required to build an IoT analytics platform. It is the easiest way to run analytics on IoT data and get insights to make better and more accurate decisions for IoT applications and machine learning use cases.",
      "IoT data is highly unstructured which makes it difficult to analyze with traditional analytics and business intelligence tools that are designed to process structured data. IoT data comes from devices that often record fairly noisy processes (such as temperature, motion, or sound). The data from these devices can frequently have significant gaps, corrupted messages, and false readings that must be cleaned up before analysis can occur. Also, IoT data is often only meaningful in the context of additional, third party data inputs. For example, to help farmers determine when to water their crops, vineyard irrigation systems often enrich moisture sensor data with rainfall data from the vineyard, allowing for more efficient water usage while maximizing harvest yield.",
      "AWS IoT Analytics automates each of the difficult steps that are required to analyze data from IoT devices. AWS IoT Analytics filters, transforms, and enriches IoT data before storing it in a time series data store for analysis. You can setup the service to collect only the data you need from your devices, apply mathematical transforms to process the data, and enrich the data with device-specific metadata such as device type and location before storing the processed data. Then, you can analyze your data by running ad hoc or scheduled queries using the built-in SQL query engine, or perform more complex analytics and machine learning inference. AWS IoT Analytics makes it easy to get started with machine learning by including pre-built models for common IoT use cases.",
      "You can also use your own custom analysis, packaged in a container, to run AWS IoT Analytics. AWS IoT Analytics automates the running of your custom analyses created in Jupyter Notebook or your own tools (such as Matlab, Octave, and so on) to be run on your schedule.",
      "AWS IoT Analytics is a fully managed service that operationalizes analyses and scales automatically to support up to petabytes of IoT data. With AWS IoT Analytics, you can analyze data from millions of devices and build fast, responsive IoT applications without managing hardware or infrastructure.",
    ],
    icon: "/aws/svgs/IoTAnalytics.svg",
    service_tag: [ServiceGroups.Internet_of_Things],
  },
  {
    id: "IoTButton",
    name: "AWS IoT Button",
    description: [
      "The AWS IoT Button is a programmable button based on the Amazon Dash Button hardware. This simple Wi-Fi device is easy to conﬁgure, and it’s designed for developers to get started with AWS IoT Core, AWS Lambda, Amazon DynamoDB, Amazon SNS, and many other Amazon Web Services without writing device-speciﬁc code.",
      "You can code the button's logic in the cloud to conﬁgure button clicks to count or track items, call or alert someone, start or stop something, order services, or even provide feedback. For example, you can click the button to unlock or start a car, open your garage door, call a cab, call your spouse or a customer service representative, track the use of common household chores, medications or products, or remotely control your home appliances.",
      "The button can be used as a remote control for Netﬂix, a switch for your Philips Hue light bulb, a check-in/check-out device for Airbnb guests, or a way to order your favorite pizza for delivery. You can integrate it with third-party APIs such as Twitter, Facebook, Twilio, Slack or even your own company's applications. Connect it to things we haven’t even thought of yet.",
    ],
    icon: "/aws/svgs/IoTButton.svg",
    service_tag: [ServiceGroups.Internet_of_Things],
  },
  {
    id: "IoTCore",
    name: "AWS IoT Core",
    description: [
      "AWS IoT Core is a managed cloud service that lets connected devices easily and securely interact with cloud applications and other devices. AWS IoT Core can support billions of devices and trillions of messages, and can process and route those messages to AWS endpoints and to other devices reliably and securely. With AWS IoT Core, your applications can keep track of and communicate with all your devices, all the time, even when they aren’t connected.",
      "AWS IoT Core makes it easy to use AWS services such as AWS Lambda, Amazon Kinesis, Amazon S3, Amazon SageMaker AI, Amazon DynamoDB, Amazon CloudWatch, AWS CloudTrail, and Amazon QuickSight to build Internet of IoT applications that gather, process, analyze and act on data generated by connected devices, without having to manage any infrastructure.",
    ],
    icon: "/aws/svgs/IoTCore.svg",
    service_tag: [ServiceGroups.Internet_of_Things],
  },
  {
    id: "IoTDeviceDefender",
    name: "AWS IoT Device Defender",
    description: [
      "AWS IoT Device Defender is a fully managed service that helps you secure your fleet of IoT devices. AWS IoT Device Defender continuously audits your IoT configurations to make sure that they aren’t deviating from security best practices. A configuration is a set of technical controls you set to help keep information secure when devices are communicating with each other and the cloud. AWS IoT Device Defender makes it easy to maintain and enforce IoT configurations, such as ensuring device identity, authenticating and authorizing devices, and encrypting device data. AWS IoT Device Defender continuously audits the IoT configurations on your devices against a set of predefined security best practices. AWS IoT Device Defender sends an alert if there are any gaps in your IoT configuration that might create a security risk, such as identity certificates being shared across multiple devices or a device with a revoked identity certificate trying to connect to AWS IoT Core.",
      "AWS IoT Device Defender also lets you continuously monitor security metrics from devices and AWS IoT Core for deviations from what you have defined as appropriate behavior for each device. If something doesn’t look right, AWS IoT Device Defender sends out an alert so you can take action to remediate the issue. For example, traffic spikes in outbound traffic might indicate that a device is participating in a DDoS attack. AWS IoT Greengrass and FreeRTOS automatically integrate with AWS IoT Device Defender to provide security metrics from the devices for evaluation.",
      "AWS IoT Device Defender can send alerts to the AWS IoT Console, Amazon CloudWatch, and Amazon SNS. If you determine that you need to take an action based on an alert, you can use AWS IoT Device Management to take mitigating actions such as pushing security fixes.",
    ],
    icon: "/aws/svgs/IoTDeviceDefender.svg",
    service_tag: [ServiceGroups.Internet_of_Things],
  },
  {
    id: "IoTDeviceManagement",
    name: "AWS IoT Device Management",
    description: [
      "As many IoT deployments consist of hundreds of thousands to millions of devices, it is essential to track, monitor, and manage connected device fleets. You need to ensure your IoT devices work properly and securely after they have been deployed. You also need to secure access to your devices, monitor health, detect and remotely troubleshoot problems, and manage software and firmware updates.",
      "AWS IoT Device Management makes it easy to securely onboard, organize, monitor, and remotely manage IoT devices at scale. With AWS IoT Device Management, you can register your connected devices individually or in bulk, and easily manage permissions so that devices remain secure. You can also organize your devices, monitor and troubleshoot device functionality, query the state of any IoT device in your fleet, and send firmware updates over-the-air (OTA). AWS IoT Device Management is agnostic to device type and OS, so you can manage devices from constrained microcontrollers to connected cars all with the same service. AWS IoT Device Management allows you to scale your fleets and reduce the cost and effort of managing large and diverse IoT device deployments.",
    ],
    icon: "/aws/svgs/IoTDeviceManagement.svg",
    service_tag: [ServiceGroups.Internet_of_Things],
  },
  {
    id: "IoTEvents",
    name: "AWS IoT Events",
    description: [
      "AWS IoT Events is a fully managed IoT service that makes it easy to detect and respond to events from IoT sensors and applications. Events are patterns of data identifying more complicated circumstances than expected, such as changes in equipment when a belt is stuck or connected motion detectors using movement signals to activate lights and security cameras. To detect events before AWS IoT Events, you had to build costly, custom applications to collect data, apply decision logic to detect an event, and then start another application to react to the event. Using AWS IoT Events, it’s simple to detect events across thousands of IoT sensors sending different telemetry data, such as temperature from a freezer, humidity from respiratory equipment, and belt speed on a motor, and hundreds of equipment management applications. You simply select the relevant data sources to ingest, define the logic for each event using simple ‘if-then-else’ statements, and select the alert or custom action to run when an event occurs. AWS IoT Events continuously monitors data from multiple IoT sensors and applications, and it integrates with other services, such as AWS IoT Core and AWS IoT Analytics, to enable early detection and unique insights into events. AWS IoT Events automatically initiates alerts and actions in response to events based on the logic you define. This helps resolve issues quickly, reduce maintenance costs, and increase operational efficiency.",
    ],
    icon: "/aws/svgs/IoTEvents.svg",
    service_tag: [ServiceGroups.Internet_of_Things],
  },
  {
    id: "IoTExpressLink",
    name: "AWS IoT ExpressLink",
    description: [
      "AWS IoT ExpressLink powers a range of hardware modules developed and offered by AWS Partners, such as Espressif, Infineon, Realtek, and u-blox. Connectivity modules available from the AWS Partner Device Catalog include software implementing AWS mandated security requirements, making it faster and easier for you to securely connect devices to the cloud and seamlessly integrate with a range of AWS services. AWS IoT ExpressLink modules come pre-provisioned with security credentials set by qualified AWS Partners. This enables you to offload the complex work of integrating the networking and cryptography layers to the hardware modules, and develop secure IoT products in a fraction of the time.",
      "Devices with AWS IoT ExpressLink establish a two-way connection with AWS IoT Core through native support of the MQTT (publish/subscribe) communication mechanism, and can create and update AWS IoT Device Shadow documents. With AWS IoT ExpressLink, it’s easy to make over-the-air (OTA) updates to both the module and host processor from the AWS IoT Device Management console. You can then remotely deploy security updates, bug fixes, and new firmware updates to add features and keep your device fleet always up to date. Moreover, partner modules with AWS IoT ExpressLink can also connect to the AWS IoT Device Defender to report a number of device metrics that can help detect anomalies and generate alerts.",
    ],
    icon: "/aws/svgs/IoTExpressLink.svg",
    service_tag: [ServiceGroups.Internet_of_Things],
  },
  {
    id: "IoTFleetWise",
    name: "AWS IoT FleetWise",
    description: [
      "With AWS IoT FleetWise, you can collect and organize vehicle data and store that data in a standardized way for data analysis in the cloud. AWS IoT FleetWise helps you efficiently transfer data to the cloud in near real time using intelligent data collection capabilities. These capabilities allow you to reduce the amount of data transferred by defining rules for when to collect and transfer data based on configurable parameters (for instance, vehicle temperature, speed, or make and model). Once the data is in the cloud, you can use it for applications that analyze vehicle fleet health. This analysis can help you to more quickly identify potential maintenance issues or make in-vehicle infotainment systems smarter. You can also feed the data into machine learning (ML) models that improve advanced technologies, such as autonomous driving and advanced driver assistance systems (ADAS).",
    ],
    icon: "/aws/svgs/IoTFleetWise.svg",
    service_tag: [ServiceGroups.Internet_of_Things],
  },
  {
    id: "IoTGreengrassCore",
    name: "AWS IoT Greengrass",
    description: [
      "AWS IoT Greengrass seamlessly extends AWS to devices so they can act locally on the data they generate, while still using the cloud for management, analytics, and durable storage. With AWS IoT Greengrass, connected devices can run AWS Lambda functions, run predictions based on machine learning models, keep device data in sync, and communicate with other devices securely – even when not connected to the internet.",
      "With AWS IoT Greengrass, you can use familiar languages and programming models to create and test your device software in the cloud, and then deploy it to your devices. AWS IoT Greengrass can be programmed to ﬁlter device data and only transmit necessary information back to the cloud. You can also connect to third-party applications, on-premises software, and AWS services out-of-the-box with AWS IoT Greengrass Connectors. Connectors also jumpstart device onboarding with pre-built protocol adapter integrations and allow you to streamline authentication via integration with AWS Secrets Manager.",
    ],
    icon: "/aws/svgs/IoTGreengrassCore.svg",
    service_tag: [ServiceGroups.Internet_of_Things],
  },
  {
    id: "IoTSiteWise",
    name: "AWS IoT SiteWise",
    description: [
      "AWS IoT SiteWise is a managed service that makes it easy to collect, store, organize and monitor data from industrial equipment at scale to help you make better, data-driven decisions. You can use AWS IoT SiteWise to monitor operations across facilities, quickly compute common industrial performance metrics, and create applications that analyze industrial equipment data to prevent costly equipment issues and reduce gaps in production. This allows you to collect data consistently across devices, identify issues with remote monitoring more quickly, and improve multi-site processes with centralized data.",
      "Today, getting performance metrics from industrial equipment is challenging because data is often locked into proprietary on-premises data stores and typically requires specialized expertise to retrieve and place in a format that is useful for analysis. AWS IoT SiteWise simplifies this process by providing software running on a gateway that resides in your facilities and automates the process of collecting and organizing industrial equipment data. This gateway securely connects to your on-premises data servers, collects data, and sends the data to the AWS Cloud. AWS IoT SiteWise also provides interfaces for collecting data from modern industrial applications through MQTT messages or APIs.",
      "You can use AWS IoT SiteWise to model your physical assets, processes and facilities, quickly compute common industrial performance metrics, and create fully managed web applications to help analyze industrial equipment data, reduce costs and make faster decisions. With AWS IoT SiteWise, you can focus on understanding and optimizing your operations, rather than building costly in-house data collection and management applications.",
    ],
    icon: "/aws/svgs/IoTSiteWise.svg",
    service_tag: [ServiceGroups.Internet_of_Things],
  },
  {
    id: "IoTTwinMaker",
    name: "AWS IoT TwinMaker",
    description: [
      "AWS IoT TwinMaker makes it easier for developers to create digital twins of real-world systems such as buildings, factories, industrial equipment, and production lines. AWS IoT TwinMaker provides the tools you need to build digital twins to help you optimize building operations, increase production output, and improve equipment performance. With the ability to use existing data from multiple sources, create virtual representations of any physical environment, and combine existing 3D models with real-world data, you can now harness digital twins to create a holistic view of your operations faster and with less effort.",
    ],
    icon: "/aws/svgs/IoTTwinMaker.svg",
    service_tag: [ServiceGroups.Internet_of_Things],
  },
  {
    id: "AWS_Partners_Device_Catalog",
    name: "AWS Partner Device Catalog",
    description: [
      "The AWS Partner Device Catalog helps you find devices and hardware to help you explore, build, and go to market with your IoT solutions. Search for and find hardware that works with AWS, including development kits and embedded systems to build new devices, as well as off-the-shelf-devices such as gateways, edge servers, sensors, and cameras for immediate IoT project integration. The choice of AWS enabled hardware from our curated catalog of devices from APN partners can help make the rollout of your IoT projects easier. All devices listed in the AWS Partner Device Catalog are also available for purchase from our partners to get you started quickly.",
    ],
    icon: "/aws/svgs/DefaultManagedServices.svg",
    service_tag: [ServiceGroups.Internet_of_Things],
  },
  {
    id: "FreeRtos",
    name: "FreeRTOS",
    description: [
      "FreeRTOS is an operating system for microcontrollers that makes small, low-power edge devices easy to program, deploy, secure, connect, and manage. FreeRTOS extends the FreeRTOS kernel, a popular open source operating system for microcontrollers, with software libraries that make it easy to securely connect your small, low-power devices to AWS Cloud services such as AWS IoT Core or to more powerful edge devices running AWS IoT Greengrass.",
      "A microcontroller (MCU) is a single chip containing a simple processor that can be found in many devices, including appliances, sensors, fitness trackers, industrial automation, and automobiles. Many of these small devices could benefit from connecting to the cloud or locally to other devices. For example, smart electricity meters need to connect to the cloud to report on usage, and building security systems need to communicate locally so that a door will unlock when you badge in. Microcontrollers have limited compute power and memory capacity and typically perform simple, functional tasks. Microcontrollers frequently run operating systems that do not have built-in functionality to connect to local networks or the cloud, making IoT applications a challenge. FreeRTOS helps solve this problem by providing both the core operating system (to run the edge device) as well as software libraries that make it easy to securely connect to the cloud (or other edge devices) so you can collect data from them for IoT applications and take action.",
    ],
    icon: "/aws/svgs/FreeRtos.svg",
    service_tag: [ServiceGroups.Internet_of_Things],
  },
];
