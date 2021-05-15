import React, { ReactNode , useState} from 'react'
import {StyledSocialMedia} from './styles'

export type  componentSize = 'sm' | 'default'

export interface socialMediaProps {
  size?: componentSize;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  children?: ReactNode;
  backgroundOnHover?: string;
  hover?: boolean;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
}

export const SocialMedia: React.FC<socialMediaProps> = ({
  size,
  backgroundColor, 
  backgroundOnHover,
  color,
  fontSize,
  fontWeight,
  children,
  onMouseOut,
  onMouseOver,
  hover,
}) => {
  const [Hover, setHover] = useState(false)
  return (
    <StyledSocialMedia
    size={size}
    fontSize={fontSize}
    fontWeight={fontWeight}
    backgroundColor={backgroundColor}
    backgroundOnHover={backgroundOnHover}
    color={color}
    onMouseOver={() =>{
      setHover(!hover)
      console.log('a')} }
    onMouseOut={()=> {
      setHover(false)
       console.log('o')}}
    hover={Hover}
    >
      {children}
    </StyledSocialMedia>
  )
};

SocialMedia.defaultProps = {
  backgroundColor: '#fff',
  size: 'default'
};