export default {
    async fetch(request, env, ctx) {
        if (request.headers.get('Upgrade') !== 'websocket') {
            return new Response('Access Denied', { status: 403 });
        }
        let url = new URL(request.url);
        return fetch(new Request("https://snippets.neib.cn" + url.pathname + url.search, request));
    }
};