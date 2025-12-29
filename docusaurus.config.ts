import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AI Systems Book',
  tagline: 'Learn about multi-agent AI systems',
  favicon: 'img/favicon.ico',
  url: 'https://your-site.com',
  baseUrl: '/',
  organizationName: 'Zayyan-Sheikh',
  projectName: 'your-repo',
  onBrokenLinks: 'warn',
  markdown: {
    mermaid: true,
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: [
    [
      '@docusaurus/theme-mermaid',
      {
        markdown: {
          mermaid: true,
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'AI Systems Book',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'multiAgentSidebar',
          position: 'left',
          label: 'Multi-Agent Systems',
        },
        {
          href: 'https://github.com/zyanshykh/book',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} AI Systems Book. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    mermaid: {
      theme: {
        light: 'neutral',
        dark: 'forest',
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
