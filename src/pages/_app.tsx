import "@/styles/globalStyles.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { MetaTitle, MetaDescription, MetaOgType } from "@/common/types";

const App = ({ Component, pageProps }: AppProps) => {
  const title: MetaTitle = "9Now - Watch Channel 9 Live and On Demand";
  const description: MetaDescription =
    "Watch TV online with 9Now, Channel 9's video on demand service, stream free catch up TV shows on mobile, tablet, television, computer, and other devices";
  const ogType: MetaOgType = "website";
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:type" content={ogType} />
      </Head>
      <Component {...pageProps} />;
    </>
  );
};

export default App;
