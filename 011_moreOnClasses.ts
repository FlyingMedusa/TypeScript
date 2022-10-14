class Animal {
  constructor(public readonly carnivore: boolean) {}
}

class Dog extends Animal {
  readonly broodNames: string[] = [];
  isAlive = false;

  constructor(public readonly name: string, public owner: string) {
    super(true);
  }
}

const benny = new Dog("Benny", "Maggie");
benny.broodNames.push("Tobby");
