FROM node:20.10.0

WORKDIR /app

COPY package.json .

COPY . .

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]

