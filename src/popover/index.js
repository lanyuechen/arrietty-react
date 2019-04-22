import React from 'react';
import ReactDOM from 'react-dom';

import Popover from './popover';

export default function(config) {
  const div = document.createElement('div');
  document.body.appendChild(div);

  function close(...args) {
    if (ReactDOM.unmountComponentAtNode(div) && div.parentNode) {
      div.parentNode.removeChild(div);
    }
    if (config.onCancel) {
      config.onCancel(...args);
    }
  }

  const content = {
    ...config.content,
    props: {
      ...config.content.props,
      onBlur: close
    }
  };

  ReactDOM.render((
    <Popover
      x={config.x}
      y={config.y}
    >
      {content}
    </Popover>
  ), div);

  return {
    destroy: close
  };
}
