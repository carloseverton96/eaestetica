
Recomendação: Use uma única imagem de 800×1067 px (3:4) em formato WebP (ou JPG com boa atualização).

Checklist final antes do deploy

npm run build gera dist sem erros.

package.json tem o script "build": "vite build".

Repositório (main) push no GitHub.

No Netlify, Build command = npm run build, Publish = dist (ou use netlify deploy).

Se usar rotas cliente, inclua _redirects ou netlify.toml.




npm run build
npm run deploy