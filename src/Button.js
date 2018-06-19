import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ children, ...props }) => (
  <Link className="button" {...props}>
    {children}
  </Link>
);

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;
