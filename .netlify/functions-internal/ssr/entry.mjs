import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Cbu_1x0D.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_n4z9Q0zC.mjs');
const _page1 = () => import('./chunks/_seller__CwOP6Qoa.mjs');
const _page2 = () => import('./chunks/index_Bt0db1Uk.mjs');
const _page3 = () => import('./chunks/index_BGhdpcrE.mjs');
const _page4 = () => import('./chunks/env_aheb_4BZ.mjs');
const _page5 = () => import('./chunks/landing_BdavHV3w.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/contacto/qr/[seller].astro", _page1],
    ["src/pages/index.astro", _page2],
    ["src/pages/contacto/index.astro", _page3],
    ["src/pages/env.d.ts", _page4],
    ["src/pages/landing.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "791d7179-388e-4895-a04e-e725b67b08d4"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
