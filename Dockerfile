FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM node:18
WORKDIR /app
COPY --from=build /app ./
CMD ["npm", "start"]
