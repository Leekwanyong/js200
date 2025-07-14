// 111번
// 특정 자리수에서 올림 ceil
const positiveNum = 93.54;
const negativeNum = -39.27;

console.log(Math.ceil(positiveNum)); // 93
console.log(Math.ceil(negativeNum)); // -39
console.log(Math.ceil(positiveNum * 10) / 10); // 93.6
console.log(Math.ceil(positiveNum / 10) * 10); // 100
console.log(Math.ceil(negativeNum * 10) / 10); // -39.2
console.log(Math.ceil(negativeNum / 10) * 10); // -30

// 112번
// 특정 자리수에서 내림 floor
console.log(Math.floor(positiveNum)); // 93
console.log(Math.floor(negativeNum)); // -40
console.log(Math.floor(positiveNum * 10) / 10); // 93.5
console.log(Math.floor(positiveNum / 10) * 10); // 90
console.log(Math.floor(negativeNum * 10) / 10); // -39.3
console.log(Math.floor(negativeNum / 10) * 10); // - 40

// 113번
// 현재 시간을 원하는 포맷으로 출력하기
Date.prototype.yyyymmdd = function () {
    const yyyy = this.getFullYear();
    const mm = this.getMonth() < 9 ? `0${this.getMonth() + 1}` : this.getMonth() + 1;
    const dd = this.getDate() < 10 ? `0${this.getDate()}` : this.getDate();
    return "" + yyyy + mm + dd;
};

const date = new Date();
console.log(date.yyyymmdd); //20250714

// 114번
// UTC 기준 날짜 출력하기 세계 표준 현재 시간
const dateUTC = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCMilliseconds()
);

console.log(dateUTC); // 2025-07-14T10:40:28.000Z

// 115번
// 두 개의 날짜 사이의 경과 시간 계산하기
Date.daysDiff = (date1, date2) => {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) return;

    const d1 = date1.getTime();
    const d2 = date2.getTime();

    let diff = d2 - d1;

    const seconds = Math.floor((diff = diff / 1000) % 60);
    const minutes = Math.floor((diff = diff / 60) % 60);
    const hours = Math.floor((diff = diff / 60) % 24);
    const days = Math.floor(diff / 24);

    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
};

var from = new Date(2000, 0, 1);
var to = new Date(
    from.getFullYear() + 1,
    from.getMonth() + 3,
    from.getDate() + 5,
    from.getHours() + 4,
    from.getMinutes() + 30,
    from.getSeconds() + 50
);

console.log(`From > ${from}`);
console.log(`To > ${to}`);
console.log(Date.daysDiff(from, to));
