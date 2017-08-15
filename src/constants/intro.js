'use strict';

export default [{
  second: 0,
  content: 'Hi, I am HsuTing.',
}, {
  second: 1,
  millisecond: 500,
  content: 'Welcome to my personal website.'
}, {
  second: 3,
  content: 'I build many styles.'
}, {
  second: 4,
  millisecond: 500,
  content: 'Choose one you like.'
}, {
  second: 6,
  type: 'types',
  content: [].constructor.apply(this, new Array(9)).map(() => ({
    link: '/',
    img: 'http://hsuting.com/public/favicon/apple-icon-180x180.png'
  }))
}];
