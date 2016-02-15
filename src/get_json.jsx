'use strict';

export default (url, funct, err_funct) => {
  let xmlhttp = new XMLHttpRequest();
  let data = "";
  xmlhttp.onreadystatechange = () => {
    if(xmlhttp.readyState == 4) {
      if(xmlhttp.status == 200) {
        data = JSON.parse(xmlhttp.responseText);
        if(funct != undefined) {
          funct(data);
        }
      }
      else {
        if(err_funct != undefined) {
          err_funct(xmlhttp.status);
        }
      }
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
};
