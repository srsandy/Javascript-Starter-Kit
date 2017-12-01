import numeral from 'numeral';
//numeral is an npm module that helps you with number formats
import './index.css';

/* eslint-disable no-console */

const courseValue = numeral(1000).format('$0,0.00');

console.log(`I would like to pay ${courseValue} for this awesome course!`);
