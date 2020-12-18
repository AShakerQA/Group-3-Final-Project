# stage 1
#install latest maven as setup stage
FROM maven:latest AS setup
#set new directory as /setup where everything will happen
WORKDIR /setup
#copy file from working directory ls to directory /setup
COPY . /setup

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
