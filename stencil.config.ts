import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-storybook-html',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },

    reactOutputTarget({
      componentCorePackage: 'outsystems-stencil',
      proxiesFile:
        '/Users/bernardo.cardoso/nx-stencil/packages/core-components-react/src/generated/components.ts',
      includeDefineCustomElements: true,
    }),
  ],
  plugins: [
    sass()
  ],

};
