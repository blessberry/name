import _ from 'lodash';
import '../css/style.css';
import giphy from '../assets/giphy.gif';
import printMe from './print';

const component = () => {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = giphy;
    element.appendChild(myIcon);

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());
