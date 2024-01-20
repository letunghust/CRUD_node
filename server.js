const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productModel')
const cors = require('cors')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const app = express()
require('dotenv').config()

const productRoute = require('./routes/productRoute')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors()); // sử dụng để có thể cho các trang web truy cập đến api của mình

//routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

app.get('/blog', (req, res) => {
    res.send('Hello Blog, My name is Devtamin')
})

//swagger UI


const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Library API",
			version: "1.0.0",
			description: "A simple Express Library API",
		},
		servers: [
			{
				url: "http://localhost:3000",
			},
		],
	},
	apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

mongoose.set("strictQuery", false)
mongoose.
connect('mongodb://localhost:27017/node-API')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, ()=> {
        console.log(`Node API app is running on http://localhost:3000`)
    });
}).catch((error) => {
    console.log(error)
})