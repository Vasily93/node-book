var http = require('http');

http.onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World');
    response.end();
}

http.createServer(onRequest).listen(8888);

function execute(someFunction, value) {
    someFunction(value);
}

execute(function(word) { console.log(word) }, 'Hello');
