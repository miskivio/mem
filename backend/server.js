import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import colors from 'colors'


const app = express()

app.use(bodyParser.json({limit: "30mb", extended: "true"}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: "true"}))
app.use(cors())

const CONNECTION_URL = 'mongodb+srv://user123:user123@appdb.bx5ut.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('mongodb has been connected'.cyan))
.then(()=>app.listen(PORT, () => console.log(`Server has been started on ${PORT}!`.yellow)))
.catch((error)=> console.log(error.message))