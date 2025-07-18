// node.js 는 chrome v8 js 엔진으로 빌드된 js 런타임
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World\n");
});

server.listen(port, hostname, () => {
    console.log(`server http://${hostname}:${port}/`);
});

// node 파일 실행하기 파일이름
// node node162.js

function moduleTest(x, y) {
    return x + y;
}

// 모듈 내보내기
module.exports = moduleTest;

// node.js 내장 모듈 사용하기
const utill = require("util");

const name = "Tony";
const greeting = utill.format("Hello %s", name);
console.log(greeting); // Hello Tony
