import React, { Component } from 'react';

export default class Flex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, vertical, width, height, style = {} } = this.props;

    return (
      <div
        className="an-layout"
        style={{
          ...style,
          display: 'flex',
          width: width || '100%',
          height: height || '100%',
          flexFlow: vertical ? 'column' : 'row',
          flexShrink: width || height ? 0 : 1
        }}
      >
        {React.Children.map(children, child => {
          const isFlex = child.type && child.type.name === 'Flex';
          const type = vertical ? 'height' : 'width';
          if (isFlex) {
            return {
              ...child,
              props: {
                ...child.props,
                [type]: child.props.size
              }
            };
          }
          return child;
        })}
      </div>
    );
  }
}