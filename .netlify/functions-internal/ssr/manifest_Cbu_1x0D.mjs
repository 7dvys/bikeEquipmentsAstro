import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_DjV9rk6S.mjs';
import 'cssesc';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"contacto/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contacto","isIndex":true,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto/index.astro","pathname":"/contacto","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"env.d","links":[],"scripts":[],"styles":[],"routeData":{"route":"/env.d","isIndex":false,"type":"endpoint","pattern":"^\\/env\\.d\\/?$","segments":[[{"content":"env.d","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/env.d.ts","pathname":"/env.d","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"landing/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/landing","isIndex":false,"type":"page","pattern":"^\\/landing\\/?$","segments":[[{"content":"landing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/landing.astro","pathname":"/landing","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.bikeequipments.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/ryn/bikeequipmentsv2/src/pages/contacto/index.astro",{"propagation":"none","containsHead":true}],["/home/ryn/bikeequipmentsv2/src/pages/contacto/qr/[seller].astro",{"propagation":"none","containsHead":true}],["/home/ryn/bikeequipmentsv2/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/ryn/bikeequipmentsv2/src/pages/landing.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_BO84YAkJ.mjs","\u0000@astrojs-manifest":"manifest_Cbu_1x0D.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_n4z9Q0zC.mjs","\u0000@astro-page:src/pages/contacto/qr/[seller]@_@astro":"chunks/_seller__CwOP6Qoa.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_Bt0db1Uk.mjs","\u0000@astro-page:src/pages/contacto/index@_@astro":"chunks/index_BGhdpcrE.mjs","\u0000@astro-page:src/pages/env.d@_@ts":"chunks/env_aheb_4BZ.mjs","\u0000@astro-page:src/pages/landing@_@astro":"chunks/landing_BdavHV3w.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BmzITCbm.js","@astrojs/react/client.js":"_astro/client.CwcGZGJy.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/hand-stars.xXZTx_yD.svg","/_astro/check-circle.lg7ugrhD.svg","/_astro/medal.BisaRw1v.svg","/_astro/whatsApp.C-9goYgP.svg","/_astro/logoBlack.DNivLyJ0.svg","/_astro/envelope.Bb_vUAqh.svg","/_astro/index.By_TC52V.css","/data.json","/favicon.svg","/header-blue-purple.jpg","/logoBlack.svg","/logoWhite.svg","/_astro/client.CwcGZGJy.js","/_astro/hoisted.BmzITCbm.js","/icons/check-circle.svg","/icons/envelope.svg","/icons/hand-stars.svg","/icons/locationDot.svg","/icons/medal.svg","/icons/whatsApp.svg","/images/3-motos.jpg","/images/Repuestos-de-motos.jpg","/images/_tmp_Productos_20217_20240209.xlsx","/images/cascos-shoei.jpg","/images/dainese.webp","/images/pioneira1.webp","/images/pioneiraThumb.webp","/images/shoeiBackground.jpg","/images/utilidades.jpg","/videos/Pioneira-Filme.m4v","/index.html","/contacto/index.html","/env.d","/landing/index.html"],"buildFormat":"directory"});

export { manifest };
