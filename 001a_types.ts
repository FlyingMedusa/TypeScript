const abc: string = "Hello World";
const bool: boolean = true;
const some_num: number = 123.25;
const wine_colors: "white" | "red" = "white";
const animals: Array<string> = ["dog", "cat", "parrot"];
const random_arr: Array<any> = ["dog", "cat", 3, true];
const random_arr2: (string | number)[] = ["dog", "cat", 3];

function sum(a: number, b: number): string | null {
  if (a === 0 && b === 0) {
    return null;
  } else {
    return (a + b).toString();
  }
}

function addAndShow(a: number, b: number): void {
  console.log(a + b);
}

// enum -----------------------------------------------
// always uppercased
enum UserRole {
  Admin,
  User,
  BannedUser,
}

const marta = UserRole.Admin;
