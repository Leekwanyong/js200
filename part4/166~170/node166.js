"use strict";
// 예외 처리
const cbFunc = (err, result) => {
    if (err && err instanceof Error) return console.error(err.message);
    if (err) return console.error(err);

    console.log("에러를 반환하지 않습니다.", result);
};

const asyuncFunction = (isTrue, callback) => {
    const err = new Error("This is Error!");

    if (isTrue) return callback(null, isTrue);
    else return callback(err);
};

asyuncFunction(true, cbFunc); // 에러반환 X
asyuncFunction(false, cbFunc); // This is Error!

const fs = require("fs");

try {
    const fileList = fs.readdirSync("/undefined/");
    fileList.forEach((f) => console.log(f));
} catch (e) {
    if (e) console.error(e);
}
// 167
const Emitter = require("./emitter");
const em = new Emitter();

em.on("greet", () => {
    console.log("Hello First");
});

em.on("greet", () => {
    console.log("Hello Second");
});

em.emit("greet");

// 168
module.exports = {
    events: {
        GREET: "greet",
    },
};
