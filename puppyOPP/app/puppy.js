function Puppy (name, species, age, sex){
    this.name = name || 'Bingo';
    this.species = species || 'Ekeuke';
    this.age = age || 0;
    this.sex = sex || "female";
    this.numOfLegs = 4;
    this.tailType = species === "Schipperke" || species === "Bobtail"? "short" : "long";
    this.visbreast = 0;
}

Puppy.prototype.barks = function(){
    var sound = this.age < 6? "ku-ku-ku" : "Woo! Woo!";
    return sound;
}

Puppy.prototype.pregnant = function(weeks){
    if (this.sex === "female" && this.age >= 12){
        this.visbreast = weeks;
        return weeks;
    }
    return "too young to be pregnant";
}

module.exports = Puppy;