"use strict";
// 특정 폴더 내 모든 파일 삭제하기

const fs = require("fs");
const path = require("path");
const removePath = (p, callback) => {
    fs.stat(p, (err, stats) => {
        if (err) return callback(err);

        // unlink 해당 파일 삭제
        if (!stats.isDirectory()) {
            console.log("이 경로는 파일입니다.");
            return fs.unlink(p, (err) => (err ? callback(err) : callback(null, p)));
        }

        // rmdir 해당 폴더 삭제
        console.log("이 경로는 폴더입니다.");
        fs.rmdir(p, (err) => {
            if (err) return callback(err);

            return callback(null, p);
        });
    });
};

const printResult = (err, result) => {
    if (err) return console.log(err);
    console.log(`${result}를 정상적으로 삭제했습니다.`);
};

const p = path.join(__dirname, "js200");

try {
    const files = fs.readFileSync(p);
    if (files.length) {
        files.forEach((f) => removePath(path.join(p, f)), printResult);
    }
} catch (e) {
    if (err) return console.log(err);
}

removePath(p, printResult);
