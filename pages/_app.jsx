import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Loading from '@/components/loading';
import '@/style/globals.css';

const MyApp = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [customCursor, setCustomCursor] = useState('initial');

  setTimeout(() => setLoading(false), 3800);

  useEffect(() => {
    const mouseIn = () => setCustomCursor('animate');
    const mouseOut = () => setCustomCursor('initial');
    const mouseMove = ({ clientX, clientY }) => setMousePosition({ x: clientX, y: clientY });

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseout', mouseOut, true);
    window.addEventListener('mouseenter', mouseIn, true);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseout', mouseOut, true);
      window.removeEventListener('mouseenter', mouseIn, true);
    };
  }, []);

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Component {...pageProps} />
          <Footer />

          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-50 h-7 w-7 rounded-full bg-primary-light"
            animate={customCursor}
            variants={{
              initial: {
                x: mousePosition.x - 14,
                y: mousePosition.y - 14,
              },
              animate: {
                x: mousePosition.x - 14,
                y: mousePosition.y - 14,
                mixBlendMode: 'exclusion',
              },
            }}
          />
        </>
      )}
    </Layout>
  );
};

export default MyApp;
