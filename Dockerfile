# ==
# builder
# ==

# application builder
FROM node:16 AS builder

WORKDIR /usr/app

ARG API_URL

# Install pnpm
RUN npm install -g pnpm

# copy package.json and package-lock.json files
COPY package.json .
COPY pnpm-lock.yaml .
COPY .npmrc .

# install dependencies including local development tools
RUN pnpm install --store=pnpm-store

# copy the rest of the content
COPY src /usr/app/src
COPY typings /usr/app/typings
COPY nuxt-template-overrides /usr/app/nuxt-template-overrides
COPY tsconfig.json /usr/app/tsconfig.json
COPY nuxt.config.ts /usr/app/nuxt.config.ts
COPY tailwind.config.js /usr/app/tailwind.config.js
COPY tailwind.safelist.txt /usr/app/tailwind.safelist.txt

# disable telemetry when building the app
ENV NUXT_TELEMETRY_DISABLED=1

# build the application and generate a distribution package
RUN pnpm build

# ==
# development
# ==
# application for development purposes
FROM node:16 AS dev

WORKDIR /usr/app

# Install pnpm
RUN npm install -g pnpm

ENV NODE_ENV=development
ENV CYPRESS_INSTALL_BINARY=0

# copy files from local machine
copy . /usr/app

COPY --from=builder /usr/app/pnpm-store /usr/app/pnpm-store

# disable telemetry when building the app
ENV NUXT_TELEMETRY_DISABLED=1

# install dependencies (development dependencies included)
RUN pnpm install --store=pnpm-store

# expose port 8443
EXPOSE 8443

# run the application in development mode
ENTRYPOINT [ "pnpm", "run", "dev" ]

# ==
# nuxt
# ==
# nuxt as an isolated runtime dependency
FROM node:16-alpine AS nuxt

WORKDIR /usr/app

COPY package.json /usr/app/package.json

RUN npm install nuxt@$(node -pe "require('./package.json').dependencies.nuxt")


# ==
# production
# ==
# application package (for production)
FROM node:16-alpine AS app

WORKDIR /usr/app

ENV NODE_ENV=production
ENV PLAYWRIGHT_SKIP_BROWSER_GC=1

COPY package.json /usr/app/package.json
COPY nuxt.config.ts /usr/app/nuxt.config.ts
COPY --from=builder /usr/app/.nuxt/dist /usr/app/.nuxt/dist
COPY --from=nuxt /usr/app/node_modules /usr/app/node_modules

COPY src /usr/app/src

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0

# set application port
ENV PORT=8443

# expose port 8443 by default
EXPOSE 8443

RUN npm install -g pm2

COPY ecosystem.config.js /usr/app/ecosystem.config.js

CMD ["pm2-runtime", "start", "ecosystem.config.js"]
