const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'origin',
    repo: 'https://github.com/YooSeok2/YooSeok2.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)