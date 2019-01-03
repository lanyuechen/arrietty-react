import React, { Component } from 'react';
import update from 'immutability-helper';
import prepareSpec from './prepare-spec';

export default (spec) => (C) => class extends Component {
  constructor(props) {
    super(props);
    prepareSpec(spec, 'spec', this.handleUpdate);
    this.state = {
      spec
    }
  }

  handleUpdate = (path, spec) => {
    spec = path.split('.').reverse().reduce((p, n) => ({[n]: p}), spec);
    const state = update(this.state, spec);
    prepareSpec(state.spec, 'spec', this.handleUpdate);
    this.setState(state);
  };

  render() {
    console.log('[render]', this.state.spec);
    return (
      <C {...this.props} spec={this.state.spec} />
    );
  }
}