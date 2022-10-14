class AlmostFb {
  protected readonly usageConsent: boolean;
  constructor(usageConsent: boolean) {
    this.usageConsent = true;
  }
}

class AlmostFbUser extends AlmostFb {
  private readonly lifeEvents: string[] = [];
  constructor(
    public readonly name: string,
    public surname: string,
    public age: number
  ) {
    super(true);
  }

  addLifeEvent(eventName: string): void {
    this.lifeEvents.push(eventName);
  }

  getLifeEvents(): string[] {
    return this.lifeEvents.filter((s) => s !== "some disgrace");
  }

  private getUsageConsent() {
    return this.usageConsent;
  }
}

const william = new AlmostFbUser("William", "King", 45);
william.addLifeEvent("birthday");
william.addLifeEvent("some disgrace");
william.addLifeEvent("buying first car");
william.addLifeEvent("some success");
console.log(william.getLifeEvents());
