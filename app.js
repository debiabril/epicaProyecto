import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import helmet from 'helmet'



const app = express();

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(helmet({
    contentSecurityPolicy: false
}))

const port = 3000

app.listen(port, () => {
    console.log('servidor listo')
})