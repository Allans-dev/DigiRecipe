const getRecipes = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await response.json();
    return response;
  } catch (error) {
    console.error("getRecipes api not working", error);
  }
};
export default getRecipes;
