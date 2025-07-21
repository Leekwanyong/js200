"use strict";
// 파일 읽기

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "js200", "hello.txt");

// r을 사용하면 특정 파일을 읽는 것이 가능한지 확인
fs.open(filePath, "r", (err, fd) => {
    if (err && err.code === "ENOENT") return console.log(" 읽을 수 없는 파일입니다.");
    if (err) return console.log(err);

    console.log("파일을 정상적으로 읽을 수 있습니다.");

    // 실제로 파일을 읽어온다
    // 첫 번쨰는 파일 경로, 두 번쨰는 인코딩 정보
    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) return console.log(err);

        console.log(data);
    });

    try {
        // 노드에서는 sync가 붙으면 동기 안 붙으면 비동기
        // 동기여서 에러를 처리해주기 위해서 try - catch 사용
        const data = fs.readFileSync(filePath, "utf-8");
        console.log(data);
    } catch (e) {
        console.log(e);
    }
});
