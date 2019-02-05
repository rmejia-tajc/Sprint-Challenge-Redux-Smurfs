import React from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions';

import Form from '../components/Form';

function FormView(props) {
  return <Form {...props} />;
}

export default connect(null, { addSmurf })(FormView);