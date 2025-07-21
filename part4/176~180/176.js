"use strict";

const http = require("http");
// 문자열 또는 객체형 값을 유용하게 다룰 수 있도록 도와주는 유틸리티 모듈
// 문자열 url도 파싱하여 원하는 구조 형태나 부분을 쉽게 가져올 수 있다.
const url = require("url");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    switch (req.method) {
        case "GET":
            if (req.url === "/") {
                res.setHeader("Content-Type", "text/plain");
                res.writeHead(200);
                res.end("Hello! Node.js");
            } else if (req.url.substring(0, 5) === "/data") {
                const queryParams = url.parse(req.url, true).query;

                res.setHeader("Content-Type", "text/html");
                res.writeHead(200);
                res.end("<html><head><title>js200</title></head></html>");

                for (let key in queryParams) {
                    res.write(`<h1>${key}</h1>`);
                    res.write(`<h2>${queryParams[key]}</h2>`);
                }

                res.end;
            }
            break;
        default:
            res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}`);
});
