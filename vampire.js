class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let ancestors = 0;
    let vampire = this;

    while (vampire.creator) {
      vampire = vampire.creator
      ancestors++
    }
    return ancestors;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {

    if (vampire.numberOfVampiresFromOriginal > this.numberOfVampiresFromOriginal) {
      return true;
    } else {
      return false;
    }
<<<<<<< HEAD
=======
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  // vampireWithName(name) {
    
  // }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    
>>>>>>> traversal
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }

   // Returns the vampire object with that name, or null if no vampire exists with that name
   vampireWithName(name) {
     let currentVamp = {};
    
    if (this.name === name) {
      currentVamp = this.name;
    }
    console.log(currentVamp);

    for (const vamp of this.offspring) {
      currentVamp = vamp.vampireWithName(name);
    }
    // return currentVamp;
   }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let brood = 0;
    // console.log(this); 
    for (const spawn of this.offspring) {
      // console.log(descendent);
      brood += spawn.totalDescendents + 1;
    }
    return brood;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    // if this.yearConverted > 1980
  }
}

rootVampire = new Vampire("root");

offspring1 = new Vampire("a");
      offspring2 = new Vampire("b");
      offspring3 = new Vampire("c");
      offspring4 = new Vampire("d");
      offspring5 = new Vampire("e");
      offspring6 = new Vampire("f");
      offspring7 = new Vampire("g");
      offspring8 = new Vampire("h");

      rootVampire.addOffspring(offspring1);
      rootVampire.addOffspring(offspring2);
      rootVampire.addOffspring(offspring3);

console.log(rootVampire.vampireWithName("b"));

module.exports = Vampire;

