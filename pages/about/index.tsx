import { motion } from 'framer-motion';
import { techStuff } from '@/data/techstuff';
import { contentAnimation, fadeAnimation } from '@/data/animations';

export default function About() {
  return (
    <main className="relative flex w-full flex-col items-center justify-evenly py-40 md:h-screen md:flex-row md:overflow-hidden">
      <motion.span
        {...fadeAnimation}
        className="fixed left-0 -bottom-32 origin-top-left -rotate-90 text-9xl font-extrabold text-secondary-dark md:bottom-0 md:rotate-0">
        ABOUT
      </motion.span>

      <motion.div
        {...contentAnimation}
        className="relative order-2 flex w-3/4 flex-col items-end justify-end md:order-1 md:w-1/3">
        <div className="my-5 mr-2 text-left font-semibold text-primary-light">Tech Stuff</div>
        <div className="flex w-4/5 flex-wrap justify-evenly">
          {techStuff.map(skill => (
            <div
              key={skill.name}
              className="my-2 ml-4 h-14 w-14 rounded-lg fill-secondary-light transition-all duration-500 hover:bg-secondary-dark hover:fill-primary-light">
              <svg
                className="p-2"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d={skill.svg} />
              </svg>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.section
        {...contentAnimation}
        className="relative order-1 my-10 w-3/4 md:order-2 md:my-0 md:w-1/4">
        <p className="text-md mb-4 text-justify text-base font-light">Hey! My nickname is SkyUniverse Nanz. I'm from Jakarta, Indonesia.</p>
        <ul className="list-inside list-disc">
          <li className="text-md font-light text-primary-light">I still learn about code and experiment with something new.</li>
          <li className="text-md font-light text-primary-light">I'm interest in Cryptocurrency and Blockchain.</li>
          <li className="text-md font-light text-primary-light">I just do what i loved.</li>
        </ul>
      </motion.section>
    </main>
  );
}
