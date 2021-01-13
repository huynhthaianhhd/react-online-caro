FROM node:14-stretch-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

RUN npm install

CMD ["npm", "start"]
