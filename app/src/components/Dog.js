import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDog } from "../actions";
const Dog = ({ message, isFetching, error, dispatch }) => {
  useEffect(() => {
    dispatch(getDog());
  }, []);

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching dog for ya!</h2>;
  }

  const handleClick = (e) => {
    dispatch(getDog());
  };
  return (
    <div>
      <img className="dogImages" src={message} />
      <div>
        <button className="button" onClick={handleClick}>
          Get another dog!
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.message,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps)(Dog);
