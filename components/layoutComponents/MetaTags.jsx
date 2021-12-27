
import Head from 'next/head'

const MetaTags = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

MetaTags.defaultProps = {
  title: 'magima bio',
  keywords: 'magima o personal site',
  description: 'come head to head with my projects',
}

export default MetaTags;



