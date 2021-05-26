const path = require("path");

module.exports = {
  // рендерим все в папку
  outputDir: path.resolve(__dirname, "./dist"),
  assetsDir: "./resource/",

  filenameHashing: true,
  css: {
    extract: {
      filename: 'resource/css/[name].[contenthash:8].css',
      chunkFilename: 'resource/css/[name].[contenthash:8].css'
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/assets/global.scss'),
      ]
    }
  },
};
