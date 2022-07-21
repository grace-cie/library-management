import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import authRoute from './routes/auth.js'

const app = express()
dotenv.config()


//middlewares
app.use(express.json())



//connect to mongoDB
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('connected to MONGO DB');
    } catch (err) {
        console.log(err);
    }
}


//routers
app.use('/server/auth', authRoute)





mongoose.connection.on('error', (err) => {
    console.log(err);
})



const port = process.env.PORT
app.listen(port, ()=> {
    connect()
    console.log('connected to express');

})

