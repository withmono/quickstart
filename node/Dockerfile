FROM node:alpine

WORKDIR /opt/app
RUN chown -R node:node /opt/app
COPY --chown=node:node ./node/package*.json /opt/app/

USER node
RUN npm install

# add backend app
COPY --chown=node:node ./node ./

EXPOSE 8080
ENTRYPOINT ["node"]
CMD ["index.js"]
