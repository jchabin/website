var scrolling = 0;
window.onwheel = function(){
  scrolling = 1;
}
function meanScrolling(){
  requestAnimationFrame(meanScrolling);
  var h = document.getElementsByClassName("bigpicture")[0].clientHeight;
  if(scrolling > 0){
    scrolling -= 0.3;
    return;
  }
  var targetPos = Math.floor(window.scrollY / h + 0.5) * h;
  if(Math.abs(targetPos - window.scrollY) < 10)
    window.scrollTo(0, targetPos);
  else
    window.scrollBy(0, (targetPos - window.scrollY) * 0.3);
    var l = document.getElementsByClassName("title");
    var n = Math.floor(window.scrollY / h + 0.5);
    for(var i = 0; i < l.length; i++)
      l[i].className = l[i].className.replace(" active", "") + (n == i ? " active" : "");
}
meanScrolling();
