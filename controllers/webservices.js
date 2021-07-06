const asteriskManager = require('asterisk-manager');
const { port, host, username, password } = require('../secure_data/connection')
const ami = asteriskManager(port, host, username, password);

module.exports = app => {
    app.post('/services/call', (req, res) => {
        const peer = req.body.peer;
        const number = req.body.number;
        ami.action({
            'action': 'originate',
            'channel': `SIP/${peer}`,
            'context': 'krolik',
            'callerid': `<${peer}> Leonardo`,
            'exten': number,
            'priority': 1
        }, (err, res) => {
            console.log(err + res);
        })
    })
}
