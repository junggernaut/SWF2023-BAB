import { queryClient } from '@/react-query';
import '@/styles/globals.css';
import {
  RainbowKitProvider,
  darkTheme,
  lightTheme,
} from '@rainbow-me/rainbowkit';
import { QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { WagmiConfig } from 'wagmi';
import { chains, config } from '../wagmi';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={config}>
        <RainbowKitProvider
          chains={chains}
          theme={lightTheme({
            accentColor: '#07D1D3',
            accentColorForeground: 'white',
            borderRadius: 'small',
            fontStack: 'system',
            overlayBlur: 'small',
          })}
        >
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </QueryClientProvider>
  );
}
