'use strict';

const process = require('process');
const useUrls = require('cat-components/lib/utils/useUrls').default;

const {basename} = require('./lib/constants/constants');

const router = {};

if(process.env.NODE_ENV !== 'production')
  router.basename = basename;

module.exports = useUrls(['/'], {
  component: './lib/components/Index',
  js: 'index',
  name: 'index',
  props: {
    router
  }
});
