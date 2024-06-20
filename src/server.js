import express from "express";
import morgan from 'morgan';
//import handlebars from 'express-handlebars';
//import { Server } from "socket.io";
//import viewsRouter from './routes/views.routes.js'
import ProductsManager from "./managers/products.manager.js";
import cartRouter from "./routes/carts.router.js";
import productRouter from "./routes/product.router.js";
import userRouter from './routes/users.router.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { initMongoDB } from './db/database.js';

// import { __dirname } from "./src/path.js";

// const productManager = new ProductsManager(`${__dirname}/db/products.json`)

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

app.use('/users', userRouter);
app.use('/carts', cartRouter);
app.use('/products', productRouter);

app.use(errorHandler);

initMongoDB();

const PORT = 8080;

app.listen(PORT, () =>
    console.log(`Server ok on port ${PORT}`)
);