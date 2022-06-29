FROM node:14-alpine

WORKDIR /app

COPY package.json ./

RUN apk add g++ gcc make  python2

RUN yarn 

RUN yarn upgrade

COPY / ./

RUN yarn build

RUN yarn global add serve

EXPOSE 3000

CMD  serve -s build