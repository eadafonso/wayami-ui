import React, {ReactNode} from 'react';
import {StyledButton} from './styles'
export type componentSize = 'default' | 'sm' | 'large'

export interface ButtonProps {
  color?: string;
  backgroundColor?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
  size?: componentSize;
  disabled?: boolean;
  outlined?: boolean;
  block?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  color,
  backgroundColor,
  outlined,
  width,
  height,
  borderRadius,
  size,
  block,
  onClick,
  children,
}) => {
  return (
    <StyledButton
    size={size}
    backgroundColor={backgroundColor}
    color={color}
    outlined={outlined}
    borderRadius={borderRadius}
    block
    >{children}</StyledButton>
  );
};

Button.defaultProps = {
  size: 'default'
};

