# Group 3 Final Project

## Resources
---
- Presentation: https://docs.google.com/presentation/d/189885tIabEeBWLpyj9cMJktKJI-QuxkrAzXRBUzYJbs/edit#slide=id.p
- Jira Board: https://badamiec.atlassian.net/jira/software/projects/FP/boards/7/roadmap
- Risk Assessment: https://docs.google.com/document/d/1-s6Nb3pVpPESHO-dkETj3pFdLD4nn2W6fpx4A692_sw/edit

## Contents
* [Brief](#brief)
   * [Requirements](#requirements)
   * [Our Approach](#our-approach)
* [Project Management](#project-management)
* [Risk Assessment](#risk-assessment)
* [Research](#research)
   * [Market Research Meeting](#market-research-meeting)
* [Front-End Design](#front-end-design)
   * [ERD Components](#erd-components)
   * [Existing Softwares](#existing-softwares)
   * [Initial Sketches](#initial-sketches)
* [Architecture](#architecture)
   * [Frontend](#frontend)
   * [Backend](#backend)
* [DevOps](#devops)
   * [Automation](#automation)
   * [Terraform](#terraform)
   * [Ansible](#ansible)
   * [CI Pipeline](#ci-pipeline)
   * [Jenkins](#jenkins)
   * [Kubernetes](#kubernetes)
* [Testing](#testing)
   * [Postman Testing](#postman-testing)
   * [Backend Testing](#backendtesting)
   * [Frontend Testing](#frontend-testing)
* [Improvements](#improvements)
* [Acknowledgements](#acknowledgements)
* [Authors](#authors)


## Brief
---
### Requirements
Our group has been tasked with designing, developing and deploying a full-stack application functioning as a help queue accessible by QA Academy trainers and trainees. The brief provided was as follows:

Test

"For this project, you are tasked with creating a Help Queue web application for use in the Academy. The purpose of this application is to work as a virtual hands-up tool to alert trainers to who needs help in their class. Trainees can post help tickets to the queue, with oldest tickets at the top of the list. Trainers can then view the queue to see who needs help next. When a ticket has been solved, it is marked as "Done" by the user and added to a separate "Completed" list. The next-oldest ticket is moved to the top of the list."


In addition to the brief, we were also required to implement 3 additional features from the following list:
* Solutions
* Cohorts
* Trainer assignment
* Filter by attributes such as urgency, title, author etc.
* Topics
* Keyword Search
* Trainee tagging to tickets

The following technologies were required:
* Frontend 
* Gateway Service
* Backend
* Relational Database

In addition, a CI pipeline with the following requirements was specified:
* Version Control System
* CI Server
* Unit Testing
* Integration Testing
* Build Tool
* Containerisation
* Artefact Repository
* Testing Environment
* Infrastructure as Code
* Configuration Management
* Deployment

### Our Approach

To meet the project goals, we used the following technologies:

* React Frontend 
* Spring Boot Backend
* AWS RDS Database
* Git Version Control
* Jenkins CI Server
* MockMVC, Mockito, JUnit and Jest Testing
* Docker Build Tool
* Kubernetes Containerisation
* Docker Hub Repository
* Test ec2 and RDS
* Terraform IaC
* Ansible Configuration Management
* Elastic Kubernetes Cluster

In addition to the basic functionality, we successfully implemented the following additional features:
* Filtering by cohort
* Filtering by priority
* Filtering by topic
* Filtering by status
* Sorting by (ascending) attributes

## Project Management
---

### Initial Planning

The initial planning stage of the project involved the team reading through the project specification and discussing what the deliverables of the final application should be. The deliverables are then divided into the application's components such as Frontend, Backend and DevOps.

The team then collaborated on the brainstorming of tasks that will be required to produce each of the components by using Post-It notes to write tasks under each component heading. These were then copied over to a Jira Board where Epics were created from the project components and tasks were added to a backlog and associated with the Epics.

From there, the team worked on story points for each task to define how difficult each task would be to implement. This was achieved by each team member voting on a 1 to 10 scale of perceived difficulty for each task before a final average was taken. The process would allow the team to identify which tasks would require more development time to implement.

### Jira Board

![Screenshot 2020-12-18 111040](https://user-images.githubusercontent.com/71394754/102608384-b321e000-4121-11eb-826d-6a208842d9ac.png)

The Jira Board shows the backlog of project tasks and their associated epics.

### Team Roles

Each member of the team volunteered for a specific role associated with a project component that they feel confident in completing. For example, a team member may assign themselves to Frontend, and another member on Backend. Multiple users may use the same roles to collaborate on a component such as with DevOps.

Roles may overlap and team members may inhabit other roles if multiple components need to work together and more team members can work on it.

### Sprint Retrospectives

After each sprint, a sprint review and a sprint retrospective was held to evaluate the amount of work done, the degree to which goals were met, as well as our general approach to completing the tasks. The image below shows a sprint retrospective held after our first sprint.

![retro][retro]


## Risk Assessment
---
The earliest risk assessment for this project was one of the first pieces of documentation written, and has been revisited frequently as more functionality and proposed mitigations were implemented. Pictured below is a snippet from the risk assessment which can be found in full under the link provided in the resources section of this document.

![risk][risk]

## Research
---

### Market Research Meeting

After setting up the core brief requirements of the project from the requirements documents we required some more in-depth knowledge into the specific needs that the client (QA) requires or would like to be included in the final project. This was conducted by having an in-depth customer focus interview with the stakeholders, askihng questions about the brief and what other features may have been missed and are more important. 

From the interview the following points were raised, so we had to ensure our product hit these criteria: 

**1.** Sorting and assigning tickets to cohorts was vital for this ticket queue system. This is so that trainers know which tickets are likely to be assigned to them, as well as allowing trainees to see other peoples tickets from their cohort (who likely have similar issues)

**2.** When setting a ticket as resolved, it should not be deleted automatically from the database. Deleting a ticket is a necessity, so as to stop the DB from becoming too clustered. But keeping resolved allows others to see the resolution.

**3.** The application will be owned by QA and shouldn't clash with the existing QA Academy software, for example QA Community. The design should be similar and share an aesthetic value with the existing softwares so that they can sit alongside each other. 

The Market Research was a beneficial task to complete first, as it gave us an indication of which of the stretch goals are important to focus on. It's important for a project given to us by a client to include the 'Would Have's/ Could Have's' that are important to the client, rather than what are important for us, as the Devs to implement. 

## FrontEnd Design

### ERD Components

React as a front end framework uses JS functional programming to design a webpage, part of this is in implementing reusable and modular components for the purpose of keeping code DRY, only loading and rerendering components that need it (saving resources) and allowing easier transfer of data. 

The below diagram is the final ERD Component tree for the application. It shows the Parent and Child relationship of each component. 
In this diagram useState has been implemented in parent components and is at the highest common component for branches that require shared use of a state prop.

![ComponentErd](https://user-images.githubusercontent.com/71394624/102592644-a8f4e700-410b-11eb-9c96-57d3d47fac4f.png)

### Existing Softwares

After Market research with QA we found out the currently existing software in use by themselves is the communication methods already implemented. This is primarily Microsoft Teams text and video call. Downsides of using this existing software is that there isn't a dedicated channel for help requests so problems can be lost in the stream of messages. This method is also a closed method, where people posting tickets and asking for help cannot see other people with the same issues that may be able to work together to resolve it. The core of this ticket queue is that people can post the problems they're having, allowing anyone to effectively help with the problem.

Existing software already exists for ticket queue systems, with the software looking functional but clinical. 
By clinical a lot of the software are powered by an RDS (much like this application) and use this in their design, making a table with headers mimicking the RDS but with improving the aesthetics. This produces a website which doesn't seem to be static and isn't intuitive to navigate around. An important aspect of this app for our team was to give the software a materialistic feel, with tickets on the page 'having weight'. This is done by incorporating flat shadow and depth, and ensuring the app is not static. 

### Initial Sketches

Some initial designs of the CRUD are outlined below, with the final product being a collaboration between the two different styles and designs:
![Front End Mockup(1)](https://user-images.githubusercontent.com/71394624/102593850-4bfa3080-410d-11eb-896e-b841920fa190.png)
![Frontend-Design](https://user-images.githubusercontent.com/71394624/102593860-50264e00-410d-11eb-8a6a-b5cf466338ff.png)

One of the original potential designs for the final application was using a post it note type system, similar to a real-world notice board. This gave the final design a real sense of physicality, which could potentially involve a real video of post-it notes being posted and removed, with the text content added in programmatically and rendered. 

![Asset 5](https://user-images.githubusercontent.com/71394624/102594089-a5faf600-410d-11eb-9f2a-ce2f97daa511.png) ![Asset 6](https://user-images.githubusercontent.com/71394624/102594091-a7c4b980-410d-11eb-9eb4-0d7e7cb70df5.png)

This in practice seemed too much work for the scope of this project, but is something that could be considered as a stretch goal. 

## Architecture 
---

### Frontend

The Final frontend is a React.JS application utilising React Bootstrap for the Grid functionality and a variety of other frameworks for the graphical and functional aspects.

<p align="center">
  <img width=60% src="https://user-images.githubusercontent.com/71394624/102595049-ef981080-410e-11eb-86a6-57ff64a5dc2b.png">
  <img width=60% src="https://user-images.githubusercontent.com/71394624/102595092-fd4d9600-410e-11eb-8fb2-2a1291ae72e5.png">
  <img width=60% src="https://user-images.githubusercontent.com/71394624/102595100-00488680-410f-11eb-8887-0aa46756e5d2.png">
  <img width=60% src="https://user-images.githubusercontent.com/71394624/102595108-02aae080-410f-11eb-89ac-8d2a6cef18d2.png">
  <img width=60% src="https://user-images.githubusercontent.com/71394624/102595123-05a5d100-410f-11eb-8477-6aead239d388.png">
  <img width=60% src="https://user-images.githubusercontent.com/71394624/102595175-1c4c2800-410f-11eb-8fe3-39555ee8542c.png">
</p>
                                                                                                                            
The above images are screenshots of the front end design showing the functionality of the website, contents of the website are:
**1.** Login Page

**2.** Ticket Page

**3.** Solutions Page

**4.** Add Ticket Modal

**5.** Edit Ticket Modal

**6.** Sort and Filtering Sidebar

**7.** Reactive Nav Bar

### Backend

The backend is a Spring Boot application written in Java SE that enables the frontend to communicate with a database. It is deployed inside a Docker container where it listens for HTTP CRUD (Create, Read, Update, Delete) requests from the frontend and performs SQL queries on a connected database.

![Backend Diagram](https://user-images.githubusercontent.com/71394754/102358242-33700600-3fa7-11eb-87ee-e2fd9c46bc9f.png)

The structure of the backend consists of 3 components:

- **Controller**: Contains addresses for different HTTP request types and header and body contents. The frontend sends a HTTP CRUD request targeting a specific controller address. The controller returns a ResponseEntity containing a ticket object or list of tickets and an HTTP status code.
- **Service**: Contains methods for passing in data to the repository and returning the result as a ticket object to the controller.
- **Repository**: An interface that extends the Spring Boot JpaRepository class. It exposes methods that translate requests by the service into SQL requests for the connected database. The repository is referenced as an object in the service called "repo".

![Ticket Model](https://user-images.githubusercontent.com/71394754/102543937-f6416c00-40ab-11eb-907e-b871ebf21a9b.png)

The backend contains a class called **Ticket** that serves as a data model for what incoming JSON values should map to in order to create a ticket object. Each attribute in the class must match the schema of the database for the object to be inserted correctly. 

![Backend Diagram 2](https://user-images.githubusercontent.com/71394754/102478984-31b14b80-4056-11eb-8109-96165420019c.png)

The above diagram shows the structure of the backend and the interaction between its components. 


**1.** The controller listens for a POST, GET, PUT or DELETE HTTP request from the frontend that targets a specific controller address. Depending on the type of request, the backend has multiple methods that provide different functionality to each CRUD request type. A POST method will look for a JSON object in the body of the request and map it to the ticket data model. A GET method will look for a value in the header of the request to use as a search parameter for querying the database. 

The update controller method requires a header value corresponding to the id of the ticket record that needs to be updated, and a JSON body containing the new values of the targeted ticket record.

**2.** The service contains methods that each controller method calls on to perform queries on the database. Each service method is paired with a controller method where it will receive any header or body parameters sent from the controller to be then plugged into the repository query. The service then calls a repository method that performs the SQL query on the connected database.

**3.** The repository is an interface that provides methods to perform SQL requests. POST methods in the service will use the "save" method of the repository which is then translated to an "INSERT INTO" SQL command. GET methods will use "findAll" which translates to "SELECT FROM" SQL commands. More specific methods can be created in the repository that translate to commands that target certain data. Some of the GET methods use these specific methods to retrieve a filtered or sorted list of database records.

**4.** Once the query to the database has been completed, the controller will return the result to the frontend with an HTTP status code.

## DevOps


Discus the entire pipeline and DevOps stuff.

![CI Pipeline v1 (1)](https://user-images.githubusercontent.com/67590124/102597451-9336f000-4112-11eb-944a-b1313695ae24.png)


### Automation
---
The deploy script was developed to automate the entire process on virtual machine from the start of the project up to the Jenkins pipeline which needs to be configured manually. The deployment stages and functionalities are provided below. 
Steps:
1.	Main VM Software Installations
The deploy script will first install all the necessary software needed on the main vm which includes ansible, terraform, jq, python-pip3, awscli, curl, unzip and more. 

2.	Aws configure
The deploy script then uses a bash script stored in the root of the vm to configure awscli automatically. Configuring awscli ensures that we are logged into the correct aws account that terraform will build its infrastructure on. Later on in this script, this file was copied over to the jenkins vm an run to configure aws for Kubernetes. 

3.	Generate ssh public keys (ssh-keygen) 
Several ssh public keys were generated automatically through the script. The first one was on the main vm for terraform to access and the others came after in the script where inputs were passed into the vms terraform created. 

4.	Start terraform
The first step before starting terraform is passing in the database credentials from the secret folder stored at the root the vm which is done by automatically by the script. This file is called terraform.tfvars and it holds the password and username for the databases. The next stage was to format, initialise, plan and apply terraform, which builds our entire infrastructure.

5.	Export and clean terraform outputs
In this stage the script collects all outputs from terraform which incudes database URI, test database URI, test vm IP and Jenkins vm IP, and clean them up, strip away quote marks and other unnecessary data off these crucial outputs. The script then exports these outputs as environment variables to be used later on in the project.

6.	Edit etc/hosts file
In this step of the script, I automate the process of passing is Jenkins vm and the test vm as hosts in the etc/hosts file. This was done without compromising any of the vm IP addresses.
   
7.	Start ansible
In this stage the script runs ansible playbook which essentially installs all the software that were needed in the test vm and is the Jenkins vm. It will also add sudo doers access for jenkins on the jenkins vm and on the test vm as a backup.

8.	Send inputs to Jenkins vm and test vm (EOF)
In this stage I ssh into both jenkins and test vm, and pass input using EOF to do a key generation if public keys does not exist. I also ssh into the jenkins vm and pass input into the jenkins user to generate a public key on that user to later on use this key to give jenkins ssh access to the test vm. This process was fully automatic, and the keys are use for allowing a full triangular sshing which will be discuss at a later stage. 

9.	Secure Copy public keys
A key folder was created to store and organise the public keys from the jenkins vm, test vm and jenkins user. The public key for the jenkins vm, test vm and jenkins user were then securely copied across to the main vm and store in the key folder. I them cat out each public key into the main vm authorized key file. 

10.	Passing Public keys to enable sshing
In this step I secure copy the authorize key file on the main vm that I had cat out all public keys into to the test vm and the jenkins vm. I then ssh into both the jenkins vm and the test vm and use EOF to pass input to cat out the main vm authorized key file into their authorized keys file to give all three vm and jenkins user ssh privilege. 

11.	Creating Databasecredentials file and .env file (environment variables) 
A databasecredentials file was essential for the jenkins pipeline. The file contains several variables and outputs collected from terraform. The variables were database endpoint, testdatabase endpoint, databases username and password, IP addresses and Docker username and password. The mentioned variables were place inside the file automatically and they were ready to be exported as environment variables when the credentials script was run. An environment variable file (.env file) was also created automatically for Docker which aid docker with picking up all variable needed for containerisation. 

12.	Passing Databasecredentials and .evn files to jenkins vm, jenkins user and test vm
The databasecredentials file was secure copied across to the jenkins vm, jenkins user, and testvm. This ensures that when setting up the jenkins pipeline these variables were readily available for Docker and Kubernetes. From those variables a .env file was created to aid with running Docker automatically in this script. 

13.	Passing in Database Schema
In this step of the script, I ssh into both the test vm and jenkins vm and use EOF to pass inputs to clone down the repo, export databasecredentials variables and pass in both the test database schema in the test vm and production database schema in the jenkins vm. 

14.	Create and pass secrets yaml file to jenkins user for Kubernetes
In this step, I created a secret yaml file from the credentials file automatically. I configured the credentials variables in a secrets shell script and cat it out into the secrets yaml file. This was done by sshing into the jenkins vm and passing inputs through EOF.

Below is an image that outlines the aforemention deployment steps. 

<img src="https://user-images.githubusercontent.com/67590124/102571353-38d16b80-40e1-11eb-9b65-83557e2c9e5c.png" width="1000" height = "650">



### Terraform 

Terraform is an Infrastructure as Code software tool which allows us to automate deployment of architecture. With this we automated the creation of the Elastic Kubernetes
Service (EKS) as well as its nodes. We also created the two RDS instances required for testing and deployment and all aws instances required by the application. All of these
services are in a VPC with the RDS sitting in a private subnet and the aws_instances in public subnets, however this will later be changed and only accessible with a Bastion 
Host. (public subnet utilized for all contributors to access the Jenkins pipeline efficiently).
Modules were used to prevent duplication of code and improve reusability, meaning less files need to be configured as new infrastructure is provisioned.
Utilized Terraform v0.14.2 to prevent sensitive files from being visible in terraform plan and apply, which can be seen below.

* Please note a terraform.tfvars file is required for the plan to be executed successfully, these are required variables for the databases which are the masterusername and masterpassword. (prevent variables being exposed on github)

![Terraform](https://user-images.githubusercontent.com/71396007/102594320-f07c7280-410d-11eb-859a-76dd05fa3d3d.png)


### Ansible
---
Ansible is an application deployment, configuration management and continuous delivery tool. It is one of the simplest ways to automate apps, install software and automate IT infrastructure. In this project ansible was used to install a list of software on the jenkins vm and on the test vm. These software were based off the needs for the project’s application.The roles in the ansible were written with the support of the ansible documentation and were developed without the use of scripts.
The software roles of ansibles are listed below. 

Jenkins vm roles
* Docker – Use for application containerisation.
* Docker-compose – Use for application containerisation.
* Kubernetes – Use for deploying, scaling and managing the projects containerised applications.
* Utility software - List of useful software including Java, awscli, nginx, maven, mysql client.
* Sudo doers - Add jenkins to a list of sudo doers

Test vm roles
* Nodejs – For frontend testing.
* Docker – Use for application containerisation.
* Docker-compose - Use for application containerisation.
* Utility software – List of useful software including Java, awscli, nginx, maven, mysql client.

Below is the result from ansible software installations on the jenkins vm.

<img src="https://user-images.githubusercontent.com/67590124/102568502-8519ad00-40db-11eb-863c-e5a51e04f0b8.png" width="1000" height = "500">

Below is the result from ansible software installations on the test vm.

<img src="https://user-images.githubusercontent.com/67590124/102570217-ccee0380-40de-11eb-90a9-ffccc59883c5.png" width="1000" height = "500">

### CI Pipeline
---
Below is an image showing the Continuous Integration pipeline used to deploy and continuously configure the Help Queue application.

![pipeline][pipeline]

This pipeline allows for rapid and simple development-to-deployment by automating the integration process. Code can be produced and pushed to GitHub, which will automatically push the new code to Jenkins via a webhook trigger. When a change is made to the Java and/or React source code, the git repository is pulled down by Jenkins. From there, tests are automatically ran in a separate testing environment from the live cluster to ensure the application will function correctly, and other build stages performed. Upon successful testing, Docker images of the backend and frontend are built and pushed up to Docker Hub, and pulled down in the last stage for Kubernetes deployment.


### Jenkins 

Jenkins is a continuous integration server. The test, build and deployment process is automated by a Jenkins pipeline job with distinct build stages. If a build stage fails, the subsequent stages are not executed and the job will fail altogether to prevent non-functioning code from altering the live environment. Detailed console outputs are provided at each stage.

The main build stages in this project are:
* Pulling code from a Git repository after a web hook is triggered by a change to the repository
* The backend code is tested
* The backend image is built and pushed up to Docker Hub (then removed locally to regain disk space)
* The frontend code is tested
* The frontend image is built and pushed to Docker Hub (then removed locally to regain disk space)
* The Docker containers running in and managed by the Kubernetes cluster are updated with the latest Docker images


The image below shows all the stages of the build.

![jenkins][jenkins]

### Kubernetes
Kubernetes is an orchestration system for automating deployment and managing containerized applications. We used this to allow the websites to be hosted through a load balancer in order for the website to be visible through the external ip within the EKS. This is done by using docker images which are then created into pods with specific ports exposed, allowing the nginx, which acts as a proxy pass to display the website. Multiple replicas of the pods were used when defining yaml files to reduce outage of the application in case of the cloud provider suffering from things such as natural disasters

<p float="left">
  <img src="https://user-images.githubusercontent.com/71396007/102599354-4274c680-4115-11eb-903d-28db85c4c56f.png" width=49% />
  <img src="https://user-images.githubusercontent.com/71396007/102599443-61735880-4115-11eb-9ccc-81291cbdeb4b.png" width=49% />
</p>

* Front-end being hosted by nginx loadbalancer
* Front-end has access to the backend when exec into and curling the IP address

## Testing
---

### Postman Testing

The earliest tests conducted tested the connection between the front end requests and the backend controllers and services. Using an in-memory h2 database and localhost, the basic create, read, update and delete functionality of the Helpqueue app was tested with Postman. Some images from these early-stage GET and POST request tests are shown below.

![postmancreate][postmancreate]

![postmanget][postmanget]

### Backend Testing

Backend testing was carried out using JUnit. Integration tests on the backend controller were conducted using MockMVC which supports Spring MVC. A test MySQL database hosted on AWS RDS, with existing records of tickets to be tested, was used to carry out these tests. Testing the functionality of the service class was done using the testing framework Mockito. Mockito allows for testing without establishing connections through using mock objects which return mock data. JUnit, an in-built test framework for Java applications, was used to run both the integration and unit tests. JUnit produces a report on the status and outcome of each test, detailing which were successful, which had errors, and showing any failure traces in a console.


![backendtests][backendtests]

JUnit also tracks the coverage of the tests to show the percentage of the code in the application which has been tested. The aim for this project was 80% coverage, and in reality 99.6% backend test coverage was achieved as shown below.

![backendcoverage][backendcoverage]

### Frontend Testing

Frontend testing was carried out using the Jest testing framework for JavaScript. This involved a combination of tests such as ensuring that snapshots of components match what is expected, or that props are being passed to child components properly. A console output during frontend testing along with some test coverage is shown below.

![frontendtests][frontendtests]

For this project, 16 out of 24 components were tested with 100% coverage. This means that approximately 67% of the frontend React code was tested successfully.

## Improvements
---
* Currently our frontend landing page consists of a mock login form with a button which redirects the user to the ticket page. In the future we would like to implement full login functionality for increased security. Another further improvement would be to have separate, different login and use functionalities for trainees and trainers.
* Currently almost all of our deployment is automated using the deploy script, though the Jenkins jobs are still configured manually. A future improvement would be to configure Jenkins through a script to fully automate the process.
* If we were to do the project again, right from the start we would stick to simple and consistent naming conventions in the backend object class for simplicity, as well as to avoid problems such as syntax issues when injecting schema into to the MySQL database.
* In a future update of this project's infrastructure, we would like to utilize a Bastion Host and NAT Gateways which would allow the virtual machines provisioned by Terraform to be in a private subnet, meaning only people who explicitly are defined to have access to the infrastructure can access and alter it.
* Due to time constraints and growing focus on successful minimum viable product deployment, not all React components were tested in Jest to the desired standard. Currently the coverage of the front end tests is 67%. A future improvement would be to achieve at least 70% coverage as is the industry standard. 

## Acknowledgements
---
We would like to thank all our trainers at QA for their continued support and for passing on their knowledge and expertise without which completing this project would not have been possible.

## Authors 
---

- Alanzo Davis
- Basia Adamiec
- Abdul Shaker
- Alasdair Hanson
- Reece Elder
- Binx the Cat

![Photo from Alasdair](https://user-images.githubusercontent.com/71394754/102556380-aa4cf200-40c0-11eb-8672-3102f0f10571.jpg)

[backendtests]:https://i.imgur.com/ZuPZr5m.png
[backendcoverage]:https://i.imgur.com/4CI1HcH.png
[frontendtests]:https://i.imgur.com/fqxZ7HG.png
[pipeline]:https://i.imgur.com/h6rVfbI.png
[jenkins]:https://i.imgur.com/BJMtV2Z.png
[postmancreate]:https://i.imgur.com/ckY2s5N.png
[postmanget]:https://i.imgur.com/ZWrbAdB.png
[risk]:https://i.imgur.com/FcZxQmv.png
[retro]:https://i.imgur.com/DCQKpWl.png
