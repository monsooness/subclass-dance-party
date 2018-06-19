var greatDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img src="https://media0.giphy.com/media/l1J9FCfLyq6k6tSzS/giphy.gif" alt="Italian Trulli" />')
};

greatDancer.prototype = Object.create(makeDancer.prototype)
greatDancer.prototype.constructor = greatDancer;

greatDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
}