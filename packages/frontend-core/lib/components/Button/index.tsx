import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type ButtonProps = {
  onClick?: () => unknown;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  onClick,
  children,
  ...restProps
}: ButtonProps): JSX.Element {
  return (
    <button
      type='button'
      onClick={onClick}
      className={clsx(styles.button, restProps.className)}
      {...restProps}
    >
      {children}
    </button>
  )
}
