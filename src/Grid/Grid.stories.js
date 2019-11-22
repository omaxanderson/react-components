import React from 'react';
import { storiesOf } from '@storybook/react';
import Grid from './Grid';
import GridColumn from "../GridColumn";

const stories = storiesOf('Components/Grid', module);

stories.add('Default', () => (
    <Grid>
        <GridColumn col={6} offset={3}>
            <div style={{ backgroundColor: 'red' }}>Hello!</div>
        </GridColumn>
    </Grid>
));
