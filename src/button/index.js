import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './style.css';

export const TYPES = {
  PRIMARY: 'primary',
  SUBMIT: 'submit',
  WARNING: 'warning',
}

export const SHAPES = {
  SQUARE: 'square',
  ROUNDED: 'rounded',
}

export const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

class Button extends Component {
  render() {
    return (
      <button
        type={this.props.type}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
        className={classNames(
          styles.button,
          styles[this.props.buttonType],
          styles[this.props.buttonSize],
          {
            [styles.disabled]: this.props.disabled,
          }
        )}
      >
        {this.props.children}
      </button>
    )
  }
}

Button.defaultProps = {
  type: TYPES.PRIMARY,
  shape: SHAPES.SQUARE,
  size: SIZES.MEDIUM,
  onClick: () => {},
  disabled: false
}

export default Button;

