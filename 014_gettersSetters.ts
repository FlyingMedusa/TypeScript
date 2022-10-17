abstract class AlmostFb {
  protected readonly usageConsent: boolean;
  constructor(usageConsent: boolean) {
    this.usageConsent = true;
  }
}

class AlmostFbUser extends AlmostFb {
  private readonly isAlive: boolean = true;
  private readonly lifeEventsList: string[] = [];

  constructor(
    private readonly name: string,
    private surname: string,
    private age: number
  ) {
    super(true);
  }

  addLifeEvent(eventName: string): void {
    this.lifeEventsList.push(eventName);
  }

  get lifeEvents(): string[] {
    return this.lifeEventsList.filter((s) => s !== "some disgrace");
  }

  private getUsageConsent(): boolean {
    return this.usageConsent;
  }

  get alive(): boolean {
    return this.alive;
  }

  set alive(newIsAlive: boolean) {
    if (!this.isAlive && newIsAlive) {
      throw new Error("Resurrection denied");
    }
    this.alive = newIsAlive;
  }
}

const william = new AlmostFbUser("William", "King", 45);
william.addLifeEvent("birthday");
william.addLifeEvent("some disgrace");
william.addLifeEvent("buying first car");
william.addLifeEvent("some success");
console.log(william.lifeEvents);
for (const event of william.lifeEvents) {
  console.log(event);
}
console.log(william.alive);
william.alive = false;
console.log(william.alive);
william.alive = true;
