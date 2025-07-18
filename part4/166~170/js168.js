// node js에는 두 가지 종류의 이벤트가 있다.
// System Events - libuy 컴퓨터에서 시스템적으로 발생되는 이벤트
// 파일 읽기, 열기, 인터넷에서 데이터 받기 등
// Coustom Events 직접 구현하여 만들 수 있는 이벤트
const Emitter = require("events");
const eventConfig = require("./config").events;
const em = new Emitter();

em.on(eventConfig.GREET, () => {
    console.log("someone said heelo");
});

em.on(eventConfig.GREET, () => {
    console.log("A Greeting ");
});

em.emit(eventConfig.GREET);
