      
      
var rem=(function(doc, win) {
          var docEl = doc.documentElement,
              resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
              recalc = function() {
                //   console.log('change')
                  
                  var hWidth = docEl.getBoundingClientRect().width;
                //   console.log(hWidth)
                  docEl.style.fontSize = hWidth / 15 + 'px';
              };
            //   console.log(docEl)
          if (!doc.addEventListener) return;
          win.addEventListener(resizeEvt, recalc, false);
          doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
export default rem;