# dot-runner-loader
Pure css3 and javascript ES6 loader component

# basic usage
```
(function() {
  let $ = document.querySelector.bind(document);

  $("#btnShow").onclick = function() {
    let container = $("#content");

    let loader = new DotRunnerLoader(container);
    loader.init();

    setTimeout(function(){ loader.finish(); }, 10000)
  };

})();
```

# css
dot-runner-loader uses [stylus] (http://stylus-lang.com/) as css compiler

# demo
See a live [live preview] (http://codepen.io/pedroAquino/pen/EWKPWW?editors=1100/) on [codepen] (http://codepen.io)
