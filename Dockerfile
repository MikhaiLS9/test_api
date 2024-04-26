# Базовый образ с Node.js и npm
FROM node:alpine

WORKDIR /RitualCompass/frontend

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD npm start