import React, { Component } from 'react';

import Flex from '@/flex';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Flex vertical>
        <Flex size={100}>
          <Flex size="20%" style={{background: 'red'}}>
            left
          </Flex>
          <Flex style={{background: 'green'}}>
            right
          </Flex>
        </Flex>
        <Flex size={200}>
          <Flex style={{background: 'blue'}}>
            left
          </Flex>
          <Flex size={200} style={{background: 'yellow'}}>
            right
          </Flex>
        </Flex>
        <Flex style={{background: 'gray'}}>
          bottom
        </Flex>
      </Flex>
    )
  }
}