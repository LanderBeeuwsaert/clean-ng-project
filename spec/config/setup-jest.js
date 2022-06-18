//https://github.com/clarkbw/jest-localstorage-mock

// import 'jest-localstorage-mock';
// or
// require('jest-localstorage-mock');

global.SecureLS = function SecureLS() {};

// importing jquery here doesn't seem to work, needs to be imported in the jest file
// import * as $ from 'jquery';
// Object.defineProperty(window, '$', {value: $});
// Object.defineProperty(global, '$', {value: $});
// Object.defineProperty(global, 'jQuery', {value: $});

// logError: err => {
//   console.log(err); // will output errors during Jest run
// }
