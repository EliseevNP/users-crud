FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY docker-entrypoint.sh ./
RUN chmod +x ./docker-entrypoint.sh

COPY .sequelizerc ./
COPY tsconfig.json ./
COPY ./src ./src

RUN npm run build

ENTRYPOINT ["./docker-entrypoint.sh", "start"]
