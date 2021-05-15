import styled from 'styled-components'

import {socialMediaProps} from './index'

export const StyledSocialMedia = styled.button`
  width: ${({size} : socialMediaProps) =>
   size === 'default' ? '60px' : size === 'sm' && '40px'};
  height: ${({size} : socialMediaProps) => 
  size === 'default' ? '60px' : size === 'sm' && '40px'
  };
  border-radius: ${({size}: socialMediaProps) => 
  size === 'default' ? '50px' : size === 'sm' && '30px'
  };
  border: none;
  outline: none;
  box-shadow: 3px 3px 15px rgba(0,0,0,0.2);
  overflow: hidden;
  text-align: center;
  margin-left: .6rem;
  transition: all 0.7s ease;
  &:hover {
    width: inherit;
    padding-right: 1rem;
    transition: all 0.3s ease-out;
  }

  .icon {
    width: ${({size} : socialMediaProps) =>
    size === 'default' ? '60px' : size === 'sm' && '40px'};
    height: ${({size} : socialMediaProps) => 
    size === 'default' ? '60px' : size === 'sm' && '40px'
    };
    border-radius: ${({size}: socialMediaProps) => 
    size === 'default' ? '50px' : size === 'sm' && '30px'};
    font-size: ${({fontSize, size}: socialMediaProps) => 
    size === 'sm' ? fontSize || '1rem' : size === 'default' ? fontSize || '1.5rem' : '1.5rem'};
    font-weight: ${({fontWeight}: socialMediaProps) => fontWeight ? fontWeight : '500'};
    line-height: ${({size} : socialMediaProps) =>
    size === 'default' ? '60px' : size === 'sm' && '40px'};
    display: inline-block;
    color: ${({backgroundOnHover, hover}: socialMediaProps) => 
    backgroundOnHover !== '#fff' && hover === false ? '#333' : '#fff'};
    background-color: ${({hover, backgroundOnHover, backgroundColor}: socialMediaProps) => 
      hover ? backgroundOnHover : backgroundColor
    };
    border: none;
  }

  .link {
    font-size: ${({fontSize,size}: socialMediaProps) => 
    size === 'sm' ? fontSize || '1rem' : size === 'default' ? fontSize || '1.5rem' : '1.5rem'
    };
    font-weight: ${({fontWeight}: socialMediaProps) => fontWeight ? fontWeight : '700'};
    line-height: ${({size} : socialMediaProps) =>
    size === 'default' ? '60px' : size === 'sm' && '40px'};
    display: inline-block;
    padding-left: 1rem;
  }
`;