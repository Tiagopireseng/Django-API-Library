FROM node:15.13-alpine
WORKDIR /react/react_library
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000