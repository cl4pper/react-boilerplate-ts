import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { Section } from './Section';
import * as Types from './types';

const stories = storiesOf('Section', module);
stories.addDecorator(withKnobs);

const props: Types.SectionProps = {
    title: 'Section title comes here'
}

stories.add('Default', () => (
    <Section title={text('title', props.title, null)} />
));