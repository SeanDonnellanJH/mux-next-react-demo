'use client';

import { useState, useEffect } from 'react';
import { Button, H1, P, Stack } from '@manulife/mux';

const Demo = () => {
  const [text, setText] = useState('');
  const [showText, setShowText] = useState(false);

  const handleOnClick = (value) => {
    if (value) {
      setText('You clicked the Show button.');
      console.log(text); // Why won't this log the updated text?
    } else {
      setText('Text hidden.');
    }
    setShowText(value);
  };

  useEffect(() => {
    setText('Page loaded');
    setShowText(true);
  }, []);

  return (
    <Stack align="flex-start">
      <H1>Demo</H1>
      {showText && <P>{text}</P>}
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
