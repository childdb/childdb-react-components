import React, { Component } from 'react';
import styles from './Button.css';

export const TYPES = {
  PRIMARY: 'primary',
  WARNING: 'warning'
}

export const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

class Button extends Component {
  render() {
    return (
      <button
        type={ this.props.type || 'button' }
        disabled={this.props.disabled}
        onClick={this.props.onClick}
        className={
          styles.button,
          styles[ this.props.buttonType || TYPES.PRIMARY ],
          styles[ this.props.buttonSize || SIZES.MEDIUM ]
        }
      >
        {this.props.text}
      </button>
    )
  }
}

export default Button;

