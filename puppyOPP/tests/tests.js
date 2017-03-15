(function() {
  'use strict';
  
  var Puppy = require("../app/puppy.js");
    
  
  describe("Puppy Class: Create a puppy, make it cry", function() {

    it("The puppy should be a type of `object`, and an instance of the `Puppy` class", function() {
      var billy = new Puppy('Billy');
      expect(typeof billy).toEqual(typeof {});
      expect(billy instanceof Puppy).toBeTruthy();
    });

    it("The puppy should be called 'Bingo' if no name is passed as a parameter", function() {
      var gm = new Puppy();
      expect(gm.name).toEqual('Bingo');
      expect(gm.species).toBe('Ekeuke');
    });

    it("The puppy name and species should be a property of the puppy", function() {
      var baja  = new Puppy('Baja', 'Aja');
      expect(baja.name).toBe('Baja');
      expect(baja.species).toBe('Aja');
    });

    it("The puppy shoud have four (4) legs", function() {
      var tiger  = new Puppy('Tiger', 'Azawakh');
      expect(tiger.numOfLegs).toBe(4);
    });

    it("The puppy shoud have long tails except it's Schipperke or Bobtail species", function() {
      var skido  = new Puppy('skido', 'Azawakh');
      expect(skido.tailType).toBe("long");

      var bob = new Puppy('Bob', 'Bobtail');
      expect(bob.tailType).toBe("short");
      //porshe.drive(5);      
      expect((function(){return new Puppy('Mongo', 'Schipperke');}()).tailType).toBe("short");
    });

    it("The puppy shoud bark 'Woo! Woo' except it's younger than 6 months", function() {
      var senior  = new Puppy('Senior', "Bobtail", 9);
      expect(senior.barks()).toEqual("Woo! Woo!");     

      var junior = new Puppy('Junior', 'Bobtail', 4);
      expect(junior.barks()).toBe("ku-ku-ku");
      //expect(koenigsegg.isSaloon).toBeTruthy();
    });

    it("Baja should have no 'visible breast' except it is a female dog and with pregnancy 7+ weeks", function() {
      var baja  = new Puppy('Baja', 'Ekeuke', 12);
      expect(baja.visbreast).toBe(0);
      baja.pregnant(8);
      expect(baja.visbreast).toBe(8);
    });   

  });

  
})();


