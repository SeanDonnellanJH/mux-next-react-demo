import Providers from 'src/components/Providers';
import StyledComponentsRegistry from 'src/lib/registry';

import '@manulife/mux/core/typography/assets/fonts/fonts.css';
import 'src/styles/globals.css';

export const metadata = {
  title: 'MUX + Next.js Starter Template',
  description: 'Next.js React Starter Template with MUX',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
