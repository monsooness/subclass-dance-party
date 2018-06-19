var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // debugger;
  var blinky = new makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  blinky.step = function() {
    this.$node.toggle();
  };
  
  setTimeout(function() {
    setInterval(function() {
    blinky.step()
  }, timeBetweenSteps);
  }, timeBetweenSteps)

  
  return blinky
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype)
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
}