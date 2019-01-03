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
    prepareSpec(spec, path, this.handleUpdate);
    spec = path.split('.').reverse().reduce((p, n) => ({[n]: p}), {$merge: spec});
    this.setState(update(this.state, spec));
  };

  render() {
    console.log('[render]', this.state.spec);
    return (
      <C {...this.props} spec={this.state.spec} />
    );
  }
}