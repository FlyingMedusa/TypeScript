interface Human {
  name: string;
  age: number;
}

interface HistoryEntry {
  createdAt: Date;
  event: string;
}

interface History {
  history: HistoryEntry[];
  showHistory(): void;
}

interface HumanRole extends Human {
  role: string;
}

class Person implements Human, History {
  name: string;
  age: number;
  history: HistoryEntry[];

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  showHistory(): void {
    console.log(this.history);
  }
}

const ann = new Person("Ann", 34);
