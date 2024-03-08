"use strict";

const Hapi = require("@hapi/hapi");
const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: "localhost"
    });
    await server.start();
    console.log("Server running on %s", server.info.uri);

    server.route({
        method: "GET",
        path: "/",
        handler: (request, response) => {
            response("Hello World");
        }
    });

    server.route({
        method: "POST",
        path: "/account",
        handler: (request, response) => {
            response(request.payload);
        }
    });

}

init();


// const http = require("http");
// const url = require("url");
//
// const requestListener = (req, res) => {
//     const {query, pathname} = url.parse(req.url, true);
//     console.log(pathname, req.method, query);
//
//     res.writeHead(200);
//     res.end("Hello, World");
// }
//
// const server = http.createServer(requestListener);
// server.listen(3000);
// console.log("Web server up and running on port 3000");