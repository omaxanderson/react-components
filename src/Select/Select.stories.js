import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './Select';

const stories = storiesOf('Components/Select', module);

stories.add('Default', () => (
   <Select>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
      <option>Option 4</option>
   </Select>
));

stories.add('With Default value', () => (
    <Select value={4}>
        <option value={1}>Option 1</option>
        <option value={2}>Option 2</option>
        <option value={3}>Option 3</option>
        <option value={4}>Option 4</option>
    </Select>
));
