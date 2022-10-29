import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { projects } from '@/data/projects';
import { projectCardAnimation, fadeAnimation } from '@/data/animations';

const Works = () => {
  const ref = useRef(0);

  useEffect(() => {
    const scroll = () => (ref.current.style.transform = `translateX(${-window.scrollY}px)`);

    window.addEventListener('scroll', scroll);
    return () => window.removeEventListener('scroll', scroll);
  }, []);

  return (
    <main className="relative flex h-[450vh] items-center justify-center">
      <motion.span
        {...fadeAnimation}
        className="fixed left-0 -bottom-32 origin-top-left -rotate-90 text-9xl font-extrabold text-secondary-dark md:bottom-0 md:rotate-0">
        WORKS
      </motion.span>

      <div className="fixed left-1/2 top-[30%] flex md:left-1/4" ref={ref}>
        {projects.map((project, id) => (
          <div key={id}>
            <motion.div
              {...projectCardAnimation}
              className="mx-12 flex w-72 flex-col items-center justify-center rounded-md border-4 border-primary-light bg-primary-light p-[2px]">
              <Link
                href={`/works/${project.slug}`}
                className="relative h-44 w-full overflow-hidden rounded-md bg-primary-dark">
                <motion.span {...fadeAnimation}>
                  <Image
                    width={683}
                    height={384}
                    layout="fill"
                    alt={project.title}
                    src={`/images/projects/${project.img}`}
                    className="relative transition-all duration-500 hover:scale-125"
                  />
                </motion.span>
              </Link>
              <div className="py-2 text-xl font-medium text-primary-dark">{project.title}</div>
              <div className="flex w-full justify-between px-3 pt-1 pb-4">
                <a href={project.demo} target="_blank" rel="noreferrer noopener nofollow">
                  <span className="rounded-md border-2 border-primary-dark px-3 py-2 font-semibold text-primary-dark transition-all duration-500 hover:bg-primary-dark hover:text-primary-light">
                    View Demo
                  </span>
                </a>
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noreferrer noopener nofollow">
                  <span className="rounded-md border-2 border-primary-dark px-1 py-2 font-semibold text-primary-dark transition-all duration-500 hover:bg-primary-dark hover:text-primary-light">
                    Source Code
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="fixed top-0 -right-1 h-screen w-1/12 bg-primary-dark" />
      <div className="fixed top-0 -left-1 hidden h-3/4 w-1/12 bg-primary-dark md:block" />

      <div className="fixed bottom-40 flex flex-col items-center">
        <span className="text-primary-light">Scroll</span>
        <div className="absolute top-6 h-4 w-4 rotate-45 rounded border-b-4 border-r-4 border-secondary-light" />
        <div className="absolute top-6 h-7 w-7 rotate-45 rounded border-b-4 border-r-4 border-primary-light" />
      </div>
    </main>
  );
};

export default Works;
