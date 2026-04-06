// docmd.config.js
export default defineConfig({
  // --- Core Metadata ---
  title: 'HPC Brazil Force',
  url: 'https://hpc-brazil-force.github.io/',

  // --- Branding ---
  logo: {
    light: 'assets/images/logo-dark.png',
    dark: 'assets/images/logo-light.png',
    alt: 'HPC Brazil Force Logo',
    href: '/',
  },
  favicon: 'assets/favicon.ico',

  // --- Source & Output ---
  src: 'docs',
  out: 'site',

  // --- Layout & UI Architecture ---
  layout: {
    spa: true, // Enable seamless page transitions
    header: {
      enabled: true,
    },
    sidebar: {
      collapsible: true,
      defaultCollapsed: false,
    },
    optionsMenu: {
      position: 'sidebar-top', // 'menubar', 'header', 'sidebar-top', 'sidebar-bottom'
      components: {
        search: true,      
        themeSwitch: true, 
        sponsor: null,     
      }
    },
    footer: {
      style: 'minimal', // 'minimal' or 'complete'
      content: '© ' + new Date().getFullYear() + ' HPC Brazil Force.',
      branding: true    // Config for "Built with docmd" badge
    }
  },

  // --- Theme Settings ---
  theme: {
    name: 'default',        // Options: 'default', 'sky', 'ruby', 'retro'
    appearance: 'system',   // 'light', 'dark', or 'system'
    codeHighlight: true,
    customCss: [],
  },

  // --- General Features ---
  minify: true,
  autoTitleFromH1: true,
  copyCode: true,
  pageNavigation: true,

  customJs: [],

  // --- Navigation (Sidebar) ---
  navigation: [
    // { title: '', path: '/', icon: 'home' },
    {
      title: 'HPC Brazil Force',
      icon: 'rocket',
      collapsible: false,
      children: [
        { title: 'Our Story', path: '/story', icon: 'route', external: false },
        { title: 'Team Setup', path: '/team-setup', icon: 'users-round', external: false },
        { title: 'Techniques for HPC', path: '/techniques', icon: 'cog', external: false },
        { title: 'Tips & Tricks', path: '/tips', icon: 'notepad-text', external: false },
        { title: 'Acknowledgements', path: '/acknowledgements', icon: 'heart-plus', external: false },
      ],
    },
    { title: 'GitHub', path: 'https://github.com/HPC-Brazil-Force', icon: 'github', external: true },
  ],

  // --- Plugins ---
  plugins: {
    seo: {
      defaultDescription: 'Documentation built with docmd.',
      openGraph: { defaultImage: '' },
      twitter: { cardType: 'summary_large_image' }
    },
    sitemap: { defaultChangefreq: 'weekly' },
    analytics: { 
      googleV4: { measurementId: 'G-X9WTDL262N' } // Example Google Analytics ID, replace with your own
    },
    search: {},
    mermaid: {},
    llms: {}
  },
  
  // --- Edit Link ---
  editLink: {
    enabled: false,
  }
});
