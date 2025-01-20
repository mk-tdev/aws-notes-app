import { ServiceGroups } from "../aws-service-groups";
import { ServiceData } from "../aws-services";

export const aws_services_quantum: ServiceData[] = [
  {
    id: "Braket",
    name: "Amazon Braket",
    description: [
      "Amazon Braket is a fully managed quantum computing service that helps researchers and developers get started with the technology to accelerate research and discovery. Amazon Braket provides a development environment for you to explore and build quantum algorithms, test them on quantum circuit simulators, and run them on different quantum hardware technologies.",
      "Quantum computing has the potential to solve computational problems that are beyond the reach of classical computers by harnessing the laws of quantum mechanics to process information in new ways. This approach to computing could transform areas such as chemical engineering, material science, drug discovery, financial portfolio optimization, and machine learning. But defining those problems and programming quantum computers to solve them requires new skills, which are difficult to acquire without easy access to quantum computing hardware.",
      "Amazon Braket overcomes these challenges so you can explore quantum computing. With Amazon Braket, you can design and build your own quantum algorithms from scratch or choose from a set of pre-built algorithms. Once you have built your algorithm, Amazon Braket provides a choice of simulators to test, troubleshoot and run your algorithms. When you are ready, you can run your algorithm on your choice of different quantum computers, and gate-based computers from Rigetti and IonQ. With Amazon Braket, you can now evaluate the potential of quantum computing for your organization, and build expertise.",
    ],
    icon: "/aws/svgs/Braket.svg",
    service_tag: [ServiceGroups.Quantum_technologies],
  },
];
