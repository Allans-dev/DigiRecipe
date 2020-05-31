import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import { getRecipes } from "../api/fetch";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "authenticate":
      return { errorMessage: "", token: action.payload };
    case "signout":
      return { ...state, errorMessage: "", token: null };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await getRecipes(
      "https://digirecipe-server.herokuapp.com/signup",
      "POST",
      { email, password }
    );
    const json = await response.json();
    await AsyncStorage.setItem("token", json.token);
    // await AsyncStorage.setItem("userId", json.userId);
    dispatch({ type: "authenticate", payload: json.token });
  } catch (error) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with signup",
    });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await getRecipes(
      "https://digirecipe-server.herokuapp.com/signin",
      "POST",
      { email, password }
    );
    const json = await response.json();
    await AsyncStorage.setItem("token", json.token);
    // await AsyncStorage.setItem("userId", json.userId);
    dispatch({ type: "authenticate", payload: json.token });
  } catch (error) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with signin",
    });
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  await AsyncStorage.removeItem("userId");
  const value = await AsyncStorage.getItem("token");
  console.log(value);
  dispatch({ type: "signout" });
};

const addError = (dispatch) => (err) => {
  dispatch({ type: "add_error", payload: err });
};

const persistedSignin = (dispatch) => (token) => {
  dispatch({ type: "authenticate", payload: token });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, addError, persistedSignin },
  { token: null, errorMessage: "" }
);
