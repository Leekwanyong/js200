// 이벤트에 대한 응답을 리스너라고 한다.
class Emitter {
    constructor() {
        this.events = {};
    }

    on(type, listener) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(listener);
    }

    emit(type) {
        if (this.events[type]) {
            this.events[type].forEach((listener) => {
                listener();
            });
        }
    }
}

module.exports = Emitter;
