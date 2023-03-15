const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const db = require('./server/database/client');
const userRouter = require('./server/router/user');
const planRouter = require('./server/router/plan');
const destRouter = require('./server/router/destiantion');

dotenv.config({ path:"config.env"})
const app = express();

const connection = async(req, res)=>{
    try {
        await db.authenticate()
        await db.sync()
        console.log('Database Connected')
    } catch (error) {
        console.log(error)
    }
}
connection()


app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors({credentials:true, origin:'http://localhost:3000'}))
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(express.json());

app.use('/api/mapping', userRouter);
app.use('/api/category', planRouter);
app.use('/api/users', destRouter);

app.listen(3100, ()=>{
    console.log('Server is running')
})
