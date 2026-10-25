globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { t as FastResponse } from "./_libs/srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"ae-hLVBrSrDdpIw3Xl0dJPRkupPepQ\"",
		"mtime": "2026-08-03T12:08:14.875Z",
		"size": 174,
		"path": "../public/robots.txt"
	},
	"/assets/agri-companion-DYDByVuS.jpg": {
		"type": "image/jpeg",
		"etag": "\"95aa-+JVUPbhVyJ07QnmS1UGBQnib/HE\"",
		"mtime": "2026-10-25T17:39:52.938Z",
		"size": 38314,
		"path": "../public/assets/agri-companion-DYDByVuS.jpg"
	},
	"/assets/ChhatroBondhu-f1VLWV5b.jpg": {
		"type": "image/jpeg",
		"etag": "\"c6e1-lcxggIul20clGQFWJ4lIsGqFkSg\"",
		"mtime": "2026-10-25T17:39:52.923Z",
		"size": 50913,
		"path": "../public/assets/ChhatroBondhu-f1VLWV5b.jpg"
	},
	"/assets/Django-BG8k_5Hm.jpg": {
		"type": "image/jpeg",
		"etag": "\"10e22-Le0ma8t5taroB8NrG9lDtxvOdbc\"",
		"mtime": "2026-10-25T17:39:52.923Z",
		"size": 69154,
		"path": "../public/assets/Django-BG8k_5Hm.jpg"
	},
	"/assets/GDG-B82PvfIH.jpeg": {
		"type": "image/jpeg",
		"etag": "\"dbdf-HNsuxBHE1z7pTtcPybov+G7hRrs\"",
		"mtime": "2026-10-25T17:39:52.929Z",
		"size": 56287,
		"path": "../public/assets/GDG-B82PvfIH.jpeg"
	},
	"/assets/earth-texture-YE3PBysf.jpg": {
		"type": "image/jpeg",
		"etag": "\"4206e-qjiSa9hhyKRqHCfl7QqJActuqmw\"",
		"mtime": "2026-10-25T17:39:52.938Z",
		"size": 270446,
		"path": "../public/assets/earth-texture-YE3PBysf.jpg"
	},
	"/assets/hackverse-2026-DqcwfD7o.jpg": {
		"type": "image/jpeg",
		"etag": "\"7cc7-B99KZI+aKloEsox40owudR7QGdQ\"",
		"mtime": "2026-10-25T17:39:52.938Z",
		"size": 31943,
		"path": "../public/assets/hackverse-2026-DqcwfD7o.jpg"
	},
	"/assets/JISU-DOGpVk3E.jpg": {
		"type": "image/jpeg",
		"etag": "\"ecba-7eaUAO5evpqUljhZFhiQshRz7sM\"",
		"mtime": "2026-10-25T17:39:52.932Z",
		"size": 60602,
		"path": "../public/assets/JISU-DOGpVk3E.jpg"
	},
	"/assets/NPTEL-BPaV8Llw.jpg": {
		"type": "image/jpeg",
		"etag": "\"ced0-6aWW9xaNFiubsD7rlFipDep0vms\"",
		"mtime": "2026-10-25T17:39:52.932Z",
		"size": 52944,
		"path": "../public/assets/NPTEL-BPaV8Llw.jpg"
	},
	"/assets/Open_Source-Bh-qpiXW.jpg": {
		"type": "image/jpeg",
		"etag": "\"14f6d-dyt9llcK5EUZWlH+dO4OYuQbSIc\"",
		"mtime": "2026-10-25T17:39:52.935Z",
		"size": 85869,
		"path": "../public/assets/Open_Source-Bh-qpiXW.jpg"
	},
	"/assets/index-oDkR78I6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"53309-yTz+jfb+j89biuh+Qz4Wjk0Q6wg\"",
		"mtime": "2026-10-25T17:39:52.916Z",
		"size": 340745,
		"path": "../public/assets/index-oDkR78I6.js"
	},
	"/assets/EliteCoder-BqSiU8HT.jpg": {
		"type": "image/jpeg",
		"etag": "\"45763-vdR1q3TRb9rMMvjnbV9WqThWHQo\"",
		"mtime": "2026-10-25T17:39:52.929Z",
		"size": 284515,
		"path": "../public/assets/EliteCoder-BqSiU8HT.jpg"
	},
	"/assets/ServiceNow-DCJNRNnH.jpg": {
		"type": "image/jpeg",
		"etag": "\"dd08-llgfiORb9aAooL7zBvRhOodpl/c\"",
		"mtime": "2026-10-25T17:39:52.936Z",
		"size": 56584,
		"path": "../public/assets/ServiceNow-DCJNRNnH.jpg"
	},
	"/assets/routes-DwiZ1aM6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3642c-2jCIqL2d0ceS2XpcEAS4h8zDSro\"",
		"mtime": "2026-10-25T17:39:52.916Z",
		"size": 222252,
		"path": "../public/assets/routes-DwiZ1aM6.js"
	},
	"/assets/SIH-C9o4FY4S.jpg": {
		"type": "image/jpeg",
		"etag": "\"7508-6Rkf8iAV6RKwP0SorYI+YmGB7F0\"",
		"mtime": "2026-10-25T17:39:52.936Z",
		"size": 29960,
		"path": "../public/assets/SIH-C9o4FY4S.jpg"
	},
	"/assets/Snehasish-D00w0_l7.jpeg": {
		"type": "image/jpeg",
		"etag": "\"18552-KGhXnOpq6Wf2ZNV+MVyVeWUQgr4\"",
		"mtime": "2026-10-25T17:39:52.937Z",
		"size": 99666,
		"path": "../public/assets/Snehasish-D00w0_l7.jpeg"
	},
	"/assets/RESUME-BbZOBQMi.pdf": {
		"type": "application/pdf",
		"etag": "\"7ab12-jHESHKVudgajdQJHtegSJ0Zr2WE\"",
		"mtime": "2026-10-25T17:39:52.935Z",
		"size": 502546,
		"path": "../public/assets/RESUME-BbZOBQMi.pdf"
	},
	"/assets/styles-C9Z95QZI.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"12beb-IUXHIumHkFnz+i+CnQmBtx06CgM\"",
		"mtime": "2026-10-25T17:39:52.941Z",
		"size": 76779,
		"path": "../public/assets/styles-C9Z95QZI.css"
	},
	"/assets/TMNT-CoXLJkMf.jpg": {
		"type": "image/jpeg",
		"etag": "\"8aa1-neVs7KLqRVRX70mkXiIW9WgDLco\"",
		"mtime": "2026-10-25T17:39:52.938Z",
		"size": 35489,
		"path": "../public/assets/TMNT-CoXLJkMf.jpg"
	},
	"/assets/three.module-DZlTWqWi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b0ded-7IJyl8cEU4FcXT+xTisD57xZ5hY\"",
		"mtime": "2026-10-25T17:39:52.923Z",
		"size": 724461,
		"path": "../public/assets/three.module-DZlTWqWi.js"
	},
	"/assets/OSSI-DZpyclXs.png": {
		"type": "image/png",
		"etag": "\"1052ad-99JJ1yC65J2DzJhmQ9CwFbyEFWc\"",
		"mtime": "2026-10-25T17:39:52.934Z",
		"size": 1069741,
		"path": "../public/assets/OSSI-DZpyclXs.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_CvYdDI = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_CvYdDI
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
