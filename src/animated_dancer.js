var makeAnimatedDancer = function(top, left, timeBetweenSteps) {
  // debugger;
  var animated = new makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


  animated.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    animated.$node.animate({
      left : '250px'      
    });
  };
  
  setInterval(function() {
    animated.step()
  }, timeBetweenSteps);
  
  return animated
};