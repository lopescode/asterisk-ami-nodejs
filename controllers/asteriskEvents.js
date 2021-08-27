const asteriskManager = require('asterisk-manager');
const { port, host, username, password } = require('../config/security/connection')
const ami = asteriskManager(port, host, username, password);
const monitorarRamais = require("../helpers/asteriskEvents")

//Monitorando Evento: Status do peer
ami.on("peerstatus", async (evt) => {
    //console.log(JSON.stringify(evt));
    monitorarRamais(evt)
})