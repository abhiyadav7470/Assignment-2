const express = require('express');
const productRouter = require('./routers/productRouter');
const bodyParser = require('body-parser');

const app = express();

app.listen(2298, ()=>{
    console.log("server is listening on port no 2298");
});


app.use(bodyParser.json());

app.use('/api/product', productRouter);

app.use('/', (req, res)=>{
    res.send("welcome");
});
