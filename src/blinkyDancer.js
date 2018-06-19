var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img src="https://media.giphy.com/media/X27NJNfskDfJm/source.gif" alt="Italian Trulli" height="22" width="22"/>')
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype)
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.css({top : '100px'});
  
}