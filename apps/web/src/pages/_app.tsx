import { Toaster } from 'react-hot-toast'
import '../styles/globals.css';
import { RecoilRoot, useRecoilValue } from 'recoil';
import type { AppProps } from 'next/app'
import { Nav } from 'ui';
import { creatorIdAtom } from 'store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster />
      <RecoilRoot>
        <InitUser Component={Component} pageProps={pageProps} />
      </RecoilRoot>
    </>
  )
}

export function InitUser({ Component, pageProps }) {
  const editorId = useRecoilValue(creatorIdAtom);
  return (
    <>
      {<Nav client='creator' id={editorId} />}
      <Component {...pageProps} />
    </>
  )
}
