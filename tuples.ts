const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 50];
const sprite: Drink = ["clear", true, 50];
const tea: Drink = ["brown", false, 20];
