import React from 'react';
import { shallow } from 'enzyme';

import { Section } from './Section';
import * as Types from './types';

const titleProp: string = 'Test title';
const props: Types.SectionProps = {
    title: titleProp,
};

describe('Section component', () => {
    const wrapper = shallow(<Section {...props} />);

    it('should has class Section', () => {
        expect(wrapper.is('.Section')).toBe(true);
    });

    it('should return a title passed by prop title', () => {
        expect(wrapper.text()).toBe(titleProp);
    });
})
