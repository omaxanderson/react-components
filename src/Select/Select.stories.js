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
