// sizedDancer.js
var makeSizedDancer = function(top, left, timeBetweenSteps) {
  // debugger;
  var sized = new makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


  sized.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // var styleSettings = {
    //   $('.add3DButton').click(function() {
    // $(this).css('border-radius' : "20px");
    // }); 
  sized.$node.fadeToggle()
  };
  setInterval(function() {
    sized.step()
  }, timeBetweenSteps);
  
  return sized
};
