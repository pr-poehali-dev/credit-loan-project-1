import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: "article" | "website";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

const SEOHead = ({
  title,
  description,
  keywords,
  url = "https://poehali.dev",
  image = "/og-image.jpg",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Поехали.dev",
  section,
  tags = [],
}: SEOHeadProps) => {
  const fullTitle = `${title} | Поехали.dev - Кредиты и Банковские Продукты`;
  const fullUrl = url.startsWith("http") ? url : `https://poehali.dev${url}`;
  const fullImage = image.startsWith("http") ? image : `https://poehali.dev${image}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "WebPage",
    headline: title,
    description: description,
    url: fullUrl,
    image: fullImage,
    ...(type === "article" && {
      author: {
        "@type": "Organization",
        name: author,
      },
      publisher: {
        "@type": "Organization",
        name: "Поехали.dev",
        logo: {
          "@type": "ImageObject",
          url: "https://poehali.dev/logo.png",
        },
      },
      datePublished: publishedTime,
      dateModified: modifiedTime || publishedTime,
      ...(section && { articleSection: section }),
      ...(tags.length > 0 && { keywords: tags.join(", ") }),
    }),
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Поехали.dev" />
      <meta property="og:locale" content="ru_RU" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Article specific meta tags */}
      {type === "article" && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;