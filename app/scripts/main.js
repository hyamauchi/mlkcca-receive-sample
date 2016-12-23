(function () {
  function showAndRemove(el) {
    document.body.appendChild(el);
    el.addEventListener("animationend", function callback(event) {
      document.body.removeChild(el);
      el.removeEventListener("animationend", callback);
    }, false);
  }

  function getRandPer() {
    return Math.floor(Math.random() * 95);
  }

  var ds = milkcocoa.dataStore('messages');
  ds.on('send', function(sended) {
    console.dir(sended);

    var el = document.createElement('div');
    el.textContent = sended.value.content;
    el.classList.add('marquee');
    el.style.top = getRandPer() + '%';
    showAndRemove(el);

  });
}());
