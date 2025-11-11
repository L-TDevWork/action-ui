FROM node:22.14.0 as build

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

# use the official nginx image as the base image

FROM nginx:1-alpine-slim as final

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html 

# configure non root user & change ownership

RUN touch /var/run/nginx.pid
RUN chown -R nginx:nginx /var/run/nginx.pid /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d 

USER nginx

EXPOSE 3510

CMD [ "nginx", "-g", "daemon off;" ]