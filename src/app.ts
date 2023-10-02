import express from "express";
import bodyParser from 'body-parser';
// import orgRouter from "./routes/orgRouter";
import ApplicationError from "./utils/errors/application-error";
import { GlobalExceptionHandler } from "./middleware/global-exception-handler";
import * as swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from './routes';

const app = express();

app.use('/docs', express.static(__dirname + '/swagger-ui'));
app.use('/swagger.json', (req, res) => {
    res.sendFile(__dirname + '/swagger.json');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log('Hello from the middleware 👋');
    next();
});

// app.use('/api/v1/org', orgRouter);

RegisterRoutes(app);

try {
    const swaggerDocument = require('../swagger.json');
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
} catch (err) {
    console.log('Unable to load swagger.json', err);
}

app.all('*', (req, res, next) => {
    next(new ApplicationError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(GlobalExceptionHandler.exceptionHandle);

export default app
