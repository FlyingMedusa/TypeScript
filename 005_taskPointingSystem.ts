interface UserPointingSystem {
  name: string;
  points: number;
}

type UserPointingSystemAr = UserPointingSystem[];

const usersPoints: UserPointingSystemAr = [
  {
    name: "Anna",
    points: 1001,
  },
  {
    name: "Krzysztof",
    points: 1499,
  },
  {
    name: "Ola",
    points: 1500,
  },
  {
    name: "Marek",
    points: 203,
  },
];

function incPoints(user: string): void {
  usersPoints.forEach((obj) => {
    for (let key in obj) {
      if (obj[key as keyof UserPointingSystem] === user) {
        console.log(`${user}'s points: ${++obj.points}`);
      }
    }
  });
}

function totalPoints(): void {
  var total = usersPoints.reduce((prev, curr) => prev + curr.points, 0);
  console.log(`Total points (all users): ${total}`);
}

function personWithMostPoints(): void {
  let bestUsers = new Array();
  let highestScore: number = 0;
  usersPoints.forEach((obj) => {
    if (obj["points"] === highestScore) {
      bestUsers.push(obj["name"]);
    } else if (obj["points"] > highestScore) {
      highestScore = obj["points"];
      bestUsers = [];
      bestUsers.push(obj["name"]);
    }
  });
  console.log(
    `Users with the highest score(${highestScore} points): ${bestUsers.join(
      ", "
    )}. Congrats!`
  );
}

incPoints("Krzysztof");
personWithMostPoints();
incPoints("Krzysztof");
personWithMostPoints();
totalPoints();
