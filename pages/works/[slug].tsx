import Image from 'next/image';
import { motion } from 'framer-motion';
import { withRouter } from 'next/router';
import { projects } from '@/data/projects';
import { fadeAnimation, contentAnimation } from '@/data/animations';

type Project = {
  title: string;
  slug: string;
  img: string;
  demoUrl: string;
  sourceUrl: string;
  desc: string;
};

const Projects = withRouter(
  ({
    router: {
      query: { slug },
    },
  }) => {
    const getProject = projects.find(project => project.slug === slug) as Project;

    return (
      <main className="relative flex w-full items-center justify-center py-40 md:h-screen">
        <motion.span
          {...fadeAnimation}
          className="fixed left-0 -bottom-32 origin-top-left -rotate-90 text-9xl font-extrabold text-secondary-dark md:bottom-0 md:rotate-0">
          WORKS
        </motion.span>

        <motion.div
          {...contentAnimation}
          className="relative flex w-72 flex-col rounded-xl bg-primary-light p-2 md:w-3/4 md:flex-row md:justify-between">
          {slug && (
            <>
              <div className="mb-3 w-full overflow-hidden rounded-lg md:mb-0 md:w-[480px]">
                <div className="relative mb-[6px] h-44 w-full md:h-[294px]">
                  <Image
                    priority
                    layout="fill"
                    className="relative"
                    alt={getProject.title}
                    src={`/images/projects/${getProject.img}`}
                  />
                </div>
                <div className="flex w-full justify-between bg-primary-dark text-center font-semibold text-primary-light">
                  <a
                    href={getProject.demoUrl}
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                    className="w-[238px] rounded-bl-lg border-2 border-primary-dark py-1 transition-all duration-500 hover:bg-primary-light hover:text-primary-dark">
                    <span>View Demo</span>
                  </a>
                  <div className="w-[5px] bg-primary-light" />
                  <a
                    href={getProject.sourceUrl}
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                    className="w-[238px] rounded-br-lg border-2 border-primary-dark py-1 transition-all duration-500 hover:bg-primary-light hover:text-primary-dark">
                    <span>Source Code</span>
                  </a>
                </div>
              </div>

              <div className="h-2 w-full rounded-lg bg-primary-dark md:h-auto md:w-2" />

              <div className="mt-3 flex w-full flex-col justify-center overflow-hidden rounded-lg bg-primary-dark p-5 md:mt-0 md:w-[480px]">
                <h2 className="relative mb-5 text-center text-4xl text-primary-light md:text-5xl">
                  {getProject.title}
                </h2>
                <p className="relative text-justify">{getProject.desc}</p>
              </div>
            </>
          )}
        </motion.div>
      </main>
    );
  },
);

export default Projects;
