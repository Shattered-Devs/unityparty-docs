// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Unity Party',
  tagline: 'Guide & Documentation',
  url: 'https://shattered-devs.github.io/',
  baseUrl: '/Unity-Party/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Shattered-Devs', // Usually your GitHub org/user name.
  projectName: 'Unity-Party', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
		  routeBasePath: '/',
		  path: 'guide',
          // Please change this to your repo.
          editUrl: 'https://github.com/Shattered-Devs/Unity-Party/tree/gh-pages',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Shattered-Devs/Unity-Party/tree/gh-pages',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  
  plugins: [
	[
      '@docusaurus/plugin-content-docs',
      {
        id: 'documentation',
        path: 'documentation',
        routeBasePath: 'documentation',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Unity Party',
        logo: {
          alt: 'UP Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'unity-party/index',
            position: 'left',
            label: 'Guide',
          },
          {
            type: 'doc',
			docsPluginId: 'documentation',
            docId: 'modscript',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/shattered-devs/unity-party',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Game Jolt',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/KSGTkaCFRr',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Shattered-Devs/Unity-Party',
              },
            ],
          },
        ],
        copyright: `Copyright © 2021-2022 Shattered Devs`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
