FROM node:18-alpine 

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .


EXPOSE 8250

CMD ["npm", "start"]
