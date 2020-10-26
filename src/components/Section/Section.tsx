import React, { useState } from 'react';

// STYLE
import './Section.scss';

// TYPES
import * as Types from './types';

const Section = (props: Types.SectionProps) => {
    const [visible, handleVisible] = useState(false);

    const { title, subtitle } = props;
    return (
        <section className="Section">
            <h1 className="Section__title">{title}</h1>
            <p onClick={() => handleVisible(true)} className="Section__text">{subtitle}</p>
            {
                visible &&
                <p onClick={() => handleVisible(false)} className="Section__text">Message</p>
            }
        </section>
    )
}

export {
    Section
}