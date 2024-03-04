FROM node:slim

MAINTAINER Crescens <2e3crescens@mit.edu>

WORKDIR /app

COPY index.js /app/index.js
COPY package.json /app/package.json
RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["node", "index.js"]