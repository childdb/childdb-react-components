FROM node:8

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
RUN npm install

COPY examples ./examples
COPY src ./src
COPY webpack.config.js .
COPY .babelrc .

EXPOSE 3001

CMD ["npm", "start"]

