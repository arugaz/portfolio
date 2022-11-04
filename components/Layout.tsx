import type { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { pages } from '@/data/pages';
import { projects } from '@/data/projects';
import SeoHead from './SeoHead';

type Page = {
  title: string;
  desc: string;
};

export default function Layout({ children }: { children: ReactNode }) {
  const {
    asPath,
    query: { slug },
  } = useRouter();
  let page = pages.find(page => page.path === asPath) as Page;
  if (slug !== undefined) {
    page = projects.find(project => project.slug === slug) as Page;
  }

  const title = page?.title ? page.title : '';
  const desc = page?.desc ? page.desc : '';

  return (
    <>
      <SeoHead templateTitle={title} desc={desc} />
      {children}
    </>
  );
}
