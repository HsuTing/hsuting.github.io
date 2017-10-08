'use strict';

module.exports = [{
  name: 'index',
  lang: 'en-us',
  langData: JSON.stringify(require('./public/i18n/en-us.json'))
}, {
  name: 'zh-tw',
  lang: 'zh-tw',
  langData: JSON.stringify(require('./public/i18n/zh-tw.json'))
}].map(data => ({
  ...data,
  component: './lib/components/Index',
  js: 'index',
  props: {
    i18n: {
      lang: data.lang,
      defaultData: JSON.parse(data.langData)
    }
  }
}));
