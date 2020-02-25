const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var corsOptions = {
    origin: "http://localhost:8080                                "
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000
app.use((req, res, next) => {
    next()
})


//get method
app.get('/', (req, res) => {

    res.send({
        message: 'hello'
    })

})



app.listen(PORT)