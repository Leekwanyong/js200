// 가져오기
import {hello} from './js56~60';
// default 가져오기
import Hello from './js56~60';
// 여러개 가져오기 as 키워드로 사용해 다름이름 정의하여 가져와서 사용할 수 있다.
import {version as moduleVersion, personA, Person} from './js56~60';
// * 전체를 가져오기
import * as add from './js56~60';

hello('es6 hello');

const koreanHi = new Hello('Hi');
koreanHi.hi('default');
console.log(moduleVersion);
console.log(personA.name);
const person = new Person('korean');
console.log(person.name);
console.log(add.version2);
const added = add.default(1,2);
console.log(added);

hello('das');