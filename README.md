# Dynasty HQ

Cloudflare Pages starter for a dynasty fantasy sports site with Decap CMS.

## Deploy

1. Connect this repo to Cloudflare Pages.
2. Framework preset: None.
3. Deploy. You'll get a `.pages.dev` URL.

## Decap CMS OAuth

1. Create a GitHub OAuth App:
   - Homepage URL: your `.pages.dev` URL
   - Callback URL: your `.pages.dev` URL
2. In Cloudflare Pages project settings → Environment variables, add:
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET`
3. Update `base_url` in `admin/config.yml` to your actual `.pages.dev` URL.
4. Visit `/admin` to log in and manage posts.

## Structure

- Homepage: Google-style chat placeholder
- Sport pages: NFL, NBA, MLB, NHL rankings
- Posts managed via Decap CMS in `/posts`
