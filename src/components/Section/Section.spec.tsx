import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Section } from './Section';
import * as Types from './types';

const titleProp: string = 'Text title';
const subtitleProp: string = 'Text subtitle';

const props: Types.SectionProps = {
    title: titleProp,
    subtitle: subtitleProp,
};

describe('Section:', () => {

    it('should render title', () => {
        const { getByText } = render(<Section {...props} />);
        const component = getByText(props.title);

        expect(component.className).toBe('Section__title');
        expect(component.textContent).toBe(titleProp);
    });

    it('should render subtitle', () => {
        const { getByText } = render(<Section {...props} />);
        const component = getByText(props.subtitle);

        expect(component.className).toBe('Section__text');
        expect(component.textContent).toBe(subtitleProp);
    });

    describe('text element when clicked', () => {
        it('should render Message text', () => {
            const { getByText } = render(<Section {...props} />);
            const component = getByText(props.subtitle);

            fireEvent.click(component);
    
            expect(getByText('Message'));
        });
    });
})
