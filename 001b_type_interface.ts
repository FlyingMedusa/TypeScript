//type - can represent anything

type NewType = { first: number; second: number };

const addTwoNumbers = (params: NewType) => {
  return params.first + params.second;
};

console.log(addTwoNumbers({ first: 1, second: 2 }));

// interface - objects

interface Num {
  first: number;
  second: number;
}

const addTwoNumbers2 = (params: Num) => {
  return params.first + params.second;
};

console.log(addTwoNumbers2({ first: 3, second: 2 }));
