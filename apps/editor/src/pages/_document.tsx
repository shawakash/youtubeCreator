import { Html, Head, Main, NextScript } from 'next/document'
import { RecoilRoot } from 'recoil'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <RecoilRoot>
          <NextScript />
        </RecoilRoot>
      </body>
    </Html>
  )
}
