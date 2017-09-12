'use strict';

export default [{
  second: 0,
  content: ['Hi, I am HsuTing.', 'Welcome to my personal website.']
}, {
  second: 2,
  millisecond: 500,
  content: ['I build many styles.', 'Choose one you like.']
}, {
  second: 5,
  type: 'websites',
  content: [].constructor.apply({}, new Array(3)).map(() => ({
    link: '/',
    img: 'http://hsuting.com/public/favicon/apple-icon-180x180.png'
  }))
}];
