const getRecipes = async (URL, setRecipes) => {
  return fetch(URL)
    .then((res) => res.json())
    .then((json) => setRecipes(json))
    .catch((error) => console.error(error));
};

const foodGroups = [
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
