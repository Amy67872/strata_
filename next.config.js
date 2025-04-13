module.exports = withNextra()
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

const nextConfig = {
  env: {
    NEXT_PUBLIC_STRATA: process.env.NEXT_PUBLIC_STRATA,
  },
};

module.exports = withNextra(nextConfig);
