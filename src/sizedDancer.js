// sizedDancer.js
var makeSizedDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img src="https://media.giphy.com/media/l3q2U7LzaWWYebQf6/source.gif" alt="Italian Trulli"/>')
};

makeSizedDancer.prototype = Object.create(makeDancer.prototype)
makeSizedDancer.prototype.constructor = makeSizedDancer;

makeSizedDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.fadeToggle();
  this.$node.animate({top : '850px'});
   this.$node.css({color:'black'});
}