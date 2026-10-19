const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

test('public landing page assets exist', () => {
  for (const file of ['index.html', 'styles.css', 'script.js', 'favicon.svg', 'social-preview.png', '.nojekyll', 'sitemap.xml', 'robots.txt', 'llms.txt']) {
    assert.equal(fs.existsSync(path.join(root, file)), true, `missing ${file}`);
  }
});

test('landing page exposes the conversion path and core sections', () => {
  const html = read('index.html');

  assert.match(html, /<title>[^<]*CRM[^<]*Jefferson Machado/i);
  assert.match(html, /<main\b/);
  assert.match(html, /property=["']og:image["'][^>]+social-preview\.png/);
  assert.match(html, /property=["']og:image:width["'][^>]+1200/);
  assert.match(html, /property=["']og:image:height["'][^>]+630/);
  assert.match(html, /name=["']twitter:image["'][^>]+social-preview\.png/);
  for (const id of ['solucao', 'beneficios', 'como-funciona', 'recursos', 'duvidas', 'contato']) {
    assert.match(html, new RegExp(`id=["']${id}["']`), `missing section ${id}`);
  }
  assert.match(html, /https:\/\/wa\.me\/5548991138058/);
  assert.match(html, /mailto:jeffersonmachado81@gmail\.com/);
  assert.match(html, /rel=["']icon["'][^>]+favicon\.svg/);
  assert.match(html, /href=["']styles\.css["']/);
  assert.match(html, /src=["']script\.js["']/);
});

test('SEO helper files point to the public GitHub Pages URL', () => {
  const publicUrl = 'https://jorgediasdsg.github.io/jefferson-machado-crm/';

  assert.match(read('sitemap.xml'), new RegExp(publicUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  assert.match(read('robots.txt'), /Sitemap:\s+https:\/\/jorgediasdsg\.github\.io\/jefferson-machado-crm\/sitemap\.xml/);
  assert.match(read('llms.txt'), /Jefferson Machado/i);
});
