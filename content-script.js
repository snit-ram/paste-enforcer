(function() {

  "use strict";

  var element;

  document.addEventListener("contextmenu", function(e) {
    element = e.srcElement;
  });


  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      let text = request.text;
      $(element).sendkeys(text);
    }
  );

})();