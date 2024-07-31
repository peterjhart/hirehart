FROM node:20-slim AS base
WORKDIR /usr/local/app

COPY ./package.json ./package-lock.json ./

RUN --mount=type=cache,id=npm,target=/root/.npm npm ci --force

COPY ./public ./public
COPY ./src ./src
COPY index.html postcss.config.js tailwind.config.js tsconfig.json vite.config.ts ./

CMD ["npm", "run", "dev"]