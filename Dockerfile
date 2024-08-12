FROM node:20-slim AS base
WORKDIR /usr/local/app

COPY ./package.json ./package-lock.json ./

RUN --mount=type=cache,id=npm,target=/root/.npm npm ci --force

COPY . ./

RUN npm run test:once

CMD ["npm", "run", "dev"]