import Head from 'next/head';
import { pages } from '@/data/pages';
import { useRouter } from 'next/router';
import { projects } from '@/data/projects';
import { useState, useEffect } from 'react';

const Layout = ({ children }) => {
  const [ogUrl, setOgUrl] = useState('');
  useEffect(() => {
    const host = window.location.host;
    const protocol = window.location.protocol;
    setOgUrl(`${protocol}//${host}/images/favicon/favicon.ico`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    asPath,
    query: { slug },
  } = useRouter();
  let page = pages.find(page => page.path === asPath);
  if (slug !== undefined) {
    page = projects.find(project => project.slug === slug);
  }

  const title = `ArugaZ${page?.title ? ' | ' + page.title : ''}`;
  const desc = page?.desc ? page.desc : '';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="description" content={desc} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={ogUrl} />
      </Head>
      <>{children}</>
    </>
  );
};

export default Layout;
