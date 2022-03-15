import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '@/utils/AppConfig';
import { useEffect } from 'react';
import handleScroll from '@/layout/Elements/handleScroll';






// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {



  
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
        <body >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
