var http = require('http')

http.createServer((req, res) => {
    res.end('Hello World!')
}).listen(8080)

console.log('Servidor inciado!')