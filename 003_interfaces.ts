interface People {
  name: string;
  age: number;
  isDeveloper: boolean;
  achievements?: string[];
  greet: () => void;
}

const personA: People = {
  name: "Ann",
  age: 30,
  isDeveloper: true,
  achievements: ["best chess player", "az-204"],
  greet(): void {
    console.log(`Hello, ${this.name}`);
  },
};

const personB: People = {
  name: "Thomas",
  age: 37,
  isDeveloper: true,
  greet(): void {
    console.log(`Hello, ${this.name}!`);
  },
};

function dateOfBirth({ age }: People): number {
  return new Date().getFullYear() - age;
}

console.log(dateOfBirth(personB));
