import '@/styles/globals.css'

// import '@/scripts/script'


// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
import { ApolloProvider } from '@apollo/client'
import {NextUIProvider} from '@nextui-org/react'

import client from "../graphql/apollo-client"

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
        <NextUIProvider>
          <Component {...pageProps} />
      </NextUIProvider>
    </ApolloProvider>
  )
}