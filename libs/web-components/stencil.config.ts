import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';
const angularValueAccessorBindings: ValueAccessorConfig[] = [];

import {
  angularOutputTarget,
  ValueAccessorConfig,
} from '@stencil/angular-output-target';
export const config: Config = {
  globalStyle: 'src/global/global.scss',
  namespace: 'web-components',
  taskQueue: 'async',
  plugins: [sass()],
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
      copy: [
        { src: 'global' }
      ],
      serviceWorker: null, // disable service workers
    },

    reactOutputTarget({
      componentCorePackage: '@ptg-ui/web-components',
      proxiesFile:
        '../../../libs/web-components-react/src/generated/components.ts',
      includeDefineCustomElements: true,
    }),

    angularOutputTarget({
      componentCorePackage: '@ptg-ui/web-components',
      directivesProxyFile:
        '../../../libs/web-components-angular/src/generated/directives/proxies.ts',
      directivesArrayFile:
        '../../../libs/web-components-angular/src/generated/directives/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
};
