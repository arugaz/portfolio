import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

import {
  AdsterraScript468,
  AdsterraScriptPopunder,
  AdsterraScriptSocial,
} from "pages/Adsterra";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap"
          />
        </Head>
        <body>
          <AdsterraScriptPopunder />
          <AdsterraScriptSocial />
          <AdsterraScript468 />
          <Main />
          <AdsterraScript468 />
          <NextScript />
        </body>
      </Html>
    );
  }
}
