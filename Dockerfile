FROM node:14.21.3-slim

MAINTAINER Crescens <2e3crescens@mgmail.com>

WORKDIR /app

COPY package.json /app/package.json
COPY index.js /app/index.js
COPY dal.js /app/dal.js
RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["nvm", "use", "14.21.3"]
