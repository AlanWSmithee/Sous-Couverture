FROM node:20-slim AS base
COPY . .
RUN npm i -g pnpm
RUN pnpm install --frozen-lockfile
WORKDIR /apps/undercover-back
CMD [ "node", "index.js"]