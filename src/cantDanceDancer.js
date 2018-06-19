var cantDanceDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img src="https://media.giphy.com/media/l3q2U7LzaWWYebQf6/source.gif" alt="Italian Trulli"/>')
};

cantDanceDancer.prototype = Object.create(makeDancer.prototype)
cantDanceDancer.prototype.constructor = cantDanceDancer;

cantDanceDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

}