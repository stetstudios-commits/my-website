import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pages: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'STET Studio | Strategic Brand Architecture for Growth-Stage Nigerian Businesses',
    description: 'The architecture firm for brands. STET designs the structures that determine how business is organized, perceived and valued.',
  },
  '/about': {
    title: 'About STET Studio | Strategic Brand Architecture',
    description: 'STET is a brand architecture practice in Ibadan. We design the structures that determine how Nigerian businesses are organized, perceived and valued.',
  },
  '/services': {
    title: 'Services | STET Studio',
    description: 'Brand audit, architecture, identity systems and implementation for growth-stage Nigerian businesses.',
  },
  '/method': {
    title: 'The Method | STET Studio',
    description: 'The STET five-phase method: discovery, positioning, architecture, identity and implementation.',
  },
  '/work': {
    title: 'Work | STET Studio',
    description: 'Selected projects and strategic explorations from STET Studio.',
  },
  '/contact': {
    title: 'Contact | STET Studio',
    description: 'Start a conversation with STET. Tell us about the business and the brand problem you need structured.',
  },
};

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  const selector = `meta[${attr}="${name}"]`;
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute('content', content);
}

const PageMeta = () => {
  const { pathname } = useLocation();
  const page = pages[pathname] ?? pages['/'];
  const url = `https://stet.ng${pathname === '/' ? '' : pathname}`;

  useEffect(() => {
    document.title = page.title;
    setMeta('title', page.title);
    setMeta('description', page.description);
    setMeta('og:title', page.title, 'property');
    setMeta('og:description', page.description, 'property');
    setMeta('og:url', url, 'property');
    setMeta('twitter:title', page.title);
    setMeta('twitter:description', page.description);
    setMeta('twitter:url', url);
    const canonical = document.head.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', url);
  }, [pathname, page.title, page.description, url]);

  return null;
};

export default PageMeta;
