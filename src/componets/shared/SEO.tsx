import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEO = ({ 
  title = "Cinctamore - A Pattern of Good Works",
  description = "Cinctamore is a global business collaborator and solutions finder, specializing in Architecture, Urban Design, Engineering & Construction, Trading & Investment, and Multimedia.",
  keywords = "architecture, urban design, construction, digital fabrication, Ghana, Africa, design, engineering",
  image = "/assets/img/CINCTAMORE_LOGO.png",
  url = "https://cinctamore.com",
  type = "website",
  author = "Cinctamore",
  publishedTime = "",
  modifiedTime = "",
  section = "",
  tags = []
}: SEOProps) => {
  useEffect(() => {
    document.title = title.includes("Cinctamore") ? title : `${title} | Cinctamore`;

    const setMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name='${name}']`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    setMeta('description', description);
    setMeta('keywords', keywords);
    setMeta('author', author);
    setMeta('robots', 'index, follow');
    setMeta('language', 'English');
    setMeta('revisit-after', '7 days');
    setMeta('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph
    const setOg = (property: string, content: string) => {
      let element = document.querySelector(`meta[property='${property}']`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    setOg('og:type', type);
    setOg('og:url', url);
    setOg('og:title', title);
    setOg('og:description', description);
    setOg('og:image', image);

    // Twitter
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:url', url);
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', image);

    // Article-specific
    if (publishedTime) setOg('article:published_time', publishedTime);
    if (modifiedTime) setOg('article:modified_time', modifiedTime);
    if (section) setOg('article:section', section);
    if (tags.length > 0) setOg('article:tag', tags.join(', '));

    // Canonical
    let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);

    // Structured Data
    let script: HTMLScriptElement | null = document.querySelector("script[type='application/ld+json']");
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      url,
      name: title,
      author: { "@type": "Organization", name: author },
      description,
      image
    });
  }, [title, description, keywords, image, url, type, author, publishedTime, modifiedTime, section, tags]);

  return null;
};

export default SEO;