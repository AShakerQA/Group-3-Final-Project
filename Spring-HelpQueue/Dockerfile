# stage 1
#install latest maven as setup stage
FROM maven:latest AS setup
#set new directory as /setup where everything will happen
WORKDIR /setup
#copy file from working directory ls to directory /setup
COPY . /setup

ARG testdb_username

ARG testdb_endpoint

ARG db_endpoint

ARG db_username

ARG password

ENV password=$password

ENV testdb_username=$testdb_username

ENV testdb_endpoint=$testdb_endpoint

ENV db_endpoint=$db_endpoint

ENV db_username=$db_username

RUN mvn clean package

#stage 2
#install java SE as run stage
FROM openjdk:11 AS RUN
#create a new directory /run
WORKDIR /run
#from the setup sttage where file is created, use directory /run
COPY --from=setup /setup/target/Spring-HelpQueue-0.0.1-SNAPSHOT.war /run

EXPOSE 8081
#execute war file
ENTRYPOINT ["java", "-jar", "Spring-HelpQueue-0.0.1-SNAPSHOT.war"]
