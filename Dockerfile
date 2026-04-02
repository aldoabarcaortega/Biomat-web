# Etapa 1: Construcción
FROM node:25-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Servidor de producción
FROM nginx:1.28.3-alpine
# IMPORTANTE: 
# Si usas Vite, la carpeta es /app/dist
# Si usas Create React App, la carpeta es /app/build
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]