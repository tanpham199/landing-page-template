import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import genAntdCss from '@/scripts/genAntdCss';
import { StyleProvider, createCache } from '@ant-design/cssinjs';

const MyDocument = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

if (process.env.NODE_ENV === 'production') {
  MyDocument.getInitialProps = async (ctx: DocumentContext) => {
    const cache = createCache();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => (
          <StyleProvider cache={cache}>
            <App {...props} />
          </StyleProvider>
        ),
      });

    const initialProps = await Document.getInitialProps(ctx);
    const fileName = genAntdCss({
      cache,
    });

    return {
      ...initialProps,
      head: [
        <>
          {fileName && <link rel="stylesheet" href={`/${fileName}`} />}
          {initialProps.head}
        </>,
      ],
    };
  };
}

export default MyDocument;
