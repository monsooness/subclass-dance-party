$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      
      $("body").height() * Math.random(200),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
      // debugger;
    window.dancers.push(dancer);
    window.dancers[0].$node.addClass( "mouseover" );
    
    
    $('.mouseover').mouseover(function() {
      $('.mouseover').fadeToggle();
    })

  });
  
  $('.Lineup').click(function() {
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].$node.animate({top : '450px'});
    }
  });
  
  $('.interact').click(function() {
    
    for (var i = 0; i < window.dancers.length; i++) {
      // debugger;
      if (Math.abs( window.dancers[i].$node[0].clientHeight - window.dancers[i+1].$node[0].clientHeight ) < 50
      && Math.abs( window.dancers[i].$node[0].clientWidth - window.dancers[i+1].$node[0].clientWidth ) < 50
    ) {
        window.dancers[0].$node.animate({left : '250px'});
        window.dancers[1].$node.animate({left : '250px'});
        window.dancers[3].$node.animate({right : '250px'});
        window.dancers[4].$node.animate({right : '250px'});
      }
    }
    console.log('clicked');
  })
 

});

