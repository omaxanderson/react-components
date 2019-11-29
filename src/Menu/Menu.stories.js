import React from 'react';
import { storiesOf } from '@storybook/react';
import Menu from './Menu';

const stories = storiesOf('Components/Menu', module);

stories.add('Default', () => (
    <Menu
        options={[
            'Max',
            'Erik',
            'Dave',
            'Brandon',
            'Wyatt',
        ]}
        onClick={(label => console.log(label, 'clicked'))}
    />
));

