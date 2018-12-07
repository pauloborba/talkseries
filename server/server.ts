import express = require('express');
import bodyParser = require("body-parser");

import {User} from '../talk-series/src/app/user';
import {CadastroDeUsuarios} from './cadastrodeusuario';
import {Show} from '../talk-series/src/app/show';
import {CadastroDeSeries} from './cadastrodeserie';

var app = express();

var usuarios: CadastroDeUsuarios = new CadastroDeUsuarios();
var usuarios: CadastroDeSeries = new CadastroDeSeries();

app.use(bodyParser.json());

app.get('/search ', function (req, res))

app.post('/server', function (req: express.Request, res: express.Response))

app.put('/server', function (req: express.Request, res: express.Response))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

export { app }
