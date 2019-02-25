import React, { Component } from 'react';

import Aio from '../all-in-one';

import Form from './form';

export default class extends Component {
  constructor(props) {
    super(props);

    //Aio做装饰器，所以暂时这么处理，todo需要修改
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
        return (
          <div>
            <Form name={name} value={value} />
          </div>
        )
      }
    }

    this.aioForm = <AioForm name={props.name} value={props.value} />
  }

  render() {
    return this.aioForm;
  }
}