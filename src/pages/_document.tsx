import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs";

const MyDocument = () => (
  <Html lang="en">
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window._AMapSecurityConfig = {
                serviceHost:'${process.env.NEXT_PUBLIC_BACK_SERVER}/_AMapService',
                securityJsCode: "fbce2668c70ef96974daf2eabcf33390",  
            }
              `,
        }}
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const cache = createCache();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        (
          <StyleProvider cache={cache}>
            <App {...props} />
          </StyleProvider>
        ),
    });

  const initialProps = await Document.getInitialProps(ctx);
  // 1.1 extract style which had been used
  const style = extractStyle(cache, true);
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        {/* 1.2 inject css */}
        <style dangerouslySetInnerHTML={{ __html: style }}></style>
      </>
    ),
  };
};

export default MyDocument;
