import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, ...props }) => (
  <Link className="button" {...props}>
    {children}
  </Link>
);

export default Button;
