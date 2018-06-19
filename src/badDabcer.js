// badDancer.js
var baddDancer = function(top, left, timeBetweenSteps) {
  badDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img src="https://media.giphy.com/media/l3q2U7LzaWWYebQf6/source.gif" alt="Italian Trulli"/>')
};

badDancer.prototype = Object.create(badDancer.prototype)
badDancer.prototype.constructor = badDancer;

badDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.fadeToggle();
  this.$node.animate({top : '850px'});
   this.$node.css({color:'black'});
}