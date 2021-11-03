import axios from "axios";
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const getDog = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((resp) => {
        dispatch(fetchSuccess(resp.data.message));
      })
      .catch((err) => {
        dispatch(fetchError(err));
      });
  };
};

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (message) => {
  return { type: FETCH_SUCCESS, payload: message };
};

export const fetchError = (errorMessage) => {
  return { type: FETCH_ERROR, payload: errorMessage };
};
