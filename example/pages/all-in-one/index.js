import React, { Component } from 'react';

import Aio from '@/all-in-one';

import Todo from './todo';

import SPEC from './spec.json';

@Aio(SPEC)
export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { spec } = this.props;

    return (
      <div>
        {spec.name}
        <Todo spec={spec.data} />
      </div>
    )
  }
}