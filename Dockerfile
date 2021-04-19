FROM node:14 as builder
WORKDIR /app
RUN yarn global add nx
COPY package.json yarn.lock /app/
RUN yarn install
COPY . /app


FROM builder as api
COPY docker/api/docker-entrypoint.sh /usr/local/bin/docker-entrypoint
COPY docker/api/ormconfig.json /app/ormconfig.json

EXPOSE 3333

ENTRYPOINT ["docker-entrypoint"]
CMD ["nx","serve", "api"]


FROM builder as web

EXPOSE 4200
CMD [ "nx", "serve", "web" ]


FROM builder as admin

EXPOSE 4200
CMD [ "nx", "serve", "admin" ]
