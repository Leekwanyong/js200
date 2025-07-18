"use strict";
// 폴더 생성하기
// node.js fs 모듈은 파일 입출력과 관련된 파일 시스템 모듈로 서버의 정적 파일을 다루는데 가장 많이 사용되는 모듈
// 파일 또는 폴더를 생성/삭제 하고 파일 정보와 데이터를 가져오는 방법

const fs = require("fs");

const checkDir = (path, callback) => {
    fs.stat(path, (err, stats) => {
        if (err && err.code === "ENOENT") return callback(null, true);
        if (err) return callback(err);

        return callback(null, !stats.isDirectory());
    });
};

const currentPath = __dirname;
let path = `${currentPath}/js200`;

checkDir(path, (err, isTrue) => {
    if (err) return console.log(err);

    if (!isTrue) {
        console.log("이미 동일한 디렉토리가 있습니다. 디렉터리명을 변경합니다");
        path = `${currentPath}/js200-new`;
    }

    fs.mkdir(path, (err) => {
        if (err) console.log(err);

        console.log(`${path} 경로로 디렉터리를 생성했습니다.`);
    });
});
