// File generated by https://github.com/brillout/vite-plugin-import-build
{
  const { setImportBuildGetters } = require('../../.yarn/__virtual__/vite-plugin-ssr-virtual-298f6ec634/0/cache/vite-plugin-ssr-npm-0.4.131-0ba65a7c08-8b6298fbe9.zip/node_modules/vite-plugin-ssr/dist/cjs/node/runtime/globalContext/loadImportBuild.js');
  setImportBuildGetters({
    pageFiles: () => import('./pageFiles.mjs'),
    clientManifest: () => require('../client/manifest.json'),
    pluginManifest: () => require('../client/vite-plugin-ssr.json'),
  });
}