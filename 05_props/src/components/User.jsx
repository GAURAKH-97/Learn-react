import React from "react";
import PropTypes from "prop-types";

function User(props) {
  return (
    <>
      <h2>Hello {props.name}</h2>
      <p>Age: {props.age}</p>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

export default User;