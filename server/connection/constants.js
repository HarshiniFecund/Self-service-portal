
const localhost = '//localhost:27017/';
const databaseName = 'SelfServicePortal';
const databaseURL = localhost.concat("",databaseName)

const server_PORT = 4000;
const client_PORT = "http://localhost:3000"

module.exports.databaseURL = databaseURL;
module.exports.localhost = localhost;
module.exports.databaseName = databaseName;
module.exports.server_PORT = server_PORT;
module.exports.client_PORT = client_PORT;
