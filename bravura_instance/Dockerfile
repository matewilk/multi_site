FROM node:boron

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
RUN npm install
# Bundle app source
COPY . .

EXPOSE 5858
EXPOSE 4000
CMD [ "npm", "run", "debug" ]
