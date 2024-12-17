const { version } = await import('eslint-plugin-prettier');
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
openapi: '3.0.0',
info:{
  title: 'Documento de la API',
  version: '1.0.0',
  description: 'Documentacion de la API con swagger'
},

  servers:[

  {
    url: 'http://localhost:3000',
    description: 'Servidor de Desarrollo'
  }
]

}

const options = {
  swaggerDefinition,
  apis: ['./route/*.js']
}

const swaggerSpec = swaggerJSDoc(options)
 function setupSwagger(app){
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
 }

 export {setupSwagger}

