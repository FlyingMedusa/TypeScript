interface Item {
  name: string;
  count: number;
  pricePerOne: number;
  vat: number;
}

function showItems(items: Item[]): void {
  items.forEach((item) => {
    for (const property in item) {
      console.log(`${property}: ${item[property as keyof Item]}`);
    }
    console.log(
      `SUMMARY: ${item.count} * ${item.name} -> ${
        item.count * (item.pricePerOne + item.pricePerOne * item.vat)
      } PLN\n***`
    );
  });
}

showItems([
  {
    name: "Pomarańcze luz",
    count: 1.2,
    pricePerOne: 1,
    vat: 0,
  },
  {
    name: "Opony komplet",
    count: 1,
    pricePerOne: 800,
    vat: 0.23,
  },
  {
    name: "MP3 Player Manta 256MB",
    count: 1,
    pricePerOne: 75,
    vat: 0.23,
  },
  {
    name: 'Baton "Mega Kursowy Baton Masło Orzechowe"',
    count: 5,
    pricePerOne: 2,
    vat: 0.23,
  },
]);
