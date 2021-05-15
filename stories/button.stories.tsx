import React from 'react'
import {storiesOf} from '@storybook/react'
import {Button} from '../src/components/button'

storiesOf('Button', module)
.add('Default',()=> 
<Button size='large'
backgroundColor='#04DE63'
color='#fff'
>Teste</Button>)
.add('Outlined',()=>
<Button
backgroundColor='#ff00fc'
color='#fff'
outlined
>Teste</Button>)
.add('sizes', () => (
  <>
  <Button
  size='sm'
  backgroundColor='#04DE64'
  color='#fff'
  >sm</Button> 
  
  <Button
  backgroundColor='teal'
  color='#fff'
  >default</Button>
  <Button
  size='large'
  backgroundColor='#04DE64'
  color='#fff'
  >large</Button>
  </>
)
)
