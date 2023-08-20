import "ui/styles.css";
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster />
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}
