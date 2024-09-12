import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "./../actions";
const initialState = {
  message: "https://images.dog.ceo/breeds/mountain-bernese/n02107683_1737.jpg",
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        message: {},
        isFetching: true,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        message: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_ERROR:
      return {
        ...state,
        message: {},
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
