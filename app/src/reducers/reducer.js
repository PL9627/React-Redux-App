import {
  FETCHING_SEARCH_START,
  FETCHING_SEARCH_SUCCESS,
  FETCHING_SEARCH_FAIL,
} from "../actions/actions";

const intialState = {
  isFetching: false,
  error: "",
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCHING_SEARCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_SEARCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case FETCHING_SEARCH_FAIL:
      return {
        ...state,
        error: "There is a big error!",
      };
    default:
      return state;
  }
};

export default reducer;
