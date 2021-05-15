import styled from 'styled-components'
import {ButtonProps} from './index'

export const StyledButton = styled.button`
  padding: ${({size}: ButtonProps) => 
  size === 'sm' ? '.5rem 1.3rem' : size === 'large' ? '.9rem 1.8rem' : size === 'default' ? '.7rem 1.5rem' : ''};
  background: ${({backgroundColor, outlined}: ButtonProps) => 
  outlined ? 'transparent' : backgroundColor};
  border-radius: ${({borderRadius}: ButtonProps) => borderRadius ? `${borderRadius}px` : '4px'}; 
  color: ${({color}: ButtonProps) => color };
  border: ${({outlined, backgroundColor}: ButtonProps)=> 
  outlined ? `1px solid ${backgroundColor}}` : 'none'};
  font-weight: bold;
  width: ${({block}: ButtonProps) => block ? '100%' : ''};


  &:hover {
    filter: grayscale(.5);
    background: ${({backgroundColor, outlined}: ButtonProps) =>  
    outlined ? backgroundColor : ''};
    cursor: pointer;
  }
`;