const customExpress = require('./config/customExpress');
const app = customExpress()
const asteriskManager = require('asterisk-manager');
const { port, host, username, password } = require('./secure_data/connection')
const ami = asteriskManager(port, host, username, password);

//Ouvindo a porta 5000
app.listen(5000, () => console.log("Servidor rodando na porta 5000"))

//Puxando os logs de eventos do asterisk
ami.on("managerevent", async (evt) => {
    console.log(JSON.stringify(evt));
})