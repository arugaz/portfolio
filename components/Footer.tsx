import { motion } from 'framer-motion';
import { fadeAnimation, lineAnimation } from '@/data/animations';

export default function Footer() {
  return (
    <motion.footer
      {...fadeAnimation}
      className="fixed right-0 -bottom-20 z-40 flex w-full justify-end pb-28 md:bottom-0">
      <div className="flex w-1/2 items-baseline justify-end">
        <div className="flex w-full flex-col items-end md:w-2/3">
          <motion.div
            {...lineAnimation}
            animate={{ width: '40%' }}
            className="h-1 rounded-tl-md rounded-bl-md bg-primary-light"
          />
          <motion.div
            {...lineAnimation}
            animate={{ width: '100%' }}
            className="mt-1 h-1 rounded-tl-md rounded-bl-md bg-primary-light"
          />
          <motion.div
            {...lineAnimation}
            animate={{ width: '67%' }}
            className="mt-1 h-1 rounded-tl-md rounded-bl-md bg-primary-light"
          />
        </div>
      </div>
    </motion.footer>
  );
}
