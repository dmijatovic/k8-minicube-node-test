FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# COPY all files incl package.json 
COPY . .

# install dependencies
RUN npm install

# export 8080
EXPOSE 8080

# start node app
CMD [ "npm","start" ]