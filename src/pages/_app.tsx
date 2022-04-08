import { PrismicProvider } from '@prismicio/react';
import Link from 'next/link';
import { ThemeProvider } from 'styled-components';
import { linkResolver } from '../services/prismic';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>
            {children}
          </a>
        </Link>
      )}
    >
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </PrismicProvider>
  );
}

export default MyApp;
