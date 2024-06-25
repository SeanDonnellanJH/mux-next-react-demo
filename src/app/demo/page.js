'use client';

import { useState } from 'react';
import { Button, H1, P, Stack } from '@manulife/mux';

const Demo = () => {
  const [showText, setShowText] = useState(false);

  return (
    <Stack align="flex-start">
      <H1>Demo</H1>
      {showText && <P>Content for Demo goes here.</P>}
      <Button>Show</Button>
      <Button>Hide</Button>
    </Stack>
  );
};

export default Demo;
