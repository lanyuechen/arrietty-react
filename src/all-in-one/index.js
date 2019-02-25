import React, { Component } from 'react';
import update from 'immutability-helper';
import prepareSpec from './prepare-spec';

export default (spec, onChange) => (C) => class extends Component {
  constructor(props) {
    super(props);
    prepareSpec(spec, 'spec', this.handleUpdate);
    this.state = {
      spec
    };
    this.onChange = onChange;
  }

  handleUpdate = (path, spec) => {
    spec = path.split('.').reverse().reduce((p, n) => ({[n]: p}), spec);
    const state = update(this.state, spec);
    prepareSpec(state.spec, 'spec', this.handleUpdate);
    this.setState(state, () => this.onChange && this.onChange(state.spec));
  };

  render() {
    console.log('[render]', this.state.spec);
    return (
      <C {...this.props} spec={this.state.spec} />
    );
  }
}