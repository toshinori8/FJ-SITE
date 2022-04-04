const { configureSitemap } = require('@sergeymyssak/nextjs-sitemap');


async function fetchDynamicPaths() {
  return ['slug'];
}

async function getDynamicPaths() {
  const paths = await fetchDynamicPaths();

  return paths.map((item) => `/realizacje/${item}`);
}
// getDynamicPaths().then((paths) => {

const Sitemap = configureSitemap({
  domains: [{ domain: 'malowanie-dachow-fj.pl', defaultLocale: 'pl', http: true }],
  // include: paths,
  exclude: ['/wycena/*', '404'],
  excludeIndex: true,
  pagesConfig: {
    '/oferta/*': {
      priority: '0.5',
      changefreq: 'daily',
    },
  },
  trailingSlash: true,
  targetDirectory: __dirname + '/out',
  pagesDirectory: __dirname + '/src/pages',
});

Sitemap.generateSitemap();
// });