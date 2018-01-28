'use strict';
const request = require('request');
request('http://google.com',(error,response,body) => {
    console.log(body);
});