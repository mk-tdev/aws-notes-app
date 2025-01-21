import { ServiceGroups } from "../aws-service-groups";
import { ServiceData } from "../aws-services";

export const aws_services_media: ServiceData[] = [
  {
    id: "ElasticTranscoder",
    name: "Amazon Elastic Transcoder",
    description: [
      "Amazon Elastic Transcoder is media transcoding in the cloud. It is designed to be a highly scalable, easy-to-use, and cost-effective way for developers and businesses to convert (or transcode) media ﬁles from their source format into versions that will play back on devices such as smartphones, tablets, and PCs.",
    ],
    icon: "/aws/svgs/ElasticTranscoder.svg",
    service_tag: [ServiceGroups.Media.name],
  },
  {
    id: "InteractiveVideo",
    name: "Amazon Interactive Video Service",
    description: [
      "Amazon Interactive Video Service (Amazon IVS) is a managed live streaming solution that is quick and easy to set up, and ideal for creating interactive video experiences. Send your live streams to Amazon IVS using streaming software and the service does everything you need to make low-latency live video available to any viewer around the world, letting you focus on building interactive experiences alongside the live video. You can easily customize and enhance the audience experience through the Amazon IVS player SDK and timed metadata APIs, allowing you to build a more valuable relationship with your viewers on your own websites and applications.",
    ],
    icon: "/aws/svgs/InteractiveVideo.svg",
    service_tag: [ServiceGroups.Media.name],
  },
  {
    id: "NimbleStudio",
    name: "Amazon Nimble Studio",
    description: [
      "Amazon Nimble Studio empowers creative studios to produce visual effects, animation, and interactive content entirely in the cloud, from storyboard sketch to final deliverable. Rapidly onboard and collaborate with artists globally and create content faster with access to virtual workstations, high-speed storage, and scalable rendering across the AWS global infrastructure.",
    ],
    icon: "/aws/svgs/NimbleStudio.svg",
    service_tag: [ServiceGroups.Media.name],
  },
  {
    id: "ElementalAppliances",
    name: "AWS Elemental Appliances and Software",
    description: [
      "AWS Elemental Appliances and Software solutions bring advanced video processing and delivery technologies into your data center, co-location space, or on-premises facility. You can deploy AWS Elemental Appliances and Software to encode, package, and deliver video assets on-premises and seamlessly connect with cloud-based video infrastructure. Designed for easy integration with AWS Cloud media solutions, AWS Elemental Appliances and Software support video workloads that need to remain on-premises to accommodate physical camera and router interfaces, managed network delivery, or network bandwidth constraints.",
      "AWS Elemental Live, AWS Elemental Server, and AWS Elemental Conductor come in two variants: ready-to-deploy appliances, or AWS-licensed software that you install on your own hardware. AWS Elemental Link is a compact hardware device that sends live video to the cloud for encoding and delivery to viewers.",
    ],
    icon: "/aws/svgs/ElementalAppliances.svg",
    service_tag: [ServiceGroups.Media.name],
  },
  {
    id: "ElementalMediaConnect",
    name: "AWS Elemental MediaConnect",
    description: [
      "AWS Elemental MediaConnect is a high-quality transport service for live video. Today, broadcasters and content owners rely on satellite networks or fiber connections to send their high-value content into the cloud or to transmit it to partners for distribution. Both satellite and fiber approaches are expensive, require long lead times to set up, and lack the flexibility to adapt to changing requirements. To be more nimble, some customers have tried to use solutions that transmit live video on top of IP infrastructure, but have struggled with reliability and security.",
      "Now you can get the reliability and security of satellite and fiber combined with the flexibility, agility, and economics of IP-based networks using AWS Elemental MediaConnect. MediaConnect enables you to build mission-critical live video workflows in a fraction of the time and cost of satellite or fiber services. You can use MediaConnect to ingest live video from a remote event site (such as a stadium), share video with a partner (such as a cable TV distributor), or replicate a video stream for processing (such as an over-the-top service). MediaConnect combines reliable video transport, highly secure stream sharing, and real-time network traffic and video monitoring that allow you to focus on your content, not your transport infrastructure.",
    ],
    icon: "/aws/svgs/ElementalMediaConnect.svg",
    service_tag: [ServiceGroups.Media.name],
  },
  {
    id: "ElementalMediaConvert",
    name: "AWS Elemental MediaConvert",
    description: [
      "AWS Elemental MediaConvert is a file-based video transcoding service with broadcast-grade features. It allows you to easily create video-on-demand (VOD) content for broadcast and multiscreen delivery at scale. The service combines advanced video and audio capabilities with a simple web services interface and pay-as-you-go pricing. With AWS Elemental MediaConvert, you can focus on delivering compelling media experiences without having to worry about the complexity of building and operating your own video processing infrastructure.",
    ],
    icon: "/aws/svgs/ElementalMediaConvert.svg",
    service_tag: [ServiceGroups.Media.name],
  },
  {
    id: "ElementalMediaLive",
    name: "AWS Elemental MediaLive",
    description: [
      "AWS Elemental MediaLive is a broadcast-grade live video processing service. It lets you create high-quality video streams for delivery to broadcast televisions and internet-connected multiscreen devices, such as connected TVs, tablets, smart phones, and set-top boxes. The service works by encoding your live video streams in real-time, taking a larger-sized live video source and compressing it into smaller versions for distribution to your viewers. With AWS Elemental MediaLive, you can easily set up streams for both live events and 24x7 channels with advanced broadcasting features, high availability, and pay-as-you-go pricing. AWS Elemental MediaLive lets you focus on creating compelling live video experiences for your viewers without the complexity of building and operating broadcast-grade video processing infrastructure.",
    ],
    icon: "/aws/svgs/ElementalMediaLive.svg",
    service_tag: [ServiceGroups.Media.name],
  },
  {
    id: "ElementalMediaPackage",
    name: "AWS Elemental MediaPackage",
    description: [
      "AWS Elemental MediaPackage reliably prepares and protects your video for delivery over the Internet. From a single video input, AWS Elemental MediaPackage creates video streams formatted to play on connected TVs, mobile phones, computers, tablets, and game consoles. It makes it easy to implement popular video features for viewers (start-over, pause, rewind, and so on), such as those commonly found on DVRs. AWS Elemental MediaPackage can also protect your content using Digital Rights Management (DRM). AWS Elemental MediaPackage scales automatically in response to load, so your viewers will always get a great experience without you having to accurately predict in advance the capacity you’ll need.",
    ],
    icon: "/aws/svgs/ElementalMediaPackage.svg",
    service_tag: [ServiceGroups.Media.name],
  },
  {
    id: "ElementalMediaStore",
    name: "AWS Elemental MediaStore",
    description: [
      "AWS Elemental MediaStore is an AWS storage service optimized for media. It gives you the performance, consistency, and low latency required to deliver live streaming video content. AWS Elemental MediaStore acts as the origin store in your video workflow. Its high performance capabilities meet the needs of the most demanding media delivery workloads, combined with long-term, cost-effective storage.",
    ],
    icon: "/aws/svgs/ElementalMediaStore.svg",
    service_tag: [ServiceGroups.Media.name],
  },
  {
    id: "ElementalMediaTailor",
    name: "AWS Elemental MediaTailor",
    description: [
      "AWS Elemental MediaTailor lets video providers insert individually targeted advertising into their video streams without sacrificing broadcast-level quality-of-service. With AWS Elemental MediaTailor, viewers of your live or on-demand video each receive a stream that combines your content with ads personalized to them. But unlike other personalized ad solutions, with AWS Elemental MediaTailor your entire stream – video and ads – is delivered with broadcast-grade video quality to improve the experience for your viewers. AWS Elemental MediaTailor delivers automated reporting based on both client and server-side ad delivery metrics, making it easy to accurately measure ad impressions and viewer behavior. You can easily monetize unexpected high-demand viewing events with no up-front costs using AWS Elemental MediaTailor. It also improves ad delivery rates, helping you make more money from every video, and it works with a wider variety of content delivery networks, ad decision servers, and client devices.",
    ],
    icon: "/aws/svgs/ElementalMediaTailor.svg",
    service_tag: [ServiceGroups.Media.name],
  },
];
