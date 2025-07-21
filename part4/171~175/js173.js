"use strict";
// 파일 삭제하기

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "js200", "hello.txt");

// access 경로에 대한 접근 가능 여부 확인, 두 번쨰 인자는 접근과 관련된 mode 정보
// constants 파일 시스템과 관련된 상수들을 그룹으로 모아놓은 상수 , 그 안에서 F_OK는 파일 존재 여부를 확인할 수 있다.
fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) return console.log("삭제할 수 없는 파일입니다.");

    fs.unlink(filePath, (err) => (err ? console.log(err) : console.log(`${filePath}를 정상적으로 삭제했습니다.`)));
});
