import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import {StyledCheckBox} from './styles'
export type componentSize = 'default' | 'sm' 

export interface CheckBoxProps {
  color?: string;
  backgroundColor?: string;
  borderRadius?: number;
  size?: componentSize;
  disabled?: boolean;
  outlined?: boolean;
  noBordered?: boolean;
  label?: string;
  labelColor?: string;
  labelFontWeight?: string;
  labelFontSize?: string;
  name?: string,
  value?: string;
  onChange?: () => void;
  onClick?: () => void;
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  color,
  backgroundColor,
  outlined,
  disabled,
  noBordered,
  borderRadius,
  size,
  children,
  labelFontSize,
  labelFontWeight,
  labelColor,
  label,
  name,
  value,
  onClick,
  onChange,
}) => {
  return (
    <StyledCheckBox
    backgroundColor={backgroundColor}
    color={color}
    outlined={outlined}
    borderRadius={borderRadius}
    labelColor={labelColor}
    labelFontWeight={labelFontWeight}
    labelFontSize={labelFontSize}
    name={name}
    value={value}
    noBordered={noBordered}
    disabled={disabled}
    onChange={onChange}
    onClick={()=>{
    console.log(disabled)
    } 
    }
    >
      <input type='checkbox' name={name} value={value} id={name} {...disabled ? disabled : ''}/>
      <label htmlFor={name} >{name}</label>
    </StyledCheckBox>
  );
};

CheckBox.defaultProps = {
  size: 'default',
  backgroundColor: 'teal',
};

