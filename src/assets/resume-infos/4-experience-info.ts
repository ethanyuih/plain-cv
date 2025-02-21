import { Experiences } from "./types";
// Based on the job description and my resume, help me generate a cover letter
export const experienceInfo: Experiences = {
  experienceList: [
    {
      hidden: false,
      // Nexus Point Group Corp (formerly Cascadia Capital Corp) serves as an affiliated technology support provider for Bacera Co. Pty Ltd.
      company: "Bacera Co. Pty Ltd",
      address: "Alhambra, California",
      titles: [
        {
          hidden: false,
          position: "Software Engineer",
          duration: "June 2023 - Present",
          taskList: [
            // "Developed new Multi-Tenant RESTful APIs using .NET Core + EF Core, successfully migrating from the legacy system to PostgreSQL database, achieving a 500% improvement in average response time.",
            // "Implemented Hangfire for background task processing, achieving 60% reduction in server load.",
            // "Developed new Multi-Tenant RESTful APIs using .NET Core + EF Core, successfully migrating from the legacy system to PostgreSQL database, achieving a 500% improvement in average response time.",
            "Built RESTful API endpoints for our CRM using .NET 8.0 with C#, achieving a 500% improvement in API response time.",
            "Designed and implemented multi-tenant database architecture using PostgreSQL and Entity Framework Core.",
            "Utilized Duende to integrate OAuth for secure authentication and JWT for stateless authorization, implementing role-based access control (RBAC) with middleware for request authorization, improving application security by 35%.",
            "Architected and led the decomposition of monolithic application into 8+ microservices on Kubernetes, reducing deployment time by 70%.",
            "Designed and built a central API Gateway with Go, leveraging ETCD's watch mechanism for service discovery, eliminating polling overhead and reducing service lookup latency by 55%.",
            "Implemented gRPC with Go for inter-service communication across 10+ service endpoints, resulting in 40% reduced service latency and 30% decreased network bandwidth usage.",
            "Enhanced database performance through query optimization by implementing proper indexing, query rewriting, and PostgreSQL VACUUM scheduling, resulting in a 40% improvement.",
            // "Built and maintained third party payment integrations, preventing duplicate transactions through Redis-based distributed locking, achieving 99.99% processing accuracy.",
            "Established automated CI/CD workflow with Jenkins and Docker, enabling seamless code integration and deployment while reducing deployment time by 80%.",
            // "Spearheaded ChatGPT API implementation across core business applications, driving 20% increase in user satisfaction through enhanced automation.",
            "Architected robust cloud infrastructure using AWS S3 for media storage and AWS CloudWatch for logging.",
            // "Architected robust cloud infrastructure using AWS S3 for media storage and AWS CloudWatch for logging, integrated with Slack for real-time error notifications, resulting in 95% faster incident response time.",
          ],
        },
        {
          hidden: false,
          position: "Software Engineer Intern",
          duration: "January 2023 - June 2023",
          taskList: [
            // "Developed new Multi-Tenant RESTful APIs using .NET Core + EF Core, successfully migrating from the legacy system to PostgreSQL database, achieving a 500% improvement in average response time.",
            // "Utilized Duende IdentityServer to integrate OAuth for secure authentication and JWT for stateless authorization.",
            "Engineered real-time trade monitoring system using .NET 8.0 with C#, leveraging AWS SQS and Kafka for distributed message processing, achieving 100K messages/second throughput and sub-50ms trading feedback latency.",
            "Built and maintained third party payment integrations, preventing duplicate transactions through Redis-based distributed locking, achieving 99.99% processing accuracy.",
            // "Spearheaded ChatGPT API implementation across core business applications, driving 20% increase in user satisfaction through enhanced automation.",
            "Utilized Hangfire for background jobs (reports, emails), achieving 60% reduction in server load.",

            // "Participated in developing a CRM frontend application using Vue 3 with TypeScript.",
            // "Utilized vue-i18n for internationalization, which enabled successful market expansion into Vietnam and Japan.",
            // "Engineered reusable layout container components utilizing Vue.js slot interfaces and ElementUI.",
            // "Strengthened the reliability by implementing comprehensive unit testing for core components using vue-test-utils",
            // "Implemented responsive layouts with rem/flexbox and Sass, enabling white-label customization for third-party sales.",
          ],
        },
      ],
    },
    {
      hidden: false,
      company: "Meituan",
      address: "Beijing, China",
      titles: [
        {
          hidden: false,
          position: "Software Development Engineer Intern",
          duration: "June 2022 - September 2022",
          taskList: [
            "Optimized x265 image encoding performance using C++ and SIMD instructions (SSE/AVX, NEON), implementing JavaScript APIs for data packing, resulting in 60% faster encoding speeds.",
            "Designed and implemented  image conversion pipeline using x265 and libheif, reducing encoding time by 36% and achieving 22% better compression compared to WebP format.",
            "Applied optimized image format into Meituan App using React Native.",
          ],
        },
      ],
    },
    {
      hidden: true,
      company: "University of Science and Technology Beijing",
      address: "Beijing, China",
      titles: [
        {
          hidden: false,
          position: "Research Assistant",
          duration: "September 2019 - June 2021",
          taskList: [
            "Modeling for Degradation of Biomedical Polymer: Designed the phase image feature recognition algorithm to recognize the phase image features, and characteristic “island” structures. Implemented the chain scission model by Monte Carlo (MC) method. Designed the Boundary Extension Algorithm (NNBE) to identify features with hole (block) and crack (strip) shapes and utilized these features to establish strength models for different phases.  Published two publications for this research",
          ],
        },
      ],
    },
    {
      hidden: true,
      company: "Institute of Automation, Chinese Academy of Sciences",
      address: "Beijing, China",
      titles: [
        {
          hidden: false,
          position: "Research Assistant",
          duration: "Jan. 2019 - Apr. 2019",
          taskList: [
            "A Flower-Image Search System Based on DL: Implemented the overall design of multi-layer convolutional neural networks and fully connected neural networks using TensorFlow. Optimized the convolutional layers by back-propagation algorithm and applied forward-propagation and back-propagation functions to the fully connected layer. The overall accuracy of the recognition was 95.66%. The project was granted a patent (AU2019100352A4)",
          ],
        },
      ],
    },
  ],
};
