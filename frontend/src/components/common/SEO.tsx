import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'PT. Pelayaran Nasional Radhika Bahari Nusantara'
const SITE_URL = 'https://rbn-group.com'
const DEFAULT_DESCRIPTION =
  'PT. Pelayaran Nasional Radhika Bahari Nusantara — A leading shipping and domestic cargo logistics company based in Surabaya, East Java, Indonesia.'
const DEFAULT_IMAGE = `${SITE_URL}/logo-landscape-transparent.png`

interface BreadcrumbItem {
  name: string
  url: string
}

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  image?: string
  type?: 'website' | 'article'
  noindex?: boolean
  keywords?: string
  breadcrumbs?: BreadcrumbItem[]
  publishedTime?: string
  modifiedTime?: string
  author?: string
}

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  image = DEFAULT_IMAGE,
  type = 'website',
  noindex = false,
  keywords,
  breadcrumbs,
  publishedTime,
  modifiedTime,
  author,
}: SEOProps) {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL

  // Build breadcrumb JSON-LD
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
        })),
      }
    : null

  return (
    <Helmet>
      {/* Primary */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="id_ID" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data: Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
          logo: `${SITE_URL}/logo-badge-transparent.png`,
          description: DEFAULT_DESCRIPTION,
          identifier: [
            { '@type': 'PropertyValue', propertyID: 'SIUPAL', value: 'AL001/761/SP.SIUPAL/IX/2022' },
            { '@type': 'PropertyValue', propertyID: 'KBKI', value: '64129' },
            { '@type': 'PropertyValue', propertyID: 'LKPP e-Katalog', value: 'Registered Government Supplier' },
            { '@type': 'PropertyValue', propertyID: 'Flagship Green Vessel', value: 'KM JATIM CETTAR (Electric Vessel Marina Boom Banyuwangi)' },
          ],
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Jl. Penjaringan Asri XV PS IC No. 34, Kel. Penjaringan Sari, Kec. Rungkut',
            addressLocality: 'Surabaya',
            addressRegion: 'Jawa Timur',
            postalCode: '60297',
            addressCountry: 'ID',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: -7.325124,
            longitude: 112.758339,
          },
          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: '+62-31-8000-0000',
              contactType: 'customer service',
              areaServed: 'ID',
              availableLanguage: ['Indonesian', 'English'],
            },
            {
              '@type': 'ContactPoint',
              telephone: '+62-812-3456-7890',
              contactType: 'sales',
              areaServed: 'ID',
              contactOption: 'WhatsApp',
            },
          ],
          sameAs: [
            'https://linkedin.com/company/rbn-group',
            'https://instagram.com/rbn.group',
          ],
          foundingDate: '1999',
          numberOfEmployees: {
            '@type': 'QuantitativeValue',
            value: 250,
          },
        })}
      </script>

      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  )
}
