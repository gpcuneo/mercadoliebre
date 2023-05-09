const express = require('express');
const path = require('path')

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`) );


const index = (req, res) => res.send('Bienvenidooooo');

const home = (req, res) => res.sendFile(path.resolve(__dirname, './views/home.html'));
const register = (req, res) => res.sendFile(path.resolve(__dirname, './views/register.html'));

app.get('/', index)

app.get('/home', home);
app.get('/register', register);

