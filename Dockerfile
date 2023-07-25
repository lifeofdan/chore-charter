FROM node:lts

RUN npm -g install npm@latest
RUN npm install -g corepack
RUN corepack enable 
USER node
WORKDIR /app
COPY --chown=node:node . /app

RUN rm -rf /app/node_modules
RUN pnpm install
RUN pnpm run build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["node", ".output/server/index.mjs"]

