import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'VRCOSC',
  tagline: 'Modular OSC program creator, toolkit, router, and distributor for VRChat',
  favicon: 'img/favicon.ico',
  url: 'https://VolcanicArts.github.io',
  baseUrl: '/',
  organizationName: 'VolcanicArts',
  projectName: 'vrcosc.com',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  future: {
    experimental_faster: true
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
        },
        blog: {
          path: 'changelog',
          routeBasePath: 'changelog',
          blogTitle: 'Changelog',
          blogDescription: 'Release notes',
          showReadingTime: false,
          postsPerPage: 50,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Releases',
          onUntruncatedBlogPosts: 'ignore'
        },
        theme: {
          customCss: './src/css/custom.css',
        }
      })
    ]
  ],
  themeConfig:
    ({
      image: 'img/logo.png',
      navbar: {
        title: 'VRCOSC',
        logo: {
          alt: 'VRCOSC Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/changelog',
            position: 'left',
            label: 'Changelog',
          },
          {
            href: 'https://github.com/VolcanicArts/VRCOSC/releases/latest',
            label: 'Download',
            position: 'right',
          },
          {
            href: 'https://vrcosc.com/discord',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://github.com/VolcanicArts/VRCOSC',
            label: 'GitHub',
            position: 'right',
          }
        ]
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} VolcanicArts. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.vsDark,
        additionalLanguages: ['powershell', 'csharp', 'json']
      }
    })
};

export default config;
