import Image from 'next/image';
import { motion } from 'framer-motion';
import { contentAnimation, fadeAnimation, cardHomeAnimation } from '@/data/animations';
import profileImage from '@/image/pages/profile.jpg';

export default function Home() {
  return (
    <main className="relative flex w-full flex-col items-center justify-evenly py-40 md:h-screen md:flex-row md:overflow-hidden">
      <motion.span
        {...fadeAnimation}
        className="fixed left-0 -bottom-32 origin-top-left -rotate-90 text-9xl font-extrabold text-secondary-dark md:bottom-0 md:rotate-0">
        HOME
      </motion.span>

      <motion.div
        {...contentAnimation}
        className="relative order-2 flex w-1/2 justify-end md:order-1 md:w-1/3">
        <motion.div
          {...cardHomeAnimation}
          animate={{ rotate: -12 }}
          className="absolute mt-20 h-64 w-full rounded-xl bg-[#464646] md:h-72 md:w-64 lg:h-80"
        />
        <motion.div
          {...cardHomeAnimation}
          animate={{ rotate: -3 }}
          className="absolute mt-20 h-64 w-full rounded-xl bg-secondary-light md:h-72 md:w-64 lg:h-80"
        />
        <motion.div
          {...cardHomeAnimation}
          animate={{ rotate: 2 }}
          className="relative mt-20 h-64 w-full rounded-xl bg-primary-light md:h-72 md:w-64 lg:h-80">
          <motion.div
            {...fadeAnimation}
            className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl">
            <Image
              priority={true}
              src={profileImage}
              placeholder="blur"
              alt="Arga Astri Bimantara"
              className="relative rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.section {...contentAnimation} className="relative order-1 w-1/3 md:order-2">
        <h3 className="-mb-5 text-base font-normal">Hi there! i&apos;m...</h3>
        <h1 className="-ml-1 text-7xl font-bold text-primary-light">arugaz</h1>
        <h4 className="text-base font-light transition-all duration-500 hover:text-primary-light">
          cat lover
        </h4>
      </motion.section>
    </main>
  );
}
