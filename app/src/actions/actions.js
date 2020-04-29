import axios from "axios";

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAIL = "FETCHING_FAIL";

export const getJikan = () => (dispatch) => {
  dispatch({ type: FETCHING_START });

  axios
    .get(`https://api.jikan.moe/v3`)
    .then((res) => {
      console.log(res);

      dispatch({ type: FETCHING_SUCCESS, payload: res.data.Website});
    })
    .catch((err) => {
      console.log("err", err);

      dispatch({
        type: FETCHING_FAIL,
        payload: `${err.statusText} with response code ${err.status}`,
      });
    });
};
