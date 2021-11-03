import React from "react";
import { connect } from "react-redux";

const Dog = ({ message, isFetching, error, dispatch }) => {
  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching dog for ya!</h2>;
  }
  return (
    <div>
      <h2>Say Hi to: {}</h2>
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
