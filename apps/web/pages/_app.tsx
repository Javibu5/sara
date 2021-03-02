import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from '@sara/ui';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider as NextAuthProvider } from 'next-auth/client';
import PropTypes from 'prop-types';
import React from 'react';
import useSWR, { SWRConfig } from 'swr'




export default function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);



  return (
    <NextAuthProvider session={pageProps.session}>
      <SWRConfig
        value={{
          fetcher: async (url) => {
            const res = await fetch(url, {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `e4b60d7ef5ff4b3f6ead0f3acfb0185621ccba2a0bf2295e19fa748544b76c14%7Cada5968dc1052928318829d9abae28c9b7ef8dedb4697fc9025c1146ab3b3c5d`,
              },
            });
            return res.json();
          },
        }}
      >

        <React.Fragment>
          <Head>
            <title>NX Sara</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
          </Head>
          <ThemeProvider theme={theme}>
            <div style={{ display: 'flex' }}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Component {...pageProps} />
            </div>
          </ThemeProvider>
        </React.Fragment>
      </SWRConfig>
    </NextAuthProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
