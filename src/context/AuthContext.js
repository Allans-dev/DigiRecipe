import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import { getRecipes } from "../api/fetch";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload };
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
    dispatch({ type: "signup", payload: json.token });
  } catch (error) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with signup",
    });
  }
};

const login = (dispatch) => {
  return ({ email, password }) => {
    // make api request to login
    // modify state to say authenticated handle success
    // if sign up fails reflect error message
  };
};

const logout = (dispatch) => {
  // return () => {
  //   //signout
  // };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, login, logout },
  { token: null, errorMessage: "" }
);
