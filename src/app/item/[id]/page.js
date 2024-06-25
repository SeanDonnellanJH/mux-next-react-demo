import { H1, P, Stack } from '@manulife/mux';

export default function Item({ params: { id } }) {
  return (
    <Stack align="flex-start">
      <H1>
        Item <b>{id}</b>
      </H1>
      <P>
        Content for <b>Item {id}</b> goes here.
      </P>
    </Stack>
  );
}
