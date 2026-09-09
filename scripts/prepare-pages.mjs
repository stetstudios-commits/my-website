import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';

const dist = 'dist';
const origin = 'https://stet.ng';

const routes = [
  {
    path: 'about',
    title: 'About STET Studio | Strategic Brand Architecture',
    description: 'STET is a brand architecture practice in Ibadan. We design the structures that determine how Nigerian businesses are organized, perceived and valued.',
  },
  {
    path: 'services',
    title: 'Services | STET Studio',
    description: 'Brand audit, architecture, identity systems and implementation for growth-stage Nigerian businesses.',
  },
  {
    path: 'method',
    title: 'The Method | STET Studio',
    description: 'The STET five-phase method: discovery, positioning, architecture, identity and implementation.',
  },
  {
    path: 'work',
    title: 'Work | STET Studio',
    description: 'Selected projects and strategic explorations from STET Studio.',
  },
  {
    path: 'contact',
    title: 'Contact | STET Studio',
    description: 'Start a conversation with STET. Tell us about the business and the brand problem you need structured.',
  },
];

function stamp(html, route) {
  const url = `${origin}/${route.path}`;
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`)
    .replace(/<meta name="title" content="[^"]*" \/>/, `<meta name="title" content="${route.title}" />`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${route.description}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${route.title}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${route.description}" />`)
    .replace(/<meta name="twitter:url" content="[^"]*" \/>/, `<meta name="twitter:url" content="${url}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${route.title}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${route.description}" />`);
}

const source = readFileSync(join(dist, 'index.html'), 'utf8');
copyFileSync(join(dist, 'index.html'), join(dist, '404.html'));

for (const route of routes) {
  const out = join(dist, route.path, 'index.html');
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, stamp(source, route));
  console.log('wrote', out);
}
