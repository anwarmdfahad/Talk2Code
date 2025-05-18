/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverBuildPath: "functions/[[path]].js",  // serverless function ka output path
  serverModuleFormat: "esm",                 // Cloudflare ya Vercel ke liye esm recommended
  serverPlatform: "neutral",                 // neutral for serverless platforms
  future: {
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true,
    v2_meta: true,
    v2_routeConvention: true,
  },
};
