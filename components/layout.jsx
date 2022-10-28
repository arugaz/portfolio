import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { pages } from '@/data/pages';

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  const page = pages.find(page => page.path === pathname);

  const [ogUrl, setOgUrl] = useState('');
  useEffect(() => {
    const host = window.location.host;
    const protocol = window.location.protocol;
    setOgUrl(`${protocol}//${host}/images/pages/${page?.image}`);
  }, []);

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
