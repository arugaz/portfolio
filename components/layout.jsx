import Head from 'next/head';
import { pages } from '@/data/pages';
import { useRouter } from 'next/router';
import { projects } from '@/data/projects';

const Layout = ({ children }) => {
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
  const img = `${process.env.NEXT_PUBLIC_DOMAIN}/images/favicon/favicon.ico`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="description" content={desc} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={img} />
      </Head>
      <>{children}</>
    </>
  );
};

export default Layout;
