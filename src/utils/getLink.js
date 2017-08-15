'use strict';

export default link => (
  process.env.NODE_ENV === 'production' ?
    link :
    `/hsuting.github.io/${link}`
);
