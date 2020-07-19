FROM node:alpine
WORKDIR "/app"
COPY ./package.json ./
RUN apk --no-cache --virtual build-dependencies add python
RUN npm install --global node-gyp
RUN npm install 
COPY . .
CMD ["npm", "run", "start"]