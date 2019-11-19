import { configure, setAddon, addDecorator } from '@storybook/react';
import infoAddon from '@storybook/addon-info';

setAddon(infoAddon);

const dynamicLoadedStories = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  // Dynamic
  dynamicLoadedStories.keys().map(dynamicLoadedStories);
}

export async function webpack({ config, mode }) {
   config.modules.rules.push({
      test: /\.scss/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
   });
}
configure(loadStories, module);
