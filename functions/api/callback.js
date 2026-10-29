export async function onRequestGet(context) {
  const { searchParams } = new URL(context.request.url);
  const code = searchParams.get('code');
  const clientId = context.env.GITHUB_CLIENT_ID;
  const clientSecret = context.env.GITHUB_CLIENT_SECRET;

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
  });
  const { access_token } = await tokenRes.json();

  const html = `
    <script>
      window.opener.postMessage(
        'authorization:github:success:${JSON.stringify({ token: access_token, provider: "github" })}',
        window.location.origin
      );
      window.close();
    </script>
  `;
  return new Response(html, { headers: { 'Content-Type': 'text/html' } });
}
