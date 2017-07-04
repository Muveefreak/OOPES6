"use strict";
const myApp = require('../src/main.js');
var expect = require('chai').expect;

describe('primeNumbers', function() {  
    describe('#primeNumbers()', function() {
        it('should return prime number of 10 to be [2,3,5,7]', function() {
            expect(myApp.getPrimes(10)).to.eql([ 2, 3, 5, 7 ]);
        });
    });
    describe('#primeNumbers()', function() {
        it('should return a string input to be undefined', function() {
            expect(myApp.getPrimes(' ')).to.eql('undefined');
        });
    });
});
