import React from 'react';
import { Link } from 'react-router-dom';

import Form from './components/form';

const SendTokens = () => (
  <>
    <Link to="/" className="link">
      Go Back to Home Page
    </Link>

    <Form />
  </>
);

export default SendTokens;
