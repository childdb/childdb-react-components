FROM node:8

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
RUN npm install

EXPOSE 3001

CMD ["npm", "start"]

