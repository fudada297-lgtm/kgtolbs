export default {
  async fetch(request, env) {
    try {
      const response = await env.ASSETS.fetch(request);
      if (response.status === 404) {
        return new Response(notFoundHtml(request.url), {
          status: 404,
          headers: { "Content-Type": "text/html;charset=UTF-8" },
        });
      }
      return response;
    } catch (e) {
      return new Response(notFoundHtml(request.url), {
        status: 404,
        headers: { "Content-Type": "text/html;charset=UTF-8" },
      });
    }
  }
};

function notFoundHtml(url) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>404 - Page Not Found | kgtolbs.cc</title>
<style>
  body { font-family:"Segoe UI",system-ui,sans-serif; display:flex; justify-content:center; align-items:center; min-height:100vh; margin:0; background:#f8f9fa; color:#2b2d42; }
  .box { text-align:center; padding:2rem; }
  h1 { font-size:4rem; margin:0; color:#319795; }
  p { opacity:0.6; margin:1rem 0; }
  a { color:#319795; }
</style>
</head>
<body>
<div class="box">
  <h1>404</h1>
  <p>Page not found: <code>${url}</code></p>
  <p><a href="/">Back to KG to LBS Converter</a></p>
</div>
</body>
</html>`;
}
