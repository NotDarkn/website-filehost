import Document, { Head, Html, Main, NextScript } from 'next/document'
import siteConfig from '../../config/site.config'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />  
          <meta name="description" content="OneDrive CF Index" />
          <meta property="og:title" content="Darkn's File Host" />
          <meta property="og:description" content="Another File Host" />
          <meta property="og:url" content="https://dl.darkn.bio" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://darkn.bio/img/download.webp" />
          <meta property="og:image:alt" content="Files" />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          <meta property="og:site_name" content="Darkn" />
          <link rel="icon" href="/icons/download.webp" />  
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          {siteConfig.googleFontLinks.map(link => (
            <link key={link} rel="stylesheet" href={link} />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
