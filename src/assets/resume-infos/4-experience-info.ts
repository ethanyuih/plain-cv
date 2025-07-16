import { Experiences } from "./types";
// Based on the job description and my resume, help me generate a cover letter
export const experienceInfo: Experiences = {
  experienceList: [
    {
      hidden: false,
      // Nexus Point Group Corp (formerly Cascadia Capital Corp) serves as an affiliated technology support provider for Bacera Co. Pty Ltd.
      company: "Nexus Point Group Corp",
      address: "Alhambra, California",
      titles: [
        {
          hidden: false,
          position: "Software Engineer",
          duration: "April 2024 - June 2025",
          taskList: [
            // "Developed new Multi-Tenant RESTful APIs using .NET Core + EF Core, successfully migrating from the legacy system to PostgreSQL database, achieving a 500% improvement in average response time.",
            // "Implemented Hangfire for background task processing, achieving 60% reduction in server load.",
            // "Developed new Multi-Tenant RESTful APIs using .NET Core + EF Core, successfully migrating from the legacy system to PostgreSQL database, achieving a 500% improvement in average response time.",
            // "Built and deployed high-performance RESTful API endpoints for our CRM on AWS EC2 using .NET 8.0 with C#, achieving a 500% improvement in API response time.",
            "Built and deployed high-performance RESTful API endpoints for our CRM on AWS EC2 using .NET 8.0 with C#, implementing Nginx for load balancing and reverse proxy with HTTP/2 support, while leveraging Redis for data caching, achieving a 500% improvement in API response time and handling 10K concurrent requests.",
            "Architected a multi-tenant database architecture using PostgreSQL with Entity Framework Core (EF Core) as ORM provider.",
            "Utilized Duende IdentityServer with OAuth2 for secure authentication and JWT for stateless authorization, implementing role-based access control (RBAC) with middleware for request authorization, while determining user's tenant affiliation by extracting tenant identifiers from JWT claims in the multi-tenant middleware, eliminating the need for URL-based tenant identification.",
            "Designed and developed a unified wallet management system using Finite State Machines (FSM) with explicit Matter-State-Action architecture to efficiently handle transactions, including withdrawals, deposits, and rebate commissions.",
            "Led the decomposition of monolithic CRM application into 8+ microservices on Kubernetes with gRPC inter-service communication, reducing deployment time from 40 minutes to 15 minutes while maintaining system reliability and data consistency.",
            "Engineered and built a central API Gateway with Go, leveraging ETCD's watch mechanism for service registration and discovery.",
            "Enhanced SQL query speed by proper B-tree and GIN indexing and VACUUM scheduling, resulting in a 40% improvement.",
            "Orchestrated an advanced search architecture utilizing PostgreSQL's logical replication for Change Data Capture (CDC) with Elasticsearch, replacing the native Full-Text Search, which significantly improved query performance for complex text searches by 75%, reducing database load on the primary instances by 40% and resulting in a 3.5x overall search throughput improvement.",
          ],
        },
      ],
    },
    {
      hidden: false,
      company: "Cascadia Capital Corp",
      address: "Alhambra, California",
      titles: [
        {
          hidden: false,
          position: "Software Engineer",
          duration: "June 2023 - April 2024",
          taskList: [
            "Engineered real-time trade monitoring system using Go, orchestrating AWS SQS and Kafka for distributed message processing while implementing Websocket for critical trading notifications, achieving 10K messages/second throughput.",
            "Integrated 17 third-party payment gateways and corresponding webhook APIs with .NET, enabling seamless financial transactions.",
            // "Spearheaded ChatGPT API implementation across core business applications, driving 20% increase in user satisfaction through enhanced automation.",
            "Implemented distributed job scheduling system using Hangfire and Quartz.NET, featuring dynamic cron expressions, job chaining and custom retry policies with exponential backoff, reducing peak server load by 60% through intelligent task distribution.",
            "Architected robust cloud infrastructure using AWS S3 for blob storage and AWS CloudWatch for logging.",
            "Contributed to the existing Jenkins CI/CD pipeline by implementing additional automated test cases.",
            // 'Applied optimized image format into Meituan App using React Native.',
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
            "Developed an internal ticket system using Redis Pub/Sub messaging pattern, enabling real-time chat between support teams.",
            "Integrated the improved x265 into libheif library and optimized image processing pipeline using Linux kernel's io_uring for async I/O.",
            "Optimized x265 image encoding performance using C++ and SIMD instructions (SSE/AVX, NEON), implementing memory-mapped I/O and multi-threading with pthreads, achieving 60% faster encoding speeds.",
            "Developed comprehensive Shell scripts suite for optimizing image format conversion pipeline, featuring automated WebP/HEIF encoding parameter tuning, multi-threaded batch processing, and result validation, improving image conversion throughput by 3x.",
            // 'Applied optimized image format into Meituan App using React Native.',
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
