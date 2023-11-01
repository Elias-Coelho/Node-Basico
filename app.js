// console.log('Hello World');

// var a = 2;
// var b = 2;
// var c = a+b;
// console.log('c->',c);

var http    = require('http');
var handle  = require('./handle');
var name    = require('./name');
var events  = require('events');
var emiter  = new events.EventEmitter();

emiter.on('say', say);

function say() {
    console.log('Im saying...'); 
}
say();

// function handle (request, response){
//     response.writeHead(200, {
//         'Content-Type': ('text/html')
//     });
//     response.write('<!DOCTYPE "html">');
//     response.write('<html>');
//     response.write('<head><title>Http Module</title></head>');
//     response.write('<body>');
//     response.write('<h1> Hello from http module SON</h1>');
//     response.write('</body>');
//     response.write('</html>');

//     response.end('Hello from http module');
// }
var server = http.createServer(handle.fn);
var port = 3000;
server
server.listen(port, function(){
    console.log('Server is listening at port ', port)
});