# Generate the real .env with:  op inject -i .env.tpl -o .env
DOMAIN=docs.boser-guyon.org
CLOUDFLARE_PROJECT_NAME=blog-docs

CLOUDFLARE_API_TOKEN={{ op://boser-guyon.org/Cloudflare Pages/token }}
CLOUDFLARE_ACCOUNT_ID={{ op://boser-guyon.org/Cloudflare Pages/account_id }}
