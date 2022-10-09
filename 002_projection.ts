const s = "4";
const num_s = Number(s);
console.log(typeof num_s);

const json = "123";
const data = JSON.parse(json) as number;
console.log(data, typeof data);
