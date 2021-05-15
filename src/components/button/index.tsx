import React, {ReactNode} from 'react';
import {StyledButton} from './styles'
export type componentSize = 'default' | 'sm' | 'large'
import { margin } from '../../types'

export interface GeneralProps {
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

export interface ButtonProps extends GeneralProps,margin {
}

export const Button: React.FC<ButtonProps> = ({
  color,
  backgroundColor,
  outlined,
  width,
  height,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
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
    width={width}
    margin={margin}
    marginTop={marginTop}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    >{children}</StyledButton>
  );
};

Button.defaultProps = {
  size: 'default'
};

