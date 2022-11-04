import Head from 'next/head';
import { useRouter } from 'next/router';

// Default value for some meta data
const defaultMeta = {
  title: 'ArugaZ',
  siteName: 'ArugaZ',
  desc: 'ArugaZ is one of the developers in Indonesia. My name is Arga Astri Bimantara, feel free to say hi.',
  // change base url of your web (without '/' at the end)
  url: 'https://arugaz.me',
  type: 'website',
  // change to follow, index if you want to
  robots: 'nofollow, noindex',
  image: 'https://arugaz.me/images/pages/profile.jpg',
  author: 'ArugaZ',
};

/**
 * Next Head component populated with necessary SEO tags and title
 * props field used:
 * - title
 * - siteName
 * - description
 * - url
 * - type
 * - robots
 * - image
 * - author
 * - templateTitle
 *
 * all field are optional (default value defined on defaultMeta)
 */

export default function SeoHead(props: {
  title?: string;
  siteName?: string;
  desc?: string;
  url?: string;
  type?: string;
  robots?: string;
  image?: string;
  author?: string;
  templateTitle?: string;
}) {
  const { asPath } = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };

  // Use siteName if there is templateTitle
  // but show full title if there is none
  meta.title = props.templateTitle ? `${props.templateTitle} - ${meta.siteName}` : meta.title;

  meta.url = `${meta.url}${asPath}`;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta name="description" content={meta.desc} />
      <link rel="canonical" href={meta.url} />
      {/* Open Graph */}
      <meta property="og:url" content={meta.url} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.desc} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@arugaz_id" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.desc} />
      <meta name="twitter:image" content={meta.image} />
      {/* Favicon */}
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
