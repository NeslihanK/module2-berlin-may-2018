const http = require('http');

const server =
  http.createServer((request, response) => {
    // response.write('Hello, world!');
    // response.write('Berlin!');
    console.log("DEBUG request.url", request.url);
    if (request.url === "/city"){
        response.write("Hello Berlin!");
    } else {
        response.write("Hello, world!!");
    }
    response.end(); // sagt dem server dass das Befehl zu ende ist 
  });

server.listen(3000);