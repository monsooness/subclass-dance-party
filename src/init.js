$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
  
  $('.Lineup').click(function() {
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].$node.animate({left : '250px'});
    }
  });
  $(window.dancers[0].$node).mouseover(function() {
    $(window.dancers.$node).hide();
  })
  

});

