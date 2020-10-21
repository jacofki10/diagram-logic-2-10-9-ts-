import 'url-search-params-polyfill';
import './SocialMedia';
import { result } from './answers';
import '../css/style.scss';

console.log(sessionStorage.getItem('dig'), sessionStorage.getItem('digDetail'));
// Param check//
let dig;
const urlParams = new URLSearchParams(window.location.search);
dig =
    sessionStorage.getItem('dig') !== null
        ? dig = Number(sessionStorage.getItem('dig')) - 1
        : dig = Number(urlParams.get('id')) - 1;

// Output Data//
document.getElementById('group9')!.innerHTML = result[dig].typeName;
document.getElementById('catchCopy')!.innerHTML = result[dig].catchCopy;
document.getElementById('kihonseikaku')!.innerHTML = result[dig].kihonseikaku;
