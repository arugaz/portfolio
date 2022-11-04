import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';
import '@/style/globals.css';
import Layout from '@/components/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [customCursor, setCustomCursor] = useState('initial');

  setTimeout(() => setLoading(false), 950);

  useEffect(() => {
    const mouseIn = () => setCustomCursor('animate');
    const mouseOut = () => setCustomCursor('initial');
    const mouseMove = ({ clientX, clientY }: { clientX: number; clientY: number }) =>
      setMousePosition({ x: clientX, y: clientY });

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
}
