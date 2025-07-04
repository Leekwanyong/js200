// 55번
// 모듈은 파일이나 코드의 묶음 단위로 애플리케이션 하나의 구성요소로 볼 수 있다.
// ES6 이전에는 별도로 제공하지 않아서 네임스페이스 패턴을 사용했다.
// 즉시실행 함수로 만들어야 다른 라이브러리 등과 충돌이 없다.
var namespaceA = (function () {
    var privateVariable = '비공개 변수';

    return {
        publicApi: function () {
            console.log(privateVariable + '를 접근할 수 있습니다.');
            return privateVariable = null; // 이렇게 하면 클로저를 해체하고 메모리 누수를 줄일 수 있다.
        }
    }
})();

namespaceA.publicApi(); // 비공개 변수에 접근 못해