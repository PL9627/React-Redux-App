import axios from "axios";

export const FETCHING_SEARCH_START = "FETCHING_SEARCH_START";
export const FETCHING_SEARCH_SUCCESS = "FETCHING_SEARCH_SUCCESS";
export const FETCHING_SEARCH_FAIL = "FETCHING_SEARCH_FAIL";

export const getJikan = () => (dispatch) => {
  dispatch({ type: FETCHING_SEARCH_START });

  axios
  .get(`https://api.jikan.moe/v3/search`)
  .then((res) => {
    console.log(res);

    dispatch({ type: FETCHING_SEARCH_SUCCESS, payload: res.data.Website });
  })
  .catch((err) => {
    console.log("err", err);

    dispatch({
      type: FETCHING_SEARCH_FAIL,
      payload: `${err.statusText} with response code ${err.status}`,
    });
  });

};
