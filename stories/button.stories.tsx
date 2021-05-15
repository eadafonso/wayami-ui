import React from 'react'
import {storiesOf} from '@storybook/react'
import {Button} from '../src'

storiesOf('Button', module)
.add('Default',()=> 
<Button size='large'
backgroundColor='#1476E6'
color='#fff'
>Teste</Button>)
.add('Outlined',()=>
<Button
backgroundColor='#ff00fc'
color='#fff'
outlined
width={100}
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
