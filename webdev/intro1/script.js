var body = document.querySelector('body')

function appendElements () {
  for (var i = 0; i < 10; i++) {
    var p = document.createElement('p')
    if (i == 0) p.innerHTML = 'You get a realtime';
    else p.innerHTML = 'And you get a realtime';
    body.appendChild(p);
  }
}

appendElements();
