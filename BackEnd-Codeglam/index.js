const express = require('express');
const cors = require('cors');

const routerRegister = require('./routes/routeRegister');
const routerLogin = require('./routes/routeLogin');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', routerRegister);
app.use('/', routerLogin);

app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM - http://localhost:3000');
});