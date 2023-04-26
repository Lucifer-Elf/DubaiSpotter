import 'express-async-errors'
import express from 'express'
const app = express()
import dotenv from "dotenv"
dotenv.config()


//db
import connectDB from './db/connect.js'

//routers
import authRouter from './routes/authRoutes.js'
import propertyRouter from './routes/propertyRoutes.js'

//middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorhandlerMiddleware from './middleware/error-handler.js'

app.use(express.json())

app.get("/",(req,res)=>{
    res.send('Welcome!!')
})

app.use('/api/v1/auth',authRouter)
app.use('/api/v1/property',propertyRouter)

app.use(notFoundMiddleware)
app.use(errorhandlerMiddleware)

const port = process.env.PORT||7000


const start = async()=>{
    try {
        await connectDB(process.env.MONOGO_URL)
        app.listen(port,()=>{
            console.log(`server is listening on port ${port}...`)
        })
        
    } catch (error) {
        console.log(error)        
    }
}
start()