module.exports = {
  content: [
    './public/**/*.html',
    './src/components/**/*.js',
    './src/pages/**/*.js',
  ],
  css: ['./src/components/Layout/tailwind.css', './src/pages/index.css'],
  extractors: [
    {
      extractor: class {
        static extract(content) {
          return content.match(/[A-z0-9-:\/]+/g);
        }
      },
      extensions: ['html', 'js'],
    },
  ],
  whitelist: ['.BlogPost'],
};
