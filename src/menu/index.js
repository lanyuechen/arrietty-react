import React, { Component } from 'react';

import './style.scss';

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e, d) => {
    this.props.onClick?.(e, d);
    if (!d.isFile) {
      const item = e.currentTarget.parentNode;
      if (item.hasAttribute('active')) {
        item.removeAttribute('active');
      } else {
        item.setAttribute('active', true);
      }
    }
  }

  render() {
    const { data, onContextMenu, onClick } = this.props;
    
    return (
      <ul className="ar-menu">
        {data.map(d => (
          <li className={`ar-menu-item${d.isFile ? ' ar-menu-item-file' : ''}`} key={d.name}>
            <span 
              className="ar-menu-item-head"
              onClick={(e) => this.handleClick(e, d)}
              onContextMenu={(e) => onContextMenu?.(e, d)}
            >
              {d.render ? d.render(d) : d.name}
            </span>
            {!d.isFile && (
              <div className="ar-submenu">
                <Menu 
                  key={d.name} 
                  data={d.children} 
                  onClick={onClick}
                  onContextMenu={onContextMenu}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  }
}