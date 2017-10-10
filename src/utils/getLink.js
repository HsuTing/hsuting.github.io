'use strict';

export default link => (
  process.env.NODE_ENV === 'production' ?
    /* istanbul ignore next */ link :
    `/hsuting.github.io${link}`
);
