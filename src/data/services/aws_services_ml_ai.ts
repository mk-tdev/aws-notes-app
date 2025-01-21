import { ServiceGroups } from "../aws-service-groups";
import { ServiceData } from "../aws-services";

export const aws_services_ml_ai: ServiceData[] = [
  {
    id: "AugmentedAiA2I",
    name: "Amazon Augmented AI",
    description: [
      "Amazon Augmented AI (Amazon A2I) is a ML service which makes it easy to build the workflows required for human review. Amazon A2I brings human review to all developers, removing the undifferentiated heavy lifting associated with building human review systems or managing large numbers of human reviewers, whether it runs on AWS or not.",
    ],
    icon: "/aws/svgs/AugmentedAiA2I.svg",
    service_tag: [ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name],
  },
  {
    id: "Bedrock",
    name: "Amazon Bedrock",
    description: [
      "Amazon Bedrock is a fully managed service that makes foundational models (FMs) from Amazon and leading AI startups available through an API. With the Amazon Bedrock serverless experience, you can quickly get started, experiment with FMs, privately customize them with your own data, and seamlessly integrate and deploy FMs into your AWS applications.",
      "You can choose from a variety of foundation models, including Amazon Titan, Claude 2 from Anthropic, Command and Embed from Cohere, Jurassic-2 from AI21 Studio, and Stable Diffusion from Stability AI.",
    ],
    icon: "/aws/svgs/DefaultManagedServices.svg",
    service_tag: [ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name],
  },
  {
    id: "CodeGuru",
    name: "Amazon CodeGuru",
    description: [
      "Amazon CodeGuru is a developer tool that provides intelligent recommendations to improve code quality and identify an application’s most expensive lines of code. Integrate CodeGuru into your existing software development workflow to automate code reviews during application development and continuously monitor application's performance in production and provide recommendations and visual clues on how to improve code quality, application performance, and reduce overall cost.",
      "Amazon CodeGuru Reviewer uses ML and automated reasoning to identify critical issues, security vulnerabilities, and hard-to-find bugs during application development and provides recommendations to improve code quality.",
      "Amazon CodeGuru Profiler helps developers find an application’s most expensive lines of code by helping them understand the runtime behavior of their applications, identify and remove code inefficiencies, improve performance, and significantly decrease compute costs.",
    ],
    icon: "/aws/svgs/CodeGuru.svg",
    service_tag: [ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name],
  },
  {
    id: "Comprehend",
    name: "Amazon Comprehend",
    description: [
      "Amazon Comprehend uses ML and natural language processing (NLP) to help you uncover the insights and relationships in your unstructured data. The service identifies the language of the text; extracts key phrases, places, people, brands, or events; understands how positive or negative the text is; analyzes text using tokenization and parts of speech; and automatically organizes a collection of text files by topic. You can also use AutoML capabilities in Amazon Comprehend to build a custom set of entities or text classification models that are tailored uniquely to your organization’s needs.",
      "For extracting complex medical information from unstructured text, you can use Amazon Comprehend Medical. The service can identify medical information, such as medical conditions, medications, dosages, strengths, and frequencies from a variety of sources like doctor’s notes, clinical trial reports, and patient health records. Amazon Comprehend Medical also identifies the relationship among the extracted medication and test, treatment and procedure information for easier analysis. For example, the service identifies a particular dosage, strength, and frequency related to a specific medication from unstructured clinical notes.",
    ],
    icon: "/aws/svgs/Comprehend.svg",
    service_tag: [ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name],
  },
  {
    id: "DevOpsGuru",
    name: "Amazon DevOps Guru",
    description: [
      "Amazon DevOps Guru is an ML-powered service that makes it easy to improve an application’s operational performance and availability. Amazon DevOps Guru detects behaviors that deviate from normal operating patterns so you can identify operational issues long before they impact your customers.",
      "Amazon DevOps Guru uses ML models informed by years of Amazon.com and AWS operational excellence to identify anomalous application behavior (such as increased latency, error rates, resource constraints, etc.) and surface critical issues that could cause potential outages or service disruptions. When Amazon DevOps Guru identifies a critical issue, it automatically sends an alert and provides a summary of related anomalies, the likely root cause, and context about when and where the issue occurred. When possible, Amazon DevOps Guru also provides recommendations on how to remediate the issue.",
      "Amazon DevOps Guru automatically ingests operational data from your AWS applications and provides a single dashboard to visualize issues in your operational data. You can get started by enabling Amazon DevOps Guru for all resources in your AWS account, resources in your AWS CloudFormation Stacks, or resources grouped together by AWS tags, with no manual setup or ML expertise required.",
    ],
    icon: "/aws/svgs/DevOpsGuru.svg",
    service_tag: [ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name],
  },
  {
    id: "Forecast",
    name: "Amazon Forecast",
    description: [
      "Amazon Forecast is a fully managed service that uses ML to deliver highly accurate forecasts.",
      "Companies today use everything from simple spreadsheets to complex financial planning software to attempt to accurately forecast future business outcomes such as product demand, resource needs, or financial performance. These tools build forecasts by looking at a historical series of data, which is called time series data. For example, such tools may try to predict the future sales of a raincoat by looking only at its previous sales data with the underlying assumption that the future is determined by the past. This approach can struggle to produce accurate forecasts for large sets of data that have irregular trends. Also, it fails to easily combine data series that change over time (such as price, discounts, web traffic, and number of employees) with relevant independent variables such as product features and store locations.",
      "Based on the same technology used at Amazon.com, Amazon Forecast uses ML to combine time series data with additional variables to build forecasts. Amazon Forecast requires no ML experience to get started. You only need to provide historical data, plus any additional data that you believe may impact your forecasts. For example, the demand for a particular color of a shirt may change with the seasons and store location. This complex relationship is hard to determine on its own, but ML is ideally suited to recognize it. Once you provide your data, Amazon Forecast will automatically examine it, identify what is meaningful, and produce a forecasting model capable of making predictions that are up to 50% more accurate than looking at time series data alone.",
      "Amazon Forecast is a fully managed service, so there are no servers to provision, and no ML models to build, train, or deploy. You pay only for what you use, and there are no minimum fees and no upfront commitments.",
    ],
    icon: "/aws/svgs/Forecast.svg",
    service_tag: [ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name],
  },
  {
    id: "FraudDetector",
    name: "Amazon Fraud Detector",
    description: [
      "Amazon Fraud Detector is a fully managed service that uses ML and more than 20 years of fraud detection expertise from Amazon, to identify potentially fraudulent activity so customers can catch more online fraud faster. Amazon Fraud Detector automates the time consuming and expensive steps to build, train, and deploy an ML model for fraud detection, making it easier for customers to leverage the technology. Amazon Fraud Detector customizes each model it creates to a customer’s own dataset, making the accuracy of models higher than current one-size fits all ML solutions. And, because you pay only for what you use, you avoid large upfront expenses.",
    ],
    icon: "/aws/svgs/FraudDetector.svg",
    service_tag: [ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name],
  },
  {
    id: "ComprehendMedical",
    name: "Amazon Comprehend Medical",
    description: [
      "Over the past decade, AWS has witnessed a digital transformation in health, with organizations capturing huge volumes of patient information every day. But this data is often unstructured and the process to extract this information is labor-intensive and error-prone. Amazon Comprehend Medical is a HIPAA-eligible natural language processing (NLP) service that uses machine learning that has been pre-trained to understand and extract health data from medical text, such as prescriptions, procedures, or diagnoses. Amazon Comprehend Medical can help you extract information from unstructured medical text accurately and quickly with medical ontologies like ICD-10-CM, RxNorm, and SNOMED CT and in turn accelerate insurance claim processing, improve population health, and accelerate pharmacovigilance.",
    ],
    icon: "/aws/svgs/ComprehendMedical.svg",
    service_tag: [ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name],
  },
  {
    id: "Kendra",
    name: "Amazon Kendra",
    description: [
      "Amazon Kendra is an intelligent search service powered by ML. Amazon Kendra reimagines enterprise search for your websites and applications so your employees and customers can easily find the content they are looking for, even when it’s scattered across multiple locations and content repositories within your organization.",
      "Using Amazon Kendra, you can stop searching through troves of unstructured data and discover the right answers to your questions, when you need them. Amazon Kendra is a fully managed service, so there are no servers to provision, and no ML models to build, train, or deploy.",
    ],
    icon: "/aws/svgs/Kendra.svg",
    service_tag: [ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name],
  },
  {
    id: "Lex",
    name: "Amazon Lex",
    description: [
      "Amazon Lex is a fully managed artificial intelligence (AI) service to design, build, test, and deploy conversational interfaces into any application using voice and text. Lex provides the advanced deep learning functionalities of automatic speech recognition (ASR) for converting speech to text, and natural language understanding (NLU) to recognize the intent of the text, to enable you to build applications with highly engaging user experiences and lifelike conversational interactions, and create new categories of products. With Amazon Lex, the same deep learning technologies that power Amazon Alexa are now available to any developer, enabling you to quickly and easily build sophisticated, natural language, conversational bots (“chatbots”) and voice enabled interactive voice response (IVR) systems.",
      "Amazon Lex enables developers to build conversational chatbots quickly. With Amazon Lex, no deep learning expertise is necessary—to create a bot, you just specify the basic conversation flow in the Amazon Lex console. Amazon Lex manages the dialogue and dynamically adjusts the responses in the conversation. Using the console, you can build, test, and publish your text or voice chatbot. You can then add the conversational interfaces to bots on mobile devices, web applications, and chat platforms (for example, Facebook Messenger). There are no upfront costs or minimum fees to use Amazon Lex - you are charged only for the text or speech requests that are made. The pay-as-you-go pricing and the low cost per request make the service a cost-effective way to build conversational interfaces. With the Amazon Lex free tier, you can easily try Amazon Lex without any initial investment.",
    ],
    icon: "/aws/svgs/Lex.svg",
    service_tag: [ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name],
  },
  {
    id: "LookoutforEquipment",
    name: "Amazon Lookout for Equipment",
    description: [
      "Amazon Lookout for Equipment analyzes the data from the sensors on your equipment (such as pressure in a generator, flow rate of a compressor, revolutions per minute of fans), to automatically train an ML model based on just your data, for your equipment – with no ML expertise required. Lookout for Equipment uses your unique ML model to analyze incoming sensor data in real-time and accurately identify early warning signs that could lead to machine failures. This means you can detect equipment abnormalities with speed and precision, quickly diagnose issues, take action to reduce expensive downtime, and reduce false alerts.",
    ],
    icon: "/aws/svgs/LookoutforEquipment.svg",
    service_tag: [ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name],
  },
  {
    id: "LookoutforMetrics",
    name: "Amazon Lookout for Metrics",
    description: [
      "Amazon Lookout for Metrics uses ML to automatically detect and diagnose anomalies (outliers from the norm) in business and operational data, such as a sudden dip in sales revenue or customer acquisition rates. In a couple of clicks, you can connect Amazon Lookout for Metrics to popular data stores such as Amazon S3, Amazon Redshift, and Amazon Relational Database Service (Amazon RDS), as well as third-party Software as a Service (SaaS) applications, such as Salesforce, Servicenow, Zendesk, and Marketo, and start monitoring metrics that are important to your business. Amazon Lookout for Metrics automatically inspects and prepares the data from these sources to detect anomalies with greater speed and accuracy than traditional methods used for anomaly detection. You can also provide feedback on detected anomalies to tune the results and improve accuracy over time. Amazon Lookout for Metrics makes it easy to diagnose detected anomalies by grouping together anomalies that are related to the same event and sending an alert that includes a summary of the potential root cause. It also ranks anomalies in order of severity so that you can prioritize your attention to what matters the most to your business.",
    ],
    icon: "/aws/svgs/LookoutforMetrics.svg",
    service_tag: [ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name],
  },
  {
    id: "LookoutforVision",
    name: "Amazon Lookout for Vision",
    description: [
      "Amazon Lookout for Vision is an ML service that spots defects and anomalies in visual representations using computer vision (CV). With Amazon Lookout for Vision, manufacturing companies can increase quality and reduce operational costs by quickly identifying differences in images of objects at scale. For example, Amazon Lookout for Vision can be used to identify missing components in products, damage to vehicles or structures, irregularities in production lines, miniscule defects in silicon wafers, and other similar problems. Amazon Lookout for Vision uses ML to see and understand images from any camera as a person would, but with an even higher degree of accuracy and at a much larger scale. Amazon Lookout for Vision allows customers to eliminate the need for costly and inconsistent manual inspection, while improving quality control, defect and damage assessment, and compliance. In minutes, you can begin using Amazon Lookout for Vision to automate inspection of images and objects – with no ML expertise required.",
    ],
    icon: "/aws/svgs/LookoutforVision.svg",
    service_tag: [ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name],
  },
  {
    id: "Monitron",
    name: "Amazon Monitron",
    description: [
      "Amazon Monitron is an end-to-end system that uses ML to detect abnormal behavior in industrial machinery, enabling you to implement predictive maintenance and reduce unplanned downtime.",
      "Installing sensors and the necessary infrastructure for data connectivity, storage, analytics, and alerting are foundational elements for enabling predictive maintenance. However, to make it work, companies have historically needed skilled technicians and data scientists to piece together a complex solution from scratch. This included identifying and procuring the right type of sensors for their use cases and connecting them together with an IoT gateway (a device that aggregates and transmits data). As a result, few companies have been able to successfully implement predictive maintenance.",
      "Amazon Monitron includes sensors to capture vibration and temperature data from equipment, a gateway device to securely transfer data to AWS, the Amazon Monitron service that analyzes the data for abnormal machine patterns using ML, and a companion mobile app to set up the devices and receive reports on operating behavior and alerts to potential failures in your machinery. You can start monitoring equipment health in minutes without any development work or ML experience required, and enable predictive maintenance with the same technology used to monitor equipment in Amazon Fulfillment Centers.",
    ],
    icon: "/aws/svgs/Monitron.svg",
    service_tag: [ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name],
  },
  {
    id: "PartyRock",
    name: "Amazon PartyRock",
    description: [
      "Amazon PartyRock makes learning generative AI easy with a hands-on, code-free app builder. Experiment with prompt engineering techniques, review generated responses, and develop intuition for generative AI while creating and exploring fun apps. PartyRock provides access to foundation models (FMs) from Amazon and leading AI companies through Amazon Bedrock, a fully managed serviced service.",
    ],
    icon: "/aws/svgs/DefaultManagedServices.svg",
    service_tag: [ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name],
  },
  {
    id: "Personalize",
    name: "Amazon Personalize",
    description: [
      "Amazon Personalize is an ML service that makes it easy for developers to create individualized recommendations for customers using their applications.",
      "ML is increasingly used to improve customer engagement by powering personalized product and content recommendations, tailored search results, and targeted marketing promotions. However, developing the ML capabilities necessary to produce these sophisticated recommendation systems has been beyond the reach of most organizations today due to the complexity of developing ML functionality. Amazon Personalize allows developers with no prior ML experience to easily build sophisticated personalization capabilities into their applications, using ML technology perfected from years of use on Amazon.com.",
      "With Amazon Personalize, you provide an activity stream from your application – page views, signups, purchases, and so forth – as well as an inventory of the items you want to recommend, such as articles, products, videos, or music. You can also choose to provide Amazon Personalize with additional demographic information from your users such as age, or geographic location. Amazon Personalize processes and examines the data, identifies what is meaningful, selects the right algorithms, and trains and optimizes a personalization model that is customized for your data.",
      "Amazon Personalize offers optimized recommenders for retail and media and entertainment that make it faster and easier to deliver high-performing personalized user experiences. Amazon Personalize also offers intelligent user segmentation so you can run more effective prospecting campaigns through your marketing channels. With our two new recipes, you can automatically segment your users based on their interest in different product categories, brands, and more.",
      "All data analyzed by Amazon Personalize is kept private and secure, and only used for your customized recommendations. You can start serving your personalized predictions via a simple API call from inside the virtual private cloud that the service maintains. You pay only for what you use, and there are no minimum fees and no upfront commitments.",
      "Amazon Personalize is like having your own Amazon.com ML personalization team at your disposal, 24 hours a day.",
    ],
    icon: "/aws/svgs/Personalize.svg",
    service_tag: [ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name],
  },
  {
    id: "Polly",
    name: "Amazon Polly",
    description: [
      "Amazon Polly is a service that turns text into lifelike speech. Amazon Polly lets you create applications that talk, enabling you to build entirely new categories of speech-enabled products. Amazon Polly is an Amazon artificial intelligence (AI) service that uses advanced deep learning technologies to synthesize speech that sounds like a human voice. Amazon Polly includes a wide selection of lifelike voices spread across dozens of languages, so you can select the ideal voice and build speech-enabled applications that work in many different countries.",
      "Amazon Polly delivers the consistently fast response times required to support real-time, interactive dialog. You can cache and save Amazon Polly speech audio to replay offline or redistribute. And Amazon Polly is easy to use. You simply send the text you want converted into speech to the Amazon Polly API, and Amazon Polly immediately returns the audio stream to your application so your application can play it directly or store it in a standard audio file format, such as MP3.",
      "In addition to Standard TTS voices, Amazon Polly offers Neural Text-to-Speech (NTTS) voices that deliver advanced improvements in speech quality through a new machine learning approach. Polly’s Neural TTS technology also supports a Newscaster speaking style that is tailored to news narration use cases. Finally, Amazon Polly Brand Voice can create a custom voice for your organization. This is a custom engagement where you will work with the Amazon Polly team to build an NTTS voice for the exclusive use of your organization.",
      "With Amazon Polly, you pay only for the number of characters you convert to speech, and you can save and replay Amazon Polly generated speech. The Amazon Polly low cost per character converted, and lack of restrictions on storage and reuse of voice output, make it a cost-effective way to enable Text-to-Speech everywhere.",
    ],
    icon: "/aws/svgs/Polly.svg",
    service_tag: [ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name],
  },
  {
    id: "AmazonQ",
    name: "Amazon Q",
    description: [
      "Amazon Q is a generative AI-powered assistant for accelerating software development and leveraging your internal data.",
      "Amazon Q Business can answer questions, provide summaries, generate content, and securely complete tasks based on data and information in your enterprise systems. It empowers employees to be more creative, data-driven, efficient, prepared, and productive.",
    ],
    icon: "/aws/svgs/DefaultManagedServices.svg",
    service_tag: [ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name],
  },
  {
    id: "Rekognition",
    name: "Amazon Rekognition",
    description: [
      "Amazon Rekognition makes it easy to add image and video analysis to your applications using proven, highly scalable, deep learning technology that requires no ML expertise to use. With Amazon Rekognition, you can identify objects, people, text, scenes, and activities in images and videos, as well as detect any inappropriate content. Amazon Rekognition also provides highly accurate facial analysis and facial search capabilities that you can use to detect, analyze, and compare faces for a wide variety of user verification, people counting, and public safety use cases.",
      "With Amazon Rekognition Custom Labels, you can identify the objects and scenes in images that are specific to your business needs. For example, you can build a model to classify specific machine parts on your assembly line or to detect unhealthy plants. Amazon Rekognition Custom Labels takes care of the heavy lifting of model development for you, so no ML experience is required. You simply need to supply images of objects or scenes you want to identify, and the service handles the rest.",
    ],
    icon: "/aws/svgs/Rekognition.svg",
    service_tag: [ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name],
  },
  {
    id: "SageMaker",
    name: "Amazon SageMaker AI",
    description: [
      "With Amazon SageMaker AI, you can build, train, and deploy ML models for any use case with fully managed infrastructure, tools, and workflows. SageMaker AI removes the heavy lifting from each step of the ML process to make it easier to develop high-quality models. SageMaker AI provides all of the components used for ML in a single toolset so models get to production faster with much less effort and at lower cost.",
    ],
    icon: "/aws/svgs/SageMaker.svg",
    service_tag: [ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name],
  },
  {
    id: "Textract",
    name: "Amazon Textract",
    description: [
      "Amazon Textract is a service that automatically extracts text and data from scanned documents. Amazon Textract goes beyond simple optical character recognition (OCR) to also identify the contents of fields in forms and information stored in tables.",
    ],
    icon: "/aws/svgs/Textract.svg",
    service_tag: [ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name],
  },
  {
    id: "Transcribe",
    name: "Amazon Transcribe",
    description: [
      "Amazon Transcribe is an automatic speech recognition (ASR) service that makes it easy for customers to automatically convert speech to text. The service can transcribe audio files stored in common formats, like WAV and MP3, with time stamps for every word so that you can easily locate the audio in the original source by searching for the text. You can also send a live audio stream to Amazon Transcribe and receive a stream of transcripts in real time. Amazon Transcribe is designed to handle a wide range of speech and acoustic characteristics, including variations in volume, pitch, and speaking rate. The quality and content of the audio signal (including but not limited to factors such as background noise, overlapping speakers, accented speech, or switches between languages within a single audio file) may affect the accuracy of service output. Customers can choose to use Amazon Transcribe for a variety of business applications, including transcription of voice-based customer service calls, generation of subtitles on audio/video content, and conduct (text based) content analysis on audio/video content.",
    ],
    icon: "/aws/svgs/Transcribe.svg",
    service_tag: [ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name],
  },
  {
    id: "Translate",
    name: "Amazon Translate",
    description: [
      "Amazon Translate is a neural machine translation service that delivers fast, high-quality, and affordable language translation. Neural machine translation is a form of language translation automation that uses deep learning models to deliver more accurate and more natural sounding translation than traditional statistical and rule-based translation algorithms. Amazon Translate allows you to localize content such as websites and applications for your diverse users, easily translate large volumes of text for analysis, and efficiently enable cross-lingual communication between users.",
    ],
    icon: "/aws/svgs/Translate.svg",
    service_tag: [ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name],
  },
  {
    id: "DeepComposer",
    name: "AWS DeepComposer",
    description: [
      "AWS DeepComposer is the world’s first musical keyboard powered by ML to enable developers of all skill levels to learn Generative AI while creating original music outputs. DeepComposer consists of a USB keyboard that connects to the developer’s computer, and the DeepComposer service, accessed through the AWS Management Console. DeepComposer includes tutorials, sample code, and training data that can be used to start building generative models.",
    ],
    icon: "/aws/svgs/DeepComposer.svg",
    service_tag: [ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name],
  },
  {
    id: "Deepracer",
    name: "AWS DeepRacer",
    description: [
      "AWS DeepRacer is a 1/18th scale race car which gives you an interesting and fun way to get started with reinforcement learning (RL). RL is an advanced ML technique which takes a very different approach to training models than other ML methods. Its superpower is that it learns very complex behaviors without requiring any labeled training data, and can make short term decisions while optimizing for a longer term goal.",
      "With AWS DeepRacer, you now have a way to get hands-on with RL, experiment, and learn through autonomous driving. You can get started with the virtual car and tracks in the cloud-based 3D racing simulator, and for a real-world experience, you can deploy your trained models onto AWS DeepRacer and race your friends, or take part in the global AWS DeepRacer League. Developers, the race is on.",
    ],
    icon: "/aws/svgs/Deepracer.svg",
    service_tag: [ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name],
  },
  {
    id: "HealthLake",
    name: "AWS HealthLake",
    description: [
      "AWS HealthLake is a HIPAA-eligible service that healthcare providers, health insurance companies, and pharmaceutical companies can use to store, transform, query, and analyze large-scale health data.",
      "Health data is frequently incomplete and inconsistent. It's also often unstructured, with information contained in clinical notes, lab reports, insurance claims, medical images, recorded conversations, and time-series data (for example, heart ECG or brain EEG traces).",
      "Healthcare providers can use HealthLake to store, transform, query, and analyze data in the AWS Cloud. Using the HealthLake integrated medical natural language processing (NLP) capabilities, you can analyze unstructured clinical text from diverse sources. HealthLake transforms unstructured data using natural language processing models, and provides powerful query and search capabilities. You can use HealthLake to organize, index, and structure patient information in a secure, compliant, and auditable manner.",
    ],
    icon: "/aws/svgs/HealthLake.svg",
    service_tag: [ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name],
  },
  {
    id: "HealthScribe",
    name: "AWS HealthScribe",
    description: [
      "AWS HealthScribe is a HIPAA-eligible service that allows healthcare software vendors to automatically generate clinical notes by analyzing patient-clinician conversations. AWS HealthScribe combines speech recognition with generative AI to reduce the burden of clinical documentation by transcribing conversations and quickly producing clinical notes. Conversations are segmented to identify the speaker roles for patients and clinicians, extract medical terms, and generate preliminary clinical notes. To protect sensitive patient data, security and privacy are built-in to ensure that the input audio and the output text are not retained in AWS HealthScribe.",
    ],
    icon: "/aws/svgs/DefaultManagedServices.svg",
    service_tag: [ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name],
  },
  {
    id: "Panorama",
    name: "AWS Panorama",
    description: [
      "AWS Panorama is a collection of ML devices and software development kit (SDK) that brings computer vision (CV) to on-premises internet protocol (IP) cameras. With AWS Panorama, you can automate tasks that have traditionally required human inspection to improve visibility into potential issues.",
    ],
    icon: "/aws/svgs/DefaultManagedServices.svg",
    service_tag: [ServiceGroups.Machine_Learning_and_Artificial_Intelligence.name],
  },
];
