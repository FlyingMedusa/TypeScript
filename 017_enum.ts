enum ProficiencyLevels {
  Reading,
  Writing,
  Speaking,
  Listening,
}

for (const key in ProficiencyLevels) {
  if (Number.isNaN(Number(key))) {
    console.log(key);
  }
}

const allPossibilities = Object.keys(ProficiencyLevels).filter((key) =>
  Number.isNaN(Number(key))
);
console.log(allPossibilities);
