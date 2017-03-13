function Puppy (name, species, age, sex){
    this.name = name || 'Bingo';
    this.species = species || 'Ekeuke';
    this.age = age || 0;
    this.sex = sex || "female";
    this.numOfLegs = 4;
    this.tailType = species === "Schipperke" || species === "Bobtail"? "short" : "long";
    this.visbreast = 0;
}
