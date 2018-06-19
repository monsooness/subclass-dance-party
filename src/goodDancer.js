

var goodDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img src="https://i.gifer.com/YX4V.gif" alt="Italian Trulli" />')
};

goodDancer.prototype = Object.create(makeDancer.prototype)
goodDancer.prototype.constructor = goodDancer;

goodDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
}