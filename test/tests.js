"use strict";
const myApp = require('../src/vehicle.js');
var expect = require('chai').expect;

describe('tyreCount', function() {  
    describe('#tyreCount()', function() {
        it('should return a bicycle', function() {
            expect(myApp.tyreCount(2)).to.eql('bicycle');
        });
    });
    describe('#primeNumbers()', function() {
        it('should return a car', function() {
            expect(myApp.tyreCount(4)).to.eql('car');
        });
    });
});
