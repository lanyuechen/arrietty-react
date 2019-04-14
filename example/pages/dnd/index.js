import React, { Component } from 'react';

import dnd from '@/dnd';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  handleDrop = ({type, data}, e) => {
    console.log('[onDrop]')
  }

  handleDragOver = (e) => {
    console.log('[onDragOver]')
  }

  handleDragEnter = (e) => {
    console.log('[onDragEnter]');
    e.target.style.filter = 'blur(5px)';
  }

  handleDragLeave = (e) => {
    console.log('[onDragLeave]')
    e.target.style.filter = 'none';
  }

  render() {
    return (
      <div>
        {dnd.DragSource('COMPONENT')(
          <div style={{display: 'inline-block'}}>dragSource</div>
        )}

        {dnd.DropTarget(['COMPONENT'], {
          onDrop: this.handleDrop,
          onDragOver: this.handleDragOver,
          onDragEnter: this.handleDragEnter,
          onDragLeave: this.handleDragLeave
        })(
          <div style={{width: '100%', height: '200px', background: '#ddd'}}>
            {dnd.DropTarget(['COMPONENT'], {
              onDrop: this.handleDrop,
              onDragOver: this.handleDragOver,
              onDragEnter: this.handleDragEnter,
              onDragLeave: this.handleDragLeave
            })(
              <div style={{width: '50%', height: '200px', background: 'lightgreen'}}>
                
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
}