import React from 'react';

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
      {...restProps}
    >
      {children}
    </button>
  )
}
