FROM node:16.17.1
WORKDIR /usr/src/app
COPY package*.json ./
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]  