(function(window) {
  "use strict";

  window.gadget = window.gadget || {};
  window.gadget.settings = {
    "params": {},
    "additionalParams": {
      "showTime": true,
      "timeFormat": "h:mm A",
      "showDate": true,
      "dateFormat": "MMMM DD, YYYY",
      "useTimezone": false,
      "timezone": "",
      "fontStyle":{
        "font": {
          "family": "BrushScriptStd",
          "type": "custom",
          "url": "https://my.custom.font/BrushScriptStd.otf",
        },
        "size": "24px",
        "customSize": "",
        "align": "left",
        "bold": false,
        "italic": false,
        "underline": false,
        "forecolor": "black",
        "backcolor": "transparent"
      }
    }
  };
})(window);
