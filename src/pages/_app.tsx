
import type { AppProps } from 'next/app'
import {globalStyles} from '../styles/global'
import { Container, Header } from '../styles/pages/app';
import Link from 'next/link'

import Image from 'next/image'
globalStyles();
function MyApp({ Component, pageProps }: AppProps) {

  return (

    <Container>

      <Header>
       <Link href='/'>
        <Image src="/logo.svg" width={100} height={100} alt=""  style={{cursor:'pointer'}} />
        </Link>
      </Header>
      <Component  {...pageProps} />
    </Container>

  )
}

export default MyApp
