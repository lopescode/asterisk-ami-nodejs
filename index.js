const customExpress = require('./config/customExpress');

//Instanciando o APP
const app = customExpress()
const path = require('path')

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/views/src/index.html'));
})

//Adicionando as rotas
app.listen(80, () => console.log("Servidor rodando na porta 80"))