// create a _document file in pages folder
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Funny words from a funny man" />
          <meta name="theme-color" content="#000000" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
