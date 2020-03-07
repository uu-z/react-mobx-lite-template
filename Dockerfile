FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM socialengine/nginx-spa:latest as production-stage
COPY --from=build-stage /app/build /app
RUN chmod -R 777 /app