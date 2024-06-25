'use client';

import { useState } from 'react';
import { LANG, MuxProvider } from '@manulife/mux';

import Layout from 'src/components/Layout';

const Providers = ({ children }) => {
  const [lang, setLang] = useState(LANG.EN_CA);

  function toggleLang() {
    setLang(lang === LANG.EN_CA ? LANG.FR_CA : LANG.EN_CA);
  }

  return (
    <MuxProvider langProvider={{ lang }}>
      <Layout toggleLang={toggleLang}>{children}</Layout>
    </MuxProvider>
  );
};

export default Providers;
