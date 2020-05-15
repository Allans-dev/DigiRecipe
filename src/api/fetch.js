const getRecipes: object = async (URL, method, data) => {
  return fetch(URL, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

const foodGroups: object[] = [
  {
    id: 1,
    group: "Main Meal",
  },
  {
    id: 2,
    group: "Breakfast",
  },
  {
    id: 3,
    group: "Sides",
  },
  {
    id: 4,
    group: "Salads",
  },
  {
    id: 5,
    group: "Snacks",
  },
  {
    id: 6,
    group: "Desserts",
  },
  {
    id: 7,
    group: "Drinks",
  },
];

export { getRecipes, foodGroups };
