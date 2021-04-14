FROM node:14 as builder
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install
COPY . /app
RUN yarn nx run api:build --prod
RUN yarn nx run web:build --prod
RUN rm -rf node_modules


FROM node:14 as production
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install --prod
COPY tsconfig.base.json /app/

FROM production as api
COPY docker/api/docker-entrypoint.sh /usr/local/bin/docker-entrypoint
COPY docker/api/ormconfig.json /app/ormconfig.json
COPY apps/api/ /app/apps/api/
COPY --from=builder /app/dist/apps/api/  /app/dist/apps/api/

EXPOSE 3333

ENTRYPOINT ["docker-entrypoint"]
CMD ["node","dist/apps/api/main.js"]


FROM production as web
COPY --from=builder /app/dist/apps/web/ /app/dist/apps/web/

EXPOSE 4200
CMD [ "node", "node_modules/.bin/next", "/app/dist/apps/web/" ]


FROM nginx:latest as admin
COPY --from=builder /app/dist/apps/admin/ /usr/share/nginx/html/
