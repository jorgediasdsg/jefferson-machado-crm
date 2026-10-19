# Jefferson Machado CRM

Landing page pública para a solução de CRM de Jefferson Machado, voltada a micro e pequenas empresas.

## Rodar localmente

O site é estático e não precisa instalar dependências:

```bash
python3 -m http.server 4173
```

Abra `http://127.0.0.1:4173/` no navegador.

## Validar

```bash
npm test
```

O teste verifica os arquivos públicos, os CTAs de WhatsApp/e-mail, as seções essenciais e os arquivos básicos de SEO.

## Publicação

O repositório é servido pelo GitHub Pages a partir da branch `main`, na raiz do projeto. Os arquivos `sitemap.xml`, `robots.txt`, `llms.txt` e `.nojekyll` ficam na raiz para serem acessíveis diretamente.
