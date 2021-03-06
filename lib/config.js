const prod = process.env.NODE_ENV === 'production'

module.exports = {
  site: {
    url: prod ? 'https://kentarom.com' : 'http://localhost:3000',
    title: 'Kentaro Matsushita - @kentaro-m',
    description: '',
    image: 'ogp_image.png'
  },
  user: {
    name: 'Kentaro Matsushita',
    github: 'kentaro-m',
    qiita: 'kentaro-m',
    speaker_deck: 'kentarom',
    twitter: '_kentaro_m',
    facebook: 'kentaro.m9',
    linkedin: 'kentarom'
  },
  skills: [
    { type: 'JavaScript (ES2015)', level: 80 },
    { type: 'Node.js', level: 70 },
    { type: 'AWS', level: 70 },
    { type: 'React.js', level: 60 },
    { type: 'HTML', level: 60 },
    { type: 'CSS', level: 60 },
    { type: 'Java', level: 50 },
    { type: 'Go', level: 40 },
    { type: 'TypeScript', level: 40 }
  ],
  github: {
    topic: 'my-portfolio'
  },
  qiita: {
    item_count: '5'
  },
  blog: {
    url: 'https://kentarom.hatenablog.com/',
    feed_url: 'https://kentarom.hatenablog.com/feed',
    article_count: '5'
  },
  speaker_deck: {
    slides_count: '6'
  }
}
