import { Toaster } from 'react-hot-toast'
import '../styles/globals.css';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app'

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
