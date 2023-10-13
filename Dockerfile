
# docker build -t docusaurus-starter .
# docker run -d -p 80:80 --name docusaurus-starter-app docusaurus-starter

ARG NODE_VERSION=18.17.0
ARG NGINX_VERSION=1.25.2
ARG APP_PORT=80
ARG IMAGE_NAME=promptmodel-docs

FROM node:${NODE_VERSION}-alpine as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN pnpm install

COPY . .

RUN pnpm build

# ---

FROM nginx:${NGINX_VERSION}-alpine

LABEL name=${IMAGE_NAME}

WORKDIR /usr/src/app

#COPY --from=builder /usr/src/app/nginx.conf /usr/share/nginx/
COPY --from=builder /usr/src/app/build /usr/share/nginx/html/

EXPOSE ${APP_PORT}

CMD ["nginx", "-g", "daemon off;"]
