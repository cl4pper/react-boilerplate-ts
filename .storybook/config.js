import { configure } from '@storybook/react';

const components = require.context('@components', true, /\.stories\.tsx$/);

function loadStories() {
	components.keys().forEach((filename) => components(filename));
}

configure(loadStories, module);
