interface OneProduct {
  name: string;
  count: number;
  isDegradable: boolean;
}

const product: OneProduct = {
  name: "Opakowanie zbiorcze",
  count: 1000,
  isDegradable: true,
};

function getProductProp(
  obj: OneProduct,
  propName: keyof OneProduct
): string | number | boolean {
  return obj[propName];
}

const count = getProductProp(product, "count") as number;
const degraded = getProductProp(product, "isDegradable") as boolean;
console.log(`${count.toFixed(2)} ${degraded ? "degraded" : "undegraded"}`);
