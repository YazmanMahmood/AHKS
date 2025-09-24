import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import logo from '../images/logo.png';

const LogoSplash = () => {
  const [show, setShow] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Only show splash on first load of public root path
    if (location.pathname !== '/') {
      setShow(false);
      return;
    }
    // Keep splash slightly longer than the 2s reveal to allow backdrop fade
    const timer = setTimeout(() => setShow(false), 2200);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-white z-[70]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Reveal container: fade from 0->1 and wipe left->right via clipPath */}
          <motion.div
            initial={{ clipPath: 'inset(0% 100% 0% 0%)', opacity: 0 }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="[will-change:clip-path,opacity]"
          >
            <motion.img
              src={logo}
              alt="AHKS Logo"
              layoutId="ahks-logo"
              className="w-[10rem] h-[5.5rem] object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LogoSplash;


