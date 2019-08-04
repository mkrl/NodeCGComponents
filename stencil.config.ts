import { Config } from '@stencil/core';

if (process.env.NODE_ENV === 'production') {
  console.log("e")
} else {
  console.log("a")
}

export const config: Config = {
  namespace: 'nodecgcomponents',
  enableCache: false,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
