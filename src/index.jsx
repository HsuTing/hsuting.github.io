'use strict';

(() => {
  let initInterval = setInterval(() => {
    if(document.querySelector('.mdl-layout__container') != null) {
      clearInterval(initInterval);
      document.querySelector('body').className += ' body__show';
    }
  }, 10);
})();
