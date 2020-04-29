import React from "react";
import { connect } from "react-redux";

import {getJikan} from '../actions/actions';

const JikanLink = ({getJikan, isFetching, error}) => {
    if (error !== '') {
        return (
            <div>
                <h2>{error}</h2>
                <button onClick={getJikan}>Click for the Jikan website!</button>
            </div>
        )
    }

    if (isFetching) {
        return (
            <h2>Grabbing link now...</h2>
        )
    } else {
        return (
            <div>
                <h2>Here is the link!</h2>
            <button onClick={getJikan}>Click for the Jikan website!</button>
        </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {getJikan})(JikanLink);