const express = require("express");
var cors = require("cors");

const contactRouter = require("./routes/contacts");
// const postRouter = require('./routers/postRoutes');
// const catRouter = require('./routers/categoryRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use("/contacts", contactRouter);
// app.use('/posts', postRouter);
// app.use('/categories', catRouter);

module.exports = app;
