var makeCenterDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img src="https://media.giphy.com/avatars/toferra/I2erPPEH0WY9.gif" alt="Italian Trulli"/>')
};

makeCenterDancer.prototype = Object.create(makeDancer.prototype)
makeCenterDancer.prototype.constructor = makeCenterDancer;

makeCenterDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.animate({top : '950px'});
  this.$node.css({color:'black'});
}