import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => <div className="layout">{children}</div>;

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
