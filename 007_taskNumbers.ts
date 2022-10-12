enum TwoNumbersSign {
  Add,
  Subtract,
  Multiply,
  Divide,
}

interface TwoNumbersOperation {
  a: string | number;
  b: string | number;
  sign?: TwoNumbersSign;
}

enum OneNumberSign {
  Increment,
  Decrement,
}

interface OneNumberOperation {
  a: string | number;
  sign?: OneNumberSign;
}

type CorrectType = OneNumberOperation | TwoNumbersOperation;

const a: CorrectType = {
  a: 1,
  b: 2,
  sign: TwoNumbersSign.Add,
};

const b: CorrectType = {
  a: 1,
  b: 2,
};

const c: CorrectType = {
  a: "1",
  b: "2",
  sign: TwoNumbersSign.Multiply,
};

const d: CorrectType = {
  a: 1,
  sign: OneNumberSign.Decrement,
};

function calc({ a, b, sign }: TwoNumbersOperation) {
  switch (sign) {
    case TwoNumbersSign.Add:
      console.log(Number(a) + Number(b));
      break;
    case TwoNumbersSign.Subtract:
      console.log(Number(a) - Number(b));
      break;
    case TwoNumbersSign.Multiply:
      console.log(Number(a) * Number(b));
      break;
    case TwoNumbersSign.Divide:
      console.log(Number(a) / Number(b));
      break;
  }
}

calc(c);
