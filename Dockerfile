FROM node:alpine AS development

WORKDIR /app

COPY package.json ./

RUN npm i

COPY . .

RUN npm run build

FROM node:alpine AS production

ARG NODE_ENV=alpine_production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package.json ./

RUN npm i --only=prod

COPY . .

COPY --from=development /app/dist ./dist

CMD ["node", "dist/main"]
