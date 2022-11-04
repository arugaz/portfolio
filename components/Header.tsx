import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { fadeAnimation, lineAnimation } from '@/data/animations';
import { pages } from '@/data/pages';

export default function Header() {
  const [close, setClose] = useState(true);
  const { asPath } = useRouter();

  return (
    <motion.header
      {...fadeAnimation}
      className="fixed left-0 -top-12 z-40 flex w-full justify-between pt-24 md:top-0">
      <div className="flex w-1/2 items-baseline">
        <div className="w-3/5 md:w-2/5">
          <motion.div
            {...lineAnimation}
            animate={{ width: '25%' }}
            className="mb-1 h-1 rounded-tr-md rounded-br-md bg-primary-light"
          />
          <motion.div
            {...lineAnimation}
            animate={{ width: '100%' }}
            className="mb-1 h-1 rounded-tr-md rounded-br-md bg-primary-light"
          />
          <motion.div
            {...lineAnimation}
            animate={{ width: '67%' }}
            className="h-1 rounded-tr-md rounded-br-md bg-primary-light"
          />
        </div>
      </div>

      <div className={'relative flex w-1/2 flex-col items-end justify-end md:flex-row'}>
        <div
          onClick={() => setClose(!close)}
          className="mr-12 flex w-8 cursor-pointer flex-col items-end md:hidden">
          <div
            className={`my-[3px] h-1 w-1/2 rounded-md bg-white transition-all duration-300 ${
              close ? '' : '!w-full origin-top-right -rotate-45'
            }`}
          />
          <div
            className={`my-[3px] h-1 w-full rounded-md bg-white transition-all duration-300 ${
              close ? '' : '-mr-10 scale-0'
            }`}
          />
          <div
            className={`my-[3px] h-1 w-2/3 rounded-md bg-white transition-all duration-300 ${
              close ? '' : '!w-full origin-top-right -rotate-45'
            }`}
          />
        </div>

        <div className="absolute top-12 right-0 md:relative md:top-0 md:mr-10 md:w-11/12 lg:mr-40 lg:w-1/2">
          <nav
            className={`flex flex-col justify-evenly rounded-md bg-secondary-dark bg-opacity-75 p-5 font-medium backdrop-blur-md transition-all duration-300 md:mr-0 md:w-full md:flex-row md:rounded-none md:bg-transparent md:p-0 md:backdrop-blur-none ${
              close ? '-mr-96' : 'mr-12'
            }`}>
            {pages.map(link => (
              <Link
                key={link.title}
                href={link.path}
                className={`transition-all duration-500 hover:text-primary-light ${
                  asPath !== link.path ? '' : 'text-primary-light'
                }`}>
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
