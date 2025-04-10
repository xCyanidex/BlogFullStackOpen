const express=require('express');
const BlogsRoutes=require('./routes/blog');
const middleware=require('./utils/middleware');
const connectToDatabase = require('./db');

const app = express();

connectToDatabase()

app.use(express.json());

app.use('/api/blogs', BlogsRoutes)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler);


module.exports =app;

