import React from 'react'
import {storiesOf} from '@storybook/react'
import {CheckBox} from '../src'

storiesOf('CheckBox', module)
.add('Default',()=> 
<>
<CheckBox
name='sexo'
value='male'
label='click me'
labelColor='#fff'
labelFontWeight='700'
labelFontSize='1rem'
color='#fff'
backgroundColor='teal'/>
</>)
.add('Outlined',()=> 
<>
<CheckBox
name='sexo'
value='male'
label='click me'
labelColor='#fff'
labelFontWeight='700'
labelFontSize='1rem'
outlined
backgroundColor='teal'/>
</>)
.add('NoBordered',()=> 
<>
<CheckBox
name='sexo'
value='male'
label='click me'
labelColor='#fff'
labelFontWeight='700'
labelFontSize='1rem'
noBordered
backgroundColor='teal'/>
</>)
