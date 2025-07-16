// 136번
// 일정 시간 후에 코드 실행하기 setTimeout
const timer = {
    run: function () {
        if (this.t) console.log("이미 실행된 타이머가 있습니다.");

        this.t = setTimeout(function () {
            console.log("1초 뒤 실행");
        }, 1000);
    },
    cancel: function () {
        if (this.t) clearTimeout(this.t);
        this.t = undefined;
    },
};

timer.run(); // 1초 뒤 실행
timer.cancel();
timer.run();

setTimeout(() => {
    console.log("JavaScript");
}, 0);
// 200제
// JavaScript
console.log("200제");

// 137번
// 일정 시간마다 코드 실행하기 setInterval
let count = 0;

const timer2 = setInterval(() => {
    console.log(`${count++}`);
}, 1000);

console.log(timer2); // 0 ~ 쭉

// 138번
// Promise 객체로써 언제가 완료될 일을 나태낸다. 완료되면 하나의 값을 결과로 반환한다
// 실패하여 정상적인 값 대신 실패 이유를 반환할 수도 있다.
// pending 아직 경과가 없는 상태  fulfilled 비동기 성공 rejected 실패
// then 약속이 이행되었을 떄 호출할 함수
// catch 약속이 거부됐을 떄 호출할 함수

function promiseForHomework(mustDo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("doing homework");
            if (mustDo) {
                resolve({
                    result: "homework-result",
                });
            } else {
                reject(new Error("Too lazy!"));
            }
        }, 3000);
    });
}

const promiseA = promiseForHomework(true);
console.log("promiseA created");

const promiseB = promiseForHomework(false);
console.log("promiseB created");

promiseA.then((v) => console.log(v));
promiseB.then((v) => console.log(v)).catch((e) => console.error(e));

// 139번
// promise 조합하기
function doJob(name, person) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (person.stamina > 50) {
                resolve({
                    result: `${name} success`,
                    loss: 30,
                });
            } else {
                reject(new Error(`${name} failed`));
            }
        }, 1000);
    });
}

const harin = { stamina: 100 };

doJob("work", harin)
    .then((v) => {
        console.log(v.result);
        harin.stamina -= v.loss;
        return doJob("study", harin);
    })
    .then((v) => {
        console.log(v.result);
        harin.stamina -= v.loss;
        return doJob("work", harin);
    })
    .then((v) => {
        console.log(v.result);
        harin.stamina -= v.loss;
        return doJob("study", harin);
    })
    .catch((e) => console.error(e));

// 140번
// Async 이해하기
// 처음 async 함수가 호출되어 await 키워드가 있는 비동기 작업(promise 객체)가 실행
// 해당 비동기 함수는 이벤트 루프를 통해 비동기로 작업을 처리 그동안 async 함수는 이러한 비동기 작업이 완료될 떄까지 일시 중지 상태로 비동기 작업의 해결을 기다림
// 완료되면 함수가 다시 실행되고  함수 결과를 반환한다.
function doJob2(name, person) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (person.stamina > 50) {
                person.stamina -= 30;
                resolve({
                    result: `${name} success`,
                });
            } else {
                reject(new Error(`${name} failed`));
            }
        }, 1000);
    });
}

const execute = async function () {
    try {
        let v = await doJob2("work", harin);
        console.log(v.result);
        v = await doJob2("study", harin);
        console.log(v.result);
        v = await doJob2("work", harin);
        console.log(v.result);
        v = await doJob2("study", harin);
    } catch (e) {
        console.log(e);
    }
};

execute();
