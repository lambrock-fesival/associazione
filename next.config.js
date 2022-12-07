module.exports = {
  basePath: '/associazione',
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/storia': { page: '/storia' },
      '/contatti': { page: '/contatti' },
      '/galleria': { page: '/galleria' },
    }
  },
}

