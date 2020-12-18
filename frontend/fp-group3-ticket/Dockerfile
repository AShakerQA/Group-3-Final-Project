#Use imagename Image
FROM node:latest

#Make directory and store it image name "app"

WORKDIR /app

# Copy contents into image; make sure dockerfile is in same dir as package.json

COPY . /app

RUN npm install

RUN npm run build

#install server

RUN npm install -g serve

# Expose correct port
EXPOSE 5000

# Create an entrypoint
ENTRYPOINT ["serve", "-s","build"]