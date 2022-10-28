import Head from 'next/head';
import { useRouter } from 'next/router';
import { pages } from '@/data/pages';

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  const page = pages.find(page => page.path === pathname && '/' !== pathname);

  const title = `ArugaZ${page?.title ? ' | ' + page.title : ''}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <>{children}</>
    </>
  );
};

export default Layout;
