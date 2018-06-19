var badDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img src="https://media.giphy.com/avatars/toferra/I2erPPEH0WY9.gif" alt="Italian Trulli" />')
};

badDancer.prototype = Object.create(makeDancer.prototype)
badDancer.prototype.constructor = badDancer;

badDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
}