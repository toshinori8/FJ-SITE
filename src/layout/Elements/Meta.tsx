import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { AppConfig } from '@/utils/AppConfig';
import { useEffect } from 'react';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};



const Meta = (props: IMetaProps) => {
  const router = useRouter();

      useEffect(() => {

         let classNemm= router.asPath.replace(/([/])+/g,''); 

        document.querySelector('body')?.removeAttribute("class");

        if(classNemm!=="") {
          let classs=  document.querySelector('body')?.classList.add(classNemm)
          let  menuEl = document.querySelector('a[href*="'+router.asPath+'"]')?.parentElement?.classList.toggle('active');

               
    // console.log(menuEl);



        };
      
      

    }, []);

  
  return (
    <>
      <Head>
        
        <meta title={AppConfig.title}/>
        {/* <meta description={props.description.toString}/> */}
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        {/* <noscript>
          <link rel="stylesheet" href="styles/noscript.css" />
        </noscript> */}
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  );
};

export { Meta };
