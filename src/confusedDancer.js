var confusedDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img src="https://d3n32ilufxuvd1.cloudfront.net/5614cb0bcdc164fd19db78c1/490048/upload-a7f5b700-ccb3-11e7-b4f1-b757e3965c9d.gif" alt="Italian Trulli" />')
};

confusedDancer.prototype = Object.create(makeDancer.prototype)
confusedDancer.prototype.constructor = confusedDancer;

confusedDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
}