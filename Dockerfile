FROM node:18.1.0-alpine3.14

WORKDIR /app

COPY package.json .

RUN npm install

EXPOSE 3333

COPY . .

CMD ["npm", "start"]