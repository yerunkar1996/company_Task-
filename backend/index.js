
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 5500

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(port,()=>{
    console.log("server is running on port",port);
})

// Product Model
const productRoutes = require('./src/routes/productRoute');
app.use('/product', productRoutes);