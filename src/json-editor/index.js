import React, { Component } from 'react';

import Aio from '../all-in-one';

import Form from './form';

function aioForm(props) {
  @Aio({
    name: props.name, 
    value: props.value
  }, (spec) => {
    props.onChange && props.onChange(spec);
  })
  class AioForm extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      const { name, value } = this.props.spec;
      if (!value) {
        return null;
      }
      return (
        <div>
          <Form name={name} value={value} />
        </div>
      )
    }
  }

  return <AioForm name={props.name} value={props.value} />;
}

export default class extends Component {
  constructor(props) {
    super(props);
    this.aioForm = aioForm(props);
  }

  render() {
    return this.aioForm;
  }
}