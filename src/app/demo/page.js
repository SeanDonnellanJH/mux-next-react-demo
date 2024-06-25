'use client';

import { useState } from 'react';
import { Button, H1, P, Stack } from '@manulife/mux';

const Demo = () => {
  const [showText, setShowText] = useState(false);

  const handleOnClick = (value) => {
    setShowText(value);
  };

  return (
    <Stack align="flex-start">
      <H1>Demo</H1>
      {showText && <P>Content for Demo goes here.</P>}
      <Button onClick={() => handleOnClick(true)} disabled={showText}>
        Show
      </Button>
      <Button onClick={() => handleOnClick(false)} disabled={!showText}>
        Hide
      </Button>
    </Stack>
  );
};

export default Demo;
