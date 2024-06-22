import "@/styles/globals.css";
import type { AppProps } from "next/app";
<<<<<<< HEAD
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
=======
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
>>>>>>> main
import { SessionProvider } from "next-auth/react";

const queryClient = new QueryClient()

<<<<<<< HEAD
export default function App({Component, pageProps: { session, ...pageProps }}: AppProps) {
  
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient} >
      <Component {...pageProps}/>
      </QueryClientProvider>
    </SessionProvider>
=======
export default function App({ Component, pageProps: { session, ...pageProps }}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
>>>>>>> main
  )
}
