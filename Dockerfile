FROM node:8.5

# App Directory
WORKDIR /usr/src/app

# App package.json
COPY package*.json ./
RUN npm install

# App src
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]
