const getRecipes = async (URL, setRecipes) => {
  return fetch(URL)
    .then((res) => res.json())
    .then((json) => setRecipes(json))
    .catch((error) => console.error(error));
};
export default getRecipes;
