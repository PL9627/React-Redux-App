import React from "react";
import { connect } from "react-redux";

import { getJikan } from "../actions/actions";

const Jikan = ({ getJikan, website, isFetching, error }) => {
  if (error !== "") {
    return (
      <div>
        <h2>{error}</h2>
        <button onClick={getJikan}>Generate Jikan Link</button>
      </div>
    );
  }

  if (isFetching) {
    return <h2>Grabbing Jikan now...</h2>;
  } else {
    return (
      <div>
        <h2>Link: {website}</h2>
        <button onClick={getJikan}>Generate Jikan Link</button>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getJikan })(Jikan);
