import React from 'react';
import { storiesOf } from '@storybook/react';
import Grid from './Grid';
import Column from "../Column";

const stories = storiesOf('Components/Grid', module);

stories.add('Default', () => (
    <Grid>
        <Column col={6} offset={3}>
            <div style={{ backgroundColor: 'red' }}>Hello!</div>
        </Column>
    </Grid>
));
