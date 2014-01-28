
function refreshIt(element) {
  if( window.freq == null ) {
    window.freq = 1.5;
  }
  setTimeout(function() {
    element.src = element.src.split('?')[0] + '?' + new Date().getTime();
    refreshIt(element);
  }, window.freq*1000);
}
