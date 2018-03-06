FROM node:7.2-alpine

MAINTAINER Thauan Zatta <thauanz@gmail.com>

COPY . /app

WORKDIR /app

RUN apk update && apk upgrade && apk add --no-cache bash git

RUN npm install

EXPOSE 3000

CMD npm start
