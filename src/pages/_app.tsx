import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { queryClient } from '../services/queryClient';
import { theme } from '../styles/theme';

import NextNProgress from 'nextjs-progressbar';

const isDevelopment = process.env.NODE_ENV === 'development';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <NextNProgress
          color="#D53F8C"
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
        />
        <Component {...pageProps} />
      </ChakraProvider>
      {isDevelopment && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}

export default MyApp;
