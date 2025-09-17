What are Microservices?
Small, independent service that collectively form a larger application.

Why Microservices?
Top 3 advantages of micro services : 1. Zero-Downtime Independent Deployability 2. Reflect your Team’s Structure. 3. Self-Contained Data & Logic

Vertical Scaling - Increasing the capacity of hardware components gradually.

In Monolithic applications, while doing the vertical scaling - we will not be able to use the hardware
resources optimally (in optimistic way).

    Solution is —> Horizontal Scaling

Horizontal Scaling - Increasing the multiple server components (servers) and installing the application
Instance inside it. - Load is distributed across all servers with Load Balancer b/w Client & Server.

Vertical Scaling disadvantages :
_ Risk with Single-Point of Failure (Downtime Issues).
_ Can’t scale to infinite capacity.

Independent Deployability - Individual Services (Microservices) of an application are deployed independently
and horizontally scaled according to the load on each service.

Team’s Structure - Dividing whole application into multiple microservices, and each team will be only
Responsible/ Maintainable for that particular microservice only. - Issues with large codebase - Commit Conflicts will be very high. - Difficult to perform/ trigger CI CD pipelines everytime.

Independent Service - All the Data & Logic of that service will lie inside its own service only.
This will not disturb the application working even if one particular service fails.

Why NOT Microservices?
Top 3 Disadvantages of Microservices : 1. Infrastructure Complexity 2. Latency 3. Risk of failure cascades

Managing configurations of all the services (like .env variables, packages, versions), communication b/w
services, maintaining security among services will be complex with using Microservices.

We need to ensure latency b/w multiple micro services should be minimised with proper architecture designing.

Sam Newman -
Microservices shouldn’t be the default option. If you think a service architecture could
help, try it with one of the modules from a very simple monolith topology and let
it evolve from there.

Planning Microservice Architecture :

    - Domain Driven Design (DDD) —> Using Bounded Context

Finding out bounded context in application -
Different techniques are —> 1. Event Storming - All the people of a team gather collectively and lists out all the events that occur in
an application. 2. Story telling

Kafka - Data Streaming broker ( also used as Message Queue) used for communication between
different microservices.
