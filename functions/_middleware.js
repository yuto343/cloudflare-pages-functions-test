import cloudflareAccessPlugin from "@cloudflare/pages-plugin-cloudflare-access";

export const onRequest = cloudflareAccessPlugin({
  domain: "cf-pages-fn-test-pages.cloudflareaccess.com",
  aud: "421b24df20241848749cfdf13b49630988247928ac91e5754ecc2534a1ed9df2",
});
