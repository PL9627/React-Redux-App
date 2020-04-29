import {
  FETCHING_START,
  FETCHING_SUCCESS,
  FETCHING_FAIL,
} from "../actions/actions";

const intialState = {
  website: null,
  isFetching: false,
  error: "",
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCHING_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        isFetching: false,
        website: action.payload,
      };
    case FETCHING_FAIL:
      return {
        ...state,
        error: "There is a big error!",
      };
    default:
      return state;
  }
};

export default reducer;
