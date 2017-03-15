(function() {
  'use strict';

  var app = require("../app/getprimes.js"),
    getPrimes = app.getPrimes;
    
  describe("Get Prime tests", function() {
    describe("Case for some falsy or invalid values", function() {

      it("should return 'not a number' for null", function() {
        expect(getPrimes(null)).toEqual('not a number');
      });

      it("should return 'not a number' for undefined", function() {
        expect(getPrimes(undefined)).toEqual('not a number');
      });

      it("should return 'not a number' for object", function() {
        expect(getPrimes([2])).toEqual('not a number');
      });

      it("should return 'not a number' for string", function() {
        expect(getPrimes("5")).toEqual('not a number');
      });

      it("should return 'not a number' for no argument", function() {
        expect(getPrimes()).toEqual('not a number');
      });
    });

    describe("Return value should be an array", function() {

      it("should return an array", function() {
        expect(Array.isArray(getPrimes(9))).toBe(true);
      });

      it("should return [2, 3, 5] for 6", function() {
        expect(getPrimes(6)).toEqual([2, 3, 5]);
      });

      it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23] for 23", function() {
        expect(getPrimes(23)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23]);
      });

      it("should return [] for 1", function() {
        expect(getPrimes(1)).toEqual([ ]);
      });

    });

    describe("Case for zero (ie 0)", function() {
      it("should return 'input should be greater than 0' ", function() {
        expect(getPrimes(0)).toBe('input should be greater than 0');
      });
    });

  });
    
})();


