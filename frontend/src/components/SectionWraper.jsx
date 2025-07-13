// components/SectionWrapper.jsx
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const SectionWrapper = ({ children, id }) => {
  const controls = useAnimation();
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="min-h-screen flex items-center justify-center"
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
