<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Ejecutar en desarrollo

1. clone el repositorio
2. ejecute `npm install`
3. tener instalado nest cli

```
npm i -g @nestjs/cli
```

4. levantar la base de datos con docker

```
docker-compose up -d
```

5. modificar el archivo .env.example y renombrarlo a .env. Este archivo contiene las variables de entorno necesarias para la aplicación, completar con los valores correspondientes.

6. ejecute `npm run start:dev`

7. reconstruir la base de datos con los datos de prueba

```
GET localhost:3000/api/v2/seed
```

## Stack usado

- NestJS
- MongoDB

## Producción

1. crear el archivo .env.prod con las variables de entorno correspondientes

2. llenar las variables de entorno en el archivo .env.prod

3. construir la imagen de docker

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build

```

4. levantar la imagen de docker

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d
```
