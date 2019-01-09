import React, { Component } from 'react';

import AspectRatioBox from '@/aspect-ratio-box';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AspectRatioBox width={200} style={{background: 'red'}}>
          width: 200, height: 200 * 0.618 = 123.6
        </AspectRatioBox>
        <AspectRatioBox width="10%">
          <div style={{height: '100%', background: 'blue'}}>
            width: '10%'
          </div>
        </AspectRatioBox>
        <AspectRatioBox width={200} ratio={2} style={{background: 'yellow'}}>
          width: 200, height: 200 * 2 = 400
        </AspectRatioBox>
      </div>
    )
  }
}