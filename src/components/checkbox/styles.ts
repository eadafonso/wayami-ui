import styled from 'styled-components'
import {CheckBoxProps} from './index'

export const StyledCheckBox = styled.div`
  vertical-align: bottom;
  input { 
    display: none;
  }

  input[type=checkbox]:checked + label {
    &:before {
      color: ${({backgroundColor, outlined, color}: CheckBoxProps) => 
      backgroundColor && outlined ? backgroundColor : color  || '#fff'
      };
      background-color: ${({noBordered, backgroundColor, outlined}: CheckBoxProps) => 
      noBordered || outlined ? 'transparent' : backgroundColor
      };
      border : ${({noBordered, outlined, backgroundColor}: CheckBoxProps) => 
      noBordered ? 'none' : outlined && `1px solid ${backgroundColor}`};
    }
  }

  input[type=checkbox] + label {
      &:disabled {
        background-color: '';
        color: '';
        border: '';
      }
      font-weight: ${({labelFontWeight}: CheckBoxProps) => labelFontWeight};
      font-size: ${({labelFontSize}: CheckBoxProps) => labelFontSize};     
      color: ${({labelColor}: CheckBoxProps) => labelColor};
      vertical-align: bottom;
      &:before {
        content: "\\2714";
        border: ${({backgroundColor}: CheckBoxProps) => `1px solid ${backgroundColor}`};
        border-radius: 4px;
        padding: 0.1em;
        width: 1em;
        height: 1em;
        box-sizing: border-box;
        cursor: pointer;
        color: transparent;
        margin-right: .5rem;
      }
    }

    
`; 


