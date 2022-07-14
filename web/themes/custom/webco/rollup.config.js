// Import rollup plugins
import { nodeResolve } from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

// const { nodeResolve } = require('@rollup/plugin-node-resolve');

export default {
  input: {
    'hello-world': './components/hello-world/hello-world.js',
    accordion: './components/accordion/accordion.js',
    'accordion-item': './components/accordion/accordion-item.js'
  },
  plugins: [
    nodeResolve({
      browser: true,
      extensions: ['.js'],
    }),
    babel({
      babelHelpers: 'inline',
      extensions: ['.js'],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        ['@babel/plugin-proposal-decorators', {decoratorsBeforeExport: true}],
      ],
    }),
  ],
  output: {
    dir: 'build',
  },
  preserveEntrySignatures: 'strict',
};
