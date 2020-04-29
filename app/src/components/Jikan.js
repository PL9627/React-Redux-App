import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components';

import { getJikan } from "../actions/actions";

const Btn = styled.button`
    padding: 10px 25px;
    font-size: 16px;
    border: 1px solid blue;
    color: blue;
    background: white;
    border-radius: 10px;

    &:hover {
      background: blue;
      color: white;
    }
`;

const Jikan = ({ getJikan, website, isFetching, error }) => {
  if (error !== "") {
    return (
      <div>
        <h2>{error}</h2>
        <Btn onClick={getJikan}>Generate Jikan Link</Btn>
      </div>
    );
  }

  if (isFetching) {
    return <h1>Grabbing link now...</h1>;
  } else {
    return (
      <div>
        <h2>Link to Jikan: <a href='https://jikan.moe'>{website}</a></h2>
        <Btn onClick={getJikan}>Generate Jikan Link</Btn>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    website: state.website,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getJikan })(Jikan);
