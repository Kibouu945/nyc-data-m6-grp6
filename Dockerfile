
FROM node:18 AS build


WORKDIR /app


COPY package.json package-lock.json ./
RUN npm install


COPY . .
RUN npm run dev

