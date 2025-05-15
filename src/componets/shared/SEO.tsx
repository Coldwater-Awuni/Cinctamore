import { Helmet } from 'react-helmet-async';

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
  image = "/assets/img/cinctamore-logo-1.png",
  url = "https://cinctamore.com",
  type = "website",
  author = "Cinctamore",
  publishedTime,
  modifiedTime,
  section,
  tags = []
}: SEOProps) => {
  const siteTitle = title.includes("Cinctamore") ? title : `${title} | Cinctamore`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": url,
    "name": siteTitle,
    "author": {
      "@type": "Organization",
      "name": author
    },
    "description": description,
    "image": image
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Article-specific Meta Tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.length > 0 && <meta property="article:tag" content={tags.join(', ')} />}

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;