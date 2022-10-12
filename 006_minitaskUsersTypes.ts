class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const someJson = '{"name":"Jan"}';
const { name } = JSON.parse(someJson) as User;
let user: string | User = name === "" ? "" : `User ${name}`;

if (user !== "") {
  user = new User(user);
}

console.log(user);
