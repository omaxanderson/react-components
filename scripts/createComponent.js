const { promises: fs } = require('fs');
const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const componentName = process.argv[2];
if (!componentName) {
    console.log('Component name required.');
    process.exit(0);
}

const baseName = path.join(__dirname, `../src/${componentName}/${componentName}`);

const indexFile = path.join(__dirname, `../src/${componentName}/index.js`);
const indexContent = `import ${componentName} from './${componentName}';

export default ${componentName};`;

const mainFile = `${baseName}.js`;
const mainContent = `import React from 'react';

class ${componentName} extends React.Component {
    render() {
        return null;
    }
}

export default ${componentName};`;

const scssFile = `${baseName}.scss`;
const scssContent = `.${componentName} {

}`;

const storyFile = `${baseName}.stories.js`;
const storyContent = `import React from 'react';
import { storiesOf } from '@storybook/react';
import ${componentName} from './${componentName}';

const stories = storiesOf('Components/${componentName}', module);

stories.add('Default', () => (
    <${componentName} />
));
`;

(async () => {
    console.log('making folder');
    await exec(`mkdir ${path.join(__dirname, `../src/${componentName}`)}`);
    console.log('making main file');
    await exec(`touch ${baseName}.js`);
    console.log('making index file');
    await exec(`touch ${path.join(__dirname, `../src/${componentName}/index.js`)}`);
    console.log('making scss file');
    await exec(`touch ${baseName}.scss`);
    console.log('making story file');
    await exec(`touch ${baseName}.stories.js`);


    console.log('writing to scss file');
    await exec(`echo "${scssContent}" >> ${scssFile}`);
    console.log('writing to index file');
    await exec(`echo "${indexContent}" >> ${indexFile}`);
    console.log('writing to main file');
    await exec(`echo "${mainContent}" >> ${mainFile}`);
    console.log('writing to story file');
    await exec(`echo "${storyContent}" >> ${storyFile}`);
})();
