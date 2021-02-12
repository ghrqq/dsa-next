export const cartBuilder = (arrOfObjects) => {
  const buildedcart = arrOfObjects.map((item) =>
    Object.assign(item, { quantity: 1 })
  );

  return buildedcart;
};

export const cartItemIncrementer = (arrOfObjects, code, val) => {
  const index = arrOfObjects.findIndex((item) => item.code == code);
  arrOfObjects[index].quantity = val;
};
