class Pc {
  private isOn = false;
  constructor(public cpu: string, public ram: number) {}

  on() {
    console.log("Loading BIOS...");
    if (!this.cpu) {
      throw new Error("CPU is lacking");
    }
    this.isOn = true;
  }
}

const myComputer = new Pc("486SX", 256);
myComputer.on();
