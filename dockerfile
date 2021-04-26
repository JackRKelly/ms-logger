FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN yarn

RUN yarn build

EXPOSE 8888

CMD [ "node", "dist/index.js" ]
