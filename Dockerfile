FROM node:8-alpine

COPY . /workspace
WORKDIR /workspace
RUN yarn install

EXPOSE 3000

CMD yarn start
