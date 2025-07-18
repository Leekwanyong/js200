"use strict";
// fs 모듈을 쓸 떄 형제처럼 사용되는 것이 path이다.
// past 모듈은 파일/폴더 경로와 관련된 모듈이다. 경로에서 확장자 또는 파일명만 추출하는 등의 좀더 나은 편의성을 위해 path을 사용한다.
const fs = require("fs");
const path = require("path");

const makeFile = (path, callback) => {
    fs.writeFile(path, "New file, New Content", "utf-8", (err) => {
        if (err) return callback(err);

        console.log("파일 생성됨");
        callback(null);
    });
};

const appendFile = (path, callback) => {
    fs.appendFile(path, "\nUpdate File", (err) => {
        if (err) return callback(err);

        console.log("파일 내용을 추가합니다.");
        callback(null);
    });
};

const printErrIfExist = (err) => {
    if (err) console.log(err);
};

const filePath = path.join(__dirname, "js200", "hello.txt");

fs.open(filePath, "wx", (err, fd) => {
    if (err && err.code === "EEXIST") return appendFile(filePath, (err) => printErrIfExist(err));
    if (err) return callback(err);

    return makeFile(filePath, (err) => printErrIfExist(err));
});
