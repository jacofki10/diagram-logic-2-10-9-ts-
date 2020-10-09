import { result } from './answers';
import '../css/style.scss';

console.log(sessionStorage.getItem('dig'), sessionStorage.getItem('digDetail'));
const dig = Number(sessionStorage.getItem('dig')) - 1;

document.getElementById('group9').innerHTML = result[dig].typeName;
document.getElementById('catchCopy').innerHTML = result[dig].catchCopy;
document.getElementById('kihonseikaku').innerHTML = result[dig].kihonseikaku;
