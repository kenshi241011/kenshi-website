// Markdown for agents: a request for the home page that prefers text/markdown (Accept header)
// gets index.md instead of the HTML. Browsers keep getting the HTML page.
export default async (request, context) => {
  const accept = request.headers.get('accept') || '';
  if (!/\btext\/markdown\b/i.test(accept)) {
    const response = await context.next();
    response.headers.append('Vary', 'Accept');
    return response;
  }

  const source = await fetch(new URL('/index.md', request.url));
  const text = await source.text();
  return new Response(text, {
    status: source.ok ? 200 : 502,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Vary': 'Accept',
      // Rough token estimate (about 4 characters per token), as Cloudflare's Markdown for Agents reports.
      'x-markdown-tokens': String(Math.ceil(text.length / 4)),
      'Cache-Control': 'public, max-age=300',
    },
  });
};

export const config = { path: ['/', '/index.html'] };
