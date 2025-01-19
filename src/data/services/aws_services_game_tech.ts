import { ServiceGroups } from "../aws-service-groups";
import { ServiceData } from "../aws-services";

export const aws_services_game_tech: ServiceData[] = [
  {
    id: "GameLift_1",
    name: "Amazon GameLift ",
    description: [
      "Amazon GameLift is a managed service for deploying, operating, and scaling dedicated game servers for session-based multiplayer games. Amazon GameLift makes it easy to manage server infrastructure, scale capacity to lower latency and cost, match players into available game sessions, and defend from distributed denial-of-service (DDoS) attacks. You pay for the compute resources and bandwidth your games actually use, without monthly or annual contracts.",
    ],
    icon: "/aws/svgs/GameLift.svg",
    service_tag: [ServiceGroups.Game_tech],
  },
];
