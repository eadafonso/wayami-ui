import React from 'react'
import {storiesOf} from '@storybook/react'
import {SocialMedia} from '../src'

storiesOf('SocialMedia', module)
.add('Default',()=> 
<>
<SocialMedia
backgroundOnHover='teal'>
  <span className='icon'>f</span>
  <span className='link'>wayami ui kit</span>
</SocialMedia>
<SocialMedia
  backgroundOnHover='teal'>
  <span className='icon'>f</span>
  <span className='link'>wayami ui kit</span>
</SocialMedia>
</>)
.add('sizes',() => 
  <>
  <SocialMedia
  size='sm'
  backgroundOnHover='orange'>
  <span className='icon'>sm</span>
  <span className='link'>wayami ui kit - sm</span>
  </SocialMedia>
  <SocialMedia
  backgroundOnHover='teal'>
  <span className='icon'>D</span>
  <span className='link'>wayami ui kit - default</span>
  </SocialMedia>
</>
)

