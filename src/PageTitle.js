import React from 'react';
import PropTypes from 'prop-types';
import './PageTitle.css';

const PageTitle = ({ children }) => <h1 className="PageTitle">{children}</h1>;

PageTitle.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageTitle;
